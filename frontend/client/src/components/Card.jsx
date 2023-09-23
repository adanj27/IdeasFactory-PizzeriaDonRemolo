/* eslint-disable react/prop-types */
import React from 'react';

function Card({ img, bg, title }) {
  return (
    <div className={`w-[216px] h-[216px] hover:scale-90 transition-all rounded-2xl ${bg}`}>
      <h2 className="w-full text-center text-2xl font-medium pt-3 pb-4">{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
}

export default Card;
