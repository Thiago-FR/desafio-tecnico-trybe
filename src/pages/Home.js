import React, { useContext } from "react";
import ToDoListContext from "../context/ToDoListContext";
import Table from '../components/Table'
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const { name, setName } = useContext(ToDoListContext);
  return (
    <div className="container">
      <Header h1="TAREFA"/>
      <main>
        <Table />
      </main>
      <Footer name="Ebytr 2022"/>
    </div>
  );
}

export default Home;
