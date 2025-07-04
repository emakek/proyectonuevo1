document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("main .section, #sobre_mi");
  const toggleBtn = document.getElementById("toggleMode");

  // Mostrar solo una sección (Inicio) al cargar
  mostrarSeccion("#inicio");

  // Función: mostrar una sola sección
  function mostrarSeccion(id) {
    sections.forEach(sec => {
      const sectionId = "#" + sec.id;
      if (sectionId === id) {
        sec.style.display = "block";
        setTimeout(() => sec.classList.add("visible"), 10);
      } else {
        sec.style.display = "none";
        sec.classList.remove("visible");
      }
    });
  }

  // Event Listener para navegación
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = link.getAttribute("href");
      mostrarSeccion(destino);
      history.replaceState(null, "", destino);
    });
  });

  // Modo oscuro/claro
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});


const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  // Aquí podrías enviar los datos a un backend o API si tuvieras
  alert('Mensaje enviado. ¡Gracias por contactarte!');
  form.reset();
});
