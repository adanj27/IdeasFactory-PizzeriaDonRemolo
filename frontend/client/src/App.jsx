import React, { useEffect } from 'react';
import { inicializarCarrito } from './store/carritoStore';
import './App.css';
import Router from './routes/Router';

function App() {
  useEffect(() => {
    inicializarCarrito();
  }, []);
  return (
    <Router />
  );
}

export default App;
