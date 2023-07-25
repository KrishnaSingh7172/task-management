import { Constants } from '../common/constant.js';
import { addUser, login } from '../services/user.service.js';
import { APIResponse } from '../common/api_response.common.js';
import {
  createUserSchema,
  userLoginSchema,
} from '../common/schema.validation.js';

export const createUser = async (req, res) => {
  try {
    const { error } = createUserSchema(req.body);
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await addUser(req);
    return res.json(new APIResponse(status, message, data));
  } catch (error) {
    return res.json(
      new APIResponse(
        Constants.statusCodes.INTERNAL_SERVER_ERROR,
        error.message,
        {},
      ),
    );
  }
};

export const userLogin = async (req, res) => {
  try {
    const { error } = userLoginSchema(req.body);
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await login(req);
    return res.json(new APIResponse(status, message, data));
  } catch (error) {
    return res.json(
      new APIResponse(
        Constants.statusCodes.INTERNAL_SERVER_ERROR,
        error.message,
        {},
      ),
    );
  }
};
