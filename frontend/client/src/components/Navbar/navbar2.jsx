import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Navbar() {
  const navItems = ['Inicio', 'Pizzas', 'Empanadas', 'Contacto'];

  return (
    <nav className="bg-white p-3">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="Dom romulo.png" alt="logo1" className="h-16 md:h-20 mx-auto md:mx-0" />
          <img src="pizza.png" alt="logo2" className="h-16" />
        </div>

        <div className="flex text-lg font-[450px] font-display -translate-x-36">
          {navItems.map((text) => (
            <NavItem key={text} text={text} />
          ))}
        </div>

        <div className="mr-4">
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ text }) {
  return (
    <button type="button" className="w-28 h-10 text-black mx-4 hover:bg-[#CF5100A6] rounded-2xl shadow-md">
      {text}
    </button>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

function CartButton() {
  return (
    <button type="button" className="h-12 w-12 p-2 text-black hover:bg-[#CF5100A6] rounded-2xl shadow-md">
      <img src="compras.png" alt="carrito" className="p-1" />
    </button>
  );
}

export default Navbar;
