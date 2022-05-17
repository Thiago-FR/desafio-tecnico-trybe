import { NextFunction, Request, Response, Router } from "express";
import IListController from "../Interface/controller";
import ValidadeCreateTask from "../Schema/ValidadeCreateTask";

export default class ListRoutes {
  constructor(private listController: IListController, public router: Router) {
    this.routes();
  }

  private routes() {
    this.router.get(
      '/',
      (req: Request, res: Response) => this.listController.findAll(req, res)
    );
    this.router.post(
      '/',
      ValidadeCreateTask.joi,
      (req: Request, res: Response) => this.listController.create(req, res)
    );
    this.router.put(
      '/:id',
      ValidadeCreateTask.joi,
      (req: Request, res: Response, next: NextFunction) => this.listController.update(req, res, next)
    );
    this.router.delete(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => this.listController.delete(req, res, next)
    );
  }
}