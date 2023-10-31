import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function BrowserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Router() {
  return (
    <BrowserRoutes />
  );
}

export default Router;
