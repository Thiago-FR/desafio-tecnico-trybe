import React from "react";
import { Button, Modal } from 'react-bootstrap';

function ModalDelete ({ show, handleClose, handleDelete }) {
  function handleDeleteClick() {
    handleDelete();
    handleClose();
  }

  return (
    <Modal show={ show } onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Deletar Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Você tem certeza que deseja DELETAR esta tarefa?<br/>
        Esta ação não poderá ser desfeita
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ handleClose }>
          Cancelar
        </Button>
        <Button variant="danger" onClick={ handleDeleteClick }>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
