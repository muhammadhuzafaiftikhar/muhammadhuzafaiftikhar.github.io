// Side dot navigation — active state + smooth scroll
(function() {
  var dots = document.querySelectorAll('.side-nav__dot');
  var sections = [];

  dots.forEach(function(dot) {
    var sectionId = dot.getAttribute('data-section');
    var section = document.getElementById(sectionId);
    if (section) {
      sections.push({ el: section, dot: dot });
    }

    dot.addEventListener('click', function() {
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Update active dot on scroll
  var ticking = false;

  function updateActive() {
    var scrollY = window.scrollY + window.innerHeight * 0.35;

    var active = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (scrollY >= sections[i].el.offsetTop) {
        active = sections[i];
      }
    }

    dots.forEach(function(d) { d.classList.remove('active'); });
    if (active) active.dot.classList.add('active');

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(updateActive);
      ticking = true;
    }
  }, { passive: true });

  updateActive();
})();
