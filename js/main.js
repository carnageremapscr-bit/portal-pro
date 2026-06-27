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

  // Dropdown toggle for click/touch devices
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector(':scope > a');
    if (link) {
      link.addEventListener('click', (e) => {
        // Services parent links are used as toggles (#), not navigation targets.
        e.preventDefault();
        const isOpen = dropdown.classList.contains('open') || dropdown.classList.contains('active');

        dropdowns.forEach(d => {
          d.classList.remove('open');
          d.classList.remove('active');
        });

        if (!isOpen) {
          dropdown.classList.add('open');
          dropdown.classList.add('active');
        }
      });
    }
  });

  // Close dropdowns when clicking outside or pressing Escape.
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        d.classList.remove('active');
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        d.classList.remove('active');
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
    btn.style.cssText = 'position: fixed; bottom: 90px; right: 20px; width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #1d3b7a, #1f9a76); border: 1px solid rgba(255,255,255,0.6); color: white; cursor: pointer; opacity: 0; transition: opacity 0.3s, transform 0.2s; z-index: 40; box-shadow: 0 8px 20px rgba(15,53,74,0.25);';
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

  // Improve scanability for content-heavy pages with small reveal transitions.
  // Skip on landing pages — handled by initLandingReveal instead.
  const revealSections = () => {
    if (document.body.classList.contains('landing-page')) return;
    const targets = document.querySelectorAll('.section, .card, .feature-card, .pricing-card, details.card');
    if (!targets.length || !window.IntersectionObserver) return;

    targets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach((el) => observer.observe(el));
  };

  // Landing page scroll reveal with stagger
  const initLandingReveal = () => {
    if (!document.body.classList.contains('landing-page')) return;

    const els = document.querySelectorAll(
      '.card, .step-card, .section-header, .price-banner, .faq details, ' +
      '.contact-methods > a, .use-case-card, .code-block, .demo-panel'
    );
    if (!els.length) return;

    // Set initial transition with stagger handled per-group
    els.forEach(el => {
      el.style.transition = 'opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.4s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('cards') || parent.classList.contains('steps-grid') ||
            parent.classList.contains('faq') || parent.classList.contains('contact-methods'))) {
          const idx = Array.from(parent.children).indexOf(el);
          el.style.transitionDelay = (idx * 0.09) + 's';
        }
        requestAnimationFrame(() => el.classList.add('revealed'));
        observer.unobserve(el);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(el => observer.observe(el));
  };

  initLandingReveal();

  revealSections();
})();
