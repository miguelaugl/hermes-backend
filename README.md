<p align="center">
  <a href="https://orbita.eduzz.com/">
    <img alt="Hermes Notes" title="Hermes" src="docs/logo.png">
  </a>
</p>

<h1 align="center">Hermes Notes</h1>

<p align="center">Simple backend created for an app used as work for college with Express</p>


## :hammer: **Stack**

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/docs/)

## :white_check_mark: **Prerequisites**

Before you start, you will need to install in your machine the follow tools:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).
Besides, it's interesting to use an IDE as [VSCode](https://code.visualstudio.com/)

## :keyboard: **Developing**

```bash
# Clone this repo
$ git clone https://github.com/miguelaugl/hermes-backend.git

# Enter project
$ cd hermes-backend

# Install dependencies
$ yarn

# Execute a aplicaÃ§Ã£o
$ yarn dev

# The server will start at port 3333 by default. Access: <http://localhost:3333>
```

## :construction_worker: **Arquitetura**

```text
.
├── ...
├── docs                # Docs relateds
├── uploads             # Uploaded files
├── src (código legado)
│   ├── config          # Configuration for libraries or interal uses
│   ├── enums           # TypeScript enums
│   ├── errors          # Errors handlers
│   ├── middlewares     # Middlewares
│   ├── schemas         # Mongoose schemas
│   ├── utils           # Generics Functions or variables that have multiple use cases
│   ├── database.ts     # Connect to mongodb
│   ├── server.ts       # Main file
│   └── ...
└── ...
```
