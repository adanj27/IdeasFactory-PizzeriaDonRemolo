import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './Input';

const nameRules = {
  required: 'Debe ingresar un nombre completo',
  maxLength: {
    value: 50,
    message: 'El nombre no puede superar los 50 caracteres.',
  },
};

// Expresión regular para telefonos de argentina con el +54 opcional, sin espacios
const phoneRules = {
  required: 'Debe ingresar un teléfono',
  pattern: {
    value: /^(?:(?:00)?\+?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
    message: 'El número de teléfono no es válido',
  },
};

const dirRules = {
  required: 'Debe ingresar su dirección',
  maxLength: {
    value: 100,
    message: 'La dirección no puede superar los 100 caracteres.',
  },
};

function PagarForm() {
  const { handleSubmit } = useFormContext();

  return (
    <div className="max-w-md mx-auto my-36 relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md border-2 border-[#CF5100]">
      <h2 className="text-2xl text-[#CF5100] font-bold mb-6">Completá tus datos:</h2>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Input name="nombre" type="text" placeholder="Ingresá tu nombre..." rules={nameRules} />
        <Input name="phone" type="phone" placeholder="221-1234567" rules={phoneRules} />
        <Input name="dir" type="text" placeholder="Ingresá tu dirección..." rules={dirRules} />
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

export default PagarForm;
