document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.accordion-card').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const card = toggle.closest('.accordion-card');
        card.classList.toggle('open');
      });
    });
  });
  