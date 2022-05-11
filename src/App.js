import React, { useContext } from "react";
import ToDoListContext from "./context/ToDoListContext";

function App() {
  const { name, setName } = useContext(ToDoListContext);
  return (
    <div>
      <header>
        <p>{ name }</p>
        <input className="btn btn-primary" onChange={ ({target}) => setName(target.value)}/>
      </header>
    </div>
  );
}

export default App;
