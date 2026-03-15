// Parallax effect on decorative blobs — mousemove
(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;

  var targetX = 0, targetY = 0;
  var currentX = 0, currentY = 0;

  document.addEventListener('mousemove', function(e) {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    blobs.forEach(function(blob, i) {
      var factor = (i + 1) * 15;
      blob.style.transform = 'translate(' + (currentX * factor) + 'px, ' + (currentY * factor) + 'px) rotate(' + (currentX * 5) + 'deg)';
    });

    requestAnimationFrame(animate);
  }
  animate();
})();
