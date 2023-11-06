import productos from "./productos.js";

const carta = document.getElementById("carta");

let contenido = "";

    productos.cafes.forEach(
        (producto) => {
        contenido += ` <div>
                        <button class="carta__pedir" data-nombre="${producto.nombre}">${producto.button}</button>
                        <p>${producto.descripcion}</p>
                        <img src="${producto.imagen}" alt="">
                        </div>`
       
                                
    })


    carta.innerHTML = contenido
