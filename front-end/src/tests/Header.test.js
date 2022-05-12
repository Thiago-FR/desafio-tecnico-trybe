import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import Header from '../components/Header'

describe('Test render Header Component', () => {
  it('Render Header Component', () => {
    render(
      <ToDoListProvider>
        <Header h1="Header" />
      </ToDoListProvider>
    );

    const inputText = screen.getByText(/Header/i);
    expect(inputText).toBeInTheDocument();
  });
});


