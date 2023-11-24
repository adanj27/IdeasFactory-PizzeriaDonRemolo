import React from 'react';
import Navbar from '../components/Navbar/navbar2';
import Footer from '../components/footer/footer';
import { BgContacto } from '../assets';
import Feedback from '../components/Contacto/Feedback';
import LocalesBox from '../components/Contacto/LocalesBox';

function Contacto() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-8">
        <div className="col-start-2 col-end-6">
          <div className="flex flex-col justify-center lg:ml-10 text-justify mt-10 w-[600px] h-48 mb-4 translate-x-8">
            <div className="flex flex-row">
              <h1 className="font-bold text-4xl leading-[125%]">¡Gracias por visitar</h1>
              <h1 className="font-bold text-4xl leading-[125%] text-[#CF5100] ml-3">Don Remolo!</h1>
            </div>
            <p className="mt-5 font-medium text-xl font-display leading-[125%]">El hogar de las mejores pizzas en la ciudad!</p>
            <h2 className="mt-6 font-display font-normal text-lg">Por favor, no dudes en contactarnos.</h2>
          </div>
          <Feedback />
          <LocalesBox />
        </div>

        <div className="col-start-6 col-end-9 hidden sm:block">
          <img src={BgContacto} alt="bg-contacto" className="h-[100%]" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
