import React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';// Asumiendo que este import es correcto
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
