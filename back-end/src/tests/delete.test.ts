import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, orm } from '../../index';
import { listOne } from './mocks/list';

chai.use(chaiHttp);

const { expect } = chai;

describe('Delete ListTable', () => {
  describe('Delete Status 200 ListTable', () => {
    before(() => {
      sinon
        .stub(orm, 'findOne')
        .resolves(listOne as any);
      sinon
        .stub(orm, 'delete')
        .resolves(listOne as any);
    });
  
    after(()=>{
      (orm.findOne as sinon.SinonStub).restore();
      (orm.delete as sinon.SinonStub).restore();
    })
  
    it('Test /api/todo-list/:id', (done) => {
      chai.request(server)
          .delete('/api/todo-list/1')
          .end((_err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('object');
            expect(res.text).to.be.equal(JSON.stringify(listOne));
            done();
      });
    });
  });

  describe('Delete Status 404 ListTable', () => {
    before(() => {
      sinon
        .stub(orm, 'findOne')
        .resolves(undefined);
    });
  
    after(()=>{
      (orm.findOne as sinon.SinonStub).restore();
    })
  
    it('Test /api/todo-list/:id', (done) => {
      chai.request(server)
          .delete('/api/todo-list/2')
          .end((_err, res) => {
            expect(res).to.have.status(404);
            expect(res).to.be.json;
            expect(res.body).to.be.a('object');
            expect(res.text).to.be.include('Not Found');
            done();
      });
    });
  });
});