import React from 'react';
import Card from './Card';
import { Menu, Locales, Contacto } from '../assets';

function MenuCards() {
  const cardData = [
    {
      img: Menu,
      bg: 'bg-[#FF8333]',
      title: 'MENÚ',
      to: '/menu',
      style: 'shadow-orange-500',
    },
    {
      img: Locales,
      bg: 'bg-[#BF60FF]',
      title: 'LOCALES',
      to: '/locales',
      style: 'shadow-purple-500',
    },
    {
      img: Contacto,
      bg: 'bg-[#F25B72]',
      title: 'CONTACTO',
      to: '/contacto',
      style: 'shadow-pink-500',
    },
  ];
  return (
    <section className="flex justify-center items-center w-1/2 mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-x-36">
        {cardData.map(({
          img, bg, title, style,
        }) => (
          <div key={title} className={`shadow-lg rounded-2xl hover:scale-125 duration-500 ${style}`}>
            <Card img={img} bg={bg} title={title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuCards;
