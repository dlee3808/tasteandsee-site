// Taste & See Creamery — small behaviors: photo slider, review slider.
(function () {
  // Photo slider: auto-advances every 4s, "next" arrow jumps ahead.
  var track = document.querySelector('.slider__track');
  if (track) {
    var n = track.children.length, i = 0, timer;
    function go(k) { i = (k + n) % n; track.style.transform = 'translateX(' + (-100 * i) + '%)'; }
    function arm() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 4000); }
    document.querySelector('.slider__next').addEventListener('click', function () { go(i + 1); arm(); });
    arm();
  }

  // Review slider: fades between reviews every 6s, arrows step through.
  var slides = document.querySelectorAll('.reviews__slide');
  if (slides.length) {
    var m = slides.length, j = 0, t2;
    function show(k) { slides[j].classList.remove('is-on'); j = (k + m) % m; slides[j].classList.add('is-on'); }
    function arm2() { clearInterval(t2); t2 = setInterval(function () { show(j + 1); }, 6000); }
    document.querySelector('.reviews__prev').addEventListener('click', function () { show(j - 1); arm2(); });
    document.querySelector('.reviews__next').addEventListener('click', function () { show(j + 1); arm2(); });
    arm2();
  }
})();

// Background videos: browsers sometimes block autoplay until the page is touched.
(function () {
  var vids = document.querySelectorAll('video');
  function play() { vids.forEach(function (v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }); }
  play();
  ['click', 'touchstart', 'scroll', 'keydown'].forEach(function (ev) { window.addEventListener(ev, play, { once: true, passive: true }); });
})();
