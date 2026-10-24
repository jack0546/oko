/* ==========================================================
   ELITE CUTS BARBERSHOP — script.js
   Vanilla JavaScript — no dependencies
   ========================================================== */

/* ==========================================================
   1. CONFIGURATION — CUSTOMIZE HERE
   ========================================================== */

// IMPORTANT: Replace with the real business WhatsApp number.
// Use international format WITHOUT '+' or leading zero.
// Ghana example: 233241234567
const WHATSAPP_NUMBER = '233552396937';

// Business display name (used in messages)
const BRAND_NAME = 'Elite Cuts Barbershop';

/* ==========================================================
   2. SERVICES DATA — EDIT PRICES & DESCRIPTIONS HERE
   ========================================================== */
const services = [
  {
    name: 'Classic Haircut',
    price: 55,
    description: 'Timeless scissor & clipper cut tailored to your face shape.',
    image: 'images/16.jpg',
  },
  {
    name: 'Low Fade',
    price: 40,
    description: 'Subtle gradient fade that starts low for a clean, sharp look.',
    image: 'images/5.jpeg',
  },
  {
    name: 'Mid Fade',
    price: 45,
    description: 'Balanced fade starting at the temples for modern versatility.',
    image: 'images/10.jpg',
  },
  {
    name: 'High Fade',
    price: 45,
    description: 'Bold high fade with maximum contrast and clean lines.',
    image: 'images/13.jpeg',
  },
  {
    name: 'Skin Fade',
    price: 40,
    description: 'Ultra-clean fade down to the skin — our signature cut.',
    image: 'images/15.jpg',
  },
  {
    name: 'Beard Trim',
    price: 25,
    description: 'Precision beard shaping, line-up, and hot towel finish.',
    image: 'images/11.jpg',
  },
  {
    name: 'Haircut & Beard Combo',
    price: 65,
    description: 'Full haircut plus beard sculpt for the complete look.',
    image: 'images/9.jpg',
  },
  {
    name: 'Kids Haircut',
    price: 25,
    description: 'Patient, kid-friendly cuts in a comfortable environment.',
    image: 'images/14.jpg',
  },
   {
    name: 'Haircut & Beard Combo',
    price: 65,
    description: 'Full haircut plus beard sculpt for the complete look.',
    image: 'images/4.jpeg',
  },
];

/* ==========================================================
   3. GALLERY DATA — REPLACE WITH REAL SHOP PHOTOS
   ========================================================== */
const galleryImages = [
  { src: 'images/2.jpeg', alt: 'Low fade haircut', category: 'fades', label: 'Low Fade' },
  { src: 'images/4.jpeg', alt: 'Mid fade haircut', category: 'fades', label: 'Mid Fade' },
  { src: 'images/5.jpeg', alt: 'High fade haircut', category: 'fades', label: 'High Fade' },
  { src: 'images/15.jpg', alt: 'Skin fade haircut', category: 'fades', label: 'Skin Fade' },
  { src: 'images/13.jpeg', alt: 'Taper fade haircut', category: 'fades', label: 'Taper Fade' },
  { src: 'images/11.jpg', alt: 'Beard trim style', category: 'beard', label: 'Beard Sculpt' },
  { src: 'images/9.jpg', alt: 'Afro cut style', category: 'afro', label: 'Afro Cut' },
  { src: 'images/12.jpg', alt: 'Classic haircut', category: 'fades', label: 'Classic Cut' },
];

/* ==========================================================
   4. BARBERS DATA — REPLACE WITH REAL TEAM
   ========================================================== */
const barbers = [
  {
    name: 'RATTY JNR',
    specialty: 'Master Barber · Skin Fades',
    bio: '15 years behind the chair. Kwame is known for razor-sharp fades and flawless line-ups.',
    image: 'images/3.jpeg',
  },
  {
    name: 'Kofi Asante',
    specialty: 'Beard Specialist',
    bio: 'Kofi turns beard grooming into an art form, with hot-towel finishes that clients love.',
    image: 'images/8.jpeg',
  },
  {
    name: 'Yaw Boateng',
    specialty: 'Classic Cuts & Afro Styling',
    bio: 'Yaw blends old-school precision with modern creativity for every client in his chair.',
    image: 'images/10.jpg',
  },
];

/* ==========================================================
   5. TESTIMONIALS DATA — REPLACE WITH REAL REVIEWS
   ========================================================== */
const testimonials = [
  {
    name: 'Daniel O.',
    role: 'Client since 2018',
    text: 'Best skin fade in Accra. Clean shop, friendly barbers, and I always leave feeling like a million bucks.',
  },
  {
    name: 'Michael A.',
    role: 'Regular client',
    text: 'The attention to detail is unmatched. My beard has never looked this good — highly recommend the combo.',
  },
  {
    name: 'Joshua K.',
    role: 'First-time client',
    text: 'Booked via WhatsApp and it was seamless. Walked in, got the exact cut I asked for. Elite Cuts has a customer for life.',
  },
];

