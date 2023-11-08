import React from 'react';
import {
  Pizza4Quesos,
  PizzaCalabresa,
  Muzzarella,
  PizzaPalmitos,
  PizzaFugazzeta,
  PizzaNapolitana,
  PizzaPanceta,
  PizzaProvolone,
  PizzaFaina,
} from '../assets';

function ProductCard() {
  const pizzas = [
    {
      img: Pizza4Quesos,
      title: 'Pizza Cuatro Quesos',
      price: '$2500',
      ofertPrice: '$1899',
      description: 'Provolone, Roquefort y Parmesano',
    },
    {
      img: Muzzarella,
      title: 'Pizza Fugazzeta',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Queso muzzarella y cebolla',
    },
    {
      img: PizzaNapolitana,
      title: 'Pizza Napolitana',
      price: '$2100',
      ofertPrice: '$1499',
      description: 'Salsa de tomate, tomates y albahaca',
    },
    {
      img: PizzaFugazzeta,
      title: 'Pizza Fugazzeta',
      price: '$2400',
      ofertPrice: '$1799',
      description: 'Cebolla y provolone gratinado',
    },
    {
      img: PizzaCalabresa,
      title: 'Pizza Calabresa',
      price: '$2300',
      ofertPrice: '$1699',
      description: 'Longanizas en rodajas',
    },
    {
      img: PizzaPanceta,
      title: 'Pizza Panceta',
      price: '$3000',
      ofertPrice: '$2700',
      description: 'Salsa de tomate, queso y panceta',
    },
    {
      img: PizzaProvolone,
      title: 'Pizza Provolone',
      price: '$2000',
      ofertPrice: '$1299',
      description: 'Queso Provolone con aceitunas negras',
    },
    {
      img: PizzaPalmitos,
      title: 'Pizza Palmitos',
      price: '$3200',
      ofertPrice: '$3000',
      description: 'Palmitos, salsa golf y huevo',
    },
    {
      img: PizzaFaina,
      title: 'Pizza Faina',
      price: '$2000',
      ofertPrice: '$1800',
      description: 'Fainá sin acompañantes',
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
                  -
                </a>
                <a
                  target="_blank"
                  href="http://www.sancarlospizza.com/"
                  className="inline font-medium font-display text-sm tracking-wide text-center transition-colors duration-300 transform rounded-full p-1 hover:bg-[#CF5100] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  +
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
      <p className="font-display font-medium text-sm">* Todas las pizzas vienen con queso Muzzarella de primera calidad</p>
    </div>
  );
}

export default ProductCard;
