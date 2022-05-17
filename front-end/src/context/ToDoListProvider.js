import React, { useState, useEffect } from "react";
import ToDoListContext from './ToDoListContext';
import { fetchFindAll } from "../services/fetchApi";

function ToDoListProvider({ children }) {
  const [data, setData] = useState([]);
  const [isEditItem, setIsEditItem] = useState({ edited: false, indexOf: 0 });
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetchFindAll(setData);
  }, []);

  useEffect(() => {
    setData([...filter]);
  }, [filter]);

  const context = {
    data,
    setData,
    isEditItem,
    setIsEditItem,
    filter,
    setFilter,
  }

  return(
    <ToDoListContext.Provider value={ context }>
      { children }
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider;