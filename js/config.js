/* ==========================================================================
   config.js — the ONE place for contact details and site-wide settings.
   Leave a value empty ('') and the site shows a visible placeholder instead.
   ========================================================================== */
window.ALYA = window.ALYA || {};

ALYA.config = {
  defaultLang: 'ar',               // 'ar' | 'en' — first visit language
  storageKey: 'alya-lang',

  contact: {
    email: '',                     // e.g. 'office@example.com'
    phone: '',                     // e.g. '+971 50 000 0000'
    whatsapp: '',                  // digits only with country code, e.g. '971500000000'
    location: { en: '', ar: '' },  // e.g. { en: 'Dubai, UAE', ar: 'دبي، الإمارات' }
    hours: { en: 'By appointment, Sunday to Thursday', ar: 'بموعد مسبق، من الأحد إلى الخميس' },
    linkedin: ''                   // full URL
  },

  // Turn whole sections on or off
  sections: {
    work: true                     // set false to hide "Selected work" until real entries exist
  },

  motion: {
    cursor: true,                  // custom cursor on desktop pointers
    intro: true,                   // curtain reveal on first load
    parallax: true
  }
};
