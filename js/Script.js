// =========================
// CONFIGURACIÓN DE RUTA BASE
// =========================

// Detecta si estás en GitHub Pages
const isGitHub = window.location.hostname.includes("github.io");

// Detecta el nombre del repositorio automáticamente
const repoName = isGitHub ? window.location.pathname.split("/")[1] : "";

// Construye la ruta base según dónde estés
const baseURL = isGitHub
  ? `${window.location.origin}/${repoName}`
  : window.location.origin;

// Función para generar rutas seguras
function path(relPath) {
  // Asegura que no haya dobles barras (//)
  return `${baseURL}/${relPath}`.replace(/([^:]\/)\/+/g, "$1");
}