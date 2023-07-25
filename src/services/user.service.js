import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import { Constants } from '../common/constant.js';
import { generateToken } from '../common/authentication.js';

export const addUser = async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return {
        status: Constants.statusCodes.FORBIDDEN,
        message: Constants.messages.USER_ALREADY_EXIST,
        data: req.body,
      };
    }
    const userFromRequest = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const createUser = await User.create({
      ...userFromRequest,
      token: null,
    });
    if (createUser?._id) {
      return {
        status: Constants.statusCodes.CREATED,
        message: Constants.messages.USER_CREATED_SUCCESSFULLY,
        data: createUser,
      };
    }
    return {
      status: Constants.statusCodes.INTERNAL_SERVER_ERROR,
      message: Constants.messages.SOMETHING_WENT_WRONG,
      data: req.body,
    };
  } catch (error) {
    throw error;
  }
};

export const login = async (req, res) => {
  try {
    const checkUser = await User.findOne({
      email: req.body.email,
    }).lean();

    if (checkUser === null) {
      return {
        status: Constants.statusCodes.NOT_FOUND,
        message: Constants.messages.INCORRECT_EMAIL,
        data: req.body,
      };
    }
    const passwordValidation = bcrypt.compare(
      req.body.password,
      checkUser.password,
    );
    if (!passwordValidation) {
      return {
        status: Constants.statusCodes.UNAUTHORIZED,
        message: Constants.messages.PASSWORD_INCORRECT,
        data: req.body,
      };
    }

    const accessToken = generateToken(checkUser);

    if (!accessToken) {
      return {
        status: Constants.statusCodes.INTERNAL_SERVER_ERROR,
        message: Constants.messages.SOMETHING_WENT_WRONG,
        data: {},
      };
    }
    const addingToken = await User.updateOne(
      { _id: checkUser._id },
      {
        $set: { token: accessToken },
      },
    );
    if (!addingToken) {
      return {
        status: Constants.statusCodes.INTERNAL_SERVER_ERROR,
        message: Constants.messages.SOMETHING_WENT_WRONG,
        data: {},
      };
    }
    delete checkUser.password;
    const response = { checkUser, token: accessToken };
    return {
      status: Constants.statusCodes.OK,
      message: Constants.messages.LOGIN_SUCCESSFULL,
      data: response,
    };
  } catch (error) {
    throw error;
  }
};
