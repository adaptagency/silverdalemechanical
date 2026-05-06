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
    // If the link carries a data-tab, activate that tab before scrolling
    const tab = anchor.dataset.tab;
    if (tab) activateTab(tab);
    const offset = navbar.getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── BOOKING TAB SWITCHER ───────────────────────────────────── */
const quoteForm    = document.getElementById('quoteForm');
const serviceForm  = document.getElementById('serviceForm');
const bleftQuote   = document.getElementById('bleft-quote');
const bleftService = document.getElementById('bleft-service');
const tabs         = document.querySelectorAll('.btab');

function activateTab(which) {
  // Toggle tabs
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === which));

  // Toggle forms
  quoteForm.classList.toggle('hidden',   which !== 'quote');
  serviceForm.classList.toggle('hidden', which !== 'service');

  // Toggle left panel copy
  bleftQuote.classList.toggle('hidden',   which !== 'quote');
  bleftService.classList.toggle('hidden', which !== 'service');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab.dataset.target));
});

/* ── SET MIN DATE ON BOTH FORMS ─────────────────────────────── */
function setMinDate(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return;
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  el.min = `${yyyy}-${mm}-${dd}`;
  el.addEventListener('input', () => {
    const d = new Date(el.value);
    el.setCustomValidity(
      d.getDay() === 0 ? 'We are closed on Sundays. Please choose another day.' : ''
    );
  });
}
setMinDate('q-date');
setMinDate('s-date');

/* ── FORM HANDLER ───────────────────────────────────────────── */
function handleForm(form, successId, submitLabel, submitIcon) {
  const successEl = document.getElementById(successId);

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validate required fields
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = 'var(--red)';
        field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
      }
    });

    if (!valid) {
      const btn = form.querySelector('.submit-btn');
      btn.style.animation = 'shake 0.4s ease';
      setTimeout(() => btn.style.animation = '', 400);
      return;
    }

    // Simulate submission — replace with real API / EmailJS / AutoHive call
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
      btn.innerHTML = submitIcon + submitLabel;
      successEl.classList.add('show');
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => successEl.classList.remove('show'), 8000);
    }, 1400);
  });
}

const calIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
</svg>`;

const wrenchIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
</svg>`;

handleForm(quoteForm,   'quoteSuccess',   'Request Free Quote',      calIcon);
handleForm(serviceForm, 'serviceSuccess', 'Confirm Service Booking', wrenchIcon);

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
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

const addReveal = (selector, cls = 'reveal') => {
  document.querySelectorAll(selector).forEach(el => {
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
addReveal('.intro-img-wrap',     'reveal-left');
addReveal('.why-text',           'reveal-left');
addReveal('.why-stats-panel',    'reveal-right');
addReveal('.booking-left',       'reveal-left');
addReveal('.booking-right',      'reveal-right');
addReveal('.contact-info-block', 'reveal-left');
addReveal('.contact-map-block',  'reveal-right');
addReveal('.review-card');
addReveal('.reviews-rating-block');
addReveal('.section-header');
addReveal('.pq-content');

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const start  = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / 1800, 1);
      const eased    = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.ws-num[data-target]').forEach(el => counterObserver.observe(el));

/* ── SERVICE CARD TILT ──────────────────────────────────────── */
document.querySelectorAll('[data-hover]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => card.style.transition = '', 500);
  });
});

/* ── PARALLAX ───────────────────────────────────────────────── */
if (window.innerWidth > 900) {
  const parallaxEls = document.querySelectorAll('.hero-bg, .parallax-quote');
  window.addEventListener('scroll', () => {
    parallaxEls.forEach(el => {
      const rect   = el.closest('section, .parallax-quote')?.getBoundingClientRect();
      if (!rect) return;
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.15;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

/* ── STAGGER SERVICE CARDS ──────────────────────────────────── */
const cardGrid = document.querySelector('.services-grid');
if (cardGrid) {
  const gridObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    cardGrid.querySelectorAll('.service-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 100);
    });
    gridObserver.disconnect();
  }, { threshold: 0.05 });
  gridObserver.observe(cardGrid);
}

/* ── VEHICLE TILE HOVER ─────────────────────────────────────── */
document.querySelectorAll('.vehicle-tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.style.zIndex     = '2';
    tile.style.transform  = 'scale(1.02)';
    tile.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)';
  });
  tile.addEventListener('mouseleave', () => {
    tile.style.transform = 'scale(1)';
    setTimeout(() => tile.style.zIndex = '', 500);
  });
});

/* ── INJECT KEYFRAMES ───────────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%,100%{ transform:translateX(0) }
    20%    { transform:translateX(-8px) }
    40%    { transform:translateX(8px) }
    60%    { transform:translateX(-5px) }
    80%    { transform:translateX(5px) }
  }
  .spin { animation: spinAnim 0.8s linear infinite; }
  @keyframes spinAnim { to { transform: rotate(360deg); } }
`;
document.head.appendChild(style);
