import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import Thead from '../components/Table/Thead';
import userEvent from '@testing-library/user-event';

describe('Test render Thead Component', () => {
  it('Render Thead Component', () => {
    render(
      <ToDoListProvider>
        <table>
          <Thead />
        </table>
      </ToDoListProvider>
    );

    const theadHash = screen.getByText(/#/i);
    const theadTask = screen.getByText(/Tarefa/i);
    const theadDate = screen.getByText(/Data/i);
    const theadStatus = screen.getByText(/Status/i);
    const theadResponsible = screen.getByText(/Responsável/i);
    const theadEdit = screen.getByText(/Editar/i);

    expect(theadHash).toBeInTheDocument();
    expect(theadTask).toBeInTheDocument();
    expect(theadDate).toBeInTheDocument();
    expect(theadStatus).toBeInTheDocument();
    expect(theadResponsible).toBeInTheDocument();
    expect(theadEdit).toBeInTheDocument();

    userEvent.click(theadHash);
    userEvent.click(theadTask);
    userEvent.click(theadDate);
    userEvent.click(theadStatus);
    userEvent.click(theadResponsible);
  });
});


