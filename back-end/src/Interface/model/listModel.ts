import IList from "../list";

export default interface IListModel {
  findAll: () => Promise<IList[]>,
  create: (data: IList) => Promise<IList>,
}