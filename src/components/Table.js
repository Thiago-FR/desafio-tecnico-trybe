import React from "react";

function Table() {
  const mockData = [{
    id: 1,
    task: 'front-end',
    date: new Date().getDate(),
    status: 'Pendente',
    responsible: 'Thiago'
  },
  {
    id: 2,
    task: 'front-end',
    date: new Date().getDate(),
    status: 'Pendente',
    responsible: 'Thiago'
  }]
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tarefa</th>
          <th scope="col">Data</th>
          <th scope="col">Status</th>
          <th scope="col">Responsável</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
          { mockData.length !== 0 && (
              mockData.map((row) => (
                <tr key={ `${row.id}-${row.task}` }>
                  <th scope="row">{ row.id }</th>
                  <td>{ row.task }</td>
                  <td>{ row.date }</td>
                  <td>{ row.status }</td>
                  <td>{ row.responsible }</td>
                  <td>
                    <button type="button">Editar</button>
                    <button type="button">X</button>
                  </td>
                </tr>
              ))
          )}
      </tbody>
    </table>
  );
}

export default Table;

// { data && data.length !== 0 && (
//   data.map((row) => (
//     <tr key={ `${row.id}-${row.task}` }>
//       <th scope="row">{ row.id }</th>
//       <td>{ row.task }</td>
//       <td>{ row.date }</td>
//       <td>{ row.status }</td>
//       <td>{ row.responsible }</td>
//       <td>
//         <button type="button">Editar</button>
//         <button type="button">X</button>
//       </td>
//     </tr>
//   ))
// )}

