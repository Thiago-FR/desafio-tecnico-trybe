import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import Home from '../pages/Home'

describe('Test render Home Page', () => {
  it('Render Home Page', () => {
    render(
      <ToDoListProvider>
        <Home />
      </ToDoListProvider>
    );

    const inputText = screen.getByText(/Tarefas/i);
    expect(inputText).toBeInTheDocument();
  });
});


