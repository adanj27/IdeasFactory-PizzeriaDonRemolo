import React from 'react';
import {
  CarneSuave,
  CarneMalbec,
  CarnePicante,
  Humita,
  Pollo,
  Verdura,
  PancetaCiruela,
  JyQ,
  Roquefort,
  Caprese,
} from '../assets';

function EmpanadasCards() {
  const pizzas = [
    {
      img: CarneSuave,
      title: 'Carne Suave',
      price: '$2500',
      ofertPrice: '$1899',
      description: 'Nuestras clasicas empanadas de carne',
    },
    {
      img: CarnePicante,
      title: 'Carne picante',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Picante moderado, carne triturada',
    },
    {
      img: CarneMalbec,
      title: 'Carne al malbec',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Carne cortada a cuchillo al malbeec',
    },
    {
      img: JyQ,
      title: 'Jamon y queso',
      price: '$2400',
      ofertPrice: '$1799',
      description: 'Jamon en lonjas con muzzarella',
    },
    {
      img: Roquefort,
      title: 'Roquefort',
      price: '$2300',
      ofertPrice: '$1699',
      description: 'Roquefort y jamón',
    },
    {
      img: Caprese,
      title: 'Capresse',
      price: '$3000',
      ofertPrice: '$2700',
      description: 'Queso, tomate y albahaca',
    },
    {
      img: Humita,
      title: 'Humita',
      price: '$2000',
      ofertPrice: '$1299',
      description: 'Salsa blanca y choclo',
    },
    {
      img: PancetaCiruela,
      title: 'Panceta y Ciruela',
      price: '$3200',
      ofertPrice: '$3000',
      description: 'Panceta, queso y ciruela',
    },
    {
      img: Pollo,
      title: 'Pollo clásicas',
      price: '$2000',
      ofertPrice: '$1800',
      description: 'Pollo y salsa especial de la casa',
    },
    {
      img: Verdura,
      title: 'Verdura',
      price: '$2000',
      ofertPrice: '$1800',
      description: 'Espinaca fresca y muzzarella',
    },
  ];

  return (
    <div className="grid-cols-1 grid gap-8 lg:gap-14 lg:grid-cols-3 py-12 px-16 justify-center items-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br">
      {pizzas.map(({
        img, title, description, price, ofertPrice,
      }) => (
        <div key={title} className="w-96 h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full">
            <img src={img} alt="pizza" className="w-96 h-[215px]" />

            <div className="p-2 sm:p-4 font-display">
              <p className="font-bold text-gray-700 text-2xl leading-7">{title}</p>
              <div className="flex flex-row mt-2">
                <p className="text-[#3C3C4399] text-xl mr-2 line-through">{price}</p>
                <p className="text-2xl font-bold text-[#0FB478]">{ofertPrice}</p>
              </div>
              <p className="text-[#7C7C80] text-[20px] py-3">{description}</p>

              <div className="flex w-fit px-0.5 py-1 mb-6 bg-gray-400 text-black rounded-full cursor-pointer shadow-md shadow-gray-500">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/id1493631471"
                  className="inline font-medium text-sm font-display tracking-wide text-center transition-colors duration-200 transform rounded-full hover:bg-[#CF5100] p-1"
                  rel="noreferrer"
                >
                  Completa
                </a>
                <a
                  target="_blank"
                  href="http://www.sancarlospizza.com/"
                  className="inline font-medium font-display text-sm tracking-wide text-center transition-colors duration-300 transform rounded-full p-1 hover:bg-[#CF5100] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  Porción
                </a>
              </div>

              <a
                target="_blank"
                href="http://www.sancarlospizza.com/"
                className="block mt-2 w-full font-display font-bold text-base px-4 py-3 tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#CF5100] rounded-[14px] hover:bg-[#b7584a] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                rel="noreferrer"
              >
                Agregar al pedido
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmpanadasCards;
