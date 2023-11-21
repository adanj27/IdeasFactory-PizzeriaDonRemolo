/* eslint-disable react/button-has-type */
import React from 'react';
import { BgMenuBar } from '../assets';

function HomeMenu() {
  return (
    <div className="flex justify-center items-center sm:w-full mx-auto my-4 bg-[#9C4235] rounded-3xl h-[336px]">
      <img src={BgMenuBar} alt="bg-menu" className="w-full h-full" />
      <button className="absolute inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-[#CF5100] group-hover:from-orange-600 group-hover:to-[#CF5100] focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-[#CF5100]">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-orange-200 text-orange-800 hover:text-black rounded-md group-hover:bg-opacity-0">
          10% OFF EN TODOS LOS PEDIDOS
        </span>
      </button>
    </div>
  );
}

export default HomeMenu;
