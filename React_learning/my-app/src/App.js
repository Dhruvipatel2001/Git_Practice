import React, { useContext } from "react";
import { useState,createContext,useCallback } from "react";
import "./App.css";
import Props from "./components/props";
import Lifecycle_method from "./components/lifecycle_method";
import Usestate from "./components/usestate";
import UseEffect from "./components/useeffect";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Useref from "./components/useref";
import Usememo from "./components/usememo";
import Usecallback from "./components/usecallback";
import Context from "./components/context";
import Usereducer from "./components/usereducer";
import Fetchdata from "./components/fetchdata";
import Axios from "./components/axios";

class App extends React.Component {
  render() {
   
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/usestate">usestate</Link>
            </li>
            <li>
              <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
              <Link to="/useref">useRef</Link>
            </li>
            <li>
              <Link to="/usememo">useMemo</Link>
            </li>
            <li>
              <Link to="/usecallback">usecallback</Link>
            </li>
            <li>
              <Link to="/usecontext">usecontext</Link>
            </li>
            <li>
              <Link to="/usereducer">useReducer</Link>
            </li>
            <li>
              <Link to="/fetchdata">fetchdata</Link>
            </li>
            <li>
              <Link to="/axios">axios</Link>
            </li>


           
          </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/usestate" element={<Usestate />}></Route>
            <Route path="/useeffect" element={<UseEffect/>}></Route>
            <Route path="/useref" element={<Useref/>}></Route>
            <Route path="/usememo" element={<Usememo/>}></Route>
            <Route path="/usecallback" element={<Usecallback/>}></Route>
            <Route path="/usecontext" element={<Context/>}></Route>
            <Route path="/usereducer" element={<Usereducer/>}></Route>
            <Route path="/fetchdata" element={<Fetchdata/>}></Route>
            <Route path="/axios" element={<Axios/>}></Route>
          </Routes>
        </BrowserRouter>
      
      

    
    );
  }
}



export default App;
