/* ==========================================================================
   landing.js — renders the repeated parts of the page from data.js and
   translations.js, and runs the practice accordion and the contact form.
   Everything re-renders instantly when the language changes.
   ========================================================================== */
window.ALYA = window.ALYA || {};

(function () {
  const { t, pick } = ALYA.i18n;
  const arrow = (c) => ALYA.ui.arrow(c);
  const lang = () => ALYA.i18n.lang;
  const qs = (sel) => document.querySelector(sel);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const ph = (text) => `<span class="ph">${esc(text)}</span>`;
  const services = () => [...ALYA.data.services].sort((a, b) => (a.order || 0) - (b.order || 0));

  function done(el) {
    ALYA.i18n.apply(el);
    ALYA.animations.observeReveals(el);
    document.dispatchEvent(new CustomEvent('alya:rendered'));
    ALYA.animations.refresh();
  }

  /* ---------- About ---------- */
  function about() {
    ['intro', 'bio'].forEach((k) => {
      const el = qs(`[data-render="about-${k}"]`);
      if (el) el.innerHTML = t(`about.${k}`).map((p) => `<p>${p}</p>`).join('');
    });
    const quals = qs('[data-render="about-quals"]');
    if (quals) {
      quals.innerHTML = t('about.quals').map((q) => `<div class="fact"><span class="fact__title">${q.t}</span><span class="muted">${q.d}</span></div>`).join('');
      done(quals);
    }
  }

  /* ---------- Method ---------- */
  function steps() {
    const el = qs('[data-render="steps"]');
    if (!el) return;
    el.innerHTML = t('approach.steps').map((s, i) => `<li class="step" data-reveal="up"><span class="step__num ltr">${pad(i + 1)}</span><div><h3 class="step__title">${esc(s.t)}</h3><p class="step__text">${esc(s.d)}</p></div></li>`).join('');
    done(el);
  }

  /* ---------- Practice accordion ---------- */
  let openSlug = null;
  function practice() {
    const el = qs('[data-render="practice"]');
    if (!el) return;
    const list = services();
    el.innerHTML = `<ul class="practice__list${openSlug ? ' has-open' : ''}" data-practice-list data-stagger>
      ${list.map((s, i) => {
        const open = s.slug === openSlug;
        return `<li class="practice__item">
          <button type="button" class="practice__link" id="pr-${esc(s.slug)}" aria-expanded="${open}" aria-controls="pp-${esc(s.slug)}" data-preview="${esc(s.slug)}" data-slug="${esc(s.slug)}">
            <span class="practice__num ltr">${pad(i + 1)}</span>
            <span class="practice__title">${esc(pick(s.title))}</span>
            <span class="practice__short">${esc(pick(s.short))}</span>
            <span class="practice__toggle" aria-hidden="true"></span>
          </button>
          <div class="practice__panel${open ? ' is-open' : ''}" id="pp-${esc(s.slug)}" role="region" aria-labelledby="pr-${esc(s.slug)}">
            <div><div class="practice__detail"${open ? '' : ' inert'}>
              <div class="frame"><img src="${esc(s.image)}" alt="" loading="lazy"></div>
              <div class="practice__detail-body">
                ${(pick(s.body) || []).map((p) => `<p>${esc(p)}</p>`).join('')}
                <div><span class="label">${esc(t('practice.scope'))}</span>
                  <ul class="scope" style="margin-top:12px">${(pick(s.scope) || []).map((x, j) => `<li><span class="ltr">${pad(j + 1)}</span><span>${esc(x)}</span></li>`).join('')}</ul>
                </div>
                <a class="btn btn--line" href="#contact" data-ask="${esc(s.slug)}" style="justify-self:start"><span>${esc(t('practice.ask'))}</span>${arrow()}</a>
              </div>
            </div></div>
          </div>
        </li>`;
      }).join('')}
    </ul>`;
    const preview = qs('.practice__preview');
    if (preview) preview.innerHTML = list.map((s, i) => `<img src="${esc(s.image)}" alt="" data-key="${esc(s.slug)}" class="${i === 0 ? 'is-current' : ''}">`).join('');
    done(el);
    ALYA.animations.practicePreview(el);
  }

  function initPractice() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.practice__link');
      if (btn) {
        const slug = btn.dataset.slug;
        const list = btn.closest('.practice__list');
        const opening = btn.getAttribute('aria-expanded') !== 'true';
        list.querySelectorAll('.practice__link').forEach((b) => {
          const on = opening && b === btn;
          b.setAttribute('aria-expanded', String(on));
          const panel = document.getElementById(b.getAttribute('aria-controls'));
          panel.classList.toggle('is-open', on);
          const inner = panel.querySelector('.practice__detail');
          if (on) inner.removeAttribute('inert'); else inner.setAttribute('inert', '');
        });
        list.classList.toggle('has-open', opening);
        qs('.practice__preview')?.classList.remove('is-on');
        openSlug = opening ? slug : null;
        // keep the opened row in view after the panel above it collapses
        if (opening) setTimeout(() => {
          const r = btn.getBoundingClientRect();
          const h = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
          if (r.top < h || r.top > window.innerHeight * 0.6) window.scrollTo({ top: r.top + window.scrollY - h - 16, behavior: 'smooth' });
        }, 420);
        setTimeout(() => document.dispatchEvent(new CustomEvent('alya:rendered')), 850);
      }
      const ask = e.target.closest('[data-ask]');
      if (ask) {
        const select = qs('#f-matter');
        if (select) { select.value = ask.dataset.ask; select.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    });
  }

  /* ---------- Selected work ---------- */
  function work() {
    const section = qs('#work');
    if (!section) return;
    if (!ALYA.config.sections.work) { section.remove(); return; }
    const el = qs('[data-render="work"]');
    el.innerHTML = ALYA.data.projects.map((p) => `<article class="work-card">
      <div class="frame"><img src="${esc(p.image)}" alt="${esc(pick(p.title))}" loading="lazy"></div>
      <div class="work-card__meta label"><span>${esc(pick(p.type))}</span><span class="ltr">${p.year ? esc(p.year) : ph(lang() === 'ar' ? '[السنة]' : '[Year]')}</span></div>
      <h3 class="work-card__title">${esc(pick(p.title))}</h3>
      <p class="muted" style="font-size:var(--t-sm);max-width:40ch">${esc(pick(p.desc))}</p>
      ${p.sample ? `<span><span class="sample-pill">${esc(t('common.sample'))}</span></span>` : ''}
    </article>`).join('');
    done(el);
  }

  /* ---------- Contact methods ---------- */
  function whatsappLinks() {
    const n = (ALYA.config.contact.whatsapp || '').replace(/\D/g, '');
    document.querySelectorAll('[data-whatsapp-cta]').forEach((a) => {
      if (n) { a.href = `https://wa.me/${n}`; a.target = '_blank'; a.rel = 'noopener'; } else { a.href = '#contact'; a.removeAttribute('target'); }
    });
  }
  function methods() {
    whatsappLinks();
    const el = qs('[data-render="contact-methods"]');
    if (!el) return;
    const c = ALYA.config.contact;
    const row = (label, value, opts = {}) => `<div class="method">
      <span class="label">${esc(t(`contact.${label}`))}</span>
      <span class="method__val" ${opts.ltr ? 'data-ltr' : ''}>${value ? (opts.href ? `<a class="link-u" href="${esc(opts.href)}"${opts.ext ? ' target="_blank" rel="noopener"' : ''}>${esc(value)}</a>` : esc(value)) : ph(t(`contact.${label}Ph`))}</span>
      ${value && opts.copy ? `<button type="button" class="copy-btn" data-copy="${esc(value)}">${esc(t('common.copy'))}</button>` : '<span></span>'}
    </div>`;
    const wa = (c.whatsapp || '').replace(/\D/g, '');
    el.innerHTML = [
      row('email', c.email, { href: c.email && `mailto:${c.email}`, copy: true, ltr: true }),
      row('phone', c.phone, { href: c.phone && `tel:${c.phone.replace(/\s/g, '')}`, copy: true, ltr: true }),
      row('whatsapp', wa ? `+${wa}` : '', { href: wa && `https://wa.me/${wa}`, ext: true, copy: true, ltr: true }),
      row('location', pick(c.location)),
      `<div class="method"><span class="label">${esc(t('contact.hours'))}</span><span class="method__val">${esc(pick(c.hours))}</span><span></span></div>`
    ].join('');
  }

  function toast(msg) {
    let el = qs('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('is-on'), 2200);
  }
  function initCopy() {
    document.addEventListener('click', async (e) => {
      const b = e.target.closest('[data-copy]');
      if (!b) return;
      try { await navigator.clipboard.writeText(b.dataset.copy); toast(t('common.copied')); }
      catch (err) {
        const val = b.parentElement.querySelector('.method__val');
        if (val) { const r = document.createRange(); r.selectNodeContents(val); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
        toast(t('common.copyFail'));
      }
    });
  }

  /* ---------- Consultation form ---------- */
  function formOptions() {
    const form = qs('#consult-form');
    if (!form) return;
    const select = form.querySelector('#f-matter');
    const current = select.value;
    select.innerHTML = `<option value="" disabled ${current ? '' : 'selected'}>${esc(t('contact.matterPh'))}</option>` +
      services().map((s) => `<option value="${esc(s.slug)}"${current === s.slug ? ' selected' : ''}>${esc(pick(s.title))}</option>`).join('') +
      `<option value="other"${current === 'other' ? ' selected' : ''}>${esc(t('contact.matterOther'))}</option>`;
    const langRadio = form.querySelector(`input[name="language"][value="${lang()}"]`);
    if (langRadio && !form.querySelector('input[name="language"]:checked')) langRadio.checked = true;
  }

  function initForm() {
    const form = qs('#consult-form');
    if (!form) return;
    const success = qs('#form-success');
    const status = qs('#form-status');
    const rules = {
      name: (v) => (v.trim() ? '' : 'required'),
      email: (v) => (!v.trim() ? 'required' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'invalidEmail'),
      phone: (v) => (!v.trim() ? '' : v.replace(/\D/g, '').length >= 7 ? '' : 'invalidPhone'),
      matter: (v) => (v ? '' : 'required'),
      message: (v) => (v.trim() ? '' : 'required'),
      consent: (v, el) => (el.checked ? '' : 'consentRequired')
    };
    const check = (el) => {
      const rule = rules[el.name];
      if (!rule) return true;
      const err = rule(el.value, el);
      const field = el.closest('.field, .check-wrap');
      const msg = field && field.querySelector('.field__error');
      if (field) field.classList.toggle('is-invalid', !!err);
      el.setAttribute('aria-invalid', err ? 'true' : 'false');
      if (msg) msg.textContent = err ? t(`contact.${err}`) : '';
      return !err;
    };
    form.addEventListener('focusout', (e) => { if (rules[e.target.name] && e.target.value) check(e.target); });
    form.addEventListener('input', (e) => { if (e.target.closest('.is-invalid')) check(e.target); });
    form.addEventListener('change', (e) => { if (e.target.type === 'checkbox' || e.target.tagName === 'SELECT') check(e.target); });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = Array.from(form.querySelectorAll('[name]')).filter((el) => rules[el.name]).map(check).every(Boolean);
      if (!ok) { status.textContent = t('contact.fixErrors'); form.querySelector('[aria-invalid="true"]')?.focus(); return; }
      status.textContent = '';
      const label = form.querySelector('[type="submit"] span');
      label.textContent = t('contact.sending');
      const data = Object.fromEntries(new FormData(form).entries());
      // Demo only: replace with a real request when connected to WordPress.
      setTimeout(() => {
        console.info('Consultation request (demo, not sent):', data);
        form.hidden = true;
        success.hidden = false;
        success.focus();
        label.textContent = t('contact.submit');
      }, 700);
    });
    qs('[data-form-again]')?.addEventListener('click', () => {
      form.reset();
      form.querySelectorAll('.is-invalid').forEach((f) => f.classList.remove('is-invalid'));
      form.querySelectorAll('.field__error').forEach((f) => { f.textContent = ''; });
      success.hidden = true;
      form.hidden = false;
      formOptions();
      form.querySelector('input')?.focus();
    });
    document.addEventListener('alya:lang', () => {
      form.querySelectorAll('.is-invalid [name]').forEach((el) => check(el));
      if (status.textContent) status.textContent = t('contact.fixErrors');
    });
  }

  function renderAll() { about(); steps(); practice(); work(); methods(); formOptions(); }

  function init() {
    renderAll();
    initPractice();
    initCopy();
    initForm();
    document.addEventListener('alya:lang', renderAll);
  }

  ALYA.landing = { init };
})();
