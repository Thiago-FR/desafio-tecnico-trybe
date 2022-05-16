import React, { useContext, useState } from "react";
import ToDoListContext from "../context/ToDoListContext";
import { fetchFindAll, fetchRemove } from "../services/fetchApi";
import Thead from './Table/Thead';
import TbodyNotEdit from './Table/TbodyNotEdit';
import TbodyIsEdit from './Table/TbodyIsEdit';

function Table() {
  const {
    isEditItem: { edited, indexOf },
    data,
    setData,
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

  return (
    <table className="table table-striped mt-4 align-middle">
      <Thead />
      <tbody>
          { data.length !== 0 && (
              data.map((row) => !edited || indexOf !== row.id
              ?
                <TbodyNotEdit
                  key={ `${row.id}-${row.task}` }
                  row= { row } contextTable={ contextTable }
                />              
              : 
                <TbodyIsEdit
                  key={ `${row.id}-${row.task}-edit` }
                  row= { row } contextTable={ contextTable }
                /> 
              )
          )}
      </tbody>
    </table>
  );
}

export default Table;
