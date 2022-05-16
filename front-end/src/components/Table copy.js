import React, { useContext, useState } from "react";
import ToDoListContext from "../context/ToDoListContext";
import { fetchUpdate, fetchFindAll, fetchRemove } from "../services/fetchApi";
import imgRemove from '../img/lixeira.png'
import editarRemove from '../img/editar.png'
import salveItem from '../img/disket.png'

function Table() {
  const {
    isEditItem: { edited, indexOf },
    setIsEditItem,
    data,
    setData,
    setFilter,
  } = useContext(ToDoListContext);

  const [id, setId] = useState('');
  const [task, setTask] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus] = useState('');

  async function removeItem(id) {
    await fetchRemove(id);
    await fetchFindAll(setData);
  }

  const contextTable = {
    id,
    setId,
    task,
    setTask,
    responsible,
    setResponsible,
    status,
    setStatus,
    removeItem,
  }

  function editItem({ id, task, responsible, date, status }) {
    setIsEditItem({ edited: true, indexOf: id });
    setId(id);
    setTask(task);
    setResponsible(responsible);
    setStatus(status);
  }

  async function saveItem() {
    setIsEditItem({ edited: false, indexOf: 0 });
    await fetchUpdate({ task, responsible, status }, id);
    await fetchFindAll(setData);
    setTask('');
    setResponsible('');
    setStatus('');
  }  

  function setFilterByTask(name) {
    setFilter(data.sort((a, b) => {
      if (a[name] < b[name]) return -1;
      if (a[name] > b[name]) return 1;
      return 0;
    }));
  }

  return (
    <table className="table table-striped mt-4 align-middle">
      <thead>
        <tr>
          <th scope="col" onClick={ () => setFilterByTask('id') }>#</th>
          <th scope="col" onClick={ () => setFilterByTask('task') }>Tarefa</th>
          <th scope="col" onClick={ () => setFilterByTask('date') }>Data</th>
          <th scope="col" onClick={ () => setFilterByTask('status') }>Status</th>
          <th scope="col" onClick={ () => setFilterByTask('responsible') }>Responsável</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
          { data.length !== 0 && (
              data.map((row) => !edited || indexOf !== row.id ? (
                <tr key={ `${row.id}-${row.task}` }>
                  <th scope="row">{ row.id }</th>
                  <td>{ row.task }</td>
                  <td>{ row.date.substr(0, 10) }</td>
                  <td>{ row.status }</td>
                  <td>{ row.responsible }</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={ () => editItem(row)}
                    >
                      <img style={{ width: "30px", height: "30px" }} src={ editarRemove } alt="Editar item"/>
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      style={{ marginLeft: "10px" }}
                      type="button"
                      onClick={ () => removeItem(row.id)}
                    >
                      <img style={{ width: "30px", height: "30px" }} src={ imgRemove } alt="Remover item"/>
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={ `${row.id}-${row.task}` }>
                  <th scope="row">{ row.id }</th>
                  <td>
                    <input
                      className="form-control"
                      value={ task }
                      onChange={ ({ target: { value } }) => setTask(value) }
                    />
                  </td>
                  <td>{ row.date.substr(0, 10) }</td>
                  <td>
                    <select
                      className="form-select"
                      value={ status }
                      onChange={ ({ target: { value } }) => setStatus(value) }
                    >
                      <option>Pendente</option>
                      <option>em Andamento</option>
                      <option>Pronto</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className="form-control"
                      value={ responsible }
                      onChange={ ({ target: { value } }) => setResponsible(value) }
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={ () => saveItem() }
                    >
                      <img style={{ width: "30px", height: "30px" }} src={ salveItem } alt="Salvar item"/>
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      style={{ marginLeft: "10px" }}
                      type="button"
                      onClick={ () => removeItem(row.id)}
                    >
                      <img style={{ width: "30px", height: "30px" }} src={ imgRemove } alt="Remover item"/>
                    </button>
                  </td>
                </tr>
              ))
          )}
      </tbody>
    </table>
  );
}

export default Table;
