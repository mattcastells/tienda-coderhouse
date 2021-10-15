let stockProductos = [];                                                                                     // Se crea un array vacio en el que pushear los datos de los juegos                                                                         

function recuperarStock() {
    let stock = JSON.parse(localStorage.getItem('stock'))                                                    // Se parsean los datos del json guardados en el storage
    if(stock) {                                                                                              // Se comprueba si es verdadero
        stock.forEach(el => stockProductos.push(el))                                                         // Se pushea en el array stockProductos la informacion de los juegos
    }
}

$.getJSON('js/stock.json', function (data) {                                                                 // Se utiliza Ajax para traer los productos desde el archivo stock.json
    localStorage.setItem('stock', JSON.stringify(data))                                                      // Se guardan los datos del json en local storage
    recuperarStock()                                                                                         // Se recuperan los datos desde el storage al ser parseados
    mostrarJuegos(data)                                                                                      // Se llama a la funcion para que muestre los juegos trayendolos desde el localStorage
    
})


// Imprimir juegos en index.html                                 
// mostrarJuegos(stockProductos);                                                                             // Se llama a la funcion para que se ejecute y muestre los productos

function mostrarJuegos(array) {  
    for (const juego of array) {                                                                              // Para cada juego en stockJuegos
        $('#contenedor__producto').append(                                                                    // Se agrega la plantilla del juego al contenedor
            `<div class="caja__producto">
                            <a class="clickImage" id=${juego.id} href='pages/producto.html' target="blank"><img class="imagen__producto" src="${juego.img}" alt="${juego.nombre}"></img></a>
                            <h4 class="titulo__producto"> ${juego.nombre}</h4>
                            <h5 class="precio__producto">$ ${juego.precio}</h5>
                            <button class="boton__producto botonCarrito">Añadir al carrito</button>
            </div>`)                            
    }
}

// Capturar datos de los juegos y guardarlos en el storage para re-imprimirlos en productos.html

function capturarDatos (id) {                                                                               // Se declara una funcion que capture los datos para generar contenido en producto.html

    let juego = stockJuegos.find(prod => prod.id == id)                                                     // Se itera en el array general de productos y se le asigna un valor a la variable juego, identificando al mismo por su id

    let productoInfo = [];                                                                                  // La variable se declara con scope local para que su valor se pierda (sea reutilizable)
    productoInfo.push(juego)                                                                                // Se pushea la variable juego (id) dentro del array establecido arriba
    console.log(productoInfo)

     localStorage.setItem('datos producto', JSON.stringify(productoInfo));                                  // Se guarda la informacion del array productoInfo como un objeto JSON en el local storage

}


// Capturar datos de los juegos seleccionados y agregarlos al carrito, para posteriormente re-imprimirlos en compras.html

let productoCarrito = []; // La variable se declara con scope global para que su valor no se pierda 

function capturarDatosCarrito (id) {                                                                        // Se declara una funcion que capture los datos para el carrito, compras.html

    let productoSeleccionado = stockJuegos.find(prod => prod.id == id)                                      // Se itera en el array general de productos y se le asigna un valor a la variable juego, identificando al mismo por su id
                                                                                      
    productoCarrito.push(productoSeleccionado)                                                              // Se pushea la variable juego (id) dentro del array establecido arriba (productoCarrito)
    console.log(productoCarrito)

     localStorage.setItem('Producto carrito', JSON.stringify(productoCarrito));                             // Se guarda la informacion del array productoCarrito como un objeto JSON en el local storage

}

// Tomar datos de los productos a partir de su imagen en index.html para recuperarlos en producto.html

let tomarDatos = document.querySelectorAll('.clickImage',);                                                  // Se le asigna un elemento del html a la variable tomarDatos
 tomarDatos.forEach((producto) => producto.addEventListener("click",()=>{                                    // Se le agrega el evento click y la funcionalidad de capturar datos a todos los elementos con la clase "clickImage" (Imagenes de los productos)
     capturarDatos(producto.id)
 }) )

 // Tomar datos de los productos a partir del boton de compra en index.html para recuperarlos en compras.html

 let tomarDatosCarrito = document.querySelectorAll('.botonCarrito');                                         // Se le asigna un elemento del html a la variable tomarDatos
 tomarDatosCarrito.forEach((producto) => producto.addEventListener("click",()=>{                             // Se le agrega el evento click y la funcionalidad de capturar datos a todos los elementos con la clase "clickImage" (Imagenes de los productos)
     capturarDatosCarrito(producto.id)
 }) )
 

 




// Filtrar mediante checkboxes en el index

function checkbox() {                                                                                        // Se declara la funcion checkbox
    let input_checkbox_filtro = document.btn__filtro.filtro;                                                 // Se le asocia un elemento del html a la variable
    
    input_checkbox_filtro.forEach(el=>{                                                                      // Por cada elemento en

        el.addEventListener('change', function(){                                                            // Se le agrega un listener de cambio al parametro elemento
            for (let i = 0; i < input_checkbox_filtro.length; i++) {
               
                if(input_checkbox_filtro[i].checked){                                                        // El condicional establece que si el elemento se encuentran tildado/checked
                    let grupo = input_checkbox_filtro[i].value;
                    
                    if(grupo == 'todos' || grupo == false){                                                  // Si la caja todos, o ninguna caja se encuentra tiltada, se muestran todos los juegos
                        mostrarJuegos(stockJuegos)
                    }else{                                                                                   // Caso contrario, se muestran los juegos que coincidan con el parametro establecido por el usuario mediante las cajas
                      const findGrupo = stockJuegos.filter(el => el.genero.find(el => el == grupo));
                    mostrarJuegos(findGrupo)
                      
                    }
                } 
            }
        }) 
    })
}

checkbox()


// Filtrar mediante searchbar

$('#searchBar').on('keyup',buscar)                                                                              // Se asocia la barra de busqueda junto a la funcion buscar

function buscar(e){                                                                                             // Se declara la funcion buscar y se le pasa un parametro e
    e.preventDefault()                                                                                          // Se previene la carga automatica del parametro
    console.log(e.target.value);
    let texto = e.target.value.toLowerCase()                                                                    // Se declara la variable texto, y se le asigna como valor los datos introducidos por el usuario, al mismo tiempo se transforma a minuscula
    let buscar = stockJuegos.filter(prod => prod.nombre.toLocaleLowerCase().includes(texto))                    // Se declara la variable buscar y se le asocia un filtro en stockJuegos
    console.log(buscar);
    $('#contenedor__producto').empty()                                                                          // Se vacia el contenedor producto
    mostrarJuegos(buscar)                                                                                       // Se muestran los juegos que coincidan con el valor introducido en buscar
}