/* ==========================================================
   6. UTILITY HELPERS
   ========================================================== */

/**
 * Build a WhatsApp click-to-chat URL
 * @param {string} message - plain text message
 * @returns {string} full WhatsApp URL
 */
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Open a WhatsApp chat (mobile app or WhatsApp Web)
 */
function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener');
}

/* ==========================================================
   7. DOM READY
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initServices();
  initGallery();
  initBarbers();
  initTestimonials();
  initBookingForm();
  initWhatsAppLinks();
  initScrollReveal();
  initBackToTop();
  initLightbox();
});

/* ==========================================================
   8. FOOTER YEAR
   ========================================================== */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ==========================================================
   9. NAVBAR — STICKY + ACTIVE LINK
   ========================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active section
    const scrollPos = window.scrollY + 120;
    let currentId = '';
    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================
   10. MOBILE MENU
   ========================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

/* ==========================================================
   11. SMOOTH SCROLL (fallback for browsers ignoring CSS)
   ========================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--nav-height'
          )
        ) || 76;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ==========================================================
   12. SERVICES — RENDER CARDS + BOOK BUTTON
   ========================================================== */
function initServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (service) => `
      <article class="service-card reveal">
        <div class="service-img" onclick="openLightbox('${service.image}', '${service.name}')">
          <img src="${service.image}" alt="${service.name} at Ratty Jnr Barbershop" loading="lazy" />
          <span class="service-price-tag">GHS ${service.price}</span>
        </div>
        <div class="service-body">
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <button class="btn btn-gold" data-service="${service.name}">
            Book This Service
          </button>
        </div>
      </article>
    `
    )
    .join('');

  // Attach book buttons
  grid.querySelectorAll('button[data-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const service = services.find((s) => s.name === btn.dataset.service);
      if (!service) return;
      const message =
        `Hello ${BRAND_NAME}!\n\n` +
        `I would like to book the following service:\n\n` +
        `Service: ${service.name}\n` +
        `Price: GHS ${service.price}\n\n` +
        `Please confirm availability. Thank you!`;
      openWhatsApp(message);
    });
  });

  // Re-run reveal observer for new cards
  observeReveals();
}

/* ==========================================================
   13. GALLERY — RENDER, FILTER, LIGHTBOX
   ========================================================== */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const filterContainer = document.getElementById('galleryFilters');
  if (!grid) return;

  // Render gallery items
  grid.innerHTML = galleryImages
    .map(
      (img) => `
      <div class="gallery-item" data-category="${img.category}" data-src="${img.src}" data-alt="${img.alt}" tabindex="0" role="button" aria-label="Open ${img.alt}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" />
        <span class="gallery-label">${img.label}</span>
      </div>
    `
    )
    .join('');

  // Filtering
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterContainer
        .querySelectorAll('.filter-btn')
        .forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      grid.querySelectorAll('.gallery-item').forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  }

  // Click to open lightbox
  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    openLightbox(item.dataset.src, item.dataset.alt);
  });

  // Keyboard support for gallery items
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      e.preventDefault();
      openLightbox(item.dataset.src, item.dataset.alt);
    }
  });
}

/* ==========================================================
   14. LIGHTBOX
   ========================================================== */
let lastFocusedElement = null;

function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lightbox || !img) return;

  lastFocusedElement = document.activeElement;
  img.src = src;
  img.alt = alt || 'Haircut preview';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('lightboxClose');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lightbox) return;

  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (img) img.src = '';

  if (lastFocusedElement) lastFocusedElement.focus();
}

function initLightbox() {
  const closeBtn = document.getElementById('lightboxClose');
  const lightbox = document.getElementById('lightbox');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ==========================================================
   15. BARBERS — RENDER CARDS
   ========================================================== */
function initBarbers() {
  const grid = document.getElementById('barbersGrid');
  if (!grid) return;

  grid.innerHTML = barbers
    .map(
      (barber) => `
      <article class="barber-card reveal">
        <div class="barber-img">
          <img src="${barber.image}" alt="Portrait of ${barber.name}, barber at Elite Cuts" loading="lazy" />
        </div>
        <div class="barber-body">
          <h3>${barber.name}</h3>
          <span class="barber-specialty">${barber.specialty}</span>
          <p class="barber-bio">${barber.bio}</p>
          <div class="barber-social">
            <a href="#" aria-label="${barber.name} on Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="${barber.name} on Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="${barber.name} on TikTok"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  observeReveals();
}

/* ==========================================================
   16. TESTIMONIAL SLIDER
   ========================================================== */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  if (!track) return;

  // Render testimonials
  track.innerHTML = testimonials
    .map(
      (t) => `
      <div class="testimonial-card">
        <div class="testimonial-inner">
          <div class="testimonial-stars" aria-label="5 out of 5 stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
          </div>
          <p class="testimonial-text">“${t.text}”</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">${t.name.charAt(0)}</div>
            <div>
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-role">${t.role}</div>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  let currentIndex = 0;
  const total = testimonials.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % total;
      updateSlider();
    });
  }

  // Auto-play (optional, subtle)
  let autoPlay = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    updateSlider();
  }, 7000);

  // Pause autoplay on hover/focus for accessibility
  const slider = track.closest('.testimonial-slider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
    slider.addEventListener('focusin', () => clearInterval(autoPlay));
    slider.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        updateSlider();
      }, 7000);
    });
  }
}

