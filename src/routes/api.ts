import { Router, Request, Response } from 'express';

const router = Router();

const requestHandler = ( req: Request, res: Response ) => {
  let method = req.method;
  let path = req.path;
  let body = req.body;
  let params = req.params;

  res.json( {
    method,
    path,
    body,
    params
  } );

};

router.get( '/todo', requestHandler );
router.get( '/todo/date/:duedate', requestHandler );
router.get( '/todo/:listid', requestHandler );
router.get( '/todo/:listid/:taskid', requestHandler );
router.delete( '/todo/:lisid', requestHandler );
router.post( '/todo', requestHandler );
router.put( '/todo/:listid', requestHandler );

export default router;