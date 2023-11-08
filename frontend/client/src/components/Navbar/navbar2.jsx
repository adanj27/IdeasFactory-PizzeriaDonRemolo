import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      text: 'Contacto',
      href: '/contacto',
    },
  ];

  return (
    <nav className="bg-white p-3">
      <div className="flex justify-between items-center text-center">
        <div className="flex items-center">
          <img
            src="Dom romulo.png"
            alt="logo1"
            className="h-16 md:h-20 mx-auto md:mx-0"
          />
          <img src="pizza.png" alt="logo2" className="h-16" />
        </div>

        <div className="flex text-lg font-[450px] font-display -translate-x-36">
          {navItems.map(({ text, href }) => (
            <NavItem key={text} text={text} href={href} />
          ))}
        </div>

        <div className="mr-4">
          <CartButton />
        </div>
      </div>
    </nav>
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
    <Link to="/carrito">
      <button
        type="submit"
        className="h-12 w-12 p-2 text-orange hover:bg-[#CF5100A6] rounded-2xl shadow-md"
      >
        <img src="compras.png" alt="carrito" className="p-1" />
      </button>
    </Link>
  );
}

export default Navbar;
