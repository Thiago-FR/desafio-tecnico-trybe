import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { server, orm } from '../../index';
import { updateListOne, updateList, listOne } from './mocks/list';

chai.use(chaiHttp);

const { expect } = chai;

describe('Update ListTable', () => {
  describe('Update Status 201 ListTable', () => {
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
          .end((_err, res) => {
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body).to.be.a('object');
            expect(res.text).to.be.equal(JSON.stringify(updateListOne));
            done();
      });
    });
  });

  describe('Update Status 404 ListTable', () => {
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
          .put('/api/todo-list/2')
          .send(updateList)
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