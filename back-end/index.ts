import express, { Express } from 'express';
import App from './src/Server/App';
const cors = require('cors');

const server: Express = express();
const PORT: number = 3001;

server.use(cors());
server.use(express.json());

const app = new App(server, PORT);

app.start();