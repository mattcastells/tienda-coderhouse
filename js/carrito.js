// // Sin funcionar todavia

// let carritoDeCompras = [];

// let botonAgregarCarrito = document.getElementsByClassName('boton__producto');



// function agregarAlCarrito(informacionDelJuego) {

//     informacionDelJuego = stockJuegos.find(prod => prod.id == id);

//     let infoProducto = [];
//     infoProducto.push(producto)

//     console.log(infoProducto);

// }

// function actualizarCarrito() {}


// botonAgregarCarrito.addEventListener("click", agregarAlCarrito)


// Imprimir en carrito

let contenedorCarrito = document.getElementById('contenedorCarrito');

function recuperarCarrito() {
    let recuperado = JSON.parse(localStorage.getItem('datos producto'))                                                    // Se genera una variable y se le asigna el valor del objeto JSON que se encuentra en el storage. Se lo parsea
    console.log(recuperado)
    if(recuperado){                                                                                                        // Condicional
        recuperado.forEach(el => {                                                                                         // Se itera sobre cada elemento y posteriormente se printean en el html
            contenedorCarrito.innerHTML=` <div class="contenedor__pag__carrito">                                           
                                            <img class="foto__pag__carrito" src=".${el.img}" alt="${el.nombre}"></img>
                                            <div class="contenedor__pag__carrito">
                                                <h3 class="nombre__pag__carrito"> ${el.nombre}</h3>
                                                <h3 class="precio__pag__carrito">$ ${el.precio}</h3>
                                                <button class="eliminar__producto"> Quitar </button>
                                            </div>
                                            </div>`
        });
    }

}

recuperarCarrito();



let precioFinal = document.getElementById('precioFinal');

function sumaFinal (precio) {

}