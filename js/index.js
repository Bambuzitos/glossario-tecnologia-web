document.addEventListener('DOMContentLoaded', function () {
  const $html = document.querySelector("html");
  const $button = document.querySelector("#btnDarkMode");

  const darkMode = localStorage.getItem("dark-mode");

  if (darkMode === "ativado") {
      $html.classList.add("dark-mode");
  }

  function toggleDarkMode() {
      $html.classList.toggle('dark-mode');

      if ($html.classList.contains("dark-mode")) {
          localStorage.setItem("dark-mode", "ativado");
      } else {
          localStorage.setItem("dark-mode", "desativado");
      }
  }

  $button.addEventListener('click', toggleDarkMode);
});