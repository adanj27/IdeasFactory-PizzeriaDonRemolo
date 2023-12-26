import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { BgContacto } from '../assets';
import Feedback from '../components/Contacto/Feedback';
import LocalesBox from '../components/Contacto/LocalesBox';

function Contacto() {
  return (
    <>
      <Navbar />

      <div className="grid lg:grid-cols-8 px-5 py-10">
        <div className="lg:col-start-2 lg:col-end-6">
          <div className="flex flex-col justify-center lg:ml-10 text-justify mt-10 lg:w-[600px] h-48 mb-4 lg:translate-x-8">
            <div className="flex flex-row">
              <h1 className="font-bold lg:text-4xl sm:text-3xl text-2xl leading-[125%]">¡Gracias por visitar</h1>
              <h1 className="font-bold lg:text-4xl sm:text-3xl text-2xl leading-[125%] text-[#CF5100] ml-3">Don Remolo!</h1>
            </div>
            <p className="mt-6 font-medium lg:text-xl sm:text-lg font-display leading-[125%]">El hogar de las mejores pizzas en la ciudad!</p>
            <h2 className="mt-8 font-display font-normal lg:text-lg">Por favor, no dudes en contactarnos.</h2>
          </div>
          <Feedback />
          <LocalesBox />
        </div>

        <div className="col-start-6 col-end-9 hidden lg:block">
          <img src={BgContacto} alt="bg-contacto" className="h-[100%]" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
