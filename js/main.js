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
    certifications: null,
    honors: null,
    education: null,
    leadership: null,
    moments: null,
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
})();
