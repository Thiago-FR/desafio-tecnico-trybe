import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import Footer from '../components/Footer'

describe('Test render Footer Component', () => {
  it('Render Footer Component', () => {
    render(
      <ToDoListProvider>
        <Footer name="Test123" />
      </ToDoListProvider>
    );

    const inputText = screen.getByText(/Test123/i);
    expect(inputText).toBeInTheDocument();
  });
});


