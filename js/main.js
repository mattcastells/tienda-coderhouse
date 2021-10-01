// Imprimir juegos en index.html

let contenedorProductos = document.getElementById('product__container');                                    // Se crea la variable para asignarle el contenedor del html
mostrarJuegos(stockJuegos);

function mostrarJuegos(array) {  
    for (const juego of array) {                                                                            // Para cada juego en stockJuegos

        let plantilla = document.createElement('div');                                                      // Se crea divisor
        plantilla.setAttribute("class", "product__box");                                                    // Se le asigna la clase al divisor

        plantilla.innerHTML = `<a class="clickImage" id=${juego.id} href="/pages/producto.html" target="blank" ><img class="product__img" src="${juego.img}" alt="${juego.nombre}"></img></a>
                            <h4 class="product__title"> ${juego.nombre}</h4>
                            <h5 class="product__price">$ ${juego.precio}</h5>
                            <button class="product__button">Añadir al carrito</button>`;
                            
        contenedorProductos.appendChild(plantilla)                                                          // Se agrega la plantilla del juego al contenedor

    }

}


// Capturar datos de los juegos y guardarlos en el storage

function capturarDatos (id) {                                                                               // Se declara una funcion que capture los datos

    let juego = stockJuegos.find(prod => prod.id == id)                                                     // Se itera en el array general de productos y se le asigna un valor a la variable juego, identificando al mismo por su id

    let productoInfo = [];                                                                                  // La variable se declara con scope local para que su valor se pierda (sea reutilizable)
    productoInfo.push(juego)                                                                                // Se pushea la variable juego (id) dentro del array establecido arriba
    console.log(productoInfo)

     localStorage.setItem('datos producto', JSON.stringify(productoInfo));                                  // Se guarda la informacion del array productoInfo como un objeto JSON en el local storage

}

let tomarDatos = document.querySelectorAll('.clickImage');                                                  // Se le asigna un elemento del html a la variable tomarDatos
 tomarDatos.forEach((producto) => producto.addEventListener("click",()=>{                                   // Se le agrega el evento click y la funcionalidad de capturar datos a todos los elementos con la clase "clickImage" (Imagenes de los productos)
     capturarDatos(producto.id)
 }) )

 // mostrarJuegos(stockJuegos.filter(el => el.genero.find(el=>el == 'rpg')))