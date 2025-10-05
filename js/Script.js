// Detecta si estás en GitHub Pages o local
const basePath = window.location.hostname.includes("github.io")
  ? window.location.origin + "/" + window.location.pathname.split("/")[1]
  : window.location.origin;

// Construye rutas absolutas seguras
function path(relPath) {
  return `${basePath}/${relPath}`;
}

// Ejemplo:
const img = new Image();
img.src = path("assets/img/logo.png");
document.body.appendChild(img);