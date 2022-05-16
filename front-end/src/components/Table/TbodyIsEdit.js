import React, { useContext } from "react";
import ToDoListContext from "../../context/ToDoListContext";
import { fetchUpdate, fetchFindAll } from "../../services/fetchApi";
import imgRemove from '../../img/lixeira.png'
import salveItem from '../../img/disket.png'

function TbodyIsEdit({ row, contextTable }) {
  const { setIsEditItem, setData } = useContext(ToDoListContext);

  const {
    id,
    task,
    setTask,
    responsible,
    setResponsible,
    status,
    setStatus,
    removeItem,
  } = contextTable;

  async function saveItem() {
    setIsEditItem({ edited: false, indexOf: 0 });
    await fetchUpdate({ task, responsible, status }, id);
    await fetchFindAll(setData);
    setTask('');
    setResponsible('');
    setStatus('');
  }  

  return (
    <tr>
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
  );
}

export default TbodyIsEdit;
