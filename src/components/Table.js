import React, { useContext } from "react";
import ToDoListContext from "../context/ToDoListContext";
import imgRemove from '../img/lixeira.png'
import editarRemove from '../img/editar.png'

function Table() {
  const { data } = useContext(ToDoListContext);

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
              data.map((row) => (
                <tr key={ `${row.id}-${row.task}` }>
                  <th scope="row">{ row.id }</th>
                  <td>{ row.task }</td>
                  <td>{ row.date }</td>
                  <td>{ row.status }</td>
                  <td>{ row.responsible }</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                    >
                      <img style={{ width: "20px", height: "30px" }} src={ editarRemove } alt="Editar item"/>
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
