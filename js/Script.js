// ===============================
// 🔹 CONFIGURADOR AUTOMÁTICO DE RUTAS
// ===============================
(() => {
  const repoName = "Snakebyte-Studio-web";
  const isGitHub = window.location.hostname.includes("github.io");

  // Determina la base según el entorno
  const baseURL = isGitHub
    ? `${window.location.origin}/${repoName}/`
    : window.location.origin + (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1));

  console.log("🔧 Base detectada:", baseURL);

  // Reescribe rutas de <link>, <script> e <img>
  const fixPaths = (selector, attr) => {
    document.querySelectorAll(selector).forEach(el => {
      const val = el.getAttribute(attr);
      if (val && !val.startsWith("http") && !val.startsWith(baseURL) && !val.startsWith("data:") && !val.startsWith("#")) {
        el.setAttribute(attr, baseURL + val.replace(/^\/+/, ""));
      }
    });
  };

  // Espera a que el DOM esté listo
  window.addEventListener("DOMContentLoaded", () => {
    fixPaths("link[href]", "href");
    fixPaths("script[src]", "src");
    fixPaths("img[src]", "src");
  });

  // Función global opcional para JS
  window.path = relPath => `${baseURL}${relPath}`.replace(/([^:]\/)\/+/g, "$1");
})();
