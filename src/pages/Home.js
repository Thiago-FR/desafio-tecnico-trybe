import React from "react";
import Table from '../components/Table'
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsertBar from "../components/InsertBar";

function Home() {
  return (
    <div className="container">
      <Header h1="TAREFAS"/>
      <main>
        <InsertBar />
        <div className="d-flex justify-content-center"><Table /></div>
      </main>
      <Footer name="Ebytr 2022"/>
    </div>
  );
}

export default Home;
