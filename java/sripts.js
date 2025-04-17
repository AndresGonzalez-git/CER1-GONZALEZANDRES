document.addEventListener("DOMContentLoaded", () => {
    // Animación de aparición para elementos con la clase "animate-fade-in"
    const fadeElements = document.querySelectorAll(".animate-fade-in");
    fadeElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transition = "opacity 1.5s ease-in-out";
      setTimeout(() => {
        el.style.opacity = 1;
      }, 200);
    });
  
    // Animación de deslizamiento para elementos con la clase "animate-slide-in"
    const slideElements = document.querySelectorAll(".animate-slide-in");
    slideElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(50px)";
      el.style.transition = "opacity 1s ease, transform 1s ease";
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 300);
    });
  });
  