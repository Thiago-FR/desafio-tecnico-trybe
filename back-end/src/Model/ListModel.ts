import IList from '../Interface/list';
import IListModel from '../Interface/model';
import IOrm from '../Interface/prisma';

export default class ListModel implements IListModel {
  constructor(private listModel: IOrm) {}

  public async findOne(id: number): Promise<IList | null> {
    const list = await this.listModel.findOne(id);
    return list;
  }

  public async findAll(): Promise<IList[]> {
    const list = await this.listModel.findAll();
    return list;
  }

  public async create(data: IList): Promise<IList> {
    const list = await this.listModel.create(data);
    return list;
  }

  public async update(data: IList, id: number): Promise<IList> {
    const list = await this.listModel.update(data, id);
    return list;
  }

  public async delete(id: number): Promise<IList> {
    const list = await this.listModel.delete(id);
    return list;
  }
}