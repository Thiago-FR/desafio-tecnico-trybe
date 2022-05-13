import IList from "../Interface/list";
import IListModel from "../Interface/model";
import IListService from "../Interface/service";
import IStatusCode from "../Interface/statusCode";

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

  public async update(data: IList, id: number): Promise<IList | IStatusCode> {
    const list = await this.listModel.update(data, id);
    console.log(list);
    
    
    return list;
  }

  public async delete(id: number): Promise<IList> {
    const list = await this.listModel.delete(id);
    return list;
  }
}