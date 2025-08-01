const boton = document.querySelector('.BotonListaCalculadora');
const listaCalculadora = document.getElementById('listaCalculadora');
const enlaces = document.querySelectorAll('.listaCalculadora a');
const calculadoras = document.querySelectorAll('.calculadora');


//menu de eleccion de calculadora

if (boton && listaCalculadora) {
  boton.addEventListener('click', () => {
    listaCalculadora.classList.toggle('activo');
  });

  document.addEventListener('click', (e) => {
    if (!boton.contains(e.target) && !listaCalculadora.contains(e.target)) {
      listaCalculadora.classList.remove('activo');
    }
  });
}


  // Manejo de enlaces del menú de calculadoras

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();

      // Ocultar todas
      calculadoras.forEach(calc => {
        calc.style.display = 'none';
      });

      // Mostrar la seleccionada
      const id = enlace.getAttribute('data-calculadora');
      const mostrar = document.getElementById(`calc-${id}`);
      if (mostrar) {
        mostrar.style.display = 'block';
      }

      // (Opcional) cerrar el menú
      document.getElementById('submenu').classList.remove('activo');
    });
  });


    if (location.hostname.includes("github.io")) {
    const repo = "Snakebyte-Studio-web"; // Cambia esto
    if (!location.pathname.includes(repo)) {
      location.href = `/${repo}${location.pathname}`;
    }
  }