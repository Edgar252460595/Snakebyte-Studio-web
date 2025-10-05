  function mostrarSimulador() {
    const seleccion = document.getElementById("selectorSimulador").value;
    const simuladores = document.querySelectorAll(".simulador");

    simuladores.forEach(sim => sim.style.display = "none");

    if (seleccion) {
      document.getElementById(seleccion).style.display = "block";
    }
  }
