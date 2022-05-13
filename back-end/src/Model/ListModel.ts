import IList from '../Interface/list';
import IListModel from '../Interface/model';
import IPrismaOrm from '../Interface/prisma';

export default class ListModel implements IListModel {
  constructor(private listModel: IPrismaOrm) {}

  public async findAll(): Promise<IList[]> {
    const list = await this.listModel.findAll();
    return list;
  }
}