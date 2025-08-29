// Elements
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const background = document.querySelector('.background');

// Set default dark mode
body.classList.add("dark-theme");

// Apply modern font
body.style.fontFamily = "'Inter', system-ui, sans-serif";

// Background initial styling
Object.assign(background.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  filter: "blur(8px)",
  opacity: "0.7",
  willChange: "transform",
  transform: "translate(0, 0)",
  transition: "transform 0.1s ease-out"
});

// Smooth theme transitions for text and background
body.style.transition = "background-color 0.5s, color 0.5s";

// Toggle dark/light theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
});

// Parallax movement based on mouse
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // intensity
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  background.style.transform = `translate(${x}px, ${y}px)`;
});

// Reset background on window resize
window.addEventListener("resize", () => {
  background.style.transform = 'translate(0, 0)';
});
