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
        <th scope="col" onClick={ () => setFilterByTask('id') }>#</th>
        <th scope="col" onClick={ () => setFilterByTask('task') }>Tarefa</th>
        <th scope="col" onClick={ () => setFilterByTask('date') }>Data</th>
        <th scope="col" onClick={ () => setFilterByTask('status') }>Status</th>
        <th scope="col" onClick={ () => setFilterByTask('responsible') }>Responsável</th>
        <th scope="col">Editar</th>
      </tr>
    </thead>
  );
}

export default Thead;
