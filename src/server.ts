import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use( express.urlencoded( { extended: true } ) );
server.use( express.json() );

server.use( ( req: Request, res: Response ) => {
  res.status( 404 ).json( {
    error: "Endpoint not found",
    path: req.path,
    status: 404
  } );
} );

server.listen( process.env.PORT );