import { render, screen } from '@testing-library/react';
import ToDoListProvider from '../context/ToDoListProvider';
import Table from '../components/Table'

describe('Test render Table Component', () => {
  it('Render Table Component', () => {
    render(
      <ToDoListProvider>
        <Table />
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

  });
});


