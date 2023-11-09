fetch("./productos.json").then((datos)=>{
    datos.json().then((productos)=>{
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
        
        
        // Funcionamiento botones de la carta

        const botonPedir = document.querySelectorAll('[data-nombre]');
        botonPedir.forEach((boton) =>{
            boton.addEventListener('click', () => {
                boton.classList.add('agregado');
                const nombreProducto = boton.getAttribute('data-nombre');
                alert(`Se ha agregado ${nombreProducto} al carrito.`);
            });
        }



        )
    })
})
