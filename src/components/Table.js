import React, { useContext, useRef } from "react";
import ToDoListContext from "../context/ToDoListContext";
import imgRemove from '../img/lixeira.png'
import editarRemove from '../img/editar.png'
import salveItem from '../img/disket.png'

function Table() {
  const { isEditItem: { edited, indexOf }, setIsEditItem } = useContext(ToDoListContext);

  const selectedItem = useRef(null);

  const { data } = useContext(ToDoListContext);

  function editItem({ id }) {
    console.log(id);
    setIsEditItem({ edited: true, indexOf: id });
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
              data.map((row) => (
                <tr key={ `${row.id}-${row.task}` } ref={ selectedItem }>
                  <th scope="row">{ row.id }</th>
                  <td>{ row.task }</td>
                  <td>{ row.date }</td>
                  <td>{ row.status }</td>
                  <td>{ row.responsible }</td>
                  <td className="d-inline-flex" >
                    <div>
                      { !edited || indexOf !== row.id ? (
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          onClick={ () => editItem(row)}
                        >
                          <img style={{ width: "30px", height: "30px" }} src={ editarRemove } alt="Editar item"/>
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          onClick={ ({ target }) => {}}
                        >
                          <img style={{ width: "30px", height: "30px" }} src={ salveItem } alt="Salvar item"/>
                        </button>
                      )}
                    </div>
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
