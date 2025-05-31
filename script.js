document.addEventListener('DOMContentLoaded', () => {
  // Create custom cursor element
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  // Update cursor position
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add pulse effect on link hover
  const links = document.querySelectorAll('a, button, .nav-link, .nav-btn');

    const filterButtons = document.querySelectorAll(".filters");
    const projectCards = document.querySelectorAll("[data-category]");

    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Ta bort "active"-klassen från alla knappar
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Lägg till "active"-klassen på den klickade knappen
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        projectCards.forEach(card => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"; // Visa kortet
          } else {
            card.style.display = "none"; // Dölj kortet
          }
        });
      });
    });
  });
  
  // Letter-by-letter animation for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    span.classList.add('letter');
    heroTitle.appendChild(span);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.navbar-toggler');
  const menuCollapse = document.getElementById('navbarNav');
  const closeButton = document.getElementById('mobile-menu-close');

  // Show close button when menu is shown
  menuCollapse.addEventListener('show.bs.collapse', function () {
    closeButton.style.display = 'block';
  });

  // Hide close button when menu is hidden
  menuCollapse.addEventListener('hide.bs.collapse', function () {
    closeButton.style.display = 'none';
  });

  // Close menu when close button is clicked
  closeButton.addEventListener('click', function () {
    if (menuCollapse.classList.contains('show')) {
      // Use Bootstrap's collapse method to hide menu
      $(menuCollapse).collapse('hide');
    }
  });

  // Close menu when any nav link is clicked (for mobile)
  const navLinks = menuCollapse.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuCollapse.classList.contains('show')) {
        $(menuCollapse).collapse('hide');
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const zoomElements = document.querySelectorAll('.zoom-animation');

  zoomElements.forEach(element => {
    element.classList.add('animate');
  });
});

document.addEventListener('DOMContentLoaded', () => {
const slideInElements = document.querySelectorAll('.scroll-slide-in');
const fadeInElements = document.querySelectorAll('.scroll-fade-in');
const scaleUpElements = document.querySelectorAll('.scroll-scale-up');

const options = {
threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('animated');
if(entry.target.classList.contains('scroll-slide-in')){
entry.target.style.animationPlayState = 'running';
}
if(entry.target.classList.contains('scroll-fade-in')){
entry.target.style.animationPlayState = 'running';
}
if(entry.target.classList.contains('scroll-scale-up')){
entry.target.style.animationPlayState = 'running';
}

observer.unobserve(entry.target);
}
});
}, options);

slideInElements.forEach(el => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});

fadeInElements.forEach(el => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});

scaleUpElements.forEach(el => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
});

document.addEventListener('DOMContentLoaded', () => {
  const slideInUpElements = document.querySelectorAll('.scroll-slide-in-up');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  slideInUpElements.forEach(el => {
    observer.observe(el);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const shakeXElements = document.querySelectorAll('.shakeX');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  shakeXElements.forEach(el => {
    observer.observe(el);
  });
});