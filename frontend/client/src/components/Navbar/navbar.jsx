import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import { CarritoLogo } from '../../assets';

function Navbar() {
  const [nav, setNav] = useState(false);

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
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="Dom romulo.png" alt="logo1" className="h-14 md:h-18 mx-auto md:mx-0" />
          <img src="pizza.png" alt="logo2" className="h-14" />
        </a>
        <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
          <CartButton />
          <button
            type="button"
            onClick={() => setNav(!nav)}
            className="cursor-pointer ml-4 pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-[#CF5100A6] text-black font-display text-3xl">
              {navItems.map(({ text, href }) => (
                <NavItem2 onClick={() => setNav(!nav)} key={text} text={text} href={href} />
              ))}
            </ul>
          )}

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <div className="flex text-lg font-[450px] font-display -translate-x-12 mt-2">
            {navItems.map(({ text, href }) => (
              <NavItem key={text} text={text} href={href} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, text }) {
  return (
    <Link to={href} className="w-28 h-10 text-center pt-1 text-black mx-4 hover:bg-[#CF5100A6] rounded-2xl shadow-md">
      {text}
    </Link>
  );
}

function NavItem2({ href, text }) {
  return (
    <Link to={href} className="px-4 cursor-pointer hover:scale-110 duration-200 capitalize py-8 text-3xl font-medium">
      {text}
    </Link>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

NavItem2.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function CartButton() {
  return (
    <Link to="/carrito" className="flex p-3 hover:scale-105 duration-150 w-12 rounded-2xl shadow-md bg-slate-200">
      <img src={CarritoLogo} alt="logo" className="w-8" />
    </Link>
  );
}

export default Navbar;

// px-4 cursor-pointer hover:scale-110 duration-200 capitalize py-8 text-4xl font-medium
