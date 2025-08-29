const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

body.classList.add("dark-theme");

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
});
