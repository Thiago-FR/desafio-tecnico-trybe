import React, { useContext } from "react";
import ToDoListContext from "../context/ToDoListContext";

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
                    <button className="btn btn-outline-primary" type="button">Editar</button>
                    <button className="btn btn-outline-danger"  type="button">X</button>
                  </td>
                </tr>
              ))
          )}
      </tbody>
    </table>
  );
}

export default Table;
