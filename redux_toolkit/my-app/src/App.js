import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Myproduct from './components/myproduct';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from './components/dashboard';
import Cart from './components/cart';
import Rootlayout from './components/rootlayout';


function App() {
  return (
   
    <BrowserRouter>
    <Rootlayout></Rootlayout>
    <Routes>
    <Route path="/dashboard" element={ <Dashboard/>}></Route>
    <Route path="/cart" element={ <Cart/>}></Route>
    <Route path="/product" element={ <Myproduct/>}></Route>
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
