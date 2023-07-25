import Joi from 'joi';

export const upateUserSchema = (employee) => {
  const employeeSchema = Joi.object({
    _id: Joi.string().required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().optional().email(),
  });
  return employeeSchema.validate(employee);
};

export const userLoginSchema = (login) => {
  const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return loginSchema.validate(login);
};

export const createUserSchema = (user) => {
  const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).max(35).required(),
  });
  return userSchema.validate(user);
};

export const createTaskSchema = (task) => {
  const taskSchema = Joi.object({
    taskName: Joi.string().required(),
    dueDate: Joi.date().optional(),
    assigneeId: Joi.string().required(),
    status: Joi.string()
      .valid('incomplete', 'in-progress', 'completed')
      .optional(),
    assignedDate: Joi.date().optional(),
  });
  return taskSchema.validate(task);
};

export const getTaskByIdSchema = (data) => {
  const idSchema = Joi.object({
    id: Joi.string().required(),
  });
  return idSchema.validate(data);
};

export const upateTaskSchema = (task) => {
  const taskSchema = Joi.object({
    taskName: Joi.string().optional(),
    dueDate: Joi.date().optional(),
    status: Joi.string().optional(),
    assignedDate: Joi.date().optional(),
  });
  return taskSchema.validate(task);
};
