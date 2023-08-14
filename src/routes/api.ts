import { Router } from 'express';
import * as Controller from '../controller/taskController';

const router = Router();

router.get( '/', Controller.getAllTasks );
router.get( '/duedate/:duedate', Controller.getTaskByDueDate );
router.get( '/:task', Controller.getTask );
router.delete( '/:task', Controller.deleteTask );
router.post( '/', Controller.addTask );
router.put( '/:task', Controller.updateTask );
router.put( '/:task/complete', Controller.completeTask );

export default router;