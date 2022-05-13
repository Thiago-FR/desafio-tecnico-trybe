import { PrismaClient } from "@prisma/client";
import IList from "../Interface/list";
import IPrismaOrm from "../Interface/prisma";

export default class PrismaOrm implements IPrismaOrm {
  public async findAll(): Promise<IList[]> {
    const prisma = new PrismaClient().table.findMany();
    return prisma;
  }
}