import { render, screen, waitFor } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import InsertBar from '../components/InsertBar'
import userEvent from '@testing-library/user-event';
import { fetchFindAll, fetchCreate } from "../services/fetchApi";
import { listOne, listAll } from './mocks/list';

jest.mock('../services/fetchApi');

describe('Test render InsertBar Component', () => {
  const task = 'task';
  const responsible= 'responsible';  

  beforeEach(() => {
    fetchCreate.mockResolvedValue(listOne);
    fetchFindAll.mockResolvedValue(listAll);
  });

  it('Render InsertBar Component', () => {
    render(
      <ToDoListProvider>
        <InsertBar />
      </ToDoListProvider>
    );
    const inputTask = screen.getByTestId('input-task');
    expect(inputTask).toBeInTheDocument();

    const inputResponsible = screen.getByTestId('input-responsible');
    expect(inputResponsible).toBeInTheDocument();

    const btnAdd = screen.getByRole('button', { name: 'ADICIONAR'});
    expect(btnAdd).toBeInTheDocument();
  });

  it('Insert value InsertBar Component',async () => {
    render(
      <ToDoListProvider>
        <InsertBar />
      </ToDoListProvider>
    );

    const inputTask = screen.getByTestId('input-task');
    const inputResponsible = screen.getByTestId('input-responsible');
    const btnAdd = screen.getByRole('button', { name: 'ADICIONAR'});

    userEvent.type(inputTask, task);
    userEvent.type(inputResponsible, responsible);

    expect(inputTask).toHaveValue(task);
    expect(inputResponsible).toHaveValue(responsible);

    userEvent.click(btnAdd);

    await waitFor(() => {
      expect(inputTask).toHaveValue('');
    });

    await waitFor(() => {
      expect(inputResponsible).toHaveValue('');
    });
  });
});


