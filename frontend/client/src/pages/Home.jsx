import React from 'react';
import MenuCards from '../components/MenuCards';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div>
      <Carousel />
      <MenuCards />
      <ProductCard />
    </div>
  );
}

export default Home;
