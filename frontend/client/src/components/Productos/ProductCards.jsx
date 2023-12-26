/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { actualizarCarrito } from '../../store/carritoStore';

function ProductCard({ productos }) {
  const [menu, setMenu] = useState(productos);

  const reducirCantidad = (id) => {
    const nuevoMenu = menu.map((item) => (item.productId === id ? { ...item, amount: item.amount - 1 } : item));
    setMenu(nuevoMenu);
  };

  const aumentarCantidad = (id) => {
    const nuevoMenu = menu.map((item) => (item.productId === id ? { ...item, amount: item.amount + 1 } : item));
    setMenu(nuevoMenu);
  };

  const agregarAlCarrito = (id) => {
    const itemAgregado = menu.find((item) => item.productId === id);

    // si existe la comida, actualizamos el carrito con los nuevos valores:
    if (itemAgregado) {
      actualizarCarrito(itemAgregado);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 py-32 lg:px-16 px-12 justify-center items-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br">
      {menu.map(({ productId, productName, productDescription, price, imagePath, amount }) => (
        <div key={productName} className="w-[380px] h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="w-full">
            <img src={imagePath} alt="pizza" className="w-full h-[215px]" />

            <div className="p-2 sm:p-4 font-display">
              <p className="font-bold text-gray-700 text-2xl leading-7">{productName}</p>
              <div className="flex flex-row mt-2">
                <p className="text-[#3C3C4399] text-xl mr-2 line-through">
                  $
                  {price}
                </p>
                <p className="text-2xl font-bold text-[#0FB478]">
                  $
                  {price}
                </p>
              </div>
              <p className="text-[#7C7C80] lg:text-[20px] py-3">{productDescription}</p>

              <div className="flex w-fit px-2 py-2 mb-6 bg-gray-400 text-black rounded-full cursor-pointer shadow-md shadow-gray-500">
                <button
                  type="button"
                  onClick={() => reducirCantidad(productId)}
                  className="inline font-medium text-sm font-display tracking-wide text-center transition-colors duration-200 transform rounded-full hover:bg-[#CF5100] p-1"
                >
                  -
                </button>
                <div className="font-bold text-sm font-display text-center p-1">{amount}</div>
                <button
                  type="button"
                  onClick={() => aumentarCantidad(productId)}
                  className="inline font-medium text-sm font-display tracking-wide text-center transition-colors duration-200 transform rounded-full hover:bg-[#CF5100] p-1"
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                onClick={() => agregarAlCarrito(productId)}
                className="block mt-2 w-full font-display font-bold text-base px-4 py-3 tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#CF5100] rounded-[14px] hover:bg-[#b7584a] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
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
