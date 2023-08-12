import { Request, Response } from 'express';

const lists = [
  {
    "id": 1,
    "tasks": [
      {
        "id": 1,
        "task": "comprar ingredientes de bolo",
        "duration": 120,
        "due-date": 11082023
      },
      {
        "id": 2,
        "task": "fazer bolo de aniversário",
        "duration": 60,
        "due-date": 11082023
      }
    ]
  }
];

export const requestHandler = ( req: Request, res: Response ) => {
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

export const getAllTodoLists = ( req: Request, res: Response ) => {

  if ( !lists ) {
    res.status( 404 ).json( {
      error: "No List was found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( lists );
  }

};

export const getListById = ( req: Request, res: Response ) => {

  const id: number = parseInt( req.params.listid );
  const list = lists[ id ];

  if ( !list ) {
    res.status( 404 ).json( {
      error: "List not found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( list );
  }

};



export const finalizeTask = ( req: Request, res: Response ) => {

  const listId: number = parseInt( req.params.listid );
  const taskId: number = parseInt( req.params.taskid );
  const list = lists[ listId ];
  const task = list?.tasks[ taskId ];

  if ( !task ) {
    res.status( 404 ).json( {
      error: "List or Task not found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( { task } );
  }

}; "";

export const getTaskByDueDate = ( req: Request, res: Response ) => {

  const duedate = parseInt( req.params.duedate );

  const tasks = [];

  for ( let list of lists ) {
    let tasksfound = list.tasks.filter( task => task[ 'due-date' ] === duedate );
    for ( let task of tasksfound ) {
      tasks.push( task );
    }
  }

  if ( !tasks || tasks.length === 0 ) {
    res.status( 404 ).json( {
      error: "No Task was found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( tasks );
  }

};

export const removeList = ( req: Request, res: Response ) => {

  const listId = parseInt( req.params.listid );
  const list = lists[ listId ];

  if ( !list ) {
    res.status( 404 ).json( {
      error: "No List was found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( list );
  }

};

export const updateList = ( req: Request, res: Response ) => {

  const listId = parseInt( req.params.listid );
  const list = lists[ listId ];

  if ( !list ) {
    res.status( 404 ).json( {
      error: "No List was found",
      status: 404
    } );
  } else {
    res.status( 200 ).json( list );
  }

};

export const createList = ( req: Request, res: Response ) => {

  const list = req.body;

  if ( !list ) {
    res.status( 401 ).json( {
      error: "No List was found",
      status: 401
    } );
  } else {
    res.status( 201 ).json( {
      id: 2,
      ...list
    } );
  }

};