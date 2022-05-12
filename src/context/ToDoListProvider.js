import React, { useState, useEffect } from "react";
import ToDoListContext from './ToDoListContext';
import { fetchApiMock } from "../services/fetchApi";

function ToDoListProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApiMock(setData);
  }, []);

  const context = {
    data,
    setData
  }

  return(
    <ToDoListContext.Provider value={ context }>
      { children }
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;