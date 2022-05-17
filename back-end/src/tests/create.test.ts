import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, orm } from '../../index';
import { 
  createList,
  listOne,
  createListBadRequest_1,
  createListBadRequest_2,
  createListBadRequest_3,
  createListBadRequest_4
} from './mocks/list';

chai.use(chaiHttp);

const { expect } = chai;

describe('Create ListTable', () => {
  before(() => {
    sinon
      .stub(orm, 'create')
      .resolves(listOne as any);
  });

  after(()=>{
    (orm.create as sinon.SinonStub).restore();
  })

  it('Test /api/todo-list', (done) => {
    chai.request(server)
        .post('/api/todo-list')
        .send(createList)
        .end((_err, res) => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.text).to.be.equal(JSON.stringify(listOne));
          done();
    });
  });

  it('Test /api/todo-list Bad Request 1', (done) => {
    chai.request(server)
        .post('/api/todo-list')
        .send(createListBadRequest_1)
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.text).to.be.includes('Campo Tarefa necessário!');
          done();
    });
  });

  it('Test /api/todo-list Bad Request 2', (done) => {
    chai.request(server)
        .post('/api/todo-list')
        .send(createListBadRequest_2)
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.text).to.be.includes('Campo Responsável necessário!');
          done();
    });
  });

  it('Test /api/todo-list Bad Request 3', (done) => {
    chai.request(server)
        .post('/api/todo-list')
        .send(createListBadRequest_3)
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.text).to.be.includes('Todos os campos são necessários!');
          done();
    });
  });

  it('Test /api/todo-list Bad Request 4', (done) => {
    chai.request(server)
        .post('/api/todo-list')
        .send(createListBadRequest_4)
        .end((_err, res) => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.text).to.be.includes('Todos os campos são necessários!');
          done();
    });
  });
});