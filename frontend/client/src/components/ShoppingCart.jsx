/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { reiniciarCarrito, obtenerCarrito, actualizarCarrito } from '../store/carritoStore';

function ShoppingCart() {
  const [carrito, setCarrito] = useState([]);

  // cargar el carrito visual con lo que esta en el localStorage:
  useEffect(() => {
    setCarrito(obtenerCarrito());
  }, []);

  const reducirCantidad = (id) => {
    const nuevoCarrito = carrito.map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item));
    const comidaSeleccionada = nuevoCarrito.find((item) => item.id === id);
    setCarrito(nuevoCarrito);
    actualizarCarrito(comidaSeleccionada);
  };

  const aumentarCantidad = (id) => {
    const nuevoCarrito = carrito.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item));
    const comidaSeleccionada = nuevoCarrito.find((item) => item.id === id);
    actualizarCarrito(comidaSeleccionada);
    setCarrito(nuevoCarrito);
  };

  const borrarCarrito = () => {
    setCarrito([]);
    reiniciarCarrito();
  };

  const calcularPrecio = () => {
    const precioTotal = carrito.reduce((total, item) => total + item.ofertPrice * item.amount, 0);
    return precioTotal;
  };

  return (
    <div className="flex justify-around">
      <div className="w-full md:w-2/5 p-5">
        <div className="flex flex-row items-center justify-between px-5 mt-5">
          <div className="font-bold text-xl">Mi orden actual</div>
          <div className="font-semibold">
            <button
              type="submit"
              onClick={() => borrarCarrito()}
              className="px-3 py-2 rounded-md bg-red-100 text-[#CF5100] border border-[#CF5100] hover:scale-105 duration-200"
            >
              Quitar todo
            </button>
          </div>
        </div>

        <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
          {carrito.map(({
            title, ofertPrice, amount, img, id,
          }) => (
            <div key={id} className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row items-center w-2/5">
                <img src={img} className="w-10 h-10 object-cover rounded-md" alt="" />
                <span className="ml-4 font-semibold text-sm">{title}</span>
              </div>
              <div className="w-32 flex justify-between">
                <button onClick={() => reducirCantidad(id)} type="submit" className="px-3 py-1 rounded-md bg-gray-300 ">
                  -
                </button>
                <span className="font-semibold mx-4">{amount}</span>
                <button
                  onClick={() => aumentarCantidad(id)}
                  type="submit"
                  className="px-3 py-1 rounded-md bg-gray-300 "
                >
                  +
                </button>
              </div>
              <div className="font-semibold text-lg w-16 text-center">{ofertPrice}</div>
            </div>
          ))}
        </div>

        <div className="px-5 mt-5">
          <div className="py-4 rounded-md shadow-lg">
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Subtotal</span>
              <span className="font-bold">$8400</span>
            </div>
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Descuento</span>
              <span className="font-bold">- $1000.00</span>
            </div>
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Envío</span>
              <span className="font-bold">$350.00</span>
            </div>
            <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
              <span className="font-semibold text-2xl">Total</span>
              <span className="font-bold text-2xl">{calcularPrecio()}</span>
            </div>
          </div>
        </div>

        <div className="px-5 mt-5 items-center flex justify-end">
          <button
            onClick={() => borrarCarrito()}
            type="submit"
            className="px-10 py-4 rounded-md shadow-md shadow-[#CF5100] text-center bg-[#CF5100] text-white font-semibold hover:scale-105 duration-200"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
