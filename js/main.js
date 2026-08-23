// Chanisara Kotrachai — minimal interactions
(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-links');

  function closeMenu() {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (document.body.classList.contains('nav-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('nav-open') &&
          !e.target.closest('.nav')) {
        closeMenu();
      }
    });
  }

  // Scrollspy: highlight the nav link of the section in view.
  // Sections without a nav link map to the nearest nav target (or none).
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var spyMap = {
    introduction: null,
    bridge: null,
    experience: 'experience',
    work: 'work',
    archive: 'archive',
    research: 'research',
    certifications: 'archive',
    honors: 'archive',
    education: 'archive',
    leadership: 'archive',
    moments: 'archive',
    contact: 'contact'
  };
  var sections = Object.keys(spyMap)
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (link) {
      var match = id !== null && link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', match);
      if (match) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(spyMap[entry.target.id]);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // === UX POLISH v1: accessible project lightbox ===
  // Project visuals are evidence, so allow closer inspection without
  // turning the site into a carousel or changing its editorial layout.
  var zoomableImages = Array.prototype.slice.call(
    document.querySelectorAll(
      '.project img, ' +
      '.jelly__evidence-grid img, ' +
      '.moments img, ' +
      '.research__visual img, ' +
      '.archive__thumb'
    )
  );

  if (zoomableImages.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'portfolio-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');

    var dialog = document.createElement('div');
    dialog.className = 'portfolio-lightbox__dialog';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-label', 'Project image preview');

    var preview = document.createElement('img');
    preview.className = 'portfolio-lightbox__image';
    preview.alt = '';

    var closeButton = document.createElement('button');
    closeButton.className = 'portfolio-lightbox__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close image preview');
    closeButton.textContent = '×';

    dialog.appendChild(preview);
    dialog.appendChild(closeButton);
    lightbox.appendChild(dialog);
    document.body.appendChild(lightbox);

    var previouslyFocused = null;

    function openLightbox(sourceImage) {
      previouslyFocused = document.activeElement;
      preview.src = sourceImage.currentSrc || sourceImage.src;
      preview.alt = sourceImage.alt || 'Project image preview';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      preview.removeAttribute('src');

      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    }

    zoomableImages.forEach(function (image) {
      image.setAttribute('tabindex', '0');
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label',
        (image.alt ? image.alt + '. ' : '') + 'Open larger image'
      );

      image.addEventListener('click', function () {
        openLightbox(image);
      });

      image.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }


  // === UX POLISH v3: lightbox targets + floating back-to-top ===

  // Turn the existing footer "Back to top" link into a floating utility
  // after the visitor has moved beyond the hero.
  var backToTop = document.querySelector('.footer__top');

  if (backToTop) {
    var ticking = false;

    function updateBackToTop() {
      backToTop.classList.toggle('is-visible', window.scrollY > 700);
      ticking = false;
    }

    function requestBackToTopUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateBackToTop);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestBackToTopUpdate, { passive: true });
    updateBackToTop();
  }

})();
