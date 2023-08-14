# nodejs-todo-api
API para lista de tarefas. Uma API REST feita em NODE + TYPESCRIPT.

## Rotas
GET `/api/tasks` -> Recupera todas as listas de tarefas  
GET `/api/tasks/:task` -> Recupera uma única lista de tarefas  
GET `/api/tasks?duedate=YYYY-MM-DD` -> Recupera todas as listas de tarefa por data    
DELETE `/api/tasks/:task` -> Deleta uma lista de tarefa  
POST `/api/tasks` -> Adiciona uma lista de tarefas  
PUT `/api/tasks/:task/complete` -> Finaliza uma tarefa  
PUT `/api/tasks/:task` -> Atualiza uma lista de tarefa    

## POST
#### REQUEST
`Content-Type: application/json`

```json
{
  "description": "Make Coffee",
  "priority": 0,
  "difficult": 0,
  "category": "breakfast",
  "startDate": "13-08-2023",
  "dueDate" : "13-08-2023"
}
```

#### RESPONSE
`status 201 created`

```json
{
  "id": 1,
  "description": "Make Coffee",
  "priority": 0,
  "difficult": 0,
  "category": "breakfast",
  "startDate": "13-08-2023",
  "dueDate" : "13-08-2023",
  "isComplete": false
}
```

## PUT
#### REQUEST
`PUT /api/tasks/1`  
`Content-type: application/json`

```json
{
  "id": 1,
  "description": "Make Coffee With Milk",
  "priority": 0,
  "difficult": 0,
  "category": "breakfast",
  "startDate": "13-08-2023",
  "dueDate" : "13-08-2023",
  "isComplete": false
}
```

#### REQUEST
`PUT /api/tasks/1/complete`

##### Response
```json
{
  "id": 1,
  "description": "Make Coffee With Milk",
  "priority": 0,
  "difficult": 0,
  "category": "breakfast",
  "startDate": "13-08-2023",
  "dueDate" : "13-08-2023",
  "isComplete": true
}
```

## Erro
```json
{
  "error": "Resource not found",
  "status": 404
}
```