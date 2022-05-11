import React, { useContext } from "react";
import ToDoListContext from "../context/ToDoListContext";

function Home() {
  const { name, setName } = useContext(ToDoListContext);
  return (
    <div>
      <header>
        <h1>HOME</h1>
        <p>{ name }</p>
        <input className="btn btn-primary" onChange={ ({target}) => setName(target.value)}/>
      </header>
    </div>
  );
}

export default Home;
