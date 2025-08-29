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

// Ensure background resets on window resize
window.addEventListener("resize", () => {
  background.style.transform = 'translate(0, 0)';
});

// Optional: Smooth transition for theme change
body.style.transition = "background-color 0.5s, color 0.5s";
background.style.transition = "transform 0.1s";
// Optional: Add a subtle animation to the background
background.style.willChange = "transform";
background.style.transition = "transform 0.1s ease-out";
background.style.transform = "translate(0, 0)";
background.style.filter = "blur(8px)"; // Optional: Add a blur effect for depth
background.style.opacity = "0.7"; // Optional: Adjust opacity for a softer look
background.style.zIndex = "-1"; // Ensure background stays behind content
background.style.position = "fixed"; // Keep background fixed during scroll
background.style.top = "0";
background.style.left = "0";
background.style.width = "100%";
background.style.height = "100%";
