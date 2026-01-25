// Portal Pro - Enhanced Interactions
(function(){
  // Highlight active nav link across pages
  const markActiveNav = () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-links a, .dropdown-menu a');
    let matchedDropdown = false;
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Normalize hash-only links and absolute URLs
      if (!href) return;
      const hrefFile = href.includes('http') ? href.split('/').pop() : href.split('#')[0];
      if (hrefFile === '' && path === 'index.html') {
        link.classList.add('active');
      } else if (hrefFile === path) {
        link.classList.add('active');
        if (link.closest('.dropdown')) matchedDropdown = true;
      }
    });
    // If a dropdown item is active, mark the parent Services link too
    if (matchedDropdown) {
      const parentServices = document.querySelector('.dropdown > a');
      if (parentServices) parentServices.classList.add('active');
    }
  };
  markActiveNav();
  // Mobile menu toggle
  const toggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.className = nav.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  // Mobile dropdown toggle for touch devices
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    if (link && window.innerWidth <= 768) {
      link.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown')) {
          e.preventDefault();
          dropdown.classList.toggle('active');
          const menu = dropdown.querySelector('.dropdown-menu');
          if (menu) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
          }
        }
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav && nav.classList.remove('open');
        const icon = toggle && toggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  });

  // Animate stats on scroll (if stats section exists)
  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number, [style*="font-size: 48px"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          const finalValue = entry.target.textContent.replace(/[^\d]/g, '');
          if (finalValue) {
            let current = 0;
            const increment = Math.ceil(parseInt(finalValue) / 30);
            const timer = setInterval(() => {
              current += increment;
              if (current >= parseInt(finalValue)) {
                entry.target.textContent = entry.target.textContent.replace(/\d+/, finalValue);
                clearInterval(timer);
              } else {
                entry.target.textContent = entry.target.textContent.replace(/\d+/, current);
              }
            }, 40);
          }
        }
      });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
  };
  
  if (window.IntersectionObserver) {
    animateStats();
  }

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

  // Lazy load images on scroll
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.src; // Browser handles lazy loading
    });
  } else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }

  // Add scroll-to-top button
  const addScrollToTop = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'scroll-to-top';
    btn.style.cssText = 'position: fixed; bottom: 90px; right: 20px; width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #5b8cff, #7c4dff); border: none; color: white; cursor: pointer; opacity: 0; transition: opacity 0.3s, transform 0.2s; z-index: 40; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
    btn.setAttribute('aria-label', 'Scroll to top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btn.style.opacity = '1';
      } else {
        btn.style.opacity = '0';
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-4px) scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
    });

    document.body.appendChild(btn);
  };

  addScrollToTop();
})();
