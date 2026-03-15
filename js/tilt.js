// 3D tilt effect for [data-tilt] cards
(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach(function(card) {
    var shine = card.querySelector('.card__shine');

    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;

      var rotateX = ((y - centerY) / centerY) * -8;
      var rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

      if (shine) {
        var pctX = (x / rect.width) * 100;
        var pctY = (y / rect.height) * 100;
        shine.style.background = 'radial-gradient(circle at ' + pctX + '% ' + pctY + '%, rgba(232, 99, 74, 0.15), transparent 60%)';
      }
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(function() {
        card.style.transition = '';
      }, 500);
    });

    card.addEventListener('mouseenter', function() {
      card.style.transition = '';
    });
  });
})();
