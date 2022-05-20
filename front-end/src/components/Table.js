import React, { useContext, useState } from "react";
import ToDoListContext from "../context/ToDoListContext";
import { fetchFindAll, fetchRemove } from "../services/fetchApi";
import Thead from './Table/Thead';
import TbodyNotEdit from './Table/TbodyNotEdit';
import TbodyIsEdit from './Table/TbodyIsEdit';
import ModalDelete from "../components/ModalDelete";

function Table() {
  const {
    isEditItem: { edited, indexOf },
    data,
    setData,
    setIsEditItem,
  } = useContext(ToDoListContext);

  const [id, setId] = useState('');
  const [task, setTask] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  async function removeItem() {
    await fetchRemove(id);
    await fetchFindAll(setData);
    setIsEditItem({ edited: false, indexOf: 0 });
    setShow(false);
    setId('');
  }

  function handleDelete(idDelete) {
    setShow(true);
    setId(idDelete);
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
    handleDelete,
  }  

  return (
    <>
      <ModalDelete show={ show } handleClose={ handleClose } handleDelete={ removeItem }/>
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
    </>
  );
}

export default Table;
