// Animación collage de imágenes
document.addEventListener("DOMContentLoaded", () => {
  const collageImages = document.querySelectorAll(".image-collage img");

  collageImages.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("show");
    }, 200 * i); // Delay escalonado
  });
});

// Validación del formulario
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = e.target.nombre.value.trim();
  const email = e.target.email.value.trim();

  if (nombre && email) {
    document.getElementById("form-message").textContent =
      "Thanks for signing up! We’ll keep you posted.";
    e.target.reset();
  } else {
    document.getElementById("form-message").textContent =
      "Por favor, completa todos los campos.";
  }
});
