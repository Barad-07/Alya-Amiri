/* ==========================================================================
   navigation.js — header, footer, mobile menu, anchor scrolling,
   active-section indicator and the intro curtain.
   ========================================================================== */
window.ALYA = window.ALYA || {};

(function () {
  const { t } = ALYA.i18n;
  const root = document.documentElement;

  ALYA.ui = ALYA.ui || {};
  ALYA.ui.arrow = (cls = 'btn__arrow') =>
    `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>`;

  const LINKS = ['about', 'practice', 'approach', 'work', 'contact'].filter((id) => id !== 'work' || ALYA.config.sections.work);

  function headerHTML() {
    const links = LINKS.map((id) => `<li><a class="nav__link link-u" href="#${id}" data-nav="${id}" data-i18n="nav.${id}"></a></li>`).join('');
    const mobile = LINKS.map((id, i) => `<li><a class="mobile-menu__link" href="#${id}" data-nav="${id}"><span data-i18n="nav.${id}"></span><small class="ltr">0${i + 1}</small></a></li>`).join('');
    return `
      <a class="skip-link" href="#main" data-i18n="nav.skip"></a>
      <header class="site-header" id="site-header">
        <div class="wrap header__inner">
          <a class="brand" href="#top" aria-label="Alya Al Ameri">
            <span class="brand__name" data-i18n="brand.name"></span>
            <span class="brand__sub" data-i18n="brand.sub"></span>
          </a>
          <nav class="nav" aria-label="Primary">
            <ul class="nav__list">${links}</ul>
            <div class="nav__tools">
              <button class="lang-switch" type="button" data-lang-toggle data-i18n-attr="aria-label:nav.lang">
                <span class="lang-switch__opt" data-lang="en">EN</span><span class="lang-switch__sep">/</span><span class="lang-switch__opt lang-switch__ar" data-lang="ar">ع</span>
              </button>
              <a class="btn btn--sm" href="#contact"><span data-i18n="nav.cta"></span></a>
              <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-i18n-attr="aria-label:nav.menu"><span></span><span></span></button>
            </div>
          </nav>
        </div>
      </header>
      <div class="mobile-menu on-dark" id="mobile-menu" aria-hidden="true">
        <ul class="mobile-menu__list">${mobile}</ul>
        <div class="mobile-menu__foot">
          <a class="btn" href="#contact"><span data-i18n="nav.cta"></span>${ALYA.ui.arrow()}</a>
          <p class="label" data-i18n="contact.hours"></p>
        </div>
      </div>
      <div class="curtain" aria-hidden="true"><div class="curtain__panel curtain__panel--accent"></div><div class="curtain__panel"></div><span class="curtain__mark" data-i18n="brand.name"></span></div>
      <div class="cursor" aria-hidden="true"><span class="cursor__text" data-i18n="common.view"></span></div>`;
  }

  function footerHTML() {
    const c = ALYA.config.contact;
    const ph = (key) => `<span class="ph" data-i18n="contact.${key}"></span>`;
    const email = c.email ? `<a class="link-u ltr" href="mailto:${c.email}">${c.email}</a>` : ph('emailPh');
    const phone = c.phone ? `<a class="link-u ltr" href="tel:${c.phone.replace(/\s/g, '')}">${c.phone}</a>` : ph('phonePh');
    return `
      <footer class="site-footer on-dark">
        <div class="wrap">
          <div class="grid footer__grid">
            <div class="footer__brand">
              <span class="brand__name" data-i18n="brand.name"></span>
              <p data-i18n="footer.about"></p>
            </div>
            <div class="footer__col">
              <span class="label" data-i18n="footer.explore"></span>
              ${LINKS.map((id) => `<a class="link-u" href="#${id}" data-i18n="nav.${id}"></a>`).join('')}
            </div>
            <div class="footer__col footer__col--wide">
              <span class="label" data-i18n="footer.reach"></span>
              ${email}${phone}
              <span class="muted" data-i18n="contact.hours"></span>
            </div>
            <div class="footer__col footer__col--wide">
              <span class="label" data-i18n="contact.whatsapp"></span>
              <a class="link-u" href="#contact" data-whatsapp-cta data-i18n="contact.openWhatsapp"></a>
              <button class="link-u" type="button" data-to-top style="justify-self:start;margin-top:12px" data-i18n="footer.top"></button>
            </div>
          </div>
          <div class="footer__mark" aria-hidden="true" data-i18n="brand.mark"></div>
          <div class="footer__disclaimer">
            <p data-i18n="footer.disclaimer"></p>
            <p><span class="ltr">© <span data-year></span></span> <span data-i18n="brand.name"></span>. <span data-i18n="footer.rights"></span></p>
          </div>
        </div>
      </footer>`;
  }

  /* ---------- Smooth anchor scrolling (offset by the fixed header) ---------- */
  function scrollToId(id) {
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (!el) return;
    const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) + 1;
    window.scrollTo({ top: y, behavior: root.classList.contains('motion') ? 'smooth' : 'auto' });
    if (id !== 'top') { el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); }
  }

  /* ---------- Header: solid on scroll, hides going down, shows going up ---------- */
  function initHeader() {
    const header = document.getElementById('site-header');
    let lastY = window.scrollY, ticking = false;
    const update = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      if (!root.classList.contains('menu-open')) header.classList.toggle('is-hidden', y > lastY && y > 320);
      lastY = y; ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---------- Active section indicator ---------- */
  function initScrollSpy() {
    const sections = LINKS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const setActive = (id) => document.querySelectorAll('[data-nav]').forEach((a) => {
      const on = a.dataset.nav === id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
    const hero = document.getElementById('top');
    if (hero) new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(''); }, { rootMargin: '-45% 0px -50% 0px' }).observe(hero);
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    const btn = document.querySelector('.menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const set = (open) => {
      root.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.menu'));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) document.getElementById('site-header').classList.remove('is-hidden');
    };
    btn.addEventListener('click', () => set(!root.classList.contains('menu-open')));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains('menu-open')) { set(false); btn.focus(); } });
    menu.querySelectorAll('.mobile-menu__link').forEach((a, i) => { a.firstElementChild.style.transitionDelay = `${0.15 + i * 0.05}s`; });
    window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => { if (e.matches) set(false); });
    ALYA.navigation.closeMenu = () => set(false);
  }

  /* ---------- Intro curtain ---------- */
  function initIntro() {
    const curtain = document.querySelector('.curtain');
    const panels = curtain.querySelectorAll('.curtain__panel');
    const mark = curtain.querySelector('.curtain__mark');
    const ready = () => root.classList.add('is-ready');
    const play = root.classList.contains('is-arriving') && root.classList.contains('motion') && !!Element.prototype.animate;
    if (!play) { root.classList.remove('is-arriving'); requestAnimationFrame(() => requestAnimationFrame(ready)); return; }
    const ease = 'cubic-bezier(0.65, 0, 0.35, 1)';
    mark.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }, { opacity: 1 }, { opacity: 0 }], { duration: 1100, easing: 'ease', fill: 'forwards' });
    panels.forEach((p, i) => p.animate([{ transform: 'scaleY(1)' }, { transform: 'scaleY(0)' }], { duration: 1000, delay: 900 + (i === 0 ? 140 : 0), easing: ease, fill: 'forwards' }));
    setTimeout(ready, 1150);
    setTimeout(() => root.classList.remove('is-arriving'), 2200);
  }

  function init() {
    document.querySelector('[data-partial="header"]').outerHTML = headerHTML();
    document.querySelector('[data-partial="footer"]').outerHTML = footerHTML();
    document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-lang-toggle]')) ALYA.i18n.setLang(ALYA.i18n.lang === 'ar' ? 'en' : 'ar');
      if (e.target.closest('[data-to-top]')) scrollToId('top');
      const a = e.target.closest('a[href^="#"]');
      if (a && a.getAttribute('href').length > 1 && !a.classList.contains('skip-link')) {
        const id = a.getAttribute('href').slice(1);
        if (id === 'top' || document.getElementById(id)) {
          e.preventDefault();
          if (root.classList.contains('menu-open')) { ALYA.navigation.closeMenu(); setTimeout(() => scrollToId(id), 350); }
          else scrollToId(id);
        }
      }
    });
    initHeader();
    initMenu();
    initScrollSpy();
    initIntro();
  }

  ALYA.navigation = { init, scrollToId };
})();
