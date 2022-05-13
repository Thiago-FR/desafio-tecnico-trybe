import { PrismaClient } from '@prisma/client';
import IList from '../Interface/list';
import IListModel from '../Interface/model';

export default class ListModel implements IListModel {
  constructor(private listModel: PrismaClient) {}

  public async findAll(): Promise<IList[]> {
    const list = await this.listModel.table.findMany();
    return list;
  }
}