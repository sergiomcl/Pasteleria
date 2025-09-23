const enlaces = [
  "detalle.html?id=2", // link foto 1
  "nosotros.html",     // foto 2
  "contacto.html"      // foto 3
];

// para activar el link en la foto
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#carouselExampleInterval .carousel-item img")
    .forEach((img, index) => {
      img.style.cursor = "pointer"; 
      img.addEventListener("click", () => {
        window.location.href = enlaces[index];
      });
    });
});