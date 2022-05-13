import { NextFunction, Request, Response, Router } from "express";
import IListController from "../Interface/controller";

export default class ListRoutes {
  constructor(private listController: IListController, public router: Router) {
    this.routes();
  }

  private routes() {
    this.router.get('/', (req: Request, res: Response) => this.listController.findAll(req, res));
    this.router.post('/', (req: Request, res: Response) => this.listController.create(req, res));
  }
}