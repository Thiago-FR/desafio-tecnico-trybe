import { render, screen } from '@testing-library/react';
import ToDoListProvider from './context/ToDoListProvider';
import App from './App'

describe('Test render App Component', () => {
  it('Render App Component', () => {
    render(
      <ToDoListProvider>
        <App />
      </ToDoListProvider>
    );

    const inputText = screen.getByText(/Tarefas/i);
    expect(inputText).toBeInTheDocument();
  });
});


