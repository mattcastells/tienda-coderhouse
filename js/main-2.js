// ARCHIVO DE RESPALDO ORIGINAL


// Stock de productos

let stockJuegos = [

    {id: 1, nombre: "dark souls", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 2560, desarollador: "from software", img: '../images/juegos/dark-souls-1.jpg'},
    {id: 2, nombre: "dark souls 2", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 2560, desarollador: "from software", img: '../images/juegos/dark-souls-2.jpg'},
    {id: 3, nombre: "dark souls 3", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura"], precio: 6000, desarollador: "from software", img: '../images/juegos/dark-souls-3.jpg'},
    {id: 4, nombre: "age of empires", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires.jpg'},
    {id: 5, nombre: "age of empires 2", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires-2.jpg'},
    {id: 6, nombre: "age of empires 3", plataforma: ["pc"], genero: ["estrategia"], precio: 1250, desarollador: "microsoft", img: '../images/juegos/age-of-empires-3.jpg'},
    {id: 7, nombre: "bloodborne", plataforma: ["ps4"], genero: ["accion", "aventura", "terror"], precio: 1300, desarollador: "from software", img: '../images/juegos/bloodborne.jpg'},
    {id: 8, nombre: "crash bandicoot", plataforma: ["pc", "ps4"], genero: ["plataformero", "aventura"], precio: 3200, desarollador: "naughty dog", img: '../images/juegos/crash-bandicoot.jpg'},
    {id: 9, nombre: "crash team racing", plataforma: ["ps4"], genero: ["carreras", "infantil"], precio: 3200, desarollador: "naughty dog", img: '../images/juegos/crash-team-racing.jpg'},
    {id: 10, nombre: "diablo 2", plataforma: ["pc"], genero: ["accion", "aventura", "terror"], precio: 600, desarollador: "blizzard", img: '../images/juegos/diablo-2.jpg'},
    {id: 11, nombre: "diablo 3", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura", "terror"], precio: 1700, desarollador: "blizzard", img: '../images/juegos/diablo-3.jpg'},
    {id: 12, nombre: "elex", plataforma: ["pc", "ps4", "xbox"], genero: ["rpg", "aventura"], precio: 1560, desarollador: "piranha bytes", img: '../images/juegos/elex.jpg'},
    {id: 13, nombre: "fifa 20", plataforma: ["ps4", "xbox"], genero: ["deportes", "simulador"], precio: 4560, desarollador: "electronic arts", img: '../images/juegos/fifa-20.jpg'},
    {id: 14, nombre: "fifa 21", plataforma: ["ps4", "xbox"], genero: ["deportes", "simulador"], precio: 7560, desarollador: "electronic arts", img: '../images/juegos/fifa-21.jpg'},
    {id: 15, nombre: "final fantasy 7", plataforma: ["ps4"], genero: ["accion", "aventura", "rpg"], precio: 4760, desarollador: "squre enix", img: '../images/juegos/final-fantasy-7.jpg'},
    {id: 16, nombre: "final fantasy 15", plataforma: ["ps4", "xbox", "pc"], genero: ["accion", "aventura", "rpg"], precio: 4760, desarollador: "squre enix", img: '../images/juegos/final-fantasy-15.jpg'},
    {id: 17, nombre: "guitar hero", plataforma: ["ps2"], genero: ["simulador", "musica", "infantil"], precio: 1200, desarollador: "activision", img: '../images/juegos/guitar-hero.jpg'},
    {id: 18, nombre: "guitar hero 2", plataforma: ["ps2"], genero: ["simulador", "musica", "infantil"], precio: 1200, desarollador: "activision", img: '../images/juegos/guitar-hero-2.jpg'},
    {id: 19, nombre: "guitar hero 3", plataforma: ["ps2"], genero: ["simulador", "musica", "infantil"], precio: 1200, desarollador: "activision", img: '../images/juegos/guitar-hero-3.jpg'},
    {id: 20, nombre: "hades", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "aventura", "indie"], precio: 1400, desarollador: "super giant", img: '../images/juegos/hades.jpg'},
    {id: 21, nombre: "hitman", plataforma: ["pc", "ps2"], genero: ["accion", "aventura"], precio: 860, desarollador: "io interactive", img: '../images/juegos/hitman.jpg'},
    {id: 22, nombre: "la noire", plataforma: ["pc", "ps3", "xbox"], genero: ["accion", "aventura", "thriller"], precio: 1360, desarollador: "rockstar", img: '../images/juegos/la-noire.jpg'},
    {id: 23, nombre: "left 4 dead", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "terror"], precio: 450, desarollador: "valve", img: '../images/juegos/left-4-dead.jpg'},
    {id: 24, nombre: "left 4 dead 2", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "terror"], precio: 800, desarollador: "valve", img: '../images/juegos/left-4-dead-2.jpg'},
    {id: 25, nombre: "lethal league", plataforma: ["pc", "ps4", "xbox"], genero: ["peleas", "indie"], precio: 1200, desarollador: "team reaptile", img: '../images/juegos/lethal-league.jpg'},
    {id: 26, nombre: "uncharted 4", plataforma: ["ps4"], genero: ["accion", "aventura"], precio: 1800, desarollador: "naughty dog", img: '../images/juegos/uncharted-4.jpg'},
    {id: 27, nombre: "guilty gear strive", plataforma: ["pc", "ps4", "xbox"], genero: ["accion", "peleas"], precio: 2200, desarollador: "arc system works", img: '../images/juegos/guilty-gear-strive-jpg'},
    {id: 28, nombre: "monster hunter rise", plataforma: ["switch"], genero: ["accion", "aventura"], precio: 7000, desarollador: "capcom", img: '../images/juegos/monster-hunter-rise.jpg'},
    {id: 29, nombre: "monster hunter world", plataforma: ["pc","ps4","xbox"], genero: ["accion", "aventura"], precio: 6000, desarollador: "capcom", img: '../images/juegos/monster-hunter-world.jpg'},
    {id: 30, nombre: "mortal kombat 11", plataforma: ["pc", "ps4", "xbox"], genero: ["peleas", "accion"], precio: 5560, desarollador: "netherrealm studios", img: '../images/juegos/mortal-kombat-11.jpg'},

]

let stockConsolas = [

    {id: 1, nombre: ["playstation 4", "ps4", "play"], precio: 22000, compania: "sony", img: "../images/consolas/ps4.jpg"},
    {id: 2, nombre: ["nintendo", "switch", "nintentendo switch"], precio: 32000, compania: "nintendo", img: "../images/consolas/switch.jpg"},
    {id: 3, nombre: ["xbox", "x box", "one", "xbox one"], precio: 42000, compania: "microsoft", img: "../images/consolas/xbox-one.jpg"}
]


// Creacion del carrito como variable
let carritoCompras = []  // Es establecido como un array para pushear las variables de los productos dentro

function agregarCarrito () {

    let eleccionProducto = "";  
    let eleccionTipoProducto = "";

    do {

    // Se le solicita al cliente el tipo de producto que desea
    
    eleccionTipoProducto = prompt("Que producto esta buscando?\n juegos\n consolas").toLowerCase();

    } while ((eleccionTipoProducto != "juegos") || (eleccionTipoProducto === "consolas") || (eleccionTipoProducto === "ESC"));

    if (eleccionTipoProducto === "juegos") {

        do {

            eleccionProducto = prompt("Que juegos esta buscando?\n Para dejar de agregar juegos presione ESC").toLowerCase();

            // El producto se filtra y es agregado al carrito
            let agregarProducto = stockJuegos.filter((parametro) => parametro.nombre == eleccionProducto) [0]
            carritoCompras.push(agregarProducto)

            // Se muestra en consola para verificar su funcionamiento
            console.log(carritoCompras);
            console.log(eleccionProducto)

            // Se actualiza el carrito para que el cliente pueda ver el total de sus elecciones
            actualizarCarrito()

        } while (eleccionProducto != "ESC")

    } else if (eleccionTipoProducto === "consolas") {

        do {

            eleccionProducto = prompt("Que consolas esta buscando?\n Para dejar de agregar consolas presione ESC").toLowerCase();

            // El producto se filtra y es agregado al carrito
            let agregarProducto = stockConsolas.filter((parametro) => parametro.nombre == eleccionProducto) [0]
            carritoCompras.push(agregarProducto)
        
            // Se muestra en consola para verificar su funcionamiento
            console.log(carritoCompras);
            console.log(eleccionProducto)
        
            // Se actualiza el carrito para que el cliente pueda ver el total de sus elecciones
            actualizarCarrito()

        } while (eleccionProducto != "ESC")

    } else {
        alert('El parametro indicado no existe')
    }
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


function darkMode () {

    console.log('pruebita')
    
}
let black = document.getElementById("prueba");

black.addEventListener("click", darkMode)

