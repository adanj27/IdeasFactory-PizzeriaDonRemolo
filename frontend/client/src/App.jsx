import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar2';// Asumiendo que este import es correcto
import Home from './pages/Home';
import Router from './routes/Router';

function App() {
  return (
    <>
      <Router />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
