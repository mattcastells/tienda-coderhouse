// Imprimir juegos en index.html

let contenedorProductos = document.getElementById('product__container');                                // Se crea la variable para asignarle el contenedor del html

for (const juego of stockJuegos) {                                                                      // Para cada juego en stockJuegos

    let plantilla = document.createElement('div');                                                      // Se crea divisor
    plantilla.setAttribute("class", "product__box");                                                    // Se le asigna la clase al divisor

    plantilla.innerHTML = `<a href="/pages/producto.html" target="blank"><img class="product__img" src="${juego.img}" alt="${juego.nombre}"></img></a>
                           <h4 class="product__title"> ${juego.nombre}</h4>
                           <h5 class="product__price">$ ${juego.precio}</h5>
                           <button class="product__button">Añadir al carrito</button>`;
                           
    contenedorProductos.appendChild(plantilla)                                                          // Se agrega la plantilla del juego al contenedor

}


let filtros = [
    {nombre: "Accion"},
    {nombre: "Aventura"},
    {nombre: "Terror"},
    {nombre: "Carreras"},
    {nombre: "Deportes"},
    {nombre: "Rpg"},
    {nombre: "Peleas"},
    {nombre: "Plataformas"},
    {nombre: "Estrategias"},
]


let contenedorFiltros = document.getElementById('filters__container');

for (const filtro of filtros) {

    let opcionFiltro = document.createElement('div')
    opcionFiltro.setAttribute("class", "class='filter__button'")

    opcionFiltro.innerHTML = `<input type="checkbox" name="${filtro.nombre}">
                              <label for ="${filtro.nombre}">${filtro.nombre}</label>`

    
    contenedorFiltros.appendChild(opcionFiltro);

}

