import {
  addTask,
  deleteTask,
  getAllTasks,
  getById,
  updateById,
} from '../services/task.service.js';
import {
  createTaskSchema,
  getTaskByIdSchema,
} from '../common/schema.validation.js';
import { Constants } from '../common/constant.js';
import { APIResponse } from '../common/api_response.common.js';

export const createTask = async (req, res) => {
  try {
    const { error } = createTaskSchema(req.body);
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await addTask(req.body);
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

export const findById = async (req, res) => {
  try {
    const { error } = getTaskByIdSchema({ id: req.params.id });
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await getById(req.params.id);
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

export const findAllTasksByUserId = async (req, res) => {
  try {
    const { error } = getTaskByIdSchema({ id: req.params.userId });
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await getAllTasks(req.params.userId);
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

export const deleteTaskByUserId = async (req, res) => {
  try {
    const { error } = getTaskByIdSchema({ id: req.params.id });
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await deleteTask(req.params.id);
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

export const updateTask = async (req, res) => {
  try {
    const { error } = updateTask(req.body);
    if (error) {
      return res.json(
        new APIResponse(
          Constants.statusCodes.BAD_REQUEST,
          error.message,
          req.body,
        ),
      );
    }
    const { status, message, data } = await updateById(req.params.id, req.body);
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
