import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Pages/home/Home';
import Order from './Pages/order/Order';
import Cart from './Pages/cart/Cart';
import Dashboard from './Pages/Admin/dashboard/Dashboard';
import NoPage from './Pages/nopage/NoPage';
import MyState from './Contex/data/myState';

function App() {
  return (
    <MyState>
 <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </Router>
    </MyState>
   
  )
}

export default App