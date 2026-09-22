// Tabletop Picks blog hero carousel. Progressive: works without JS (first slide img has no src until JS sets it -> we set fallback too)
document.querySelectorAll('.blog-carousel').forEach(function (car) {
  var dataEl = car.querySelector('.bc-data');
  if (!dataEl) return;
  var slides;
  try { slides = JSON.parse(dataEl.textContent); } catch (e) { return; }
  if (!slides || !slides.length) return;

  var img = car.querySelector('.bc-slide');
  var dotsWrap = car.querySelector('.bc-dots');
  var prev = car.querySelector('.bc-prev');
  var next = car.querySelector('.bc-next');
  var i = 0;

  function render() {
    var s = slides[i];
    img.src = s.src;
    img.alt = s.alt || '';
    Array.prototype.forEach.call(dotsWrap.children, function (d, idx) {
      d.classList.toggle('active', idx === i);
    });
  }

  slides.forEach(function (s, idx) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'bc-dot';
    b.setAttribute('aria-label', 'Show game ' + (idx + 1) + ' of ' + slides.length);
    b.addEventListener('click', function () { i = idx; render(); });
    dotsWrap.appendChild(b);
  });

  if (prev) prev.addEventListener('click', function () { i = (i - 1 + slides.length) % slides.length; render(); });
  if (next) next.addEventListener('click', function () { i = (i + 1) % slides.length; render(); });

  var x0 = null;
  car.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  car.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { i = (dx < 0 ? i + 1 : i - 1 + slides.length) % slides.length; render(); }
    x0 = null;
  });
  car.setAttribute('tabindex', '0');
  car.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { i = (i - 1 + slides.length) % slides.length; render(); }
    if (e.key === 'ArrowRight') { i = (i + 1) % slides.length; render(); }
  });

  render();
});