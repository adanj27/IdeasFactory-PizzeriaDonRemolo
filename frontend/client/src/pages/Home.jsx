import React from 'react';
import MenuCards from '../components/Home/MenuCards';
import Carousel from '../components/Home/Carousel';
import HomeMenu from '../components/Home/OfertasBanner';
import Navbar from '../components/Navbar/navbar2';
import Footer from '../components/Footer/footer';

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
