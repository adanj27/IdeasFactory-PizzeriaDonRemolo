import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/footer/footer';
import EmpanadasCards from '../components/Productos/EmpanadasCards';

function Empanadas() {
  return (
    <>
      <Navbar />
      <EmpanadasCards />
      <Footer />
    </>
  );
}

export default Empanadas;
