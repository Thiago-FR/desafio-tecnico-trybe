import { render, screen } from '@testing-library/react';
import App from './App';
import ToDoListProvider from './context/ToDoListProvider';

test('renders learn react link', () => {
  render(
    <ToDoListProvider>
      <App />
    </ToDoListProvider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
