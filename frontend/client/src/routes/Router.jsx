import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Home from '../pages/Home';
import Pizzas from '../pages/PizzasPage';
import Empanadas from '../pages/EmpanadasPage';
import Contacto from '../pages/ContactoPage';
import Carrito from '../pages/CarritoPage';
import NoMatch from '../pages/NoMatch';
import Bebidas from '../pages/BebidasPage';
import PagarPage from '../pages/PagarPage';
import { TotalProvider } from '../context/TotalContext';

function Routing() {
  return (
    <Router>
      <TotalProvider>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="pizzas" element={<Pizzas />} />
            <Route path="empanadas" element={<Empanadas />} />
            <Route path="bebidas" element={<Bebidas />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="pagar" element={<PagarPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </TotalProvider>
    </Router>
  );
}

export default Routing;
