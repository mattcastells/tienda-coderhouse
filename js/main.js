// Creacion del carrito como variable
let carritoCompras = []  // Es establecido como un array para pushear las variables de los productos dentro
let carritoPrecio = []

function agregarCarrito () {

    let eleccionProducto = "";  
    let eleccionTipoProducto = "";

    do {

    // Se le solicita al cliente el tipo de producto que deseaconsolas
    
    eleccionTipoProducto = prompt("Que producto esta buscando?\n juegos\n consolas");

    } while ((eleccionTipoProducto != "juegos") && (eleccionTipoProducto === "consolas") && (eleccionTipoProducto === "ESC"));

    if (eleccionTipoProducto === "juegos") {

        do {

            eleccionProducto = prompt("Que juegos esta buscando?\n Para dejar de agregar juegos presione ESC");

            // El producto se filtra y es agregado al carrito
            let agregarProducto = stockJuegos.filter((parametro) => parametro.nombre == eleccionProducto) [0]
            carritoCompras.push(agregarProducto)

            let agregarPrecioProductos = stockJuegos.filter((parametro) => parametro.precio) [0];
            carritoPrecio.push(agregarPrecioProductos)

            // Se muestra en consola para verificar su funcionamiento
            console.log(carritoCompras);
            console.log(eleccionProducto)

            // Se actualiza el carrito para que el cliente pueda ver el total de sus elecciones
            actualizarCarrito()

        } while (eleccionProducto != "listo")

    } else if (eleccionTipoProducto === "consolas") {

        do {

            eleccionProducto = prompt("Que consolas esta buscando?\n Para dejar de agregar consolas presione ESC");

            // El producto se filtra y es agregado al carrito
            let agregarProducto = stockConsolas.filter((parametro) => parametro.nombre == eleccionProducto) [0]
            carritoCompras.push(agregarProducto)

            let agregarPrecioProductos = stockConsolas.filter((parametro) => parametro.precio) [0];
            carritoPrecio.push(agregarPrecioProductos)
        
            // Se muestra en consola para verificar su funcionamiento
            console.log(carritoCompras);
            console.log(eleccionProducto)
        
            // Se actualiza el carrito para que el cliente pueda ver el total de sus elecciones
            actualizarCarrito()

        } while (eleccionProducto != "ESC")

    } else {
        alert('El parametro indicado no existe')
    }
}

function actualizarCarrito () {

    // Se muestra en la consola el numero total de productos seleccionados por el cliente
    console.log("Numero de objetos en su carrito " + carritoCompras.length);

    // Se genera la suma de los elementos
    let sumaTotal = carritoPrecio.reduce((total, producto) => total + producto.precio, 0)

    // Se muestra en consola el total de la suma junto a la string establecida
    console.log("El total de su compra es de " + sumaTotal);

}

agregarCarrito ()