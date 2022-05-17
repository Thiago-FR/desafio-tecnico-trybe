
---

# Boas vindas ao repositório ToDo-List - FullStack <a name="boas-vindas-ao-repositório-todo-list"></a>

---

# Sumário

- [Boas vindas ao repositório ToDo-List - FullStack](#boas-vindas-ao-repositório-todo-list)
- [Back-End](#back-end)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido-back)
  - [Conexão com o Banco](#conexao-db)
    - [Conexão local](#conexao-local)
  - [Para testar o projeto](#testar-o-projeto-back)
  - [Testes desenvolvidos](#tdd-back)
    - [Testes](#tdd-1-back)
    - [Cobertura de Código](#coverage-back)
  - [Endpoint's](#endpoint)
    - [Para criar Tarefa POST](#task-post)
    - [Para buscar Tarefas GET](#task-get)
    - [Para atualizar Tarefa por ID PUT](#task-put)
    - [Para deletar Tarefa por ID DELETE](#task-delte)
- [Front-End](#front-end)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido-back)
  - [Para testar o projeto](#testar-o-projeto-back)
  - [Testes desenvolvidos](#tdd-back)
    - [Testes](#tdd-1-back)
    - [Cobertura de Código](#coverage-back)
- [Protótipo](#prototipo)

---

## Para testar o projeto Dcoker: <a name="testar-o-projeto"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/desafio-tecnico-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Rode o comando docker-compose [**É Necessário ter o docker-compose v1.29 instalado!**]
  * `docker-compose up -d --build`

3. Ao final da containerização você pode checar os container **db**, **app_backend**  e **app_end**:
  * `docker ps`

4. Para descer os container basta rodar:
  * `docker-compose down --remove-orphans`

---

# Back-End <a name="back-end"></a>

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido-back"></a>

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

## Para testar o projeto Localmente: <a name="testar-o-projeto-back"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/desafio-tecnico-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch back-end
  * `git checkout back-end`

3. Rode a API local [ **É Necessário ter o MySql instalado!** ]
  * Entre na pasta */back-end*

4. Instale as dependências
  * `npm install`

5. Inicie a API.
  * `npm start`

Obs: Este projeto utiliza variável de ambiente veja a sessação - [Conexão com o Banco](#conexao-db)

---

## Testes desenvolvidos: <a name="tdd-back"></a>

### Testes <a name="tdd-1--back"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

### Cobertura de Código <a name="coverage-back"></a>

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

# Front-End <a name="front-end"></a>

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido-front"></a>

  Foi desenvolvido um sistema de registro de tarefas para a empresa Ebytr (Fictícia)

  As tarefas são inseridas, atualizadas e removidas de forma modelada pelo back-end.

  É possível:
   - Inserir Tarefas
   - Remover Tarefas
   - Atualizar Tarefas
   - Ordenar Tarefas por: Ordem alfabetica, data de criação e status

---

## Para testar o projeto: <a name="testar-o-projeto-front"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/desafio-tecnico-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch front-end
  * `git checkout front-end`

3. Rode localmente
  * Entre na pasta */front-end*

4. Instale as dependências
  * `npm install`

5. Inicie o projeto.
  * `npm start`

Obs: Para um melhor aproveitamento é recomendado subir o back-end para ter a experiência completa!

---

## Testes desenvolvidos: <a name="tdd-front"></a>

### Testes <a name="tdd-1-front"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

### Cobertura de Código <a name="coverage-front"></a>

1. Após instalar as dependências rode o comando:
  * `npm run coverage`

---

## Protótipo <a name="prototipo"></a>
![Prototipo]()

---