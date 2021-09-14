// Se llama a los productos
<script src="productos.js"></script>

// Creacion del carrito como variable
let carritoCompras = []  // Es establecido como un array para pushear las variables de los productos dentro

function agregarCarrito () {

    let eleccionProducto = "";  

    do {
    // Se le solicita al cliente el producto que desea
    eleccionProducto = prompt("Que producto esta buscando?\n Para dejar de agregar productos presione ESC").toLowerCase()

    // El producto se filtra y es agregado al carrito
    let agregarProducto = stockProductos.filter((parametro) => parametro.nombre == eleccionProducto) [0]
    carritoCompras.push(agregarProducto)

    // Se muestra en consola para verificar su funcionamiento
    console.log(carritoCompras);
    console.log(eleccionProducto)

    // Se actualiza el carrito para que el cliente pueda ver el total de sus elecciones
    actualizarCarrito()

    } while (eleccionProducto != "ESC");
}

function actualizarCarrito () {

    // Se muestra en la consola el numero total de productos seleccionados por el cliente
    console.log("Numero de objetos en su carrito " + carritoCompras.length);

    // Se genera la suma de los elementos
    let sumaTotal = carritoCompras.reduce((acc, el) => acc + el.precio, 0)

    // Se muestra en consola el total de la suma junto a la string establecida
    console.log("El total de su compra es de " + sumaTotal);

}

agregarCarrito ()


