
---

# Boas vindas ao repositório ToDo-List - Front-End <a name="boas-vindas-ao-repositório-todo-list"></a>

---

# Sumário

- [Boas vindas ao repositório ToDo-List - Front-End](#boas-vindas-ao-repositório-todo-list)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Conexão local](#conexao-local)
- [Para testar o projeto](#testar-o-projeto)
  - [Rodar API por docker](#via-docker)
  - [Rodar API Local](#via-local)
- [Testes desenvolvidos](#tdd)
  - [Testes](#tdd-1)
  - [Cobertura de Código](#coverage)
- [Protótipo](#prototipo)

---

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido"></a>

  Foi desenvolvido um sistema de registro de tarefas para a empresa Ebytr (Fictícia)

  As tarefas são inseridas, atualizadas e removidas de forma modelada pelo back-end.

  É possível:
   - Inserir Tarefas
   - Remover Tarefas
   - Atualizar Tarefas
   - Ordenar Tarefas por: Ordem alfabetica, data de criação e status


---

## Para testar o projeto: <a name="testar-o-projeto"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/desafio-tecnico-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch front-end
  * `git checkout front-end`

### Rodar API por docker <a name="via-docker"></a>

1. API via Docker [**É Necessário ter o docker-compose v1.29 instalado!**]
  * Entre na pasta */front-end*
  * `npm run docker:up`

2. Ao final da containerização você pode checar os container **db** e **app_backend** :
  * `docker ps`

3. Para descer os container basta rodar:
  * `npm run docker:down`

### Rodar API Local <a name="via-local"></a>

1. Rode a API local [ **É Necessário ter o MySql instalado!** ]
  * Entre na pasta */front-end*

2. Instale as dependências
  * `npm install`

3. Inicie a API.
  * `npm start`

Obs: Para um melhor aproveitamento é recomendado subir o back-end para ter a experiência completa!

---

## Testes desenvolvidos: <a name="tdd"></a>

### Testes <a name="tdd-1"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

### Cobertura de Código <a name="coverage"></a>

1. Após instalar as dependências rode o comando:
  * `npm run coverage`

---

## Protótipo <a name="prototipo"></a>
![Prototipo]()

---
