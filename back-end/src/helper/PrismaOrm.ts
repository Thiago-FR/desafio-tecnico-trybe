import { PrismaClient } from "@prisma/client";
import IList from "../Interface/list";
import IOrm from "../Interface/prisma";

export default class PrismaOrm implements IOrm {
  public prismaOrm = new PrismaClient();

  public async findOne(id: number): Promise<IList | null> {
    const prisma = await this.prismaOrm.table.findFirst({ 
      where: { id }
    });

    return prisma;
  }

  public async findAll(): Promise<IList[]> {
    const prisma = await this.prismaOrm.table.findMany();

    return prisma;
  }

  public async create(data: IList): Promise<IList> {
    const prisma = await this.prismaOrm.table.create({ data });

    return prisma;
  }

  public async update(data: IList, id: number): Promise<IList> {
    const prisma = await this.prismaOrm.table.update({
      where: { id },
      data,
    });

    return prisma;
  }

  public async delete(id: number): Promise<IList> {
    const prisma = await this.prismaOrm.table.delete({
      where: { id }
    });

    return prisma;
  }
}