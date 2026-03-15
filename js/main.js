// Main initialization
(function() {
  // Hide scroll indicator after first scroll
  var scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    var hidden = false;
    window.addEventListener('scroll', function() {
      if (!hidden && window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transition = 'opacity 0.5s ease';
        hidden = true;
      }
    }, { passive: true });
  }

  // Video cycle — crossfade between videos every 6s
  document.querySelectorAll('[data-video-cycle]').forEach(function(container) {
    var videos = container.querySelectorAll('.cycle-video');
    if (videos.length < 2) return;
    var current = 0;

    setInterval(function() {
      videos[current].classList.remove('active');
      videos[current].pause();
      current = (current + 1) % videos.length;
      videos[current].currentTime = 0;
      videos[current].play();
      videos[current].classList.add('active');
    }, 10000);
  });

  // Set current year in footer
  var footerYear = document.querySelector('.footer p');
  if (footerYear) {
    var year = new Date().getFullYear();
    footerYear.innerHTML = '&copy; ' + year + ' Muhammad Huzafa Iftikhar';
  }
})();
