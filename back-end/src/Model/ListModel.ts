import IList from '../Interface/list';
import IListModel from '../Interface/model';
import IOrm from '../Interface/orm';

export default class ListModel implements IListModel {
  constructor(private listModel: IOrm) {}

  public async findAll(): Promise<IList[]> {
    const list = await this.listModel.findAll();
    return list;
  }

  public async create(data: IList): Promise<IList> {
    const list = await this.listModel.create(data);
    return list;
  }
}