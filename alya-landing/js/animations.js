/* ==========================================================================
   animations.js — scroll reveals, parallax, horizontal scroll, cursor
   and the practice image preview. Vanilla JS: IntersectionObserver
   for triggers, one shared requestAnimationFrame loop for scroll effects.
   Everything is skipped when the visitor prefers reduced motion.
   ========================================================================== */
window.ALYA = window.ALYA || {};

(function () {
  const root = document.documentElement;
  const motion = () => root.classList.contains('motion');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const desktop = window.matchMedia('(min-width: 1025px)');
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const isRTL = () => root.dir === 'rtl';

  /* ---------- Reveal on enter ---------- */
  let io = null;
  function observeReveals(scope = document) {
    const targets = scope.querySelectorAll('[data-reveal], [data-stagger]');
    if (!motion() || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    targets.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
  }

  /* ---------- Scroll loop (parallax, words, horizontal scroll) ---------- */
  const tasks = new Set();
  let running = false;
  function frame() {
    tasks.forEach((fn) => fn());
    running = false;
  }
  function requestFrame() { if (!running) { running = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);

  function parallax() {
    if (!motion() || !ALYA.config.motion.parallax) return;
    let els = document.querySelectorAll('[data-parallax]');
    document.addEventListener('alya:rendered', () => { els = document.querySelectorAll('[data-parallax]'); });
    tasks.add(() => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const box = el.parentElement.getBoundingClientRect();
        if (box.bottom < -100 || box.top > vh + 100) return;
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        const p = (box.top + box.height / 2 - vh / 2) / vh; // -1 … 1 around centre
        el.style.transform = `translate3d(0, ${(p * speed * 100).toFixed(2)}px, 0)`;
      });
    });
  }

  function wordsOnScroll() {
    const blocks = document.querySelectorAll('[data-words-scroll]');
    if (!blocks.length) return;
    if (!motion()) { blocks.forEach((b) => b.querySelectorAll('.w').forEach((w) => w.classList.add('is-on'))); return; }
    tasks.add(() => {
      const vh = window.innerHeight;
      blocks.forEach((b) => {
        const r = b.getBoundingClientRect();
        const words = b.querySelectorAll('.w');
        const progress = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
        const lit = Math.round(progress * words.length);
        words.forEach((w, i) => w.classList.toggle('is-on', i < lit));
      });
    });
  }

  function horizontalScroll() {
    const sections = document.querySelectorAll('[data-hscroll]');
    sections.forEach((sec) => {
      const track = sec.querySelector('.hscroll__track');
      const bar = sec.querySelector('.hscroll__progress span');
      if (!track) return;
      const size = () => {
        if (!desktop.matches || !motion()) { sec.style.height = ''; track.style.transform = ''; return; }
        const distance = Math.max(0, track.scrollWidth - window.innerWidth);
        sec.style.height = `${window.innerHeight + distance}px`;
        sec.dataset.distance = distance;
      };
      size();
      window.addEventListener('resize', size);
      document.addEventListener('alya:lang', () => setTimeout(size, 50));
      document.addEventListener('alya:rendered', size);
      tasks.add(() => {
        if (!desktop.matches || !motion()) return;
        const distance = parseFloat(sec.dataset.distance) || 0;
        const r = sec.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, r.height - window.innerHeight), 0, 1);
        const x = p * distance * (isRTL() ? 1 : -1);
        track.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`;
        if (bar) bar.style.transform = `scaleX(${p.toFixed(3)})`;
      });
    });
  }

  /* ---------- Custom cursor ---------- */
  function cursor() {
    const el = document.querySelector('.cursor');
    if (!el || !motion() || !finePointer.matches || !ALYA.config.motion.cursor) return;
    let x = -100, y = -100, cx = -100, cy = -100;
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; el.classList.add('is-visible'); }, { passive: true });
    document.addEventListener('mouseleave', () => el.classList.remove('is-visible'));
    document.addEventListener('mouseover', (e) => {
      const view = e.target.closest('[data-cursor="view"]');
      const link = e.target.closest('a, button, [role="button"], input, select, textarea, label');
      el.classList.toggle('is-view', !!view);
      el.classList.toggle('is-link', !view && !!link);
    });
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Practice list: floating image preview ---------- */
  function practicePreview(scope = document) {
    const list = scope.querySelector('[data-practice-list]');
    const preview = document.querySelector('.practice__preview');
    if (!list || !preview || !finePointer.matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, active = false, raf = null;
    const loop = () => {
      cx += (x - cx) * 0.14; cy += (y - cy) * 0.14;
      preview.style.left = `${cx}px`; preview.style.top = `${cy}px`;
      raf = active ? requestAnimationFrame(loop) : null;
    };
    list.addEventListener('mousemove', (e) => { x = e.clientX + (isRTL() ? -140 : 140); y = e.clientY; });
    list.addEventListener('mouseenter', (e) => {
      if (list.classList.contains('has-open')) return; // a panel already shows its image
      x = cx = e.clientX; y = cy = e.clientY; active = true;
      preview.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(loop);
    });
    list.addEventListener('mouseleave', () => { active = false; preview.classList.remove('is-on'); });
    list.querySelectorAll('[data-preview]').forEach((item) => {
      item.addEventListener('mouseenter', () => {
        preview.querySelectorAll('img').forEach((img) => img.classList.toggle('is-current', img.dataset.key === item.dataset.preview));
      });
    });
  }

  function init() {
    observeReveals();
    parallax();
    wordsOnScroll();
    horizontalScroll();
    cursor();
    requestFrame();
  }

  ALYA.animations = { init, observeReveals, practicePreview, refresh: requestFrame };
})();
