import React, { useContext, useState } from "react";
import ToDoListContext from "../context/ToDoListContext";
import imgRemove from '../img/lixeira.png'
import editarRemove from '../img/editar.png'
import salveItem from '../img/disket.png'

function Table() {
  const { isEditItem: { edited, indexOf }, setIsEditItem, data } = useContext(ToDoListContext);

  const [task, setTask] = useState('');
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  function editItem({ id, task, responsible, date, status }) {
    setIsEditItem({ edited: true, indexOf: id });
    setTask(task);
    setResponsible(responsible);
    setDate(date);
    setStatus(status);
  }

  function saveItem() {
    setIsEditItem({ edited: false, indexOf: 0 });
    setTask('');
    setResponsible('');
    setDate('');
    setStatus('');
  }

  return (
    <table className="table table-striped mt-4 align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tarefa</th>
          <th scope="col">Data</th>
          <th scope="col">Status</th>
          <th scope="col">Responsável</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
          { data.length !== 0 && (
              data.map((row) => !edited || indexOf !== row.id ? (
                <tr key={ `${row.id}-${row.task}` }>
                  <th scope="row">{ row.id }</th>
                  <td>{ row.task }</td>
                  <td>{ row.date }</td>
                  <td>{ row.status }</td>
                  <td>{ row.responsible }</td>
                  <td className="d-inline-flex" >
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
                      value={ task }
                      onChange={ ({ target: { value } }) => setTask(value) }
                    />
                  </td>
                  <td>
                    <input
                      value={ date }
                      type="date"
                      onChange={ ({ target: { value } }) => setDate(value) }
                    />
                  </td>
                  <td>
                    <select
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
                      value={ responsible }
                      onChange={ ({ target: { value } }) => setResponsible(value) }
                    />
                  </td>
                  <td className="d-inline-flex" >
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
