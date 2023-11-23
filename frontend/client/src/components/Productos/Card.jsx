/* eslint-disable react/prop-types */
import React from 'react';

function Card({ img, title }) {
  return (
    <div className="grid grid-rows-7 w-[216px] h-[216px] rounded-2xl border border-[#CF5100] hover:scale-105 transition-all shadow-md shadow-[#CF5100]">
      <div className="row-start-1 row-end-4 bg-[#CF5100] rounded-t-2xl">
        <h2 className="w-full font-display text-white text-center text-2xl font-normal pt-4 pb-4">{title}</h2>
      </div>
      <div className="row-start-4 row-end-8">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}

export default Card;
