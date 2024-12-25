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
  
  
  let ccCurrentSlide = 0;
  let flCurrentSlide = 0;
  
  function createDots(slideshow) {
      const slides = document.querySelector(`.${slideshow}-slides`).children;
      const dotsDiv = document.querySelector(`.${slideshow}-dots`);
      
      for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('span');
          dot.className = 'dot';
          dot.onclick = () => showSlide(i, slideshow);
          dotsDiv.appendChild(dot);
      }
      updateDots(0, slideshow);
  }
  
  function updateDots(index, slideshow) {
      const dots = document.querySelector(`.${slideshow}-dots`).children;
      for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove('active');
      }
      dots[index].classList.add('active');
  }
  
  function showSlide(index, slideshow) {
      const slides = document.querySelector(`.${slideshow}-slides`);
      const totalSlides = slides.children.length;
      
      if (slideshow === 'cc') {
          ccCurrentSlide = (index + totalSlides) % totalSlides;
          index = ccCurrentSlide;
      } else {
          flCurrentSlide = (index + totalSlides) % totalSlides;
          index = flCurrentSlide;
      }
      
      slides.style.transform = `translateX(-${index * 100}%)`;
      updateDots(index, slideshow);
  }
  
  function changeSlide(direction, slideshow) {
      const currentIndex = slideshow === 'cc' ? ccCurrentSlide : flCurrentSlide;
      showSlide(currentIndex + direction, slideshow);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
      // Your existing parallax effect
      document.addEventListener('mousemove', (e) => {
          const moveX = (e.clientX * -0.01);
          const moveY = (e.clientY * -0.01);
          document.querySelector('#home').style.backgroundPosition = `${moveX}px ${moveY}px`;
      });
  
      // Your existing typing effect
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
  
      // Your existing ScrollReveal configurations
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
  
      // Initialize the slideshows
      createDots('cc');
      createDots('fl');
  
      // Optional: Start automatic slideshow
      setInterval(() => {
          changeSlide(1, 'cc');
      }, 5000); // Change CC slides every 5 seconds
  
      setInterval(() => {
          changeSlide(1, 'fl');
      }, 5000); // Change FL slides every 5 seconds
  });
<script>
    document.querySelectorAll('.social-icons a').forEach(link => {
        link.addEventListener('click', function (event) {
            window.open(this.href, '_blank');
            event.preventDefault();
        });
    });
</script>
  
  

