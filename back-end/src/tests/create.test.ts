import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, orm } from '../../index';
import { createList, listOne } from './mocks/list';

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
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.text).to.be.equal(JSON.stringify(listOne));
          done();
    });
  });
});