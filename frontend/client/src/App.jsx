import React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';// Asumiendo que este import es correcto
import Home from './pages/Home';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
