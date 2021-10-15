// Recuperacion de los datos guardados en el Storage para la generacion de la pagina individual del producto - Se utiliza en producto.html

let contenedorProductos = document.getElementById('contenedorgeneral')                                                     // Se genera una variable y se le asocia un elemento del html

function recuperar() {                                                                                                     // Se declara la funcion para recuperar datos
    let recuperado = JSON.parse(localStorage.getItem('datos producto'))                                                    // Se genera una variable y se le asigna el valor del objeto JSON que se encuentra en el storage. Se lo parsea
    console.log(recuperado)
    if(recuperado){                                                                                                        // Condicional
        recuperado.forEach(el => {                                                                                         // Se itera sobre cada elemento y posteriormente se printean en el html
            contenedorProductos.innerHTML=` <div id="contenedor__pag__producto">                                           
                                            <img id="foto__pag__producto" src=".${el.img}" alt="${el.nombre}"></img>
                                            <div id="contenedor__pag__info">
                                                <h3 id="nombre__pag__producto"> ${el.nombre}</h3>
                                                <h5 id="generos__pag__producto"> ${el.genero}</h5>
                                                <p id="descripcion__pag__producto">${el.descripcion}</p>
                                                <button class="boton__pag__producto">Añadir al carrito</button>
                                            </div>
                                            </div>`
        });
    }
}
recuperar();                                                                                                                // Cuando se genera la pagina, se llama a la funcion recuperar para que la autocomplete
