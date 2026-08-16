// Main JavaScript for Chanisara's Portfolio

(function() {
  // Set current year in footer
  document.addEventListener('DOMContentLoaded', function() {
    var yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile navigation toggle
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.querySelector('.nav__links');
    
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        var isExpanded = navLinks.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded.toString());
        
        // Update hamburger icon
        var spans = navToggle.querySelectorAll('span');
        if (isExpanded) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
      
      // Close mobile menu when clicking a link
      document.querySelectorAll('.nav__link').forEach(function(link) {
        link.addEventListener('click', function() {
          navLinks.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          var spans = navToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        });
      });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#' || href === '#hero') return;
        
        e.preventDefault();
        var targetElement = document.querySelector(href);
        if (targetElement) {
          var headerHeight = document.querySelector('.nav').offsetHeight;
          var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Update active nav link on scroll
    var sections = document.querySelectorAll('section[id]');
    var navLinksElements = document.querySelectorAll('.nav__link');
    
    function updateActiveNavLink() {
      var scrollPosition = window.scrollY + 100;
      
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        var sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinksElements.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
  });
})();
