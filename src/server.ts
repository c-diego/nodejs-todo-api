import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/api';

dotenv.config();

const server = express();

server.use( express.urlencoded( { extended: true } ) );
server.use( express.json() );
server.use( router );

server.use( ( req: Request, res: Response ) => {
  res.status( 404 ).json( {
    error: "Endpoint not found",
    path: req.path,
    status: 404,
    available_paths: [
      "get /todo",
      "get /todo/:listid",
      "get /todo/:listid/:taskid",
      "get /todo/date/:duedate",
      "post /todo",
      "put /todo/:listid",
      "delete /todo/:listid"
    ]
  } );
} );

server.listen( process.env.PORT );