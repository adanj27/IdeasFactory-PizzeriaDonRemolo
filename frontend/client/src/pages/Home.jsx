import React from 'react';
import MenuCards from '../components/Home/MenuCards';
import Carousel from '../components/Home/Carousel';
import HomeMenu from '../components/Home/OfertasBanner';
import Navbar from '../components/Navbar/navbar2';
import Footer from '../components/Footer/footer';

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
