import Task from '../models/task.model.js';
import { Constants } from '../common/constant.js';

export const addTask = async (data) => {
  try {
    const creatingTask = await Task.create(data);
    if (creatingTask._id) {
      return {
        status: Constants.statusCodes.CREATED,
        message: Constants.messages.TASK_CREATED_SUCCESSFULLY,
        data: creatingTask,
      };
    }
    return {
      status: Constants.statusCodes.INTERNAL_SERVER_ERROR,
      message: Constants.messages.SOMETHING_WENT_WRONG,
      data: data,
    };
  } catch (error) {
    throw error;
  }
};

export const getAllTasks = async (userId) => {
  try {
    const allTasks = await Task.find({ assigneeId: userId });
    if (allTasks.length > 0) {
      return {
        status: Constants.statusCodes.OK,
        message: Constants.messages.SUCCESS,
        data: allTasks,
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

export const getById = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (task) {
      return {
        status: Constants.statusCodes.OK,
        message: Constants.messages.SUCCESS,
        data: task,
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

export const updateById = async (id, data) => {
  try {
    const updatingTask = await Task.findByIdAndUpdate({ id: id, update: data });
    if (updatingTask) {
      return {
        status: Constants.statusCodes.OK,
        message: Constants.messages.SUCCESS,
        data: updatingTask,
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

export const deleteTask = async (id) => {
  try {
    const deletingTask = await Task.findByIdAndDelete(id);
    if (deleteTask) {
      return {
        status: Constants.statusCodes.OK,
        message: Constants.messages.SUCCESS,
        data: updatingTask,
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
