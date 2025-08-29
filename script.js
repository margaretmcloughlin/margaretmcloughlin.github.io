const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const background = document.querySelector('.background');

// Start in dark mode
body.classList.add("dark-theme");

// Toggle dark/light theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
});

// Parallax movement based on mouse
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // adjust 20 for movement intensity
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  background.style.transform = `translate(${x}px, ${y}px)`;
});
