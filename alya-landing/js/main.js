/* ==========================================================================
   main.js — boot order: shared chrome → translations → content → motion.
   ========================================================================== */
(function () {
  function boot() {
    ALYA.navigation.init();   // header, footer, menu, intro curtain
    ALYA.i18n.apply();        // fills every data-i18n string
    ALYA.landing.init();      // practice, method, work, contact
    ALYA.animations.init();   // reveals, parallax, horizontal scroll, cursor
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
