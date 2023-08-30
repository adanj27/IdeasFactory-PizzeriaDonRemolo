import React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/NavBar';// Asumiendo que este import es correcto
import Home from './pages/Home';
import NavBarFoods from './components/Navbar/NavBarFoods';

function App() {
  return (
    <div>
      <Navbar />
      <NavBarFoods />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
