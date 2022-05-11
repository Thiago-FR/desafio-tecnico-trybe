import React, { useState } from "react";
import ToDoListContext from './ToDoListContext';

function ToDoListProvider({ children }) {
  const [name, setName] = useState('');

  const context = {
    name,
    setName
  }

  return(
    <ToDoListContext.Provider value= { context }>
      { children }
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;