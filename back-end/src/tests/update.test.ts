import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, orm } from '../../index';
import { updateListOne, updateList, listOne } from './mocks/list';

chai.use(chaiHttp);

const { expect } = chai;

describe('Create ListTable', () => {
  before(() => {
    sinon
      .stub(orm, 'findOne')
      .resolves(listOne as any);
    sinon
      .stub(orm, 'update')
      .resolves(updateListOne as any);
  });

  after(()=>{
    (orm.findOne as sinon.SinonStub).restore();
    (orm.update as sinon.SinonStub).restore();
  })

  it('Test /api/todo-list/:id', (done) => {
    chai.request(server)
        .put('/api/todo-list/1')
        .send(updateList)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.text).to.be.equal(JSON.stringify(updateListOne));
          done();
    });
  });
});