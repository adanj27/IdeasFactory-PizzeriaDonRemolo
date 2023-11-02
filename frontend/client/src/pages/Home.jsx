import React from 'react';
import MenuCards from '../components/MenuCards';
import Carousel from '../components/Carousel';
import HomeMenu from '../components/HomeMenu';
import Navbar from '../components/Navbar/navbar2';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeMenu />
      <Carousel />
      <MenuCards />
      <Footer />
    </div>
  );
}

export default Home;
