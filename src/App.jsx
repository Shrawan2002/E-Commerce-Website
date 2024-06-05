import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order"
import Cart from "./Pages/Cart/Cart"
import Dashboard from "./Pages/Admin/Dashboard/Dashboard"

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App