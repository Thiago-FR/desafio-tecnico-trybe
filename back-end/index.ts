import { PrismaClient } from '@prisma/client';
import express, { Express } from 'express';
import ListController from './src/Controller/ListController';
import ListModel from './src/Model/ListModel';
import App from './src/Server/App';
import ListServer from './src/Service/ListServer';
const cors = require('cors');

const server: Express = express();
const PORT: number = 3001;

server.use(cors());
server.use(express.json());

const prisma = new PrismaClient();

const listModel = new ListModel(prisma)
const listService = new ListServer(listModel);
const listController = new ListController(listService);

const app = new App(server, PORT, listController);

app.start();