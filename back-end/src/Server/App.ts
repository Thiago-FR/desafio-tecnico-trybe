import express, { Express, Request, Response, RequestHandler } from 'express';
const cors = require('cors');
import 'express-async-errors';
import IListController from '../Interface/controller';
import ErrorMiddleware from '../Middleware/ErrorMiddleware';
import ListRoutes from '../Routes';

export default class App {
  private listRoutes = new ListRoutes(this.listController ,express.Router());

  constructor(
    private app: Express,
    private PORT: number,
    private listController: IListController
  ) {
    this.config();
    this.routes();
  }

  private routes() {
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).json('OK');
    });

    this.app.use('/api/todo-list', this.listRoutes.router);

    this.app.use(ErrorMiddleware.handleError);
  }

  private config() {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(cors());
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Ouvindo na porta ${this.PORT}`);      
    });
  }

  public get appServer(): Express {
    return this.app;
  }
}