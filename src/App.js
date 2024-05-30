import React ,{useState} from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import Destination from "./components/Destinasi/Destinasi";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
  return(
    <Router>
      <div className="App ">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
        </Routes>
      </div>
    </Router>
    )
}

export default App;