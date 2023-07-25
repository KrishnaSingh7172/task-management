import express from 'express';
import { createUser, userLogin } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/addUser', createUser);

export { router as UserRoutes };
