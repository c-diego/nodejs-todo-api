import { Router, Request, Response } from 'express';

const router = Router();

const handler = ( req: Request, res: Response ) => {

  res.json( {
    error: 'Resource not found',
    staus: 404,
    path: req.path,
    params: req.params,
    body: req.body
  } );

};

router.get( '/', handler );
router.get( '/duedate/:duedate', handler );
router.get( '/:task', handler );
router.delete( '/:task', handler );
router.post( '/', handler );
router.put( '/:task', handler );
router.put( '/:task/complete', handler );

export default router;