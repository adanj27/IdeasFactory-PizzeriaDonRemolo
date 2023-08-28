import React from 'react';
import { Pizza4Quesos, PizzaCalabresa, PizzaCaprese, PizzaFaina, PizzaFugazzeta, PizzaNapolitana, PizzaPalmitos, PizzaPanceta, PizzaProvolone } from '../assets';

function ProductCard() {
  const products = [
    {
      id: 1,
      img: Pizza4Quesos,
      title: 'Pizza Cuatro Quesos',
      price: '$2500',
      ofertPrice: '$1899',
      description: 'Queso provolone, muzzarella, roquefort y parmesano',
    },
    {
      id: 2,
      img: PizzaFugazzeta,
      title: 'Pizza Fugazzeta',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Queso muzzarella y cebolla',
    },
    {
      id: 2,
      img: PizzaNapolitana,
      title: 'Pizza Napolitana',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Queso muzzarella, salsa de tomate y tomate en rodajas',
    },
    {
      id: 2,
      img: PizzaCaprese,
      title: 'Pizza Caprese',
      price: '$2400',
      ofertPrice: '$1799',
      description: 'Queso muzzarella, albahaca y tomate en rodajas',
    },
    {
      id: 2,
      img: PizzaCalabresa,
      title: 'Pizza Calabresa',
      price: '$2300',
      ofertPrice: '$1699',
      description: 'Queso muzzarella y longaniza en rodajas',
    },
    {
      id: 2,
      img: PizzaPanceta,
      title: 'Pizza Panceta',
      price: '$3000',
      ofertPrice: '$2700',
      description: 'Salsa de tomate, muzzarella y panceta',
    },
    {
      id: 2,
      img: PizzaProvolone,
      title: 'Pizza Provolone',
      price: '$2000',
      ofertPrice: '$1299',
      description: 'Queso muzzarella y Provolone',
    },
    {
      id: 2,
      img: PizzaPalmitos,
      title: 'Pizza Palmitos',
      price: '$3200',
      ofertPrice: '$3000',
      description: 'Muzzarella, palmitos, salsa golf',
    },
    {
      id: 2,
      img: PizzaFaina,
      title: 'Pizza Faina',
      price: '$1700',
      ofertPrice: '$1100',
      description: 'Fainá sin acompañante',
    },
  ];

  return (
    <div className="grid-cols-1 grid gap-8 lg:gap-14 lg:grid-cols-3 py-8 justify-center items-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2">
      {products.map(({
        id, img, title, description, price, ofertPrice,
      }) => (
        <div key={id} className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto pb-10">
            <div className="w-full">
              <img src={img} alt="pizza" />

              <div className="p-4 sm:p-6">
                <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">{title}</p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">{price}</p>
                  <p className="text-[17px] font-bold text-[#0FB478]">{ofertPrice}</p>
                </div>
                <p className="text-[#7C7C80] font-[15px] mt-6">{description}</p>

                <div className="flex mt-2.5 w-fit px-4 py-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full cursor-pointer shadow-xl shadow-gray-500">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/id1493631471"
                    className="inline font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                    rel="noreferrer"
                  >
                    Completa
                  </a>
                  <a
                    target="_blank"
                    href="http://www.sancarlospizza.com/"
                    className="inline ml-2 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                    rel="noreferrer"
                  >
                    Porción
                  </a>
                </div>

                <a
                  target="_blank"
                  href="http://www.sancarlospizza.com/"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#CF5100] rounded-[14px] hover:bg-[#b7584a] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  Agregar al pedido
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
