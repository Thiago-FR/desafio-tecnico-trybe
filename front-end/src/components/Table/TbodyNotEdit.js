import React, { useContext } from "react";
import ToDoListContext from "../../context/ToDoListContext";
import imgRemove from '../../img/lixeira.png'
import editarRemove from '../../img/editar.png'

function TbodyNotEdit({ row, contextTable }) {
  const { setIsEditItem } = useContext(ToDoListContext);

  const { setId, setTask, setResponsible, setStatus, handleDelete } = contextTable;

  function editItem({ id, task, responsible, status }) {
    setIsEditItem({ edited: true, indexOf: id });
    setId(id);
    setTask(task);
    setResponsible(responsible);
    setStatus(status);
  }

  return (
    <tr key={ `${row.id}-${row.task}` }>
      <th scope="row">{ row.id }</th>
      <td>{ row.task }</td>
      <td>{ row.date.substr(0, 10).split('-').reverse().join('/') }</td>
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
          onClick={ () => handleDelete(row.id)}
        >
          <img style={{ width: "30px", height: "30px" }} src={ imgRemove } alt="Remover item"/>
        </button>
      </td>
    </tr>
  );
}

export default TbodyNotEdit;
