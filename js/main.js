// Portal Pro - Minimal Interactions
(function(){
  const toggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav && nav.classList.remove('open');
      }
    });
  });

  // Basic contact form handler (client-side only)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Simple validation
      if (!data.name || !data.email || !data.service || !data.message) {
        alert('Please complete all fields.');
        return;
      }
      // Simulate submit: you can integrate with email service/API later
      alert('Thanks, '+ data.name +'! We\'ll reach out shortly.');
      form.reset();
    });
  }
})();
