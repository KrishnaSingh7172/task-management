import express from 'express';
import {
  createTask,
  deleteTaskByUserId,
  findAllTasksByUserId,
  findById,
  updateTask,
} from '../controllers/task.controller.js';
import { validateToken } from '../common/authentication.js';

const router = express.Router();

router.get('/getById/:id', validateToken, findById);
router.post('/addTask', validateToken, createTask);
router.patch('/updateTask/:id', validateToken, updateTask);
router.delete('/removeTask/:id', validateToken, deleteTaskByUserId);
router.get('/allTasks/:userId', validateToken, findAllTasksByUserId);
export { router as TaskRoutes };
