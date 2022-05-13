import IList from "../list";
import IListModel from "../model";
import IStatusCode from "../statusCode";

export default interface IListService {
  findAll: () => Promise<IList[]>,
  create: (data: IList) => Promise<IList>,
  update: (data: IList, id: number) => Promise<IList | IStatusCode>,
  delete: (id: number) => Promise<IList>,
};