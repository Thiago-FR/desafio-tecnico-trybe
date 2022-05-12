import React, { useState, useContext } from "react";
import ToDoListContext from '../context/ToDoListContext';
import { fetchApiMock, fetchApiMockAdd } from "../services/fetchApi";

function InsertBar() {
  const { setData } = useContext(ToDoListContext);
  const [task, setTask] = useState('');
  const [responsible, setResponsible] = useState('');

  function addList() {
    // await fetchCreate({ task, responsible });
    // await fetchFindAll(setData);
    fetchApiMockAdd({ task, responsible });
    fetchApiMock(setData);
    setTask('');
    setResponsible('');
  }

  return (
    <div>
      <div className="input-group mt-5">
        <input
          className="form-control"
          type="text" placeholder="Tarefa"
          value={ task }
          onChange={ ({ target }) => setTask(target.value)}
        />
        <input
          className="form-control"
          type="text"
          value={ responsible }
          placeholder="Responsável"
          onChange={ ({ target }) => setResponsible(target.value)}
        />
      </div>
      <div className="mt-2 col-lg-12 rigth">
        <button
          className="btn btn-primary"
          type="button"
          onClick={ () => addList()}
        >
          ADICIONAR
        </button>
      </div>      
    </div>
  );
}

export default InsertBar;
