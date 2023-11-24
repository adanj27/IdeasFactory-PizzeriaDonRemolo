import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CarritoLogo } from '../../assets';

function Navbar() {
  const navItems = [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Pizzas',
      href: '/pizzas',
    },
    {
      text: 'Empanadas',
      href: '/empanadas',
    },
    {
      text: 'Bebidas',
      href: '/bebidas',
    },
    {
      text: 'Contacto',
      href: '/contacto',
    },
  ];

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center text-center">
        <div className="flex items-center">
          <img
            src="Dom romulo.png"
            alt="logo1"
            className="h-16 md:h-20 mx-auto md:mx-0"
          />
          <img src="pizza.png" alt="logo2" className="h-16" />
        </div>

        <div className="flex text-lg font-[450px] font-display -translate-x-36 mt-2">
          {navItems.map(({ text, href }) => (
            <NavItem key={text} text={text} href={href} />
          ))}
        </div>

        <div className="mr-4">
          <CartButton />
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, text }) {
  return (
    <Link
      to={href}
      className="w-28 h-10 text-center pt-1 text-black mx-4 hover:bg-[#CF5100A6] rounded-2xl shadow-md"
    >
      {text}
    </Link>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function CartButton() {
  return (
    <Link to="/carrito" className="flex p-3 text-orange hover:bg-[#CF5100A6] rounded-2xl shadow-md">
      <img src={CarritoLogo} alt="logo" className="w-8" />
    </Link>
  );
}

export default Navbar;
