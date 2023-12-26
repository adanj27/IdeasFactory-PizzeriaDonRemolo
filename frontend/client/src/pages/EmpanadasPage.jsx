/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/footer/footer';
import ProductCard from '../components/Productos/ProductCards';
import getAllProducts from '../services/ProductService';

function Empanadas() {
  return (
    <>
      <Navbar />
      <ProductCard productos={getAllProducts().filter((producto) => producto.category.idCategory === 2)} />
      <Footer />
    </>
  );
}

export default Empanadas;
