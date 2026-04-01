/* ============================================
   HOPE SERVICES — Main JavaScript
   Bilingual (EN/ES) with auto-detect
   ============================================ */

(function () {
  'use strict';

  /* ---- TRANSLATIONS ---- */
  var translations = {
    en: {
      // Nav
      'nav.tagline': 'Construction & Landscaping',
      'nav.services': 'Services',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.contact': 'Contact',

      // Hero
      'hero.title': 'Building <em>Dreams</em><br>Crafting <em>Landscapes</em>',
      'hero.subtitle': 'Expert construction, remodeling & landscaping services in Uvita, Costa Rica',
      'hero.cta1': 'Get a Free Quote',
      'hero.cta2': 'View Our Work',
      'hero.scroll': 'Scroll',

      // Services
      'services.label': 'What We Do',
      'services.title': 'Our <em>Services</em>',
      'services.desc': 'From ground-breaking foundations to lush garden transformations, Hope Services delivers quality craftsmanship for every project.',
      'services.construction.title': 'New Construction',
      'services.construction.desc': 'Custom homes, commercial buildings, and structures built from the ground up with the highest standards of quality and attention to detail.',
      'services.remodeling.title': 'Remodeling',
      'services.remodeling.desc': 'Kitchen renovations, bathroom upgrades, room additions, and full home makeovers that breathe new life into your existing spaces.',
      'services.landscaping.title': 'Landscaping',
      'services.landscaping.desc': 'Garden design, retaining walls, stone pathways, pool areas, and tropical landscaping that transforms your outdoor spaces into paradise.',
      'services.maintenance.title': 'Maintenance',
      'services.maintenance.desc': 'Regular garden upkeep, property maintenance, and general repairs to keep your home and grounds looking their absolute best year-round.',

      // Gallery
      'gallery.label': 'Our Portfolio',
      'gallery.title': 'Project <em>Gallery</em>',
      'gallery.desc': 'Browse through our completed projects and see the quality of work Hope Services delivers.',
      'gallery.all': 'All Projects',
      'gallery.landscaping': 'Landscaping',
      'gallery.construction': 'New Construction',
      'gallery.remodeling': 'Remodeling',
      'gallery.other': 'Other',

      // Category labels for photo overlay
      'cat.landscaping': 'Landscaping',
      'cat.new-construction': 'New Construction',
      'cat.remodeling': 'Remodeling',
      'cat.other': 'Other',

      // Reviews
      'reviews.label': 'Testimonials',
      'reviews.title': 'What Our <em>Clients</em> Say',
      'reviews.r1.text': '"Hope Services completely transformed our backyard into a tropical oasis. The stone pathways and retaining walls are beautiful, and the craftsmanship is outstanding. Highly recommend!"',
      'reviews.r1.project': 'Landscaping Project \u2014 Uvita',
      'reviews.r2.text': '"We hired Hope Services for a full kitchen remodel and the results exceeded our expectations. Professional team, great communication throughout the project, and the finished kitchen is stunning."',
      'reviews.r2.project': 'Kitchen Remodel \u2014 Dominical',
      'reviews.r3.text': '"From the initial foundation pour to the final finishes, Hope Services built our dream home in Uvita. They handled every detail with care and professionalism. We couldn\'t be happier with the result."',
      'reviews.r3.project': 'New Home Construction \u2014 Uvita',

      // Contact
      'contact.label': 'Get In Touch',
      'contact.title': 'Let\'s Build<br><em>Something Great</em>',
      'contact.desc': 'Ready to start your next project? Reach out to us for a free consultation and quote. We\'d love to hear about your vision.',

      // Form
      'form.firstName': 'First Name',
      'form.firstName_ph': 'Your first name',
      'form.lastName': 'Last Name',
      'form.lastName_ph': 'Your last name',
      'form.phone': 'Phone / WhatsApp',
      'form.service': 'Service Interested In',
      'form.selectService': 'Select a service',
      'form.opt_construction': 'New Construction',
      'form.opt_remodeling': 'Remodeling',
      'form.opt_landscaping': 'Landscaping',
      'form.opt_maintenance': 'Maintenance',
      'form.opt_other': 'Other',
      'form.message': 'Message',
      'form.message_ph': 'Tell us about your project...',
      'form.submit': 'Send Message',
      'form.sending': 'Sending...',
      'form.success': 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.',

      // Footer
      'footer.copy': '\u00a9 2026 Hope Services. All rights reserved.'
    },

    es: {
      // Nav
      'nav.tagline': 'Construcci\u00f3n & Jardiner\u00eda',
      'nav.services': 'Servicios',
      'nav.gallery': 'Galer\u00eda',
      'nav.reviews': 'Rese\u00f1as',
      'nav.contact': 'Contacto',

      // Hero
      'hero.title': 'Construimos <em>Sue\u00f1os</em><br>Creamos <em>Paisajes</em>',
      'hero.subtitle': 'Servicios expertos de construcci\u00f3n, remodelaci\u00f3n y jardiner\u00eda en Uvita, Costa Rica',
      'hero.cta1': 'Cotizaci\u00f3n Gratis',
      'hero.cta2': 'Ver Nuestro Trabajo',
      'hero.scroll': 'Deslizar',

      // Services
      'services.label': 'Lo Que Hacemos',
      'services.title': 'Nuestros <em>Servicios</em>',
      'services.desc': 'Desde cimientos hasta transformaciones de jardines, Hope Services ofrece mano de obra de calidad para cada proyecto.',
      'services.construction.title': 'Construcci\u00f3n Nueva',
      'services.construction.desc': 'Casas personalizadas, edificios comerciales y estructuras construidas desde cero con los m\u00e1s altos est\u00e1ndares de calidad y atenci\u00f3n al detalle.',
      'services.remodeling.title': 'Remodelaci\u00f3n',
      'services.remodeling.desc': 'Renovaciones de cocinas, mejoras de ba\u00f1os, ampliaciones y remodelaciones completas que dan nueva vida a sus espacios existentes.',
      'services.landscaping.title': 'Jardiner\u00eda',
      'services.landscaping.desc': 'Dise\u00f1o de jardines, muros de contenci\u00f3n, caminos de piedra, \u00e1reas de piscina y jardiner\u00eda tropical que transforma sus espacios exteriores en un para\u00edso.',
      'services.maintenance.title': 'Mantenimiento',
      'services.maintenance.desc': 'Mantenimiento regular de jardines, propiedades y reparaciones generales para mantener su hogar y terrenos en las mejores condiciones todo el a\u00f1o.',

      // Gallery
      'gallery.label': 'Nuestro Portafolio',
      'gallery.title': 'Galer\u00eda de <em>Proyectos</em>',
      'gallery.desc': 'Explore nuestros proyectos completados y vea la calidad del trabajo que Hope Services ofrece.',
      'gallery.all': 'Todos los Proyectos',
      'gallery.landscaping': 'Jardiner\u00eda',
      'gallery.construction': 'Construcci\u00f3n Nueva',
      'gallery.remodeling': 'Remodelaci\u00f3n',
      'gallery.other': 'Otros',

      // Category labels
      'cat.landscaping': 'Jardiner\u00eda',
      'cat.new-construction': 'Construcci\u00f3n Nueva',
      'cat.remodeling': 'Remodelaci\u00f3n',
      'cat.other': 'Otros',

      // Reviews
      'reviews.label': 'Testimonios',
      'reviews.title': 'Lo Que Dicen Nuestros <em>Clientes</em>',
      'reviews.r1.text': '"Hope Services transform\u00f3 completamente nuestro patio en un oasis tropical. Los caminos de piedra y los muros de contenci\u00f3n son hermosos, y la mano de obra es excepcional. \u00a1Altamente recomendados!"',
      'reviews.r1.project': 'Proyecto de Jardiner\u00eda \u2014 Uvita',
      'reviews.r2.text': '"Contratamos a Hope Services para una remodelaci\u00f3n completa de cocina y los resultados superaron nuestras expectativas. Equipo profesional, excelente comunicaci\u00f3n durante todo el proyecto, y la cocina terminada es impresionante."',
      'reviews.r2.project': 'Remodelaci\u00f3n de Cocina \u2014 Dominical',
      'reviews.r3.text': '"Desde el vaciado inicial de los cimientos hasta los acabados finales, Hope Services construy\u00f3 la casa de nuestros sue\u00f1os en Uvita. Manejaron cada detalle con cuidado y profesionalismo. No podr\u00edamos estar m\u00e1s contentos con el resultado."',
      'reviews.r3.project': 'Construcci\u00f3n de Casa Nueva \u2014 Uvita',

      // Contact
      'contact.label': 'Cont\u00e1ctenos',
      'contact.title': 'Construyamos<br><em>Algo Grandioso</em>',
      'contact.desc': '\u00bfListo para su pr\u00f3ximo proyecto? Cont\u00e1ctenos para una consulta y cotizaci\u00f3n gratuita. Nos encantar\u00eda conocer su visi\u00f3n.',

      // Form
      'form.firstName': 'Nombre',
      'form.firstName_ph': 'Su nombre',
      'form.lastName': 'Apellido',
      'form.lastName_ph': 'Su apellido',
      'form.phone': 'Tel\u00e9fono / WhatsApp',
      'form.service': 'Servicio de Inter\u00e9s',
      'form.selectService': 'Seleccione un servicio',
      'form.opt_construction': 'Construcci\u00f3n Nueva',
      'form.opt_remodeling': 'Remodelaci\u00f3n',
      'form.opt_landscaping': 'Jardiner\u00eda',
      'form.opt_maintenance': 'Mantenimiento',
      'form.opt_other': 'Otro',
      'form.message': 'Mensaje',
      'form.message_ph': 'Cu\u00e9ntenos sobre su proyecto...',
      'form.submit': 'Enviar Mensaje',
      'form.sending': 'Enviando...',
      'form.success': '\u00a1Gracias! Su mensaje ha sido enviado. Nos pondremos en contacto dentro de las pr\u00f3ximas 24 horas.',

      // Footer
      'footer.copy': '\u00a9 2026 Hope Services. Todos los derechos reservados.'
    }
  };

  /* ---- LANGUAGE DETECTION & MANAGEMENT ---- */
  var currentLang = 'en';

  function detectLanguage() {
    // Check localStorage for saved preference
    var saved = null;
    try { saved = localStorage.getItem('hopeservices_lang'); } catch(e) {}
    if (saved === 'en' || saved === 'es') return saved;

    // Auto-detect from browser
    var browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.indexOf('es') === 0) return 'es';
    return 'en';
  }

  function setLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem('hopeservices_lang', lang); } catch(e) {}
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangToggle(lang);
    // Re-render gallery with translated category labels
    renderGallery(filteredData);
  }

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update page title
    if (lang === 'es') {
      document.title = 'Hope Services | Construcci\u00f3n y Jardiner\u00eda en Uvita, Costa Rica';
    } else {
      document.title = 'Hope Services | Construction & Landscaping in Uvita, Costa Rica';
    }
  }

  function updateLangToggle(lang) {
    // Toggle shows the OTHER language (what you'd switch to)
    var label = lang === 'en' ? 'ES' : 'EN';
    document.querySelectorAll('.lang-toggle__flag').forEach(function(el) {
      el.textContent = label;
    });
  }

  function getCategoryLabel(cat) {
    var key = 'cat.' + cat;
    return translations[currentLang][key] || cat.replace(/-/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); });
  }

  /* ---- DOM ELEMENTS ---- */
  var header = document.getElementById('header');
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var galleryGrid = document.getElementById('galleryGrid');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCounter = document.getElementById('lightboxCounter');
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  var galleryData = [];
  var filteredData = [];
  var currentLightboxIndex = 0;

  /* ---- HEADER (always white) ---- */

  /* ---- MOBILE NAV ---- */
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---- LANGUAGE TOGGLE ---- */
  document.querySelectorAll('.lang-toggle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      setLanguage(currentLang === 'en' ? 'es' : 'en');
    });
  });

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- GALLERY ---- */
  function loadGallery() {
    // Use inline data from gallery-data.js (no fetch needed)
    if (typeof GALLERY_DATA !== 'undefined') {
      galleryData = GALLERY_DATA;
      filteredData = GALLERY_DATA;
      renderGallery(GALLERY_DATA);
    }
  }

  function renderGallery(photos) {
    galleryGrid.innerHTML = '';
    if (!photos || photos.length === 0) {
      galleryGrid.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;padding:40px 0;">' +
        (currentLang === 'es' ? 'No hay fotos en esta categor\u00eda.' : 'No photos in this category.') + '</p>';
      return;
    }

    photos.forEach(function (photo, index) {
      var item = document.createElement('div');
      item.className = 'gallery__item fade-in';
      item.setAttribute('data-index', index);

      var img = document.createElement('img');
      img.src = 'images/thumbnails/' + photo.file;
      img.alt = photo.alt || 'Hope Services project';
      img.loading = 'lazy';

      var catLabel = document.createElement('span');
      catLabel.className = 'gallery__item-cat';
      catLabel.textContent = getCategoryLabel(photo.category);

      item.appendChild(img);
      item.appendChild(catLabel);
      galleryGrid.appendChild(item);

      item.addEventListener('click', function () {
        openLightbox(index);
      });

      // Staggered fade-in
      setTimeout(function () {
        item.classList.add('visible');
      }, 50 + Math.min(index, 20) * 30);
    });
  }

  // Gallery Filters
  document.querySelectorAll('.gallery__filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelector('.gallery__filter.active').classList.remove('active');
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      if (filter === 'all') {
        filteredData = galleryData;
      } else {
        filteredData = galleryData.filter(function (p) { return p.category === filter; });
      }
      renderGallery(filteredData);
    });
  });

  /* ---- LIGHTBOX ---- */
  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    var photo = filteredData[currentLightboxIndex];
    if (!photo) return;
    lightboxImg.src = 'images/gallery/' + photo.file;
    lightboxImg.alt = photo.alt || 'Hope Services project';
    lightboxCounter.textContent = (currentLightboxIndex + 1) + ' / ' + filteredData.length;
  }

  function nextPhoto() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredData.length;
    updateLightbox();
  }

  function prevPhoto() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredData.length) % filteredData.length;
    updateLightbox();
  }

  document.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox__next').addEventListener('click', nextPhoto);
  document.querySelector('.lightbox__prev').addEventListener('click', prevPhoto);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === document.querySelector('.lightbox__content')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });

  // Touch swipe for lightbox
  var touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextPhoto();
      else prevPhoto();
    }
  }, { passive: true });

  /* ---- CONTACT FORM ---- */
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(contactForm);
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var t = translations[currentLang];
      submitBtn.textContent = t['form.sending'];
      submitBtn.disabled = true;

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          formSuccess.classList.add('show');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        formSuccess.classList.add('show');
        contactForm.reset();
      })
      .finally(function () {
        submitBtn.textContent = t['form.submit'];
        submitBtn.disabled = false;
      });
    });
  }

  /* ---- SCROLL ANIMATIONS ---- */
  function handleScrollAnimations() {
    var elements = document.querySelectorAll('.service-card, .review-card, .section-header');
    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.85) {
        el.classList.add('fade-in', 'visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimations, { passive: true });

  /* ---- INIT ---- */
  currentLang = detectLanguage();
  setLanguage(currentLang);
  loadGallery();
  handleScrollAnimations();

})();
