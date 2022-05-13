import IList from "../Interface/list";
import IListModel from "../Interface/model";
import IListService from "../Interface/service";

export default class ListServer implements IListService {
  constructor(private listModel: IListModel) {}

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
}