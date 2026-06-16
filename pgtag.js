/* ============================================================
   PlayGaelic site tag (GA4)
   Named neutrally (NOT "analytics.js") so ad/tracker blockers
   that blocklist the filename don't strip it. Measurement ID below.
============================================================ */
window.PG_CONFIG = {
  gaId: "G-H9J6FZ2DH9"
};

(function(){
  var id = window.PG_CONFIG.gaId;
  if(!id) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", id);
})();

/* fire a custom game event — safe no-op when the tag is off */
window.pgTrack = function(name, params){
  if(window.gtag) gtag("event", name, params || {});
};
