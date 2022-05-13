import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, listModel } from '../../index';
import { listAll } from './mocks/list';

chai.use(chaiHttp);

const { expect } = chai;

describe('findAll ListTable', () => {
  before(() => {
    sinon
      .stub(listModel, 'findAll')
      .resolves(listAll as any);
  });

  after(()=>{
    (listModel.findAll as sinon.SinonStub).restore();
  })

  it('Test /api/todo-list', (done) => {
    chai.request(server)
        .get('/api/todo-list')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.be.equal(JSON.stringify(listAll));
          done();
    });
  });
});