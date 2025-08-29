const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Start in dark mode
body.classList.add("dark-theme");

// Create the gradient overlay element dynamically
const overlay = document.createElement('div');
overlay.className = 'gradient-overlay';
document.body.appendChild(overlay);

// Toggle dark/light theme
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
});
