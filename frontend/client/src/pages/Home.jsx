import React from 'react';
import MenuCards from '../components/MenuCards';
import Carousel from '../components/Carousel';
import HomeMenu from '../components/HomeMenu';

function Home() {
  return (
    <div>
      <HomeMenu />
      <Carousel />
      <MenuCards />
    </div>
  );
}

export default Home;
