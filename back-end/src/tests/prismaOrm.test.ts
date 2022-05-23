import { expect } from 'chai';
import PrismaOrm from '../helper/PrismaOrm';
import { PrismaClient } from '@prisma/client';
import { createList, updateList } from './mocks/list';

const modelMock = {
  table: {
    findMany: () => true,
    findFirst: (obj: Object) => obj,
    create: (obj: Object) => obj,
    update: (obj: Object) => obj,
    delete: (obj: Object) => obj,
  }
} as unknown as PrismaClient;

const orm = new PrismaOrm(modelMock);

describe('Teste se funções do Prisma ORM são chamadas.', () => {
  it('Test FindAll',async () => {
    const findAll = await orm.findAll();

    expect(findAll).to.be.true;
  });

  it('Test findOne',async () => {
    const findOne = await orm.findOne(1);

    expect(findOne).to.be.a('object');
    expect(findOne).to.have.property('where'); 
    expect(findOne).to.have.property('where').to.have.property('id');
    expect(findOne).to.have.property('where').to.have.property('id').to.be.equal(1);
  });

  it('Test create',async () => {
    const create = await orm.create(createList);

    expect(create).to.be.a('object');
    expect(create).to.have.property('data');
    expect(create).to.have.property('data').to.have.property('task');
    expect(create).to.have.property('data').to.have.property('status');
    expect(create).to.have.property('data').to.have.property('responsible');
    expect(create).to.have.property('data').to.have.property('task').to.be.equal(createList.task);
    expect(create).to.have.property('data').to.have.property('status').to.be.equal(createList.status);
    expect(create).to.have.property('data').to.have.property('responsible').to.be.equal(createList.responsible);
  });

  it('Test update',async () => {
    const update = await orm.update(updateList, 1);

    expect(update).to.be.a('object');
    expect(update).to.have.property('where'); 
    expect(update).to.have.property('where').to.have.property('id');
    expect(update).to.have.property('where').to.have.property('id').to.be.equal(1);

    expect(update).to.have.property('data');
    expect(update).to.have.property('data').to.have.property('task');
    expect(update).to.have.property('data').to.have.property('status');
    expect(update).to.have.property('data').to.have.property('responsible');
    expect(update).to.have.property('data').to.have.property('task').to.be.equal(updateList.task);
    expect(update).to.have.property('data').to.have.property('status').to.be.equal(updateList.status);
    expect(update).to.have.property('data').to.have.property('responsible').to.be.equal(updateList.responsible);
  });

  it('Test delete',async () => {
    const deleteItem = await orm.delete(1);

    expect(deleteItem).to.be.a('object');
    expect(deleteItem).to.have.property('where'); 
    expect(deleteItem).to.have.property('where').to.have.property('id');
    expect(deleteItem).to.have.property('where').to.have.property('id').to.be.equal(1);
  });
});