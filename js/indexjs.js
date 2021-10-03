let stockJuegos = [

    {id: 1, nombre: "Dark souls", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 2560, desarollador: "from software", img: '../images/juegos/dark-souls-1.jpg'},
    {id: 14, nombre: "Final fantasy 7", plataforma: ["ps4"], genero: ["accion", "aventura", "rpg"], precio: 4760, desarollador: "squre enix", img: '../images/juegos/final-fantasy-7.jpg'},]

// Imprimir juegos en index.html

let contenedorProductos = document.getElementById('product__container');                                // Se crea la variable para asignarle el contenedor del html

for (const juego of stockJuegos) {                                                                      // Para cada juego en stockJuegos

    let plantilla = document.createElement('div');                                                      // Se crea divisor
    plantilla.setAttribute("class", "product__box");                                                    // Se le asigna la clase al divisor

    plantilla.innerHTML = `<a class="clickImage" id="${juego.id} href="/pages/producto.html" target="blank"><img class="product__img" src="${juego.img}" alt="${juego.nombre}"></img></a>
                           <h4 class="product__title"> ${juego.nombre}</h4>
                           <h5 class="product__price">$ ${juego.precio}</h5>
                           <button class="product__button">Añadir al carrito</button>`;
                           
    contenedorProductos.appendChild(plantilla)                                                          // Se agrega la plantilla del juego al contenedor

}


function capturarDatos (nombre, imagen, precio) {

    nombre = document.getElementsByClassName("product__title")[0].innerText
    imagen = document.getElementsByClassName("product__img")[0].src
    precio = parseInt(document.getElementsByClassName("product__price")[0].innerText.replace('$',''))

    let productoInfo = [nombre,imagen,precio];
    console.log(productoInfo);
    localStorage.setItem('datos producto', JSON.stringify(productoInfo));

}

let tomarDatos = document.querySelectorAll('.clickImage');
tomarDatos.forEach((producto) => { producto.addEventListener("click", console.log(this.id)) })






// let tomarDatos = document.querySelectorAll('.clickImage');
// tomarDatos.forEach((producto) => { producto.addEventListener("click",capturarDatos) })

// function capturarDatos (nombre, imagen, precio) {
   
//     nombre = document.getElementsByClassName("product__title")
//     imagen = document.getElementsByClassName("product__img")
//     precio = document.getElementsByClassName("Product__price")
    
// }

// function imprimirProducto() { 

//     capturarDatos()

//     let contenedorInfoProducto = document.getElementById ('contenedorgeneral')    

//     let plantillaInfo = document.createElement('div');
//     plantillaInfo.setAttribute("id", "contenedor__pag__producto"); 

//     plantillaInfo.innerHTML = `<img id="foto__pag__producto" src="${juego.img}" alt="${juego.nombre}"></img>
//                                     <div id="contenedor__pag__info">
//                                         <h3 id="nombre__pag__producto"> ${juego.nombre}</h3>
//                                         <h5 id="generos__pag__producto"> ${juego.genero}</h5>
//                                         <p id="descripcion__pag__producto">${juego.descripcion}</p>
//                                         <button class="boton__pag__producto">Añadir al carrito</button>
//                                     </div>`;

//     contenedorInfoProducto.appendChild(plantillaInfo);
// }


// let generarPagina = document.getElementsByClassName('clickImage')
// generarPagina.addEventListener("click", imprimirProducto)