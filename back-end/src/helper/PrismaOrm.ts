import { PrismaClient } from "@prisma/client";
import IList from "../Interface/list";
import IOrm from "../Interface/orm";

interface IDataCreate {
  data: IList
}

export default class PrismaOrm implements IOrm {
  private prismaOrm = new PrismaClient();

  public async findAll(): Promise<IList[]> {
    const prisma = await this.prismaOrm.table.findMany();
    return prisma;
  }

  public async create(data: IList): Promise<IList> {
    const prisma = await this.prismaOrm.table.create({ data });
    return prisma;
  }
}