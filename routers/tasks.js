import express from 'express';
import { getAllTasks, deleteTask, editTask, createTask, getOneTask } from '../controllers/tasks.js';

const router = express.Router();

// console.log(router)
router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getOneTask).patch(editTask).delete(deleteTask)

export default router;