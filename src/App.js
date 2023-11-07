import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Especialistas } from "./components/Especialistas";
import { Consultorios } from "./components/Consultorios";
import { Menu } from "./components/Menu";




function App() {
  
    return (
    <BrowserRouter>
    <Menu></Menu>

    <div className="container">
  
      <div >
        <h1 className="h1 text-center my-4">Rutas en React</h1>
      </div>

      <Routes>
      <Route path="/consultorios" Component={Consultorios}></Route>

      <Route path="/especialistas" Component={Especialistas}></Route>



      </Routes>
      </div>

    </BrowserRouter>
 )};


export default App;
