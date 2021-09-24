// // Crear elemento de manera individual

// let producto = {id: 1, nombre: "Arroz", precio: 125};
// let contenedor = document.createElement("div");

// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                         <p> Producto: ${producto.nombre}</p>
//                         <b>$ ${producto.precio}</b>`;

// document.body.appendChild(contenedor);
                     

// // Crear varios elementos desde un objeto

// const productos = [{ id: 1, nombre: "Arroz", precio: 125},
//                    { id: 2, nombre: "Fideo", precio: 70},
//                    { id: 3, nombre: "Pan"  , precio: 50},
//                    { id: 4, nombre: "Flan" , precio: 100}];

// for (const producto of productos) {
//     let contenedor = document.createElement("div");
//     // Se define el innerHTML del elemento con una plantilla de texto

//     contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
//                             <p> Producto: ${producto.nombre}</p>
//                             <b> $ ${producto.precio}</b>`;
    
//     document.body.appendChild(contenedor);
// }

let stockJuegos = [

    {id: 1, nombre: "dark souls", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 2560, desarollador: "from software", img: '../images/juegos/dark-souls-1.jpg'},
    {id: 2, nombre: "dark souls 2", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 2560, desarollador: "from software", img: '../images/juegos/dark-souls-2.jpg'},
    {id: 3, nombre: "dark souls 3", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 6000, desarollador: "from software", img: '../images/juegos/dark-souls-3.jpg'},
    {id: 4, nombre: "age of empires", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires.jpg'},
    {id: 5, nombre: "age of empires 2", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires-2.jpg'},
    {id: 6, nombre: "age of empires 3", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires-3.jpg'},
]

for (const juego of stockJuegos) {

    let plantilla = document.createElement("div");

    plantilla.innerHTML = `<div class="products__container">
                           <div class="product__box">
                           <img class="product__img" src="${juego.img}"></img>
                           <h4 class="product__title"> ${juego.nombre}</h4>
                           <h5 class="product__price">$ ${juego.precio}</h5>
                           <button class="product__button">Añadir al carrito</button>
                           </div>
                           </div>`;
                           

    document.body.appendChild(plantilla);
}


