import { Request, Response } from 'express';
import IListController from '../Interface/controller';
import IListService from '../Interface/service';

export default class ListController implements IListController {
  constructor(private listService: IListService) {}

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const list = await this.listService.findAll();
    return res.status(200).json(list);
  }
}