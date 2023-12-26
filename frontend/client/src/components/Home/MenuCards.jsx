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
    <div className="grid grid-cols-8">
      <div className="col-start-1 col-end-9 md:col-start-3 md:col-end-7 flex flex-col md:flex-row items-center justify-center gap-10">
        {cardData.map((item) => (
          <div className="" key={item.title}>
            {/* <Link to={item.to}> */}
            <Card img={item.img} title={item.title} href={item.href} />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCards;
