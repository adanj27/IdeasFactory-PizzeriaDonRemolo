import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Outlet,
} from 'react-router-dom';
import Home from '../pages/Home';
import Pizzas from '../pages/PizzasPage';
import Empanadas from '../pages/EmpanadasPage';
import Contacto from '../pages/ContactoPage';
import Carrito from '../pages/CarritoPage';
import NoMatch from '../pages/NoMatch';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="pizzas" element={<Pizzas />} />
          <Route path="empanadas" element={<Empanadas />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
