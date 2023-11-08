import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Menu, Locales, Contacto } from '../assets';

function MenuCards() {
  const cardData = [
    {
      img: Menu,
      title: 'MENÚ',
      to: '/pizzas',
    },
    {
      img: Locales,
      title: 'LOCALES',
      to: '/locales',
    },
    {
      img: Contacto,
      title: 'CONTACTO',
      to: '/contacto',
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {cardData.map((item) => (
        <div key={item.title}>
          <Link to={item.to}>
            <Card img={item.img} title={item.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MenuCards;
