/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import {Login, Signup} from "./Routes/routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/Createproduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/CreateProduct' element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;