/* Le Petit Chalet — services tiers (Elfsight) en opt-out Paper34.
 * Actifs par défaut, coupables à la demande depuis « Préférences de
 * confidentialité » en pied de page. Refus mémorisé en localStorage
 * (clé lpc-off-<service>) et relu au chargement suivant.
 * Chaque widget est déclaré dans le HTML par <div data-elfsight="<id>"
 * data-service="<avis|traduction|instagram|whatsapp>"> : on ne pose la
 * classe Elfsight (et le script) que si le service n'est pas coupé. */
(function () {
  var LIBELLES = { avis: 'Avis clients', traduction: 'Traduction du site', instagram: 'Fil Instagram', whatsapp: 'Chat WhatsApp' };
  var racine = document.currentScript && document.currentScript.getAttribute('data-racine') || '';
  function cle(s) { return 'lpc-off-' + s; }
  function coupe(s) { try { return localStorage.getItem(cle(s)) === 'off'; } catch (e) { return false; } }
  function couper(s) { try { localStorage.setItem(cle(s), 'off'); } catch (e) {} }
  function rallumer(s) { try { localStorage.removeItem(cle(s)); } catch (e) {} }
  function purgerElfsight() {
    try { [localStorage, sessionStorage].forEach(function (st) {
      Object.keys(st).forEach(function (k) { if (/elfsight|eapps/i.test(k)) st.removeItem(k); }); }); } catch (e) {}
  }

  // data-suspendu : widget désactivé côté site (ex. WhatsApp pendant la trêve) — ni chargé, ni proposé
  var widgets = Array.prototype.slice.call(document.querySelectorAll('[data-elfsight]:not([data-suspendu])'));
  var services = [];
  widgets.forEach(function (w) { var s = w.getAttribute('data-service'); if (services.indexOf(s) < 0) services.push(s); });

  function monter(w) {
    if (w.getAttribute('data-monte')) return;
    w.className = 'elfsight-app-' + w.getAttribute('data-elfsight');
    w.setAttribute('data-elfsight-app-lazy', '');
    w.setAttribute('data-monte', '1');
  }
  function chargerPlateforme() {
    if (document.querySelector('script[src*="elfsightcdn"]')) return;
    var s = document.createElement('script');
    s.src = 'https://elfsightcdn.com/platform.js'; s.async = true;
    document.body.appendChild(s);
  }
  function activer(s) {
    var un = false;
    widgets.forEach(function (w) { if (w.getAttribute('data-service') === s) { monter(w); un = true; } });
    if (un) chargerPlateforme();
  }
  services.forEach(function (s) { if (!coupe(s)) activer(s); });

  /* --- Panneau de préférences : jamais affiché spontanément --- */
  var css = '#lpcPrefs{position:fixed;right:16px;bottom:16px;z-index:99999;width:min(22rem,calc(100vw - 32px));padding:20px;border-radius:16px;background:#6A4430;color:#FFF9EF;box-shadow:0 20px 50px rgba(0,0,0,.35);font:14px/1.5 Montserrat,Arial,sans-serif;box-sizing:border-box}'
    + '#lpcPrefs[hidden]{display:none}#lpcPrefs h2{margin:0 0 4px;font-size:16px;font-weight:700}#lpcPrefs p{margin:0 0 14px;opacity:.8}#lpcPrefs a{color:#FFF9EF}'
    + '#lpcPrefs ul{list-style:none;margin:0 0 14px;padding:0}#lpcPrefs li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}'
    + '#lpcPrefs [role=switch]{flex:none;position:relative;width:44px;height:24px;border-radius:99px;border:1px solid rgba(255,249,239,.4);background:transparent;cursor:pointer;padding:0}'
    + '#lpcPrefs [role=switch] span{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:rgba(255,249,239,.5);transition:transform .3s,background .3s}'
    + '#lpcPrefs [role=switch][aria-checked=true]{background:#FFF9EF}#lpcPrefs [role=switch][aria-checked=true] span{transform:translateX(20px);background:#6A4430}'
    + '#lpcPrefs button.fermer{background:none;border:0;color:#FFF9EF;opacity:.7;padding:8px 0;cursor:pointer;font:inherit;min-height:44px}';
  var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  var panneau = document.createElement('div');
  panneau.id = 'lpcPrefs'; panneau.hidden = true; panneau.setAttribute('role', 'dialog'); panneau.setAttribute('aria-label', 'Préférences de confidentialité');
  var html = '<h2>Préférences de confidentialité</h2><p>Ces services externes (Elfsight) enrichissent le site et peuvent déposer des cookies. Vous pouvez les désactiver à tout moment. <a href="' + racine + 'confidentialite.html">En savoir plus</a></p><ul>';
  services.forEach(function (s) {
    html += '<li><span>' + (LIBELLES[s] || s) + '</span><button type="button" role="switch" data-service="' + s + '" aria-label="Activer ou désactiver : ' + (LIBELLES[s] || s) + '"><span></span></button></li>';
  });
  html += '</ul><button type="button" class="fermer">Fermer</button>';
  panneau.innerHTML = html;
  document.body.appendChild(panneau);

  function peindre() {
    Array.prototype.forEach.call(panneau.querySelectorAll('[role=switch]'), function (b) {
      b.setAttribute('aria-checked', coupe(b.getAttribute('data-service')) ? 'false' : 'true');
    });
  }
  panneau.addEventListener('click', function (e) {
    var b = e.target.closest('[role=switch]');
    if (b) {
      var s = b.getAttribute('data-service');
      if (coupe(s)) { rallumer(s); peindre(); activer(s); }
      else { couper(s); purgerElfsight(); window.location.reload(); } // un script tiers exécuté ne se retire pas
      return;
    }
    if (e.target.closest('.fermer')) panneau.hidden = true;
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href="#preferences"]');
    if (a) { e.preventDefault(); peindre(); panneau.hidden = false; }
  });
})();
