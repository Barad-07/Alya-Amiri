/* ==========================================================================
   i18n.js — language state, lookup and DOM application.
   Switching is instant (no reload): attributes on <html> flip lang/dir,
   static strings re-apply, and dynamic sections re-render on 'alya:lang'.
   ========================================================================== */
window.ALYA = window.ALYA || {};

(function () {
  const root = document.documentElement;
  const store = {
    get() { try { return localStorage.getItem(ALYA.config.storageKey); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(ALYA.config.storageKey, v); } catch (e) { /* storage blocked */ } }
  };

  let lang = (function () {
    const saved = store.get();
    return saved === 'en' || saved === 'ar' ? saved : ALYA.config.defaultLang;
  })();

  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
  }

  function t(key, l = lang) {
    const v = get(ALYA.translations[l], key);
    if (v == null) {
      const fallback = get(ALYA.translations.en, key);
      return fallback == null ? key : fallback;
    }
    return v;
  }

  /** Pick the active-language value from a { en, ar } object. */
  function pick(obj, l = lang) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[l] != null && obj[l] !== '' ? obj[l] : obj.en || obj.ar || '';
  }

  function linesHTML(lines) {
    return (Array.isArray(lines) ? lines : [lines]).map((l) => `<span class="line"><span>${l}</span></span>`).join('');
  }

  function wordsHTML(text) {
    return String(text).split(/\s+/).filter(Boolean).map((w) => `<span class="w">${w}</span>`).join(' ');
  }

  function apply(scope = document) {
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    scope.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    scope.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    scope.querySelectorAll('[data-i18n-lines]').forEach((el) => { el.innerHTML = linesHTML(t(el.dataset.i18nLines)); });
    scope.querySelectorAll('[data-i18n-words]').forEach((el) => { el.innerHTML = wordsHTML(t(el.dataset.i18nWords)); });
    scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    const page = document.body.dataset.page;
    if (page && !document.body.dataset.dynamicTitle) {
      document.title = t(`meta.${page}.title`);
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', t(`meta.${page}.desc`));
    }
    document.querySelectorAll('.lang-switch__opt').forEach((o) => o.classList.toggle('is-active', o.dataset.lang === lang));
  }

  function setLang(next) {
    if (next === lang || (next !== 'en' && next !== 'ar')) return;
    const body = document.body;
    const motion = root.classList.contains('motion');
    const run = () => {
      lang = next;
      store.set(lang);
      apply();
      document.dispatchEvent(new CustomEvent('alya:lang', { detail: { lang } }));
      requestAnimationFrame(() => body.classList.remove('is-switching'));
    };
    if (motion) { body.classList.add('is-switching'); setTimeout(run, 220); } else run();
  }

  function formatDate(iso, l = lang) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return new Intl.DateTimeFormat(l === 'ar' ? 'ar-AE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  }

  function num(n, l = lang) {
    return new Intl.NumberFormat(l === 'ar' ? 'ar-AE' : 'en-GB').format(n);
  }

  // Set direction as early as possible to avoid a flash of the wrong layout
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  ALYA.i18n = { t, pick, apply, setLang, formatDate, num, linesHTML, get lang() { return lang; } };
})();
