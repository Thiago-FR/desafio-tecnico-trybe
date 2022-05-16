import React, { useContext } from "react";
import ToDoListContext from "../../context/ToDoListContext";

function Thead() {
  const { data, setFilter } = useContext(ToDoListContext);

  function setFilterByTask(name) {
    setFilter(data.sort((a, b) => {
      if (a[name] < b[name]) return -1;
      if (a[name] > b[name]) return 1;
      return 0;
    }));
  }

  return (
    <thead>
      <tr>
        <th scope="col" onClick={ () => setFilterByTask('id') }>
          <span className="cursor">#</span>
        </th>
        <th scope="col" onClick={ () => setFilterByTask('task') }>
          <span className="cursor">Tarefa</span>
        </th>
        <th scope="col" onClick={ () => setFilterByTask('date') }>
          <span className="cursor">Data</span>
        </th>
        <th scope="col" onClick={ () => setFilterByTask('status') }>
          <span className="cursor">Status</span>
        </th>
        <th scope="col" onClick={ () => setFilterByTask('responsible') }>
          <span className="cursor">Responsável</span>
        </th>
        <th scope="col">
          Editar
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
