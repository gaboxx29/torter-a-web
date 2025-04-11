let indiceSlide = 0;

function mostrarSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  if (n >= slides.length) indiceSlide = 0;
  if (n < 0) indiceSlide = slides.length - 1;

  slides[indiceSlide].classList.add("active");
}

function moverSlide(n) {
  indiceSlide += n;
  mostrarSlide(indiceSlide);
}

// Mostrar el primer slide al cargar
mostrarSlide(indiceSlide);

// Cambiar automáticamente cada 5 segundos
setInterval(() => {
  moverSlide(1);
}, 1000);
