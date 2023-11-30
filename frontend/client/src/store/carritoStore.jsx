/* eslint-disable max-len */
// LOGICA DE DATOS DEL CARRITO

export const obtenerCarrito = () => JSON.parse(localStorage.getItem('carrito'));

export const actualizarCarrito = (comida) => {
  let carrito = JSON.parse(localStorage.getItem('carrito'));

  // SI LA COMIDA YA ESTABA EN EL CARRITO:
  // busco si el item seleccionado esta dentro del carrito,
  // desp recorro el carrito, vuelvo a buscar ese item y le cambio el amount por el amount
  if (carrito.find((item) => item.idProduct === comida.idProduct)) {
    carrito = carrito.map((item) => (item.idProduct === comida.idProduct ? { ...item, amount: comida.amount } : item));
  } else {
    carrito = [...carrito, comida];
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
};

export const reiniciarCarrito = () => {
  localStorage.setItem('carrito', JSON.stringify([]));
};

export const inicializarCarrito = () => {
  const carrito = obtenerCarrito();
  if (carrito === null || carrito === undefined) {
    localStorage.setItem('carrito', JSON.stringify([]));
  }
};
