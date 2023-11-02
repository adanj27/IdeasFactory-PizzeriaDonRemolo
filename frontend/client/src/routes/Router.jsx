import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Pizzas from '../pages/Pizzas';
import Empanadas from '../pages/Empanadas';
import { Contacto } from '../assets';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
