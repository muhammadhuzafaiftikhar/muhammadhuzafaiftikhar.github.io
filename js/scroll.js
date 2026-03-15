// Intersection Observer for scroll-triggered reveals
(function() {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elements that reveal on scroll
  var revealSelectors = '.reveal, .reveal-up, .reveal-scale, .stagger-children, .timeline__item, .card-enter, .svg-divider';

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  // If reduced motion, just show everything immediately
  if (reducedMotion) {
    document.querySelectorAll(revealSelectors).forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }

  document.querySelectorAll(revealSelectors).forEach(function(el) {
    observer.observe(el);
  });
})();
