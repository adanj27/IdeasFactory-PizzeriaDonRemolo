import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '../Productos/Card';
import { Menu, Locales, Contacto } from '../../assets';

function MenuCards() {
  const cardData = [
    {
      img: Menu,
      title: 'MENÚ',
      href: '/pizzas',
    },
    {
      img: Locales,
      title: 'LOCALES',
      href: '/contacto',
    },
    {
      img: Contacto,
      title: 'CONTACTO',
      href: '/contacto',
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-0 items-center justify-center place-items-center">
      {cardData.map((item) => (
        <div key={item.title}>
          {/* <Link to={item.to}> */}
          <Card img={item.img} title={item.title} href={item.href} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}

export default MenuCards;
