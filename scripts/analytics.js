/* Vercel Web Analytics (sans cookie, exempté de consentement) + événements
 * maison : téléphone, WhatsApp, itinéraire, avis, réseaux, carte. */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
(function () {
  var s = document.createElement('script'); s.defer = true; s.src = '/_vercel/insights/script.js'; document.head.appendChild(s);
  var regles = [
    [/^tel:/i, 'tel'], [/wa\.me|whatsapp/i, 'whatsapp'], [/g\.page|maps\.google|maps\.apple/i, 'itineraire'],
    [/tripadvisor/i, 'avis'], [/instagram\.com/i, 'instagram'], [/facebook\.com/i, 'facebook'], [/la-carte|\.pdf$/i, 'carte']
  ];
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href') || '';
    for (var i = 0; i < regles.length; i++) if (regles[i][0].test(h)) { window.va('event', { name: regles[i][1] }); return; }
  });
})();
