import React from 'react';
import { CarneSuave, Pizza4Quesos, PizzaNapolitana } from '../assets';

function ShoppingCart() {
  return (
    <div className="w-full lg:w-2/5">
      <div className="flex flex-row items-center justify-between px-5 mt-5">
        <div className="font-bold text-xl">Mi orden actual</div>
        <div className="font-semibold">
          <span className="px-4 py-2 rounded-md bg-red-100 text-red-500">Quitar todo</span>
        </div>
      </div>

      <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row items-center w-2/5">
            <img
              src={PizzaNapolitana}
              className="w-10 h-10 object-cover rounded-md"
              alt=""
            />
            <span className="ml-4 font-semibold text-sm">Pizza Napolitana</span>
          </div>
          <div className="w-32 flex justify-between">
            <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
            <span className="font-semibold mx-4">2</span>
            <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
          </div>
          <div className="font-semibold text-lg w-16 text-center">$4000</div>
        </div>
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row items-center w-2/5">
            <img
              src={Pizza4Quesos}
              className="w-10 h-10 object-cover rounded-md"
              alt=""
            />
            <span className="ml-4 font-semibold text-sm">Pizza Cuatro Quesos</span>
          </div>
          <div className="w-32 flex justify-between">
            <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
            <span className="font-semibold mx-4">10</span>
            <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
          </div>
          <div className="font-semibold text-lg w-16 text-center">$1900</div>
        </div>
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row items-center w-2/5">
            <img
              src={CarneSuave}
              className="w-10 h-10 object-cover rounded-md"
              alt=""
            />
            <span className="ml-4 font-semibold text-sm">Empanada Carne Suave</span>
          </div>
          <div className="w-32 flex justify-between">
            <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
            <span className="font-semibold mx-4">5</span>
            <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
          </div>
          <div className="font-semibold text-lg w-16 text-center">$2500</div>
        </div>
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
            <span className="font-bold text-2xl">$7750.00</span>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        <div className="px-4 py-4 rounded-md shadow-lg text-center bg-[#CF5100] text-white font-semibold">
          Pagar
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
