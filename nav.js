/* ============================================================
   nav.js v4 — M7FA
   - Burger menu mobile (< 768px)
   - Scroll effect header
   - Active page detection
   - Speech synthesis sur passages contemplatifs
   ============================================================ */

(function () {

  /* ── LOGO SVG ─────────────────────────────────────────── */
  const LOGO = `<svg viewBox="0 0 791.687 737.734" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g transform="translate(970.196,2415.492)"><path class="m7fa-lp" d="m -757.02,-2137.55 c 4.93,-7.7 9.56,-15.15 14.41,-22.46 19.15,-28.88 39.02,-57.21 63.68,-81.8 6.46,-6.45 7.8,-7.35 15.44,-2.27 14.37,9.57 28.52,19.58 42.06,30.29 19.83,15.7 39.07,32.13 58.46,48.38 3.26,2.73 5.53,1.78 7.34,-1.17 13.99,-22.83 27.67,-45.85 41.86,-68.55 23.19,-37.12 46.64,-74.09 70.15,-111.01 2.51,-3.94 1.16,-5.27 -2.31,-7.01 -22.36,-11.19 -46.32,-16.64 -70.93,-19.2 -16.2,-1.68 -32.53,-2.95 -48.8,-2.87 -46.34,0.22 -91.93,6.26 -136.09,20.88 -5.37,1.78 -10.31,5.12 -15.14,8.22 -3.51,2.25 -6.42,1.99 -8.77,-1.62 -3.79,-5.84 -7.67,-11.63 -11.54,-17.42 -2.3,-3.44 -1.43,-6.86 2.97,-8.8 16.27,-7.2 32.31,-15.11 49.04,-21.03 31.51,-11.15 64.21,-17.17 97.6,-19.39 40.26,-2.67 80.2,-0.9 119.39,9.37 26.63,6.97 51,19.24 74.26,33.79 3.1,1.94 6.32,3.71 9.3,5.83 3.66,2.6 4.04,6.58 0.49,9.17 -15.89,11.64 -25.74,28.19 -35.93,44.32 -35.93,56.83 -71.6,113.83 -107.27,170.82 -10.75,17.18 -21.12,34.59 -31.78,51.83 -5.24,8.48 -10.89,16.71 -16.1,25.2 -31.76,51.75 -63.83,103.32 -95.02,155.41 -21.03,35.11 -41.24,70.74 -60.91,106.63 -9.98,18.2 -18.09,37.44 -26.74,56.35 -1.83,4 -2.7,8.57 -3.33,12.97 -0.78,5.38 0.29,10.22 5.8,13.2 1.21,0.66 2.36,3.16 2.03,4.42 -0.32,1.23 -2.56,2.76 -3.97,2.77 -17.48,0.18 -34.97,0.19 -52.45,0.03 -4.35,-0.04 -5.64,-3.02 -3.75,-6.88 7.39,-15.07 14.39,-30.34 22.04,-45.27 18.13,-35.4 35.19,-71.44 55.14,-105.79 35.42,-61.02 72.6,-121.02 109.18,-181.36 14.98,-24.71 30.35,-49.19 45.52,-73.79 4.08,-6.62 4.1,-6.7 -1.95,-11.6 -24.43,-19.79 -48.85,-39.6 -73.37,-59.27 -10.02,-8.04 -10.36,-7.76 -18.52,2.04 -25.36,30.43 -45.87,64.09 -65.47,98.35 -4.21,7.36 -7.91,15.03 -12.23,22.33 -1.18,1.99 -3.8,4.41 -5.68,4.33 -1.98,-0.08 -4.48,-2.52 -5.69,-4.56 -24.1,-40.45 -47.76,-81.17 -72.17,-121.44 -9.3,-15.34 -20.23,-29.69 -30.44,-44.48 -1,-1.45 -2.17,-2.78 -3.96,-5.05 -3.91,5.88 -7.54,10.96 -10.79,16.28 -24.13,39.44 -39.44,82.09 -45.59,127.9 -1.63,12.17 -2.32,24.53 -2.57,36.82 -1.12,55.81 12.06,108.34 37.73,157.73 5.82,11.19 12.9,21.74 19.58,32.47 1.38,2.21 3.36,4.16 5.4,5.81 3.5,2.84 3.27,5.65 0.89,9.05 -5.05,7.19 -10.09,14.38 -14.83,21.77 -2.81,4.39 -6.15,4.94 -9.37,0.85 -31.63,-40.13 -54.02,-84.91 -67.89,-134.06 -7.45,-26.4 -10.37,-53.34 -11.42,-80.66 -0.48,-12.47 0.14,-24.83 1.14,-37.16 1,-12.41 2.77,-24.82 5.16,-37.04 11.72,-59.82 37.16,-113.14 76.61,-159.7 3.33,-3.93 6.83,-7.74 10.27,-11.58 3.77,-4.2 7.43,-4.43 11.34,0.21 10.93,12.97 22.17,25.76 32.2,39.41 26.63,36.27 49.79,74.8 72.15,113.8 0.74,1.3 1.47,2.61 2.29,3.86 0.25,0.38 0.77,0.58 1.89,1.38 z"/><path class="m7fa-lp" d="m -482.37,-1938.01 c 2.96,0.15 4.73,0.32 6.5,0.32 27.48,0.03 54.96,0.07 82.43,0.03 2.65,0 5.29,-0.49 7.94,-0.71 4.9,-0.41 7.69,2.51 5.98,7 -3.49,9.17 -7.37,18.2 -11.33,27.18 -1.34,3.05 -4.64,3.69 -6.61,1.5 -4.43,-4.92 -10.17,-4.79 -15.68,-4.84 -27.98,-0.26 -55.95,-0.26 -83.93,-0.16 -1.81,0 -4.42,1.2 -5.29,2.66 -10.31,17.3 -20.36,34.75 -30.44,52.19 -0.63,1.09 -0.87,2.4 -1.52,4.25 2.28,0.11 4.04,0.27 5.79,0.27 25.15,-0.01 50.29,0 75.44,-0.12 3.97,-0.02 7.94,-0.66 11.9,-1.12 5.55,-0.65 8.34,2.11 6.45,7.22 -3.47,9.36 -7.35,18.57 -11.3,27.73 -1.41,3.26 -5.28,4.1 -7.31,1.48 -3.11,-4.02 -7.36,-4.56 -11.6,-4.59 -27.98,-0.17 -55.95,-0.05 -83.93,-0.21 -4.56,-0.03 -6.02,3.38 -6.69,6.19 -1.64,6.83 -6.69,11.48 -9.8,17.32 -15.25,28.65 -30.85,57.11 -45.97,85.83 -2.57,4.88 -3.84,10.59 -4.83,16.07 -0.38,2.1 1.71,4.65 2.67,7 0.76,1.86 2.17,3.81 1.96,5.56 -0.11,0.9 -3.1,2.07 -4.8,2.09 -17.82,0.15 -35.64,0.15 -53.45,0 -1.7,-0.01 -3.39,-1.34 -5.09,-2.05 0.8,-1.82 1.1,-4.52 2.5,-5.33 8.44,-4.9 12.77,-13 16.99,-21.11 15.43,-29.69 30.26,-59.7 46.09,-89.17 15.2,-28.29 30.98,-56.29 47.2,-84.01 24.86,-42.48 50.2,-84.68 75.58,-126.86 11.14,-18.52 23,-36.61 34.33,-55.03 24.66,-40.09 48.89,-80.46 73.86,-120.35 26.22,-41.89 53.1,-83.38 79.72,-125.02 6.64,-10.38 8.75,-12.28 18.69,-1.47 20.4,22.19 37.28,46.84 51.98,73.05 18.19,32.44 31.94,66.71 39.76,103.05 4.42,20.54 10.49,40.96 9.58,62.42 -0.42,9.94 0.28,19.93 -0.07,29.87 -1.43,40.24 -9.42,79.17 -23.77,116.81 -13.55,35.57 -32.07,68.34 -55.3,98.46 -4.06,5.27 -8.2,10.5 -12.7,15.39 -1.31,1.43 -4.06,2.34 -5.99,2.12 -1.3,-0.14 -2.79,-2.51 -3.41,-4.17 -3.17,-8.52 -6.23,-17.1 -8.99,-25.76 -0.61,-1.93 -0.64,-4.86 0.42,-6.37 6.55,-9.35 14.14,-18.02 20.2,-27.66 23.52,-37.39 38.67,-78.07 45.36,-121.71 2.26,-14.75 2.55,-29.8 3.91,-44.7 0.39,-4.2 -1.05,-5.37 -5.23,-5.36 -58.95,0.12 -117.9,0.08 -176.86,0.08 -3,0 -6.06,0.41 -8.98,-0.07 -7.04,-1.14 -11.16,1.75 -14.74,7.81 -18.11,30.67 -36.61,61.1 -54.95,91.63 -0.83,1.38 -1.44,2.89 -2.67,5.38 z m 263.31,-138.82 c -5.94,-66.24 -28.54,-125.29 -68,-179.47 -38.47,59.97 -75.41,119.07 -112.45,179.47 z"/></g></svg>`;

  /* ── CSS INJECTÉ ──────────────────────────────────────── */
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
    :root{
      --or:#C49E59;--obs:#111111;--ivoire:#F8F5EE;
      --fd:'Cinzel',serif;--fb:'Cormorant Garamond',serif;
      --nav:68px;--t:.26s cubic-bezier(.4,0,.2,1);
    }
    /* RESET */
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{background:var(--obs);color:var(--ivoire);font-family:var(--fb);font-size:1.1rem;line-height:1.8;padding-top:var(--nav);}

    /* HEADER */
    #m7fa-hdr{
      position:fixed;top:0;left:0;right:0;z-index:200;
      height:var(--nav);background:rgba(17,17,17,.9);
      backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(196,158,89,.15);
      transition:background var(--t),border-color var(--t);
    }
    #m7fa-hdr.scrolled{background:rgba(17,17,17,.98);border-bottom-color:rgba(196,158,89,.3);}
    .m7fa-ni{max-width:1160px;margin:0 auto;height:100%;padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;}

    /* LOGO */
    .m7fa-logo{display:flex;align-items:center;gap:.65rem;text-decoration:none;flex-shrink:0;}
    .m7fa-mark{width:34px;height:32px;flex-shrink:0;}
    .m7fa-mark svg{width:100%;height:100%;display:block;}
    .m7fa-lp{fill:var(--or);}
    .m7fa-title{font-family:var(--fd);font-weight:700;font-size:.95rem;letter-spacing:.18em;color:var(--or);text-transform:uppercase;}
    .m7fa-sub{font-family:var(--fb);font-size:.55rem;letter-spacing:.2em;color:rgba(248,245,238,.38);text-transform:uppercase;margin-top:.15rem;display:block;}

    /* NAV DESKTOP */
    .m7fa-nav{display:flex;gap:.05rem;align-items:center;}
    .m7fa-link{
      font-family:var(--fd);font-size:.65rem;letter-spacing:.13em;text-transform:uppercase;
      color:rgba(248,245,238,.52);text-decoration:none;padding:.5rem .75rem;
      transition:color var(--t);position:relative;white-space:nowrap;
    }
    .m7fa-link::after{
      content:'';position:absolute;bottom:0;left:.75rem;right:.75rem;
      height:1px;background:var(--or);transform:scaleX(0);transform-origin:left;transition:transform var(--t);
    }
    .m7fa-link:hover,.m7fa-link.active{color:var(--or);}
    .m7fa-link:hover::after,.m7fa-link.active::after{transform:scaleX(1);}
    .m7fa-cta{
      font-family:var(--fd);font-size:.63rem;letter-spacing:.2em;text-transform:uppercase;
      color:var(--or);text-decoration:none;padding:.42rem .85rem;
      border:1px solid rgba(196,158,89,.42);transition:background var(--t),color var(--t);white-space:nowrap;
    }
    .m7fa-cta:hover{background:var(--or);color:var(--obs);}

    /* BURGER */
    .m7fa-burger{
      display:none;flex-direction:column;justify-content:center;gap:5px;
      width:36px;height:36px;background:none;border:none;cursor:pointer;padding:4px;
    }
    .m7fa-burger span{
      display:block;height:1.5px;background:var(--or);
      transition:transform var(--t),opacity var(--t),width var(--t);
      transform-origin:center;width:100%;
    }
    .m7fa-burger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
    .m7fa-burger.open span:nth-child(2){opacity:0;width:0;}
    .m7fa-burger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}

    /* DRAWER MOBILE */
    .m7fa-drawer{
      position:fixed;top:var(--nav);left:0;right:0;bottom:0;z-index:190;
      background:rgba(17,17,17,.97);backdrop-filter:blur(20px);
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;
      opacity:0;pointer-events:none;transition:opacity var(--t);
    }
    .m7fa-drawer.open{opacity:1;pointer-events:all;}
    .m7fa-drawer a{
      font-family:var(--fd);font-size:1.1rem;letter-spacing:.2em;text-transform:uppercase;
      color:rgba(248,245,238,.6);text-decoration:none;padding:1.1rem 2rem;
      transition:color var(--t);border-bottom:1px solid rgba(196,158,89,.08);width:100%;text-align:center;
    }
    .m7fa-drawer a:hover,.m7fa-drawer a.active{color:var(--or);}
    .m7fa-drawer a:last-child{border-bottom:none;}
    .m7fa-drawer .m7fa-cta-drawer{
      margin-top:1.5rem;color:var(--or);border:1px solid rgba(196,158,89,.42);
      width:auto;padding:.75rem 2rem;border-bottom:none!important;
    }

    /* RESPONSIVE */
    @media(max-width:767px){
      .m7fa-nav,.m7fa-cta{display:none!important;}
      .m7fa-burger{display:flex;}
      .m7fa-sub{display:none;}
    }
    @media(min-width:768px){
      .m7fa-drawer{display:none!important;}
      .m7fa-burger{display:none!important;}
    }

    /* BOUTON AUDIO */
    .m7fa-audio-btn{
      display:inline-flex;align-items:center;gap:.5rem;
      font-family:var(--fd);font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;
      color:rgba(196,158,89,.45);background:none;border:1px solid rgba(196,158,89,.15);
      padding:.35rem .8rem;cursor:pointer;transition:color var(--t),border-color var(--t);
      margin-top:1.2rem;
    }
    .m7fa-audio-btn:hover{color:var(--or);border-color:rgba(196,158,89,.4);}
    .m7fa-audio-btn.playing{color:var(--or);border-color:rgba(196,158,89,.5);}
    .m7fa-audio-btn svg{width:12px;height:12px;flex-shrink:0;}
  `;

  /* ── INJECT CSS ───────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  /* ── ACTIVE PAGE ─────────────────────────────────────── */
  const path = location.pathname.replace(/\/$/, '') || '/index';
  const slug = path.split('/').pop().replace('.html', '') || 'index';
  const pageMap = {
    index: '', questions: 'q', forces: 'f',
    modele: 'm', applications: 'a', ethique: ''
  };
  const active = pageMap[slug] || '';

  /* ── HEADER HTML ─────────────────────────────────────── */
  const links = [
    { href: 'questions.html', label: 'Reconnaître', key: 'q' },
    { href: 'forces.html',    label: 'Les Forces',  key: 'f' },
    { href: 'modele.html',    label: 'Le Modèle',   key: 'm' },
    { href: 'applications.html', label: 'Applications', key: 'a' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="m7fa-link${active === l.key ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const drawerLinks = links.map(l =>
    `<a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>`
  ).join('') + `<a href="ethique.html" style="font-size:.7rem;color:rgba(248,245,238,.3);">Cadre éthique</a>`
    + `<a href="questions.html" class="m7fa-cta-drawer">Commencer</a>`;

  const hdr = document.createElement('header');
  hdr.id = 'm7fa-hdr';
  hdr.innerHTML = `
    <div class="m7fa-ni">
      <a href="index.html" class="m7fa-logo" aria-label="M7FA — Accueil">
        <div class="m7fa-mark">${LOGO}</div>
        <div>
          <span class="m7fa-title">M7FA</span>
          <span class="m7fa-sub">7 Forces · 3 Axes</span>
        </div>
      </a>
      <nav class="m7fa-nav" aria-label="Navigation principale">
        ${navLinks}
      </nav>
      <a href="questions.html" class="m7fa-cta" aria-label="Commencer">Commencer</a>
      <button class="m7fa-burger" aria-label="Menu" aria-expanded="false" aria-controls="m7fa-drawer">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  document.body.prepend(hdr);

  const drawer = document.createElement('nav');
  drawer.id = 'm7fa-drawer';
  drawer.className = 'm7fa-drawer';
  drawer.setAttribute('aria-label', 'Menu mobile');
  drawer.innerHTML = drawerLinks;
  document.body.appendChild(drawer);

  /* ── BURGER TOGGLE ───────────────────────────────────── */
  const burger = hdr.querySelector('.m7fa-burger');
  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  /* ── SCROLL EFFECT ───────────────────────────────────── */
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', scrollY > 20);
  }, { passive: true });

  /* ── FOOTER ÉTHIQUE ──────────────────────────────────── */
  const footer = document.querySelector('footer');
  if (footer && !footer.querySelector('.m7fa-ethique-link')) {
    const ethLink = document.createElement('p');
    ethLink.innerHTML = `<a class="m7fa-ethique-link" href="ethique.html"
      style="font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(248,245,238,.2);text-decoration:none;
      transition:color .26s;">Cadre éthique</a>`;
    ethLink.style.marginTop = '.5rem';
    footer.appendChild(ethLink);
  }

  /* ── SPEECH SYNTHESIS ────────────────────────────────── */
  if (!('speechSynthesis' in window)) return;

  // Sélectionner les passages à écouter : ouvertures (.hero, .hero-xp) et méditations
  const audioTargets = document.querySelectorAll(
    '.hero, [data-audio], .fiche-phrase, .hero-key'
  );

  let currentUtterance = null;
  let currentBtn = null;

  function stopAll() {
    window.speechSynthesis.cancel();
    if (currentBtn) {
      currentBtn.classList.remove('playing');
      currentBtn.innerHTML = btnHTML('▶ Écouter');
      currentBtn = null;
    }
    currentUtterance = null;
  }

  function btnHTML(label) {
    return `<svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z"/>
      <path d="M6.5 5.5l5 2.5-5 2.5V5.5z"/>
    </svg> ${label}`;
  }

  function pauseHTML() {
    return `<svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z"/>
      <rect x="5.5" y="5" width="2" height="6" rx=".5"/>
      <rect x="8.5" y="5" width="2" height="6" rx=".5"/>
    </svg> Pause`;
  }

  audioTargets.forEach(el => {
    // Ne pas ajouter si le passage est trop court
    const text = el.innerText.trim();
    if (text.length < 80) return;

    const btn = document.createElement('button');
    btn.className = 'm7fa-audio-btn';
    btn.innerHTML = btnHTML('Écouter');
    btn.setAttribute('aria-label', 'Écouter ce passage');

    btn.addEventListener('click', () => {
      if (currentBtn === btn && speechSynthesis.speaking) {
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
          btn.innerHTML = pauseHTML();
        } else {
          speechSynthesis.pause();
          btn.innerHTML = btnHTML('Reprendre');
        }
        return;
      }
      stopAll();

      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'fr-FR';
      utt.rate = 0.88;
      utt.pitch = 1;

      // Choisir la meilleure voix française disponible
      const voices = speechSynthesis.getVoices();
      const frVoice = voices.find(v => v.lang.startsWith('fr') && v.localService)
        || voices.find(v => v.lang.startsWith('fr'));
      if (frVoice) utt.voice = frVoice;

      utt.onend = () => {
        btn.classList.remove('playing');
        btn.innerHTML = btnHTML('Écouter');
        currentBtn = null;
        currentUtterance = null;
      };
      utt.onerror = () => { stopAll(); };

      currentUtterance = utt;
      currentBtn = btn;
      btn.classList.add('playing');
      btn.innerHTML = pauseHTML();
      speechSynthesis.speak(utt);
    });

    el.appendChild(btn);
  });

  // Les voix se chargent parfois en différé
  speechSynthesis.onvoiceschanged = () => {};

})();
