let carritoDeCompras = [];

const contenedorProducto = document.getElementById('product__container');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

mostrarProductos(stockJuegos)

function mostrarProductos(array) {

    array.foreach(productos => {

        let div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML += `<a class="clickImage" href="/pages/producto.html" target="blank"><img class="product__img" src="${juego.img}" alt="${juego.nombre}"></img></a>
                          <h4 class="product__title"> ${juego.nombre}</h4>
                          <h5 class="product__price">$ ${juego.precio}</h5>
                          <button id="product__button__${juego.id}">Añadir al carrito</button>`;

    })

    let boton = document.getElementById(`product__button__${juego.id}`)
    boton.addEventListener('click', ()=>{
        agregarAlCarrito(juego.id)
    })
}

function agregarAlCarrito(id) {

    let productoAgregar = stockJuegos.find(prod => prod.id == id)
    console.log(productoAgregar);

}

function actualizarCarrito() {



}