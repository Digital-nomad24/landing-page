import { useEffect } from 'react';

export function useSiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const pre = document.querySelector('[data-preloader]');
    const pct = document.querySelector('[data-preload-pct]');
    let pctInterval;

    if (pre && pct && !reduce) {
      const t0 = Date.now();
      pctInterval = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / 1450);
        pct.textContent = `${Math.round(p * 100)}%`;
        if (p >= 1) clearInterval(pctInterval);
      }, 45);
    }

    const preTimeout = pre
      ? setTimeout(() => {
          pre.style.display = 'none';
        }, reduce ? 0 : 2100)
      : null;

    const nav = document.querySelector('[data-nav]');
    const toggle = document.querySelector('[data-nav-toggle]');

    const onToggle = () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const onNavClick = (e) => {
      if (e.target.closest('.nav__links a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    if (nav && toggle) {
      toggle.addEventListener('click', onToggle);
      nav.addEventListener('click', onNavClick);
    }

    let reveals = [...document.querySelectorAll('[data-reveal]')];
    let armed = false;

    const arm = () => {
      if (armed || reduce) return;
      armed = true;
      reveals.forEach((el, i) => {
        el.style.transition =
          'opacity .55s cubic-bezier(.16,.8,.3,1), transform .55s cubic-bezier(.16,.8,.3,1)';
        el.style.transitionDelay = `${(i % 4) * 70}ms`;
        if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(16px)';
        }
      });
    };

    const counters = [...document.querySelectorAll('[data-count]')];

    const fmt = (el, v) => {
      const dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      return (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suffix;
    };

    const runCount = (el, instant) => {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      const target = parseFloat(el.getAttribute('data-count'));
      if (instant || reduce) {
        el.textContent = fmt(el, target);
        return;
      }
      const s = Date.now();
      const dur = 1400;
      const id = setInterval(() => {
        const p = Math.min(1, (Date.now() - s) / dur);
        el.textContent = fmt(el, target * (1 - (1 - p) ** 3));
        if (p >= 1) clearInterval(id);
      }, 40);
    };

    const bar = document.querySelector('[data-progress]');
    const spine = document.querySelector('[data-spine]');
    const rider = document.querySelector('[data-rider]');
    const spineWrap = spine?.parentElement ?? null;
    const navLinks = [...document.querySelectorAll('[data-scrollspy] a')];
    const spyTargets = navLinks
      .map((a) => {
        const href = a.getAttribute('href') || '';
        const id = href.charAt(0) === '#' ? href.slice(1) : href.split('#')[1] || '';
        const el = id ? document.getElementById(id) : null;
        return el ? { a, el } : null;
      })
      .filter(Boolean);

    const update = () => {
      const vh = window.innerHeight;

      for (let i = reveals.length - 1; i >= 0; i -= 1) {
        const el = reveals[i];
        if (el.getBoundingClientRect().top < vh * 0.9) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          reveals.splice(i, 1);
        }
      }

      counters.forEach((c) => {
        const r = c.getBoundingClientRect();
        if (r.bottom <= 0) runCount(c, true);
        else if (r.top < vh * 0.92) runCount(c);
      });

      if (bar) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - vh || 1;
        bar.style.width = `${Math.min(100, Math.max(0, (window.scrollY / max) * 100))}%`;
      }

      if (spine && spineWrap) {
        const r2 = spineWrap.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.55 - r2.top) / (r2.height || 1)));
        spine.style.height = `${p * 100}%`;
        if (rider) {
          rider.style.top = `${p * 100}%`;
          rider.style.opacity = p > 0 && p < 1 ? '1' : '0';
        }
      }

      if (spyTargets.length) {
        let current = null;
        spyTargets.forEach((t) => {
          if (t.el.getBoundingClientRect().top <= vh * 0.35) current = t.a;
        });
        navLinks.forEach((a) => a.classList.toggle('is-active', a === current));
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    const speedEl = document.querySelector('[data-speed]');
    const clockEl = document.querySelector('[data-clock]');
    let speedInterval;
    let clockInterval;

    if (speedEl && !reduce) {
      let s = 62;
      speedInterval = setInterval(() => {
        s += Math.random() < 0.5 ? -1 : 1;
        s = Math.max(58, Math.min(67, s));
        speedEl.textContent = s;
      }, 1600);
    }

    if (clockEl && !reduce) {
      let secs = 134;
      clockInterval = setInterval(() => {
        secs += 1;
        clockEl.textContent = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`;
      }, 1000);
    }

    const onAnchorClick = (e) => {
      const a = e.target.closest('a[href*="#"]');
      if (!a || a.target === '_blank') return;
      let url;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin) return;
      const here = location.pathname.replace(/index\.html$/, '');
      const there = url.pathname.replace(/index\.html$/, '');
      if (there !== here) return;
      const id = url.hash.slice(1);
      if (!id) return;
      const t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      window.scrollTo({
        top: t.getBoundingClientRect().top + window.scrollY - 58,
        behavior: reduce ? 'auto' : 'smooth',
      });
      history.replaceState(null, '', `#${id}`);
    };

    arm();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', update);
    document.addEventListener('click', onAnchorClick);

    return () => {
      if (pctInterval) clearInterval(pctInterval);
      if (preTimeout) clearTimeout(preTimeout);
      if (speedInterval) clearInterval(speedInterval);
      if (clockInterval) clearInterval(clockInterval);
      if (nav && toggle) {
        toggle.removeEventListener('click', onToggle);
        nav.removeEventListener('click', onNavClick);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', update);
      document.removeEventListener('click', onAnchorClick);
    };
  }, []);
}

export function usePageMeta({ title, description, canonical, robots }) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
    if (robots) {
      let meta = document.querySelector('meta[name="robots"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'robots';
        document.head.appendChild(meta);
      }
      meta.content = robots;
    }
  }, [title, description, canonical, robots]);
}
