import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu';

function BrowserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu />} />
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
