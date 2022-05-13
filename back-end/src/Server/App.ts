import express, { Express, Request, Response } from 'express';
import IListController from '../Interface/controller';
import ListRoutes from '../Routes';

export default class App {
  private listRoutes = new ListRoutes(this.listController ,express.Router());

  constructor(
    private app: Express,
    private PORT: number,
    private listController: IListController
  ) {
    this.routes();
  }

  public routes() {
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).json('OK');
    });

    this.app.use((_req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    });

    this.app.use('/api/todo-list', this.listRoutes.router);
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Ouvindo na porta ${this.PORT}`);      
    });
  }
}