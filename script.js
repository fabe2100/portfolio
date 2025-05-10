document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll('.reveal');

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(element => {
      observer.observe(element);
    });

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



