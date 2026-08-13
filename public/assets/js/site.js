/* CONVYO — site behaviour
   Everything degrades to a fully readable page if JS never runs:
   resting state in the markup is always the visible state. */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- preloader ---------- */
  var pre = document.querySelector('[data-preloader]');
  var pct = document.querySelector('[data-preload-pct]');
  if (pre && pct && !reduce) {
    var t0 = Date.now();
    var pid = setInterval(function () {
      var p = Math.min(1, (Date.now() - t0) / 1450);
      pct.textContent = Math.round(p * 100) + '%';
      if (p >= 1) clearInterval(pid);
    }, 45);
  }
  if (pre) setTimeout(function () { pre.style.display = 'none'; }, reduce ? 0 : 2100);

  /* ---------- mobile nav ---------- */
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('.nav__links a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- scroll reveals ---------- */
  var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'));
  var armed = false;
  function arm() {
    if (armed || reduce) return;
    armed = true;
    reveals.forEach(function (el, i) {
      el.style.transition = 'opacity .55s cubic-bezier(.16,.8,.3,1), transform .55s cubic-bezier(.16,.8,.3,1)';
      el.style.transitionDelay = ((i % 4) * 70) + 'ms';
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
      }
    });
  }

  /* ---------- counters ---------- */
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  function fmt(el, v) {
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    return (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suffix;
  }
  function runCount(el, instant) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    var target = parseFloat(el.getAttribute('data-count'));
    if (instant || reduce) { el.textContent = fmt(el, target); return; }
    var s = Date.now(), dur = 1400;
    var id = setInterval(function () {
      var p = Math.min(1, (Date.now() - s) / dur);
      el.textContent = fmt(el, target * (1 - Math.pow(1 - p, 3)));
      if (p >= 1) clearInterval(id);
    }, 40);
  }

  /* ---------- scroll-driven chrome ---------- */
  var bar = document.querySelector('[data-progress]');
  var spine = document.querySelector('[data-spine]');
  var rider = document.querySelector('[data-rider]');
  var spineWrap = spine ? spine.parentElement : null;
  var navLinks = [].slice.call(document.querySelectorAll('[data-scrollspy] a'));
  var spyTargets = navLinks
    .map(function (a) {
      var href = a.getAttribute('href') || '';
      var id = href.charAt(0) === '#' ? href.slice(1) : (href.split('#')[1] || '');
      var el = id ? document.getElementById(id) : null;
      return el ? { a: a, el: el } : null;
    })
    .filter(Boolean);

  function update() {
    var vh = window.innerHeight;

    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        reveals.splice(i, 1);
      }
    }

    counters.forEach(function (c) {
      var r = c.getBoundingClientRect();
      if (r.bottom <= 0) runCount(c, true);
      else if (r.top < vh * 0.92) runCount(c);
    });

    if (bar) {
      var doc = document.documentElement;
      var max = (doc.scrollHeight - vh) || 1;
      bar.style.width = Math.min(100, Math.max(0, (window.scrollY / max) * 100)) + '%';
    }

    if (spine && spineWrap) {
      var r2 = spineWrap.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (vh * 0.55 - r2.top) / (r2.height || 1)));
      spine.style.height = (p * 100) + '%';
      if (rider) {
        rider.style.top = (p * 100) + '%';
        rider.style.opacity = p > 0 && p < 1 ? '1' : '0';
      }
    }

    if (spyTargets.length) {
      var current = null;
      spyTargets.forEach(function (t) {
        if (t.el.getBoundingClientRect().top <= vh * 0.35) current = t.a;
      });
      navLinks.forEach(function (a) { a.classList.toggle('is-active', a === current); });
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; update(); });
  }
  arm();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('load', update);

  /* ---------- live telemetry in the hero device ---------- */
  var speedEl = document.querySelector('[data-speed]');
  var clockEl = document.querySelector('[data-clock]');
  if (speedEl && !reduce) {
    var s = 62;
    setInterval(function () {
      s += Math.random() < 0.5 ? -1 : 1;
      s = Math.max(58, Math.min(67, s));
      speedEl.textContent = s;
    }, 1600);
  }
  if (clockEl && !reduce) {
    var secs = 134;
    setInterval(function () {
      secs++;
      clockEl.textContent = Math.floor(secs / 60) + ':' + String(secs % 60).padStart(2, '0');
    }, 1000);
  }

  /* ---------- smooth anchor travel with sticky-nav offset ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="#"]');
    if (!a || a.target === '_blank') return;
    var href = a.getAttribute('href') || '';
    // Footer links are shared across pages as "/#stations"; treat them as
    // in-page jumps when we are already on that page.
    var url;
    try { url = new URL(a.href); } catch (err) { return; }
    if (url.origin !== location.origin) return;
    var here = location.pathname.replace(/index\.html$/, '');
    var there = url.pathname.replace(/index\.html$/, '');
    if (there !== here) return;
    var id = url.hash.slice(1);
    if (!id) return;
    var t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 58,
      behavior: reduce ? 'auto' : 'smooth'
    });
    history.replaceState(null, '', '#' + id);
  });

  /* ---------- current year ---------- */
  [].slice.call(document.querySelectorAll('[data-year]')).forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
