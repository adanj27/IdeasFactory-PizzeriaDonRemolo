import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Navbar() {
  const navItems = ['Inicio', 'Pizzas', 'Empanadas', 'Contacto'];

  return (
    <nav className="bg-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="Dom romulo.png"
            alt="logo1"
            className="h-16 md:h-20 mx-auto md:mx-0"
          />
          <img src="pizza.png" alt="logo2" className="h-16" />
        </div>

        <div className="ml-3 flex text-lg font-medium">

          {navItems.map((text) => (
            <NavItem key={text} text={text} />
          ))}
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ text }) {
  return (
    <button
      type="button"
      className="h-7 w-24 text-black mx-2 border-none hover:bg-orange-500 rounded-lg"
    >
      {text}
    </button>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

function CartButton() {
  return (
    <button
      type="button"
      className="h-7 w-24 text-black mx-2 border-none hover:bg-orange-500 rounded-lg flex items-center"
    >
      Carrito
      <img
        src="compras.png"
        alt="carrito"
        className="h-4 ml-1"
      />
    </button>
  );
}

export default Navbar;
