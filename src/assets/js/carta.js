// Renderizado de la carta

// Inclurir codigo js

// Carrito de pedidos


const botonOrdenar = document.querySelector('.carta__carrito');
botonOrdenar.addEventListener('click', () => {

  const productosPedidos = [];


  const botonPedir = document.querySelectorAll('.carta__pedir');


  botonPedir.forEach((boton) => {

    if (boton.classList.contains('agregado')) {
      const nombreProducto = boton.getAttribute('data-nombre');
      productosPedidos.push(nombreProducto);
    }
  });


  const meseros = ["Juan", "Maria", "Laura", "Pedro", "Ana", "Diego", "Araceli","Carlos"];
  const nombreMesero = meseros[Math.floor(Math.random() * meseros.length)];

  if (productosPedidos.length > 0) {

    const mensaje = `Su orden:\n${productosPedidos.join('\n')}\n\nHa sido enviada al mozo.\nSu mozo hoy es ${nombreMesero}.`;


    alert(mensaje);


    botonPedir.forEach((boton) => {
      boton.classList.remove('agregado');
    });
  } else {
    alert('No ha agregado ningún producto al carrito.');
  }
});

// Notificaciones de productos agregados a la orden

const botonPedir = document.querySelectorAll('.carta__pedir');
botonPedir.forEach((boton) => {
  boton.addEventListener('click', () => {

    boton.classList.add('agregado');

    const nombreProducto = boton.getAttribute('data-nombre');
    alert(`Se ha agregado ${nombreProducto} al carrito.`);
  });
});

