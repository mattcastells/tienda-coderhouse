// Imprimir juegos en index.html                                 
mostrarJuegos(stockJuegos);                                                                                   // Se llama a la funcion para que se ejecute y muestre los productos

function mostrarJuegos(array) {  
    for (const juego of array) {                                                                              // Para cada juego en stockJuegos
        $('#contenedor__producto').append(                                                                    // Se agrega la plantilla del juego al contenedor
            `<div class="caja__producto">
                            <a class="clickImage" id=${juego.id} href='pages/producto.html' target="blank"><img class="imagen__producto" src="${juego.img}" alt="${juego.nombre}"></img></a>
                            <h4 class="titulo__producto"> ${juego.nombre}</h4>
                            <h5 class="precio__producto">$ ${juego.precio}</h5>
                            <button class="boton__producto">Añadir al carrito</button>
            </div>`)                            
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
 
 

// Filtrar mediante checkboxes

function checkbox() {
    let input_checkbox_filtro = document.btn__filtro.filtro;
    
    input_checkbox_filtro.forEach(el=>{

        el.addEventListener('change', function(){
            for (let i = 0; i < input_checkbox_filtro.length; i++) {
               
                if(input_checkbox_filtro[i].checked){
                    let grupo = input_checkbox_filtro[i].value;
                    
                    if(grupo == 'todos' || grupo == false){
                        mostrarJuegos(stockJuegos)
                    }else{
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

// let search_input  = document.getElementById('searchBar');
// let search_term  = "";

// search_input.addEventListener('input', e => {

// // Guardar el valor de input
// search_term = e.target.value;

// // Redesplegar juegos segun el valor de search_term
// mostrarJuegoss()

// });

// let contenedorProductos = document.getElementById('contenedor__producto');

// const mostrarJuegoss = async () => {
//     // Limpiar resultados
//     contenedorProductos.innerHTML = "";
// }




