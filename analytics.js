/* ============================================================
   PlayGaelic analytics
   1. Create a free Google Analytics 4 property at analytics.google.com
   2. Paste your Measurement ID (G-XXXXXXXXXX) below
   3. Redeploy — realtime traffic appears in GA "Realtime" view,
      game stats under Reports → Engagement → Events.
============================================================ */
window.PG_CONFIG = {
  gaId: "G-M87JW6Y2GF"
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

/* fire a custom game event — safe no-op when analytics is off */
window.pgTrack = function(name, params){
  if(window.gtag) gtag("event", name, params || {});
};
