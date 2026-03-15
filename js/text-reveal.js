// Staggered character reveal for hero name
(function() {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var el = document.querySelector('[data-text-reveal]');
  if (!el) return;

  var text = el.textContent.trim();
  el.textContent = '';
  el.style.overflow = 'hidden';

  var charIndex = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      var space = document.createElement('span');
      space.className = 'char-space';
      el.appendChild(space);
    } else {
      var span = document.createElement('span');
      span.className = 'char';
      span.textContent = text[i];
      if (!reducedMotion) {
        span.style.animationDelay = (0.4 + charIndex * 0.04) + 's';
      } else {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }
      el.appendChild(span);
      charIndex++;
    }
  }

  // Trigger annotation animation
  var annotation = document.querySelector('.hero__annotation');
  if (annotation && !reducedMotion) {
    annotation.classList.add('animated');
  } else if (annotation) {
    annotation.style.opacity = '1';
  }
})();
