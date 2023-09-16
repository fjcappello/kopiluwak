
// Script para el carrito de pedidos


const botonOrdenar = document.querySelector('.carrito');
botonOrdenar.addEventListener('click', () => {

  const productosPedidos = [];


  const botonesPedir = document.querySelectorAll('.pedir');


  botonesPedir.forEach((boton) => {

    if (boton.classList.contains('agregado')) {
      const nombreProducto = boton.getAttribute('data-nombre');
      productosPedidos.push(nombreProducto);
    }
  });


  const meseros = ["Juan", "Maria", "Carlos", "Laura", "Pedro", "Ana", "Diego", "Carmen"];
  const nombreMesero = meseros[Math.floor(Math.random() * meseros.length)];

  if (productosPedidos.length > 0) {

    const mensaje = `Su orden:\n${productosPedidos.join('\n')}\n\nHa sido enviada al mozo.\nSu mozo hoy es ${nombreMesero}.`;


    alert(mensaje);


    botonesPedir.forEach((boton) => {
      boton.classList.remove('agregado');
    });
  } else {
    alert('No ha agregado ningún producto al carrito.');
  }
});

// Notificaciones de productos agregados a la orden

const botonesPedir = document.querySelectorAll('.pedir');
botonesPedir.forEach((boton) => {
  boton.addEventListener('click', () => {

    boton.classList.add('agregado');

    const nombreProducto = boton.getAttribute('data-nombre');
    alert(`Se ha agregado ${nombreProducto} al carrito.`);
  });
});
