// NOVAGH PRO MAX PRO JAVASCRIPT
console.log("🔥 Novagh Website Loaded - Pro Max Pro Edition");

// When page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Novagh!");
  
  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add fade-in effect to images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.style.transition = "opacity 1s ease-in";
      img.style.opacity = "1";
    }, index * 200);
  });

  // Welcome message after 1 second
  setTimeout(() => {
    console.log("Novagh is LIVE! 🚀");
  }, 1000);
});

// Mobile menu toggle - for later
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
              }
