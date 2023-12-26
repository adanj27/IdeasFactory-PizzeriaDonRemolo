import React, { useEffect } from 'react';
import { inicializarCarrito } from './store/carritoStore';
import './App.css';
import Routing from './routes/Router';

function App() {
  useEffect(() => {
    inicializarCarrito();
  }, []);

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
