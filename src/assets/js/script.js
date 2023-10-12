
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


  const meseros = ["Juan", "Maria", "Laura", "Pedro", "Ana", "Diego", "Carmen","Carlos"];
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

// Formulario de contacto

const formularioContacto = document.getElementById('formularioContacto');
    
    formularioContacto.addEventListener('submit', function (e) {
        e.preventDefault(); 
        

        const nombres = document.getElementById('nombres').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;


        const popupMensaje = `Nombres: ${nombres}\nCorreo: ${correo}\nMensaje: ${mensaje}\n\n Tu mensaje fue enviado con exito! \n Proximamente nos comunicaremos con vos!`;

        alert(popupMensaje);


        formularioContacto.reset();
    });