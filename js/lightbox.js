// Lightbox — click any [data-lightbox] image to view it full-size
(function () {
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button>' +
    '<img class="lightbox__img" alt="">';
  document.body.appendChild(box);

  var img = box.querySelector('.lightbox__img');
  var closeBtn = box.querySelector('.lightbox__close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (el) {
    el.addEventListener('click', function () {
      open(el.getAttribute('src'), el.getAttribute('alt'));
    });
  });

  box.addEventListener('click', function (e) {
    if (e.target === box || e.target === closeBtn) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();
