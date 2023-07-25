import { StatusCodes } from 'http-status-codes';

export const Constants = {
  statusCodes: {
    OK: StatusCodes.OK,
    CREATED: StatusCodes.CREATED,
    ACCEPTED: StatusCodes.ACCEPTED,
    NOT_FOUND: StatusCodes.NOT_FOUND,
    FORBIDDEN: StatusCodes.FORBIDDEN,
    BAD_GATEWAY: StatusCodes.BAD_GATEWAY,
    BAD_REQUEST: StatusCodes.BAD_REQUEST,
    UNAUTHORIZED: StatusCodes.UNAUTHORIZED,
    INTERNAL_SERVER_ERROR: StatusCodes.INTERNAL_SERVER_ERROR,
  },

  messages: {
    SUCCESS: 'Success',
    FAILURE: 'Failure',
    UNAUTHORIZED: 'Unauthorized',
    NO_DATA_FOUND: 'No data found',
    ACCESS_DENIED: 'Access denied',
    INCORRECT_EMAIL: 'Email is incorrect',
    LOGIN_SUCCESSFULL: 'Login successfull',
    LOGOUT_SUCCESSFULL: 'Logout successfully',
    WRONG_DATA: 'Provided data does not match',
    PASSWORD_INCORRECT: 'Password is incorrect',
    SOMETHING_WENT_WRONG: 'Something went wrong',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    USER_CREATED_SUCCESSFULLY: 'User created successfully',
    TASK_CREATED_SUCCESSFULLY: 'Task created successfully',
    USER_ALREADY_EXIST: 'User with this email or phone already exists',
  },
};
