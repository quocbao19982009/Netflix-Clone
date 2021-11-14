import axios from "axios";
import { useEffect, useState } from "react";
import requests from "./api/requests";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Rows from "./components/Rows";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner></Banner>
      {/* <Rows
        fetchUrl={requests.NetflixOriginal}
        title="NEXTFLIX ORIGNALS"
        isLarge={true}
      ></Rows> */}
      {/* <Rows fetchUrl={requests.trending} title="TRENDING"></Rows>
      <Rows fetchUrl={requests.topRated} title="TOP RATED"></Rows>
      <Rows fetchUrl={requests.action} title="ACTIONS"></Rows>
      <Rows fetchUrl={requests.comedy} title="COMEDY"></Rows> */}
      {/* <Rows fetchUrl={requests.documentaries} title="DOCUMENTARIES"></Rows> */}
      {/* <Rows fetchUrl={requests.horror} title="HORROR"></Rows>
      <Rows fetchUrl={requests.romance} title="ROMANCE"></Rows> */}
    </div>
  );
}

export default App;
