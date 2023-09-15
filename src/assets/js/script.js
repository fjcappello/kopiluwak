// Obtén una referencia al botón "Ordenar" y agrega un evento click
const botonOrdenar = document.querySelector('.carrito');
botonOrdenar.addEventListener('click', () => {
  // Crea una lista de productos pedidos
  const productosPedidos = [];

  // Obtén todos los botones "Pedir"
  const botonesPedir = document.querySelectorAll('.pedir');

  // Recorre los botones y agrega los productos al carrito
  botonesPedir.forEach((boton) => {
    const nombreProducto = boton.getAttribute('data-nombre');
    productosPedidos.push(nombreProducto);
  });

  // Genera un nombre de mesero aleatorio (reemplace con sus nombres)
  const meseros = ["Juan", "Maria", "Carlos", "Laura", "Pedro", "Ana", "Diego", "Carmen"];
  const nombreMesero = meseros[Math.floor(Math.random() * meseros.length)];

  // Crea un mensaje con los productos y el nombre del mesero
  const mensaje = `Su orden:\n${productosPedidos.join('\n')}\n\nHa sido enviada al mesero.\nSu mesero hoy es ${nombreMesero}.`;

  // Muestra la notificación
  alert(mensaje);
});

