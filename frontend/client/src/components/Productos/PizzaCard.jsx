/* eslint-disable max-len */
import React, { useState } from 'react';
import { actualizarCarrito } from '../../store/carritoStore';
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
} from '../../assets';

function ProductCard() {
  const [menuPizza, setMenuPizza] = useState([
    {
      id: 1,
      img: Pizza4Quesos,
      title: 'Pizza Cuatro Quesos',
      price: '$2500',
      ofertPrice: 1899,
      description: 'Provolone, Roquefort y Parmesano',
      amount: 0,
    },
    {
      id: 2,
      img: Muzzarella,
      title: 'Pizza Fugazzeta',
      price: '$2100',
      ofertPrice: 1499,
      description: 'Queso muzzarella y cebolla',
      amount: 0,
    },
    {
      id: 3,
      img: PizzaNapolitana,
      title: 'Pizza Napolitana',
      price: '$2100',
      ofertPrice: 1499,
      description: 'Salsa de tomate, tomates y albahaca',
      amount: 0,
    },
    {
      id: 4,
      img: PizzaFugazzeta,
      title: 'Pizza Fugazzeta',
      price: '$2400',
      ofertPrice: 1799,
      description: 'Cebolla y provolone gratinado',
      amount: 0,
    },
    {
      id: 5,
      img: PizzaCalabresa,
      title: 'Pizza Calabresa',
      price: '$2300',
      ofertPrice: 1699,
      description: 'Longanizas en rodajas',
      amount: 0,
    },
    {
      id: 6,
      img: PizzaPanceta,
      title: 'Pizza Panceta',
      price: '$3000',
      ofertPrice: 2700,
      description: 'Salsa de tomate, queso y panceta',
      amount: 0,
    },
    {
      id: 7,
      img: PizzaProvolone,
      title: 'Pizza Provolone',
      price: '$2000',
      ofertPrice: 1299,
      description: 'Queso Provolone con aceitunas negras',
      amount: 0,
    },
    {
      id: 8,
      img: PizzaPalmitos,
      title: 'Pizza Palmitos',
      price: '$3200',
      ofertPrice: 3000,
      description: 'Palmitos, salsa golf y huevo',
      amount: 0,
    },
    {
      id: 9,
      img: PizzaFaina,
      title: 'Pizza Faina',
      price: '$2000',
      ofertPrice: 1800,
      description: 'Fainá sin acompañantes',
      amount: 0,
    },
  ]);

  const reducirCantidad = (id) => {
    const nuevoMenu = menuPizza.map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item));
    setMenuPizza(nuevoMenu);
  };

  const aumentarCantidad = (id) => {
    const nuevoMenu = menuPizza.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item));
    setMenuPizza(nuevoMenu);
  };

  const agregarAlCarrito = (id) => {
    const itemAgregado = menuPizza.find((item) => item.id === id);

    // si existe la comida, actualizamos el carrito con los nuevos valores:
    if (itemAgregado) {
      actualizarCarrito(itemAgregado);
    }
  };

  return (
    <div className="sm:grid-cols-2 grid-cols-1 grid gap-8 lg:gap-14 lg:grid-cols-3 py-12 lg:px-16 px-5 justify-center items-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br">
      {menuPizza.map(({
        img, title, description, price, ofertPrice, amount, id,
      }) => (
        <div key={title} className="w-full h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full">
            <img src={img} alt="pizza" className="w-96 h-[215px]" />

            <div className="p-2 sm:p-4 font-display">
              <p className="font-bold text-gray-700 text-2xl leading-7">{title}</p>
              <div className="flex flex-row mt-2">
                <p className="text-[#3C3C4399] text-xl mr-2 line-through">{price}</p>
                <p className="text-2xl font-bold text-[#0FB478]">
                  $
                  {ofertPrice}
                </p>
              </div>
              <p className="text-[#7C7C80] lg:text-[20px] py-3">{description}</p>

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

export default ProductCard;
