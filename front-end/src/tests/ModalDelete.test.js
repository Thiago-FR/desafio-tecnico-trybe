import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalDelete from '../components/ModalDelete';

describe('Test ModalDelete App Component', () => {
  let isShow = true;
  const handleClose = () => isShow = false;
  const handleDelete = () => {};

  it('Render ModalDelete Component', () => {
    render(
      <ModalDelete show={ isShow } handleClose={ handleClose } handleDelete={ handleDelete } />
    );

    const inputText = screen.getByText(/Deletar Tarefa/i);
    expect(inputText).toBeInTheDocument();

    const btnAdd = screen.getByRole('button', { name: 'Confirmar'});
    expect(btnAdd).toBeInTheDocument();

    userEvent.click(btnAdd);
  });
});