/* ==========================================================
   17. BOOKING FORM + WHATSAPP INTEGRATION
   ========================================================== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const serviceSelect = document.getElementById('service');
  const priceHint = document.getElementById('priceHint');
  const dateInput = document.getElementById('date');

  // Populate service dropdown dynamically
  if (serviceSelect) {
    services.forEach((service) => {
      const option = document.createElement('option');
      option.value = service.name;
      option.textContent = `${service.name} — GHS ${service.price}`;
      option.dataset.price = service.price;
      serviceSelect.appendChild(option);
    });

    // Show price hint on selection
    serviceSelect.addEventListener('change', () => {
      const selected = services.find((s) => s.name === serviceSelect.value);
      if (priceHint) {
        priceHint.textContent = selected ? `Price: GHS ${selected.price}` : '';
      }
    });
  }

  // Prevent selecting past dates
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather values
    const fullName = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const serviceName = form.service.value;
    const barber = form.barber.value;
    const date = form.date.value;
    const time = form.time.value;
    const notes = form.notes.value.trim();

    // Validation
    let valid = true;
    form.querySelectorAll('input, select').forEach((el) => {
      el.classList.remove('error');
    });

    if (!fullName) {
      form.fullName.classList.add('error');
      valid = false;
    }
    if (!phone) {
      form.phone.classList.add('error');
      valid = false;
    }
    if (!serviceName) {
      form.service.classList.add('error');
      valid = false;
    }
    if (!date) {
      form.date.classList.add('error');
      valid = false;
    }
    if (!time) {
      form.time.classList.add('error');
      valid = false;
    }

    if (!valid) {
      showFormMessage(form, 'Please fill in all required fields.', 'error');
      return;
    }

    const selectedService = services.find((s) => s.name === serviceName);
    const price = selectedService ? selectedService.price : 'N/A';

    // Format date nicely
    const dateObj = new Date(date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // Build professional WhatsApp message
    const message =
      `Hello ${BRAND_NAME}!\n\n` +
      `I would like to book an appointment.\n\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Service: ${serviceName}\n` +
      `Price: GHS ${price}\n` +
      `Preferred Barber: ${barber}\n` +
      `Date: ${formattedDate}\n` +
      `Time: ${time}\n` +
      (notes ? `Additional Notes: ${notes}\n` : '') +
      `\nPlease confirm if this appointment is available.\n\n` +
      `Thank you!`;

    // Friendly instruction before opening WhatsApp
    showFormMessage(
      form,
      'Opening WhatsApp… Please press Send in WhatsApp to submit your booking request. Your appointment is confirmed only after the barber replies.',
      'success'
    );

    // Open WhatsApp
    setTimeout(() => openWhatsApp(message), 700);
  });
}

/**
 * Show a temporary message inside the booking form
 */
function showFormMessage(form, text, type) {
  let msg = form.querySelector('.form-message');
  if (!msg) {
    msg = document.createElement('p');
    msg.className = 'form-message';
    form.appendChild(msg);
  }
  msg.textContent = text;
  msg.style.marginTop = '14px';
  msg.style.fontSize = '0.85rem';
  msg.style.textAlign = 'center';
  msg.style.color = type === 'error' ? '#e05252' : '#D4AF37';
  msg.style.lineHeight = '1.5';

  if (type === 'error') {
    msg.setAttribute('role', 'alert');
  }

  // Clear after some seconds
  clearTimeout(msg._timer);
  msg._timer = setTimeout(() => {
    msg.textContent = '';
  }, 9000);
}

/* ==========================================================
   18. WHATSAPP — FLOATING BUTTON + CONTACT CARD
   ========================================================== */
function initWhatsAppLinks() {
  const floating = document.getElementById('floatingWhatsApp');
  const contactBtn = document.getElementById('contactWhatsApp');

  const friendlyMessage =
    `Hello ${BRAND_NAME}! 👋\n\n` +
    `I'd like to know more about your services and book an appointment.`;

  if (floating) {
    floating.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(friendlyMessage);
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(friendlyMessage);
    });
  }
}

/* ==========================================================
   19. SCROLL REVEAL — IntersectionObserver
   ========================================================== */
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

function initScrollReveal() {
  observeReveals();
}

/* ==========================================================
   20. BACK TO TOP BUTTON
   ========================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    },
    { passive: true }
  );

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
