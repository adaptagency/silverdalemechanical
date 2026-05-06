/* ═══════════════════════════════════════════════════════════════
   SILVERDALE MECHANICAL — Main JS
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── NAV SCROLL ─────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HAMBURGER ──────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // stagger children if data-stagger
      if (entry.target.dataset.stagger) {
        Array.from(entry.target.children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.12}s`;
          child.classList.add('visible');
        });
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Add reveal classes and observe
const addReveal = (selector, cls = 'reveal') => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add(cls);
    revealObserver.observe(el);
  });
};

addReveal('.service-card');
addReveal('.vehicle-tile');
addReveal('.ps-step');
addReveal('.wf-item');
addReveal('.ci-item');
addReveal('.intro-text');
addReveal('.intro-img-wrap', 'reveal-left');
addReveal('.why-text',       'reveal-left');
addReveal('.why-stats-panel','reveal-right');
addReveal('.booking-left',   'reveal-left');
addReveal('.booking-right',  'reveal-right');
addReveal('.contact-info-block', 'reveal-left');
addReveal('.contact-map-block',  'reveal-right');
addReveal('.section-header');
addReveal('.pq-content');

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.ws-num[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ── BOOKING FORM ───────────────────────────────────────────── */
const form        = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

// Set min date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  // Disable weekends optionally (keep Sat/Sun light grey)
  dateInput.addEventListener('input', () => {
    const d = new Date(dateInput.value);
    if (d.getDay() === 0) { // Sunday — suggest Monday
      dateInput.setCustomValidity('We are closed on Sundays. Please choose another day.');
    } else {
      dateInput.setCustomValidity('');
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation highlight
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      valid = false;
      field.style.borderColor = 'var(--red)';
      field.addEventListener('input', () => {
        field.style.borderColor = '';
      }, { once: true });
    }
  });

  if (!valid) {
    // Shake the button
    const btn = form.querySelector('.submit-btn');
    btn.style.animation = 'shake 0.4s ease';
    setTimeout(() => btn.style.animation = '', 400);
    return;
  }

  // Simulate submission (replace with real API call)
  const btn = form.querySelector('.submit-btn');
  btn.disabled = true;
  btn.innerHTML = `
    <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
    Sending…
  `;

  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      Request Free Quote
    `;
    formSuccess.classList.add('show');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide success after 8s
    setTimeout(() => formSuccess.classList.remove('show'), 8000);
  }, 1400);
});

/* ── SERVICE CARD TILT ──────────────────────────────────────── */
document.querySelectorAll('[data-hover]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = (e.clientX - rect.left) / rect.width  - 0.5;
    const y      = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => card.style.transition = '', 500);
  });
});

/* ── PARALLAX (subtle, no scroll listeners on mobile) ────────── */
if (window.innerWidth > 900) {
  const parallaxEls = document.querySelectorAll('.hero-bg, .parallax-quote');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const rect    = el.closest('section, .parallax-quote')?.getBoundingClientRect();
      if (!rect) return;
      const inView  = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      const offset  = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.15;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

/* ── INJECT SHAKE KEYFRAME ──────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%,100%{ transform:translateX(0) }
    20%    { transform:translateX(-8px) }
    40%    { transform:translateX(8px) }
    60%    { transform:translateX(-5px) }
    80%    { transform:translateX(5px) }
  }
  .spin {
    animation: spinAnim 0.8s linear infinite;
  }
  @keyframes spinAnim {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

/* ── STAGGER SERVICE CARDS ON FIRST VIEW ────────────────────── */
const cardGrid = document.querySelector('.services-grid');
if (cardGrid) {
  const gridObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    const cards = cardGrid.querySelectorAll('.service-card');
    cards.forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 100);
    });
    gridObserver.disconnect();
  }, { threshold: 0.05 });
  gridObserver.observe(cardGrid);
}

/* ── VEHICLE TILE PARALLAX ZOOM ─────────────────────────────── */
document.querySelectorAll('.vehicle-tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.style.zIndex = '2';
    tile.style.transform = 'scale(1.02)';
    tile.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), z-index 0s';
  });
  tile.addEventListener('mouseleave', () => {
    tile.style.transform = 'scale(1)';
    setTimeout(() => tile.style.zIndex = '', 500);
  });
});
