import React, { useState, useEffect } from "react";
import ToDoListContext from './ToDoListContext';
import { fetchApiMock } from "../services/fetchApi";

function ToDoListProvider({ children }) {
  const [data, setData] = useState([]);
  const [isEditItem, setIsEditItem] = useState({ edited: false, indexOf: 0 });

  useEffect(() => {
    fetchApiMock(setData);
  }, []);

  const context = {
    data,
    setData,
    isEditItem,
    setIsEditItem
  }

  return(
    <ToDoListContext.Provider value={ context }>
      { children }
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;