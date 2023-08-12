# nodejs-todo-api
API para lista de tarefas. Uma API REST feita em NODE + TYPESCRIPT.

## Rotas
GET `/todo` -> Recupera todas as listas de tarefas  
GET `/todo/:listid` -> Recupera uma única lista de tarefas  
GET `/todo/:listid/:taskid` -> Finaliza uma tarefa  
GET `/todo/date/:duedate` -> Recupera todas as listas de tarefa por data    
DELETE `/todo/:listid` -> Deleta uma lista de tarefa  
POST `/todo` -> Adiciona uma lista de tarefas  
PUT `/todo/:listid` -> Atualiza uma lista de tarefa    

## Objeto TODO

```json
{
  "id": 1,
  "taks": [
    {
      "id": 1,
      "task": "description",
      "duration": 60,
      "due-date": 11082023
    }
  ]
}
```

## Erro
```json
{
  "error": "description",
  "status": 500
}
```

## POST REQUEST / RESPONSE
`Content-Type: application/json`

```json
{
  "taks": [
    {
      "task": "comprar ingredientes de bolo",
      "duration": 120,
      "due-date": 11082023
    },
    {
      "task": "fazer bolo de aniversário",
      "duration": 60,
      "due-date": 12082023
    }
  ]
}
```

`status 201 created`

```json
{
  "id": 1,
  "taks": [
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
      "due-date": 12082023
    }
  ]
}
```

## GET RESPONSE
`status 200 ok`

```json
{
  "id": 1,
  "taks": [
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
      "due-date": 12082023
    }
  ]
}
```

## PUT REQUEST
`PUT /todo/1`
`Content-type: application/json`

```json
{
  "id": 1,
  "taks": [
    {
      "id": 1,
      "task": "comprar ingredientes de bolo de aniversário",
      "duration": 120,
      "due-date": 11082023
    },
    {
      "id": 2,
      "task": "fazer bolo de aniversário",
      "duration": 60,
      "due-date": 12082023
    }
  ]
}
```