/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import ProductCard from '../components/Productos/ProductCards';
import getAllProducts from '../services/ProductService';

function Bebidas() {
  return (
    <>
      <Navbar />
      <ProductCard productos={getAllProducts().filter((producto) => producto.category.idCategory === 3)} />
      <Footer />
    </>
  );
}

export default Bebidas;
