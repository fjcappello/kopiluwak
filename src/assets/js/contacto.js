const formularioContacto = document.getElementById('formularioContacto');
  
formularioContacto.addEventListener('submit', function (e) {
    e.preventDefault(); 
    

    const nombres = document.getElementById('nombres').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;


    const popupMensaje = `Tu nombre: ${nombres}\nTu correo: ${correo}\nTu mensaje:\n${mensaje}\n\n El mensaje fue enviado con exito! \n Proximamente nos comunicaremos con vos!`;

    alert(popupMensaje);


    formularioContacto.reset();
});