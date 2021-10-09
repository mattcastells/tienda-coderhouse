// Linkear imagenes y lista con HTML
var carouselImages = document.getElementsByClassName("carrusel__img");
var dotNode = document.getElementsByTagName("li");
var currentIndex = 0;

// Crear botones del carrusel
for (let i = 0; i < carouselImages.length; i++) {
  let newDot = document.createElement("li");
  
  newDot.className = "fa fa-circle";
  newDot.setAttribute("onclick", "dotClick(this.id)");
  newDot.setAttribute("id", parseInt(i));
  
  let dotContainer = document.querySelector(".dotList");
  dotContainer.appendChild(newDot);
}

// Renderizar Imagenes
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

// Renderizar puntos
function displayDot() {
  for (let j = 0; j < dotNode.length; j++) {
    dotNode[j].style.color = "grey";
  }
  dotNode[currentIndex].style.color = "black";
}

// Mover a la izquierda
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  
  displayImage();
  displayDot();
}

// Mover a la derecha
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  
  displayImage();
  displayDot();
}

// Clickear puntos
function dotClick(c) {
  currentIndex = c;
  displayImage();
  displayDot();
}

// Llamado a las funciones
displayImage();
displayDot();
