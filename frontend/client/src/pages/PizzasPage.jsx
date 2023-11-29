import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/footer/footer';
import PizzaCard from '../components/Productos/PizzaCard';

function Pizzas() {
  return (
    <>
      <Navbar />
      <PizzaCard />
      <Footer />
    </>
  );
}

export default Pizzas;
