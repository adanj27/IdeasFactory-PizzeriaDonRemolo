/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import {
  CocaCola,
  Sprite,
  Fanta,
  Cerveza,
  AndesRubia,
  AndesRoja,
  Heineken,
  Stella,
  Elementos,
  Portillo,
} from '../../assets';
import { actualizarCarrito } from '../../store/carritoStore';

function BebidasCards() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      img: CocaCola,
      title: 'Coca Cola',
      price: '$1500',
      ofertPrice: 1500,
      amount: 0,
      description: '1.5 lts',
    },
    {
      id: 2,
      img: Sprite,
      title: 'Sprite',
      price: '$1500',
      ofertPrice: 1500,
      amount: 0,
      description: '1.5 lts',
    },
    {
      id: 3,
      img: Fanta,
      title: 'Fanta',
      price: '$1500',
      ofertPrice: 1500,
      amount: 0,
      description: '1.5 lts',
    },
    {
      id: 4,
      img: Cerveza,
      title: 'Andes IPA',
      price: '$2500',
      ofertPrice: 2500,
      amount: 0,
      description: 'Cerveza IPA de litro',
    },
    {
      id: 5,
      img: AndesRubia,
      title: 'Andes rubia',
      price: '$2500',
      ofertPrice: 2500,
      amount: 0,
      description: 'Cerveza rubia de litro',
    },
    {
      id: 6,
      img: AndesRoja,
      title: 'Andes Roja',
      price: '$2500',
      ofertPrice: 2500,
      amount: 0,
      description: 'Cerveza roja de litro',
    },
    {
      id: 7,
      img: Heineken,
      title: 'Heineken',
      price: '$3000',
      ofertPrice: 3000,
      amount: 0,
      description: 'Heineken de litro',
    },
    {
      id: 8,
      img: Stella,
      title: 'Stella',
      price: '$3000',
      ofertPrice: 3000,
      amount: 0,
      description: 'Stella de litro',
    },
    {
      id: 9,
      img: Elementos,
      title: 'Elementos',
      price: '$4100',
      ofertPrice: 4100,
      amount: 0,
      description: 'Vino malbec',
    },
    {
      id: 10,
      img: Portillo,
      title: 'Portillo',
      price: '$3800',
      ofertPrice: 3800,
      amount: 0,
      description: 'Vino Cabernet Suavignon',
    },
  ]);

  const reducirCantidad = (id) => {
    const nuevoMenu = menu.map((item) =>
      (item.id === id ? { ...item, amount: item.amount - 1 } : item));
    setMenu(nuevoMenu);
  };

  const aumentarCantidad = (id) => {
    const nuevoMenu = menu.map((item) =>
      (item.id === id ? { ...item, amount: item.amount + 1 } : item));
    setMenu(nuevoMenu);
  };

  const agregarAlCarrito = (id) => {
    const itemAgregado = menu.find((item) => item.id === id);

    // si existe la comida, actualizamos el carrito con los nuevos valores:
    if (itemAgregado) {
      actualizarCarrito(itemAgregado);
    }
  };

  return (
    <div className="grid-cols-1 grid gap-8 lg:gap-14 lg:grid-cols-3 py-12 px-16 justify-center items-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br">
      {menu.map(({ img, title, description, price, ofertPrice, amount, id }) => (
        <div key={title} className="w-96 h-[580px] bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full">
            <img src={img} alt="pizza" className="w-96 h-[275px]" />

            <div className="p-2 sm:p-4 font-display">
              <p className="font-bold text-gray-700 text-2xl leading-7">{title}</p>
              <div className="flex flex-row mt-2">
                <p className="text-[#3C3C4399] text-xl mr-2 line-through">{price}</p>
                <p className="text-2xl font-bold text-[#0FB478]">
                  $
                  {ofertPrice}
                </p>
              </div>
              <p className="text-[#7C7C80] text-[20px] py-3">{description}</p>

              <div className="flex w-fit px-2 py-2 mb-6 bg-gray-400 text-black rounded-full cursor-pointer shadow-md shadow-gray-500">
                <button type="button" onClick={() => reducirCantidad(id)} className="inline font-medium text-sm font-display tracking-wide text-center transition-colors duration-200 transform rounded-full hover:bg-[#CF5100] p-1">
                  -
                </button>
                <div className="font-bold text-sm font-display text-center p-1">{amount}</div>
                <button type="button" onClick={() => aumentarCantidad(id)} className="inline font-medium text-sm font-display tracking-wide text-center transition-colors duration-200 transform rounded-full hover:bg-[#CF5100] p-1">
                  +
                </button>
              </div>

              <button type="submit" onClick={() => agregarAlCarrito(id)} className="block mt-2 w-full font-display font-bold text-base px-4 py-3 tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#CF5100] rounded-[14px] hover:bg-[#b7584a] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                Agregar al pedido
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BebidasCards;
