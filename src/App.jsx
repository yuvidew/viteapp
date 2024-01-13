import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComp from './HomeFold/HomeComp';
import AboutComp from './AboutPageFold/AboutPageComp';
import NavComp from './NavBarFold/NavComp';

const App = () => {
  return (<>
    <BrowserRouter>
    <NavComp/>
      <Routes>
        <Route path='/' element = {<HomeComp/>} />
        <Route path='/about' element = {<AboutComp/>} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App