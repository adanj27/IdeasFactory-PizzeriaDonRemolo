/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Pagar() {
  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md border-2 border-[#CF5100]">
      <h2 className="text-2xl text-[#CF5100] font-bold mb-6">Completá tus datos:</h2>

      <form method="post" action="#">
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-600" htmlFor="name">
            Nombre
          </label>
          <input className="mt-1 p-2 w-full border rounded-md" type="text" placeholder="Ingresá tu nombre..." />
        </div>

        <div className="mb-4">
          <label className="block text-base font-medium text-gray-600" htmlFor="email">
            Teléfono
          </label>
          <input className="mt-1 p-2 w-full border rounded-md" name="email" id="email" type="email" placeholder="221-4112233" />
        </div>

        <div className="mb-4">
          <label className="block text-base font-medium text-gray-600" htmlFor="bio">
            Dirección
          </label>
          <textarea className="mt-1 p-2 w-full border rounded-md" rows="3" name="bio" id="bio" placeholder="Ingresá tu dirección completa..." />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#CF5100] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            Pedir
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pagar;
