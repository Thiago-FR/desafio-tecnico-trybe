import { NextFunction, Request, Response } from 'express';
import IListController from '../Interface/controller';
import IListService from '../Interface/service';
import IStatusCode from '../Interface/statusCode';

export default class ListController implements IListController {
  constructor(private listService: IListService) {}

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const list = await this.listService.findAll();
    
    return res.status(200).json(list);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { task, status, responsible } = req.body;

    const list = await this.listService.create({ task, status, responsible });

    return res.status(201).json(list);
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const { task, status, responsible } = req.body;

    const list = await this.listService.update({ task, status, responsible }, Number(id));

    const { statusCode } = list as IStatusCode;
    return typeof (statusCode) !== 'undefined'
      ? next(list)
      : res.status(201).json(list);
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const list = await this.listService.delete(Number(id));

    const { statusCode } = list as IStatusCode;
    return typeof (statusCode) !== 'undefined'
      ? next(list)
      : res.status(200).json(list);
  }
}