import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar'; // Asumiendo que este import es correcto
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <h1>Frontend</h1>
      <Footer />
    </div>
  );
}

export default App;
