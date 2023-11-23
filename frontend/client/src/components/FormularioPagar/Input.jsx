/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useController } from 'react-hook-form';

// Componente general para los 4 inputs

function Input({ name, type, placeholder, rules }) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    rules,
    defaultValue: '',
  });

  return (
    <div className="mb-4">
      <div className="block text-base font-medium text-gray-600" htmlFor="name">
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type={type}
          placeholder={placeholder}
          {...field}
        />
        {invalid && error && <p className="text-red-500 px-1.5 pt-1.5 text-xs">{error.message}</p>}
      </div>
    </div>
  );
}

export default Input;
