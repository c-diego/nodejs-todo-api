import { Request, Response } from 'express';
//import { Error } from '../models/error';
import { Task } from '../models/task';

export const getAllTasks = ( req: Request, res: Response ) => {
  res.json( tasks );
};

export const getTask = ( req: Request, res: Response ) => {
  let id = parseInt( req.params.task );

  if ( tasks[ id ] ) {
    res.json( tasks[ id ] );

  } else {
    res.status( 404 ).json( {
      error: 'Resource not found',
      status: 404
    } );
  }

};

export const getTaskByDueDate = ( req: Request, res: Response ) => {
  let date = req.params.duedate;

  let tasksByDueDate: Task[] = [];

  for ( let task of tasks ) {
    if ( task.dueDate === date ) {
      tasksByDueDate.push( task );
    }
  }

  if ( tasksByDueDate.length != 0 ) {
    res.json( tasksByDueDate );

  } else {
    res.status( 404 ).json( {
      error: 'Resource not found',
      status: 404
    } );
  }

};

export const deleteTask = ( req: Request, res: Response ) => {
  let id = parseInt( req.params.task );

  if ( tasks[ id ] ) {

    tasks.splice( id, 1 );
    res.json( tasks[ id ] );

  } else {
    res.status( 404 ).json( {
      error: 'Resource not found',
      status: 404
    } );
  }

};

export const addTask = ( req: Request, res: Response ) => {
  let task: Task = req.body;

  if ( tasks.length > 0 ) {
    const lastTask = tasks.pop() as Task;
    task.id = lastTask?.id ? lastTask.id + 1 : 1;
    tasks.push( lastTask );
  } else {
    task.id = 1;
  }

  task.isComplete = false;
  tasks.push( task );

  res.json( task );

};

export const updateTask = ( req: Request, res: Response ) => {
  let task: Task = req.body;
  let id = parseInt( req.params.task );

  if ( !tasks[ id ] ) {
    res.status( 404 ).json( {
      error: 'Resource not found',
      status: 404
    } );
  } else {

    task.id = tasks[ id ].id;
    task.isComplete = tasks[ id ].isComplete;
    tasks[ id ] = task;
    res.json( task );

  }

};

export const completeTask = ( req: Request, res: Response ) => {
  let id = parseInt( req.params.task );

  if ( !tasks[ id ] ) {
    res.status( 404 ).json( {
      error: 'Resource not found',
      status: 404
    } );
  } else {
    tasks[ id ].isComplete = true;
    res.json( tasks[ id ] );
  }

};

const tasks: Task[] = [
  {
    id: 1,
    description: 'Make Coffee With Milk',
    priority: 0,
    difficult: 0,
    category: 'breakfast',
    startDate: '13-08-2023',
    dueDate: '13-08-2023',
    isComplete: true
  },
  {
    id: 2,
    description: 'Make Coffee',
    priority: 0,
    difficult: 0,
    category: 'breakfast',
    startDate: '15-08-2023',
    dueDate: '15-08-2023',
    isComplete: false,
  },
  {
    id: 3,
    description: 'Make Coffee',
    priority: 0,
    difficult: 0,
    category: 'breakfast',
    startDate: '14-08-2023',
    dueDate: '14-08-2023',
    isComplete: false
  },
  {
    id: 4,
    description: 'Make Coffee',
    priority: 0,
    difficult: 0,
    category: 'breakfast',
    startDate: '14-08-2023',
    dueDate: '14-08-2023',
    isComplete: false
  }
];

/*
const task: Task = {
  description: 'Make Coffee',
  priority: 0,
  difficult: 0,
  category: 'breakfast',
  startDate: '16-08-2023',
  dueDate: '16-08-2023',
};
*/