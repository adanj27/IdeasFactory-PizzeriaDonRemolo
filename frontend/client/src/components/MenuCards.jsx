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
    },
    {
      img: Locales,
      bg: 'bg-[#BF60FF]',
      title: 'LOCALES',
      to: '/locales',
    },
    {
      img: Contacto,
      bg: 'bg-[#F25B72]',
      title: 'CONTACTO',
      to: '/contacto',
    },
  ];
  return (
    <section className="flex justify-center items-center w-1/2 mx-auto my-12">
      <div className="flex flex-wrap gap-10">
        {cardData.map((item) => (
          <div key={item.title}>
            <Card img={item.img} bg={item.bg} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuCards;
