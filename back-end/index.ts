import express, { Express } from 'express';
import ListController from './src/Controller/ListController';
import PrismaOrm from './src/helper/PrismaOrm';
import ListModel from './src/Model/ListModel';
import App from './src/Server/App';
import ListServer from './src/Service/ListServer';

export const server: Express = express();
const PORT: number = 3001;

const orm = new PrismaOrm();

export const listModel = new ListModel(orm)
export const listService = new ListServer(listModel);
export const listController = new ListController(listService);

const app = new App(server, PORT, listController);

app.start();
