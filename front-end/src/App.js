import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoListProvider from "./context/ToDoListProvider";
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <ToDoListProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home }/>
        </Switch>
      </BrowserRouter>
    </ToDoListProvider>
  );
}

export default App;
