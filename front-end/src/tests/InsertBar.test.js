import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import InsertBar from '../components/InsertBar'
import userEvent from '@testing-library/user-event';

describe('Test render InsertBar Component', () => {
  const task = 'task';
  const responsible= 'responsible';

  it('Render InsertBar Component', () => {
    render(
      <ToDoListProvider>
        <InsertBar />
      </ToDoListProvider>
    );
    const inputTask = screen.getByTestId('input-task')
    expect(inputTask).toBeInTheDocument();

    const inputResponsible = screen.getByTestId('input-responsible')
    expect(inputResponsible).toBeInTheDocument();

    const btnAdd = screen.getByRole('button', { name: 'ADICIONAR'})
    expect(btnAdd).toBeInTheDocument();

    userEvent.type(inputTask, task)
    userEvent.type(inputResponsible, responsible)

    expect(inputTask).toHaveValue(task);
    expect(inputResponsible).toHaveValue(responsible);
  });
});


