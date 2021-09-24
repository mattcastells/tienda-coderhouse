let contenedorProductos = document.getElementById('product__container');

for (const juego of stockJuegos) {

    let plantilla = document.createElement('div');
    plantilla.setAttribute("class", "product__box");

    plantilla.innerHTML = `<img class="product__img" src="${juego.img}" alt="${juego.nombre}"></img>
                           <h4 class="product__title"> ${juego.nombre}</h4>
                           <h5 class="product__price">$ ${juego.precio}</h5>
                           <button class="product__button">Añadir al carrito</button>`;
                           
    contenedorProductos.appendChild(plantilla)

}

