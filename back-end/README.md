
---

# Boas vindas ao repositório ToDo-List - Back-End <a name="boas-vindas-ao-repositório-todo-list"></a>

---

# Sumário

- [Boas vindas ao repositório ToDo-List - Back-End](#boas-vindas-ao-repositório-todo-list)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Conexão com o Banco](#conexao-db)
  - [Conexão local](#conexao-local)
- [Para testar o projeto](#testar-o-projeto)
  - [Rodar API por docker](#via-docker)
  - [Rodar API Local](#via-local)
- [Testes desenvolvidos](#tdd)
  - [Testes](#tdd-1)
  - [Cobertura de Código](#coverage)
- [Endpoint's](#endpoint)
  - [Para criar Tarefa POST](#task-post)
  - [Para buscar Tarefas GET](#task-get)
  - [Para atualizar Tarefa por ID PUT](#task-put)
  - [Para deletar Tarefa por ID DELETE](#task-delte)
- [Protótipo](#prototipo)

---

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido"></a>

  Foi desenvolvido um back-end para um sistema de registro de tarefas para a empresa Ebytr (Fictícia)

  As tarefas são inseridas em um banco de dados **Mysql** sendo possível modelar os dados através do **prisma ORM**

  É possível:
   - Inserir Tarefas
   - Remover Tarefas
   - Atualizar Tarefas
   - Ordenar Tarefas por: Ordem alfabetica, data de criação e status

---

### Conexão com o Banco: <a name="conexao-db"></a>

#### Conexão local <a name="conexao-local"></a>

**⚠️ IMPORTANTE! ⚠️**

Para conexão local é necessário ter instalado localmente o **MySql**

Essa API utiliza as seguintes variáveis de ambiente:

```sh
DATABASE_URL="mysql://user:password@host:port/db"
```

---

## Para testar o projeto: <a name="testar-o-projeto"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/desafio-tecnico-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch back-end
  * `git checkout back-end`

### Rodar API por docker <a name="via-docker"></a>

1. API via Docker [**É Necessário ter o docker-compose v1.29 instalado!**]
  * Entre na pasta */back-end*
  * `npm run docker:up`

2. Ao final da containerização você pode checar os container **db** e **app_backend** :
  * `docker ps`

3. Para descer os container basta rodar:
  * `npm run docker:down`

### Rodar API Local <a name="via-local"></a>

1. Rode a API local [ **É Necessário ter o MySql instalado!** ]
  * Entre na pasta */back-end*

2. Instale as dependências
  * `npm install`

3. Inicie a API.
  * `npm start`

Obs: Este projeto utiliza variável de ambiente veja a sessação - [Conexão com o Banco](#conexao-db)

---

## Testes desenvolvidos: <a name="tdd"></a>

### Testes <a name="tdd-1"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

### Cobertura de Código <a name="coverage"></a>

1. Após instalar as dependências rode o comando:
  * `npm run coverage`

---

## Endpoint's <a name="endpoint"></a>

### Para criar Tarefa POST <a name="task-post"></a>

* Endpoint: `/api/todo-list`

Body
```json
  { 
    "task": "Teste",
    "status": "Pendente",
    "responsible": "Teste"
  }
 ```

Reponse
```json
  {
    "id": 1,
    "task": "Teste",
    "date": "2022-05-13T18:09:08.859Z",
    "status": "Pendente",
    "responsible": "Teste"
  },
```
---

### Para buscar Tarefas GET <a name="task-get"></a>

* Endpoint: `/api/todo-list`

```json
  [
    {
      "id": 1,
      "task": "Teste",
      "date": "2022-05-13T18:09:08.859Z",
      "status": "Pendente",
      "responsible": "Teste"
    },
    ...
  ]
```
---

### Para atualizar Tarefa por ID PUT <a name="task-put"></a>

* Endpoint: `/api/todo-list/:id`

Body
```json
  {
    "task": "Teste",
    "status": "Pronto",
    "responsible": "Teste"
  }
```
---

### Para deletar Tarefa por ID DELETE <a name="task-delete"></a>

* Endpoint: `/api/todo-list/:id`

---

## Protótipo <a name="prototipo"></a>
![Prototipo]()
---
