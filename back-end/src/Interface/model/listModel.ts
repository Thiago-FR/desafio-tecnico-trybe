import IList from "../list";

export default interface IListModel {
  findAll: () => Promise<IList[]>,
  create: (data: IList) => Promise<IList>,
  update: (data: IList, id: number) => Promise<IList>
  delete: (id: number) => Promise<IList>
}