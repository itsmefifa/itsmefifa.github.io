// Progressive enhancements; content and navigation work without JavaScript.
(function () {
  'use strict';
  var year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-links');
  var header = document.querySelector('.nav');
  if (toggle && menu && header) {
    function closeMenu(returnFocus) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') closeMenu(false);
      else {
        document.body.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
      }
    });
    menu.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link) return;
      closeMenu(false);
      if (link.hash && link.pathname === location.pathname) {
        var target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', function (event) {
      if (!header.contains(event.target)) closeMenu(false);
    });
    header.addEventListener('focusout', function (event) {
      if (!header.contains(event.relatedTarget)) closeMenu(false);
    });
    var desktop = window.matchMedia('(min-width: 761px)');
    function onBreakpointChange() { closeMenu(false); }
    if (desktop.addEventListener) desktop.addEventListener('change', onBreakpointChange);
    else desktop.addListener(onBreakpointChange);
    document.body.classList.add('nav-enhanced');
  }

  // Compare section starts so long sections do not leave stale highlights.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link[href^="#"]'));
  var targets = links.map(function (link) { return document.getElementById(link.hash.slice(1)); }).filter(Boolean);
  if (targets.length) {
    var ticking = false;
    function updateCurrentSection() {
      var active = null;
      var offset = (header ? header.getBoundingClientRect().height : 0) + 100;
      targets.forEach(function (target) { if (target.getBoundingClientRect().top <= offset) active = target.id; });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) active = targets[targets.length - 1].id;
      links.forEach(function (link) {
        if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      ticking = false;
    }
    function scheduleUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('pageshow', scheduleUpdate);
    updateCurrentSection();
  }

  // Native dialog provides focus containment, Escape, and inert background.
  if (typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;
  var images = document.querySelectorAll('img[data-zoom], .archive__thumb, .moments img');
  if (!images.length) return;
  var dialog = document.createElement('dialog');
  dialog.className = 'evidence-dialog';
  dialog.setAttribute('aria-labelledby', 'evidence-dialog-title');
  var dialogHeader = document.createElement('div');
  dialogHeader.className = 'evidence-dialog__header';
  var title = document.createElement('h2');
  title.id = 'evidence-dialog-title';
  title.textContent = 'Evidence preview';
  var close = document.createElement('button');
  close.type = 'button';
  close.className = 'evidence-dialog__close';
  close.setAttribute('aria-label', 'Close evidence preview');
  close.textContent = '×';
  var preview = document.createElement('img');
  preview.className = 'evidence-dialog__image';
  preview.alt = '';
  var caption = document.createElement('p');
  caption.className = 'evidence-dialog__caption';
  dialogHeader.appendChild(title);
  dialogHeader.appendChild(close);
  dialog.appendChild(dialogHeader);
  dialog.appendChild(preview);
  dialog.appendChild(caption);
  document.body.appendChild(dialog);
  var origin = null;
  images.forEach(function (image) {
    if (image.closest('a, button')) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'image-zoom';
    button.setAttribute('aria-label', 'Enlarge: ' + image.alt);
    button.setAttribute('aria-haspopup', 'dialog');
    image.parentNode.insertBefore(button, image);
    button.appendChild(image);
    button.addEventListener('click', function () {
      origin = button;
      preview.src = image.getAttribute('data-full') || image.currentSrc || image.src;
      preview.alt = image.alt;
      var figure = image.closest('figure');
      var figureCaption = figure && figure.querySelector('figcaption');
      caption.textContent = figureCaption ? figureCaption.textContent : image.alt;
      dialog.showModal();
      document.body.classList.add('lightbox-open');
      close.focus();
    });
  });
  close.addEventListener('click', function () { dialog.close(); });
  // This preview has one interactive control. Keep Tab on it instead of letting
  // the browser move focus from the modal into its own chrome.
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      close.focus();
    }
  });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    document.body.classList.remove('lightbox-open');
    preview.removeAttribute('src');
    if (origin && origin.isConnected) origin.focus({ preventScroll: true });
  });
})();
