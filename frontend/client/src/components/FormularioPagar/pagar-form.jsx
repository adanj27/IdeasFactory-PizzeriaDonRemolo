/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
  const [hidden, setHidden] = useState(false);
  const { handleSubmit } = useFormContext();
  /*   const [montoTotal, setMontoTotal] = useState(''); */

  const onSubmit = (data) => {
    // Número de teléfono y mensaje predefinido
    /* ​​ Monto Total: $${montoTotal.toFixed(2)} */
    // eslint-disable-next-line max-len
    /* El monto TOTAL a abonar es de:  ${obtenerCarrito.totalPrice} (habria que crear un totalPrice que guarde la cuenta que cree en Total) */
    const phoneNumber = '+5493416836919'; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
    const mensaje = `
    Hola!! Realicé un pedido, mis datos son:
    
    ​​​​Nombre: ${data.name}
    ​​​Dirección: ${data.dir}
    ​​​Teléfono: ${data.phone}

    ​​Medios de pago: efectivo/transferencias.

  IMPORTANTE!!
    
    - Si el medio de pago que elegís es transferencia, una vez que envíes el comprobante de pago 
    se inicializará tu pedido.
    
    - Corrobora que tus datos estén bien!!!

  ¡Muchas Gracias! Cualquier duda consúltanos por este medio!
`;
    // aca con ${he.encode('😊')} encodeas los emojis usando la libreria he (import he from 'he')
    // Construir el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

    // Redirigir a la ventana de WhatsApp
    window.open(whatsappLink, '_blank');
    setHidden(true);
  };

  return (
    hidden ? (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center mt-36 font-display text-[#CF5100]">Gracias por tu pedido!</h2>
        <p className="text-xl text-center py-8 font-display"> Puede seguir su pedido a través del chat de WhatsApp </p>
        <Link to="/">
          <button className="bg-[#CF5100] text-white px-4 py-2 font-semibold rounded-md hover:opacity-80" type="submit">
            Volver al inicio
          </button>
        </Link>
      </div>
    ) : (
      <div className="max-w-md mx-auto my-36 relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md border-2 border-[#CF5100]">
        <h2 className="text-2xl text-[#CF5100] font-bold mb-6">Completá tus datos:</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <Input name="name" type="text" placeholder="Ingresá tu nombre..." rules={nameRules} />
          <Input name="phone" type="phone" placeholder="221-1234567" rules={phoneRules} />
          <Input name="dir" type="text" placeholder="Ingresá tu dirección..." rules={dirRules} />
          <div className="flex justify-end">
            <button className="bg-[#CF5100] text-white px-4 py-2 font-bold rounded-md hover:opacity-80" type="submit">
              Pedir
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default PagarForm;
