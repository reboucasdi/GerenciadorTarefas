Divisão dos Endpoints e Função de Cada Um
No seu controlador TarefasController, endpoints para as principais operações de CRUD (Create, Read, Update, Delete).

1. GET /api/tarefas - Buscar Todas as Tarefas
Esse endpoint é responsável por retornar todas as tarefas armazenadas no banco de dados.

Método HTTP: GET
URL: /api/tarefas
Função: Retorna todas as tarefas em uma lista.
Retorno esperado: Uma lista contendo todas as tarefas.
Exemplo de resposta:

[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Descrição da tarefa 1",
    "completed": false,
    "createdAt": "2024-10-01T10:00:00"
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "description": "Descrição da tarefa 2",
    "completed": true,
    "createdAt": "2024-09-30T12:30:00"
  }
]

2. GET /api/tarefas/{id} - Buscar Tarefa Específica
Esse endpoint retorna os detalhes de uma tarefa específica com base no ID passado na URL.

Método HTTP: GET
URL: /api/tarefas/{id}
Função: Busca uma tarefa pelo id.
Parâmetro: id (o identificador da tarefa).
Retorno esperado: Um objeto JSON contendo a tarefa correspondente ao ID ou uma resposta 404 Not Found se a tarefa não existir.
Exemplo de resposta (caso a tarefa exista):

{
  "id": 1,
  "title": "Tarefa 1",
  "description": "Descrição da tarefa 1",
  "completed": false,
  "createdAt": "2024-10-01T10:00:00"
}

Exemplo de resposta (caso a tarefa não exista):

{
  "status": 404,
  "message": "Tarefa não encontrada"
}

3. POST /api/tarefas - Criar Nova Tarefa
Esse endpoint permite criar uma nova tarefa. Os dados da tarefa são enviados no corpo da requisição.

Método HTTP: POST
URL: /api/tarefas
Função: Criar uma nova tarefa.
Dados esperados no corpo da requisição: Um objeto JSON contendo as informações da tarefa a ser criada (título, descrição, status).
Exemplo de corpo da requisição:

{
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa",
  "completed": false
}

Retorno esperado: A tarefa recém-criada com o ID atribuído pelo banco de dados.
Exemplo de resposta:

{
  "id": 3,
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa",
  "completed": false,
  "createdAt": "2024-10-01T14:00:00"
}

4. PUT /api/tarefas/{id} - Atualizar Tarefa
Esse endpoint é usado para atualizar uma tarefa existente. A tarefa a ser atualizada é identificada pelo ID, e os novos dados são passados no corpo da requisição.

Método HTTP: PUT
URL: /api/tarefas/{id}
Função: Atualizar os dados de uma tarefa existente.
Parâmetro: id (o identificador da tarefa a ser atualizada).
Dados esperados no corpo da requisição: Um objeto JSON contendo as novas informações da tarefa.
Exemplo de corpo da requisição:

{
  "id": 1,
  "title": "Tarefa 1 Atualizada",
  "description": "Nova descrição da tarefa 1",
  "completed": true
}

Retorno esperado: Um status 204 No Content em caso de sucesso ou 404 Not Found se a tarefa não for encontrada.

5. DELETE /api/tarefas/{id} - Deletar Tarefa
Esse endpoint permite deletar uma tarefa existente com base no ID.

Método HTTP: DELETE
URL: /api/tarefas/{id}
Função: Deletar uma tarefa pelo id.
Parâmetro: id (o identificador da tarefa a ser excluída).
Retorno esperado: Um status 204 No Content em caso de sucesso ou 404 Not Found se a tarefa não for encontrada.

GET / Testes - Validar testes no SWAGGER