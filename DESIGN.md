# DESIGN.md — Le Petit Chalet · Pas de la Case (Andorre)

> Refonte hors Muse (septembre 2026). La DA existante est validée par le client :
> ce document la **rétro-formalise** et la modernise sans la trahir (mêmes couleurs,
> mêmes polices, même matière). À valider par Benjamin avant la première ligne de code.

**Secteur** : restaurant de montagne, station de ski (saison déc. → avril)
**Personnalité en 3 mots** : chaleureux, généreux, montagnard
**Références (grammaire, jamais décalque)** : menus de brasseries alpines imprimés (typo condensée
+ papier crème), affiches de stations des années 60 (aplats, grands titres), photographie
culinaire « feu et fromage » en lumière chaude — à compléter au kick-off (recent.design / godly.design)
**Source de vérité marque** : logo chalet (SVG existant `logo-lepetitchalet.svg`) + charte de fait
du site Muse et des supports print (carte, cartes de visite, stories). Pas de brand guidelines
écrites → ce DESIGN.md en tient lieu.

---

## 0. Message — Pain · Person · Promise

- **Person** : le skieur ou la famille en séjour au Pas de la Case (Français surtout, Espagnols,
  Andorrans), sur son téléphone en fin de journée de ski, qui cherche où dîner.
- **Pain** : une station pleine de restaurants « à touristes », difficile de savoir lequel est
  bon, s'il est ouvert, et s'il reste de la place.
- **Promise** : **« Raclette, fondue et grill Josper au pied des pistes — une vraie table de
  montagne au Pas de la Case. »**

→ Hero : la Promise. Sous-titre : ouverture / horaires du jour + bouton Réserver (téléphone).
→ Meta description et encadré « L'essentiel » GEO en dérivent.

## 1. Tokens couleurs (repris du site existant)

| Nom | Hex | Variable | Rôle |
|-----|-----|----------|------|
| Bois brûlé | `#6A4430` | `--color-bois` | **L'unique décision chromatique** : boutons, liens, titres de section, prix. C'est la couleur du logo et de la carte imprimée — elle signe le lieu. |
| Crème de lait | `#FFF9EF` | `--color-creme` | Fond de page principal. Un papier chaud, jamais un blanc d'écran — c'est la matière de la carte imprimée. |
| Neige de nuit | `#1D1D1F` | `--color-nuit` | Fond des sections sombres (hero, bandeau photo, pied de page) et texte courant sur crème. Un quasi-noir, pas un noir pur. |
| Écorce | `#876959` | `--color-ecorce` | Texte secondaire : descriptions de plats, légendes, mentions. Jamais pour une action. |
| Braise | `#E0A36A` | `--color-braise` | *Nouveau, discret* : uniquement la lueur du grill (dégradé du hero, reflet sur la photo Josper). **Jamais sur du texte, jamais sur un bouton.** À valider. |
| Filet | `#6A4430` à 15 % | `--color-filet` | Séparateurs de la carte (lignes pointillées plat → prix). |

Alternance des fonds : nuit (hero) → crème (ouverture) → nuit (spécialités photo) → crème (carte)
→ crème + texture papier (avis) → bois (pied de page). Deux fonds identiques ne se touchent jamais.

## 2. Typographie (reprise, auto-hébergée)

- **Display — Bebas Neue** (OFL, `next/font/local`) : titres de section, nom du plat vedette,
  date d'ouverture, numéros de téléphone. Toujours en capitales, interlettrage léger. Grands
  titres en `clamp(2.5rem, 8vw, 6rem)`.
- **Fonctionnelle — Montserrat** 400/600/700 (OFL, `next/font/local`) : texte, carte, boutons, nav.
  Corps 16 px minimum, descriptions de plats 14-15 px, 12 px réservé au copyright.
- **Outfit** (utilisée ponctuellement sur la carte Muse) : **abandonnée** — deux familles suffisent.
- Aucun CDN de polices.

## 3. Matière

- **Rayons** : boutons pill (9999 px, comme aujourd'hui), cartes et photos 16 px.
- **Ombres** : teintées bois (`rgba(106,68,48,.18)`), jamais grises.
- **Textures** : le papier taché (fond actuel) conservé en filigrane sur la section avis ;
  le bois en pied de page, recompressé en AVIF/WebP.
- **Espacements** : sections `py-20` mobile / `py-32` desktop ; gouttière 20 px mobile, 32 px tablette.
- **Photos** : la série DxO de septembre 2026 (fondue, grill, raclettes) + les deux vues drone
  de la station. AVIF/WebP en `srcset`, lazy sauf le hero.

## 4. Animation

- **Tempo** : lent et chaud — reveals 0,8 s, `power2.out`, stagger 0,12 s.
- **Au scroll (GSAP)** : fade + translateY 40 px des titres et blocs ; parallaxe douce de la vidéo
  du hero ; le logo et la Promise se dissipent en montant.
- **Ne bouge jamais** : la carte (prix et plats), le texte courant, le pied de page, les mentions.
- **Effet signature** : **la braise** — au survol/au scroll de la section « Grill Josper », une
  lueur orangée monte depuis le bas de la photo (dégradé animé, pas de WebGL). Un seul effet.
- **Scroll lock** : non. Le site doit se lire vite, sur téléphone, en doudoune.
- **UI d'état (Motion)** : sans objet (pas de modale, pas de filtres). Navigation de la carte en
  ancres + barre de catégories collante.
- Lenis pour le défilement ; tout coupé en `prefers-reduced-motion`.

## 5. Interdits

- Aucun widget de traduction automatique : le site est **réellement** en français, espagnol et
  anglais.
- Pas de fil Instagram embarqué (il affiche des posts périmés et charge un tiers) : un lien suffit.
- Pas de chat WhatsApp flottant tiers : un lien `wa.me` natif.
- Pas de PDF comme carte principale : la carte est en HTML (indexable, lisible au doigt) ; les PDF
  restent en téléchargement secondaire.
- Pas de blanc pur, pas de gris neutres, pas de glassmorphism.
- Toujours : esthétique template gratuit, presets ReactBits d'origine, deux moteurs sur un même élément.

---
*Validé par Benjamin le : 25 septembre 2026 (langues FR · ES · EN ; avis en bloc maison statique ; effet braise retenu)*
