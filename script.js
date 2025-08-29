// Elements
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const background = document.querySelector('.background');

// Start in dark mode
body.classList.add("dark-theme");
toggleButton.textContent = "🌙";

// Theme toggle functionality
toggleButton.addEventListener("click", () => {
  if(body.classList.contains("dark-theme")){
    body.classList.replace("dark-theme", "light-theme");
    toggleButton.textContent = "🌞";
  } else {
    body.classList.replace("light-theme", "dark-theme");
    toggleButton.textContent = "🌙";
  }
});

// Parallax background based on mouse movement
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  background.style.transform = `translate(${x}px, ${y}px)`;
});

// Reset on window resize
window.addEventListener("resize", () => {
  background.style.transform = 'translate(0,0)';
});
