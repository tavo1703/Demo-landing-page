document.addEventListener("DOMContentLoaded", () => {
  const collageImages = document.querySelectorAll(".image-collage img");
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    // Animación escritorio con delay escalonado
    collageImages.forEach((img, i) => {
      setTimeout(() => {
        img.classList.add("show");
      }, 200 * i);
    });
  } else {
    // Para móvil, animar con scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    collageImages.forEach(img => {
      observer.observe(img);
    });
  }

  // Toggle clase 'active' al tocar la imagen (solo para móviles)
  collageImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Quitar 'active' a todas
      collageImages.forEach(i => i.classList.remove("active"));
      // Poner 'active' solo a la tocada
      img.classList.add("active");
    });
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
