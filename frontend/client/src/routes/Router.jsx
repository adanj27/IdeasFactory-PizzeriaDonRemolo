import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Pizzas from '../pages/Pizzas';
import Empanadas from '../pages/Empanadas';
import Contacto from '../pages/Contacto';
import Carrito from '../pages/Carrito';
import Navbar from '../components/Navbar/navbar2';
import Footer from '../components/footer/footer';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
