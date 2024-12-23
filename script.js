// Initialize ScrollReveal
ScrollReveal().reveal('.container', {
  delay: 200,
  distance: '20px',
  origin: 'bottom',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 200
});

// Skill cards hover effect
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
  // Parallax effect for home section
  document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX * -0.01);
      const moveY = (e.clientY * -0.01);
      document.querySelector('#home').style.backgroundPosition = `${moveX}px ${moveY}px`;
  });

  // Typing effect for home section
  const text = document.querySelector('#home h1');
  if (text) {
      text.style.opacity = '0';
      let opacity = 0;
      const fadeIn = setInterval(() => {
          if (opacity >= 1) {
              clearInterval(fadeIn);
          }
          text.style.opacity = opacity;
          opacity += 0.1;
      }, 100);
  }

  // Enhanced scroll reveal
  ScrollReveal().reveal('.skill-card', {
      distance: '50px',
      origin: 'bottom',
      interval: 100,
      duration: 1000,
      cleanup: true,
      scale: 0.85
  });

  ScrollReveal().reveal('.project-card', {
      distance: '50px',
      origin: 'bottom',
      interval: 200,
      duration: 1000,
      cleanup: true,
      scale: 0.9
  });
});