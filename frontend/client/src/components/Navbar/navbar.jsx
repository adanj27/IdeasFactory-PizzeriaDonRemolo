import React, { useState } from 'react';

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Aquí podrías realizar la lógica de búsqueda según el término ingresado
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto flex items-center mb-2 md:mb-0">
            <img src="Dom romulo.png" alt="logo1" className="h-16 md:h-20 mx-auto md:mx-0" />
            <img src="pizza.png" alt="logo2" className="h-16" />
          </div>

          <div className="w-full md:w-auto flex items-center space-x-auto mt-2 md:mt-0">
            {searchVisible && (
              <input
                type="text"
                className="p-1 border-white shadow-md focus:outline-none w-full md:w-64"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
              />
            )}

            <button
              className="text-white hover:text-gray-300 p-1 bg-transparent focus:outline-none h-8"
              onClick={toggleSearch}
            >
              <img
                src="buscador.png"
                alt="logo4"
                className="shadow-gray-950 h-8 w-auto"
              />
            </button>

            <div className="ml-3">
              <button
                className="text-black p-1 bg-transparent focus:outline-none border border-none rounded shadow-md h-8 w-20 md:w-24 flex items-center justify-center"
                onClick={addToCart}
              >
                <img src="shopping_cart.png" alt="carrito" className="border-white mr-2 h-5" />
                <span>Carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
