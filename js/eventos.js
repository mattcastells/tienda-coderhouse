// Seccion de prueba de eventos. No estan activos en el html

function darkMode () {

    console.log('pruebita')
    
}
let black = document.getElementById("prueba");

black.addEventListener("click", darkMode)



function buscar_juego() {

    let usuarioBusqueda = document.getElementById("search__bar").value
    usuarioBusqueda = usuarioBusqueda.toLowerCase();

    let x = document.getElementsByClassName("product__title");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(usuarioBusqueda)) {
            x[i].style.display="none";
        } else {
            x[i].style.display="list-item";
        }
    }

}