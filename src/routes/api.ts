import { Router } from 'express';
import * as TodoController from '../controller/todoController';

const router = Router();

router.get( '/todo', TodoController.getAllTodoLists );
router.get( '/todo/date/:duedate', TodoController.getTaskByDueDate );
router.get( '/todo/:listid', TodoController.getListById );
router.get( '/todo/:listid/:taskid', TodoController.finalizeTask );
router.delete( '/todo/:listid', TodoController.removeList );
router.post( '/todo', TodoController.createList );
router.put( '/todo/:listid', TodoController.updateList );

export default router;