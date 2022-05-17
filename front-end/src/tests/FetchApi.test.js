import {
  fetchFindAll,
  fetchCreate,
  fetchUpdate,
  fetchRemove } from '../services/fetchApi';
import { listOne, listAll, updateList } from './mocks/list';

describe('Test FetchApi', () => {
  describe('Test fetchFindAll', () => {
    let data = [];
  
    beforeEach(() => {
      data = [];
    });
  
    function setData(newData) {
      data = newData
    };
  
    it('Test fetchFindAll - OK', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(listAll),
      });
  
      await fetchFindAll(setData);
      expect(data).toStrictEqual(listAll);
    });
  
    it('Test fetchFindAll - ERROR', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockRejectedValue({
        json: jest.fn().mockRejectedValue(new Error('Erro')),
      });
  
      await fetchFindAll(setData);
    });
  });

  describe('Test fetchCreate', () => {  
    it('Test fetchCreate - OK', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(listOne),
      });
  
      await fetchCreate(listOne);
    });
  
    it('Test fetchCreate - ERROR', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockRejectedValue({
        json: jest.fn().mockRejectedValue(new Error('Erro')),
      });
  
      await fetchCreate(listOne);
    });
  });

  describe('Test fetchUpdate', () => {  
    it('Test fetchUpdate - OK', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(listOne),
      });
  
      await fetchUpdate(updateList, 1);
    });
  
    it('Test fetchUpdate - ERROR', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockRejectedValue({
        json: jest.fn().mockRejectedValue(new Error('Erro')),
      });
  
      await fetchUpdate(updateList, 1);
    });
  });

  describe('Test fetchRemove', () => {  
    it('Test fetchUpdate - OK', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(listOne),
      });
  
      await fetchRemove(1);
    });
  
    it('Test fetchRemove - ERROR', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockRejectedValue({
        json: jest.fn().mockRejectedValue(new Error('Erro')),
      });
  
      await fetchRemove(1);
    });
  });
});
