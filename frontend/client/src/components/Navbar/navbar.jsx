import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

function Navbar() {
  // ... (código restante)
}

function NavItem({ text }) {
  return (
    <button
      type="button"
      className="h-7 w-24 text-black border-none hover:bg-orange-500 rounded-lg"
    >
      {text}
    </button>
  );
}

// Agrega la validación de propiedades para NavItem
NavItem.propTypes = {
  text: PropTypes.string.isRequired, // Valida que 'text' sea una cadena y sea requerido
};

function CartButton() {
  return (
    <button
      type="button"
      className="h-7 w-24 text-black border-none hover:bg-orange-500 rounded-lg flex items-center"
    >
      Carrito
      <img
        src="carrito.png"
        alt="carrito"
        className="h-4 ml-1"
      />
    </button>
  );
}

// Agrega la validación de propiedades para CartButton de la misma manera que NavItem
CartButton.propTypes = {
  // Si es necesario, agrega las props y validaciones necesarias aquí
};

export default Navbar;
