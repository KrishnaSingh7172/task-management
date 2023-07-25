import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Constants } from './constant.js';
import { APIResponse } from './api_response.common.js';

dotenv.config();
export const generateToken = (user) => {
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.TOKEN_SECRET || '',
    {
      expiresIn: '90m',
    },
  );
  return token;
};

export const validateToken = async (req, res, next) => {
  try {
    const token = req?.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.FORBIDDEN,
          Constants.messages.FAILURE,
          {},
        ),
      );
    }
    const verification = jwt.verify(token, process.env.TOKEN_SECRET || '');
    console.log(verification, 'verification');
    next();
  } catch (error) {
    return res.json(
      new APIResponse(
        Constants.statusCodes.UNAUTHORIZED,
        Constants.messages.UNAUTHORIZED,
        {},
      ),
    );
  }
};
