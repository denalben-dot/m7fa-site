
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const structure = [
    {
      label: 'Accueil',
      href: 'index.html',
      enfants: []
    },
    {
      label: 'Le Modèle',
      href: null,
      enfants: [
        { label: 'En une page', href: 'modele.html' },
        { label: 'Les 7 Forces', href: 'forces.html' },
        { label: 'Cadre éthique', href: 'ethique.html' },
      ]
    },
    {
      label: 'Applications',
      href: null,
      enfants: [
        { label: 'Personnages', href: 'personnages.html' },
        { label: 'Civilisations', href: 'civilisations.html' },
        { label: 'Religions', href: 'religions.html' },
        { label: 'Actualité', href: 'actualite.html' },
      ]
    },
    {
      label: 'Outils',
      href: null,
      enfants: [
        { label: 'Morphoscope', href: 'morphoscope.html' },
        { label: 'Miroiroscope', href: 'miroiroscope.html' },
        { label: 'Ressources', href: 'ressources.html' },
      ]
    }
  ];

  function estActif(item) {
    if (item.href && item.href === currentPage) return true;
    if (item.enfants && item.enfants.some(e => e.href === currentPage)) return true;
    return false;
  }

  function construireNav() {
    const nav = document.createElement('nav');
    nav.id = 'm7fa-nav';

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'nav-logo';
    logo.textContent = 'M7FA';
    nav.appendChild(logo);

    const boutonMobile = document.createElement('button');
    boutonMobile.className = 'nav-mobile-toggle';
    boutonMobile.setAttribute('aria-label', 'Menu');
    boutonMobile.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(boutonMobile);

    const ul = document.createElement('ul');
    ul.className = 'nav-links';

    structure.forEach(item => {
      const li = document.createElement('li');
      li.className = 'nav-item' + (item.enfants.length ? ' has-dropdown' : '') + (estActif(item) ? ' active' : '');

      if (item.enfants.length === 0) {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
      } else {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = item.label + '<span class="nav-chevron">▾</span>';
        li.appendChild(btn);

        const dropdown = document.createElement('ul');
        dropdown.className = 'nav-dropdown';

        item.enfants.forEach(enfant => {
          const liEnfant = document.createElement('li');
          const a = document.createElement('a');
          a.href = enfant.href;
          a.textContent = enfant.label;
          if (enfant.href === currentPage) a.classList.add('active');
          if (enfant.href === 'civilisations.html' || enfant.href === 'religions.html' ||
              enfant.href === 'actualite.html' || enfant.href === 'morphoscope.html' ||
              enfant.href === 'miroiroscope.html' || enfant.href === 'ressources.html') {
            a.classList.add('bientot');
            a.setAttribute('title', 'Bientôt disponible');
          }
          liEnfant.appendChild(a);
          dropdown.appendChild(liEnfant);
        });

        li.appendChild(dropdown);

        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const ouvert = li.classList.contains('open');
          document.querySelectorAll('.nav-item.has-dropdown').forEach(el => el.classList.remove('open'));
          if (!ouvert) li.classList.add('open');
        });
      }

      ul.appendChild(li);
    });

    document.addEventListener('click', function() {
      document.querySelectorAll('.nav-item.has-dropdown').forEach(el => el.classList.remove('open'));
    });

    boutonMobile.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('mobile-open');
    });

    nav.appendChild(ul);
    return nav;
  }

  function injecterStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #m7fa-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 48px;
        height: 70px;
        background: rgba(10,10,15,0.97);
        border-bottom: 1px solid rgba(201,168,76,0.12);
        backdrop-filter: blur(8px);
      }
      .nav-logo {
        font-family: 'Cinzel', serif;
        font-size: 22px;
        font-weight: 700;
        color: #C9A84C;
        letter-spacing: 0.12em;
        text-decoration: none;
        flex-shrink: 0;
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 4px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .nav-item { position: relative; }
      .nav-item > a,
      .nav-btn {
        font-family: 'Cinzel', serif;
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #9A9080;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: color 0.25s;
        white-space: nowrap;
      }
      .nav-item > a:hover,
      .nav-btn:hover,
      .nav-item.active > a,
      .nav-item.active > .nav-btn { color: #C9A84C; }
      .nav-chevron {
        font-size: 9px;
        opacity: 0.6;
        transition: transform 0.25s;
      }
      .nav-item.open > .nav-btn .nav-chevron { transform: rotate(180deg); }
      .nav-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-width: 200px;
        background: rgba(10,10,15,0.98);
        border: 1px solid rgba(201,168,76,0.2);
        list-style: none;
        padding: 8px 0;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-8px);
        transition: opacity 0.2s, transform 0.2s;
      }
      .nav-item.open > .nav-dropdown {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
      .nav-dropdown a {
        display: block;
        font-family: 'Cinzel', serif;
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #9A9080;
        text-decoration: none;
        padding: 10px 20px;
        transition: color 0.2s, background 0.2s;
      }
      .nav-dropdown a:hover { color: #C9A84C; background: rgba(201,168,76,0.05); }
      .nav-dropdown a.active { color: #C9A84C; }
      .nav-dropdown a.bientot {
        opacity: 0.4;
        cursor: default;
        pointer-events: none;
      }
      .nav-dropdown a.bientot::after {
        content: ' ○';
        font-size: 9px;
        opacity: 0.6;
      }
      .nav-mobile-toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
      }
      .nav-mobile-toggle span {
        display: block;
        width: 22px;
        height: 1px;
        background: #C9A84C;
        transition: all 0.3s;
      }
      @media (max-width: 700px) {
        #m7fa-nav { padding: 0 20px; }
        .nav-mobile-toggle { display: flex; }
        .nav-links {
          display: none;
          position: absolute;
          top: 70px; left: 0; right: 0;
          flex-direction: column;
          align-items: stretch;
          background: rgba(10,10,15,0.99);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 12px 0;
          gap: 0;
        }
        #m7fa-nav.mobile-open .nav-links { display: flex; }
        .nav-dropdown {
          position: static;
          opacity: 1;
          pointer-events: auto;
          transform: none;
          border: none;
          border-left: 2px solid rgba(201,168,76,0.2);
          margin-left: 20px;
          padding: 4px 0;
          display: none;
          background: none;
        }
        .nav-item.open > .nav-dropdown { display: block; }
        .nav-item > a, .nav-btn { padding: 12px 20px; }
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function() {
    injecterStyles();
    const navExistante = document.querySelector('nav');
    const nouvelleNav = construireNav();
    if (navExistante) {
      navExistante.replaceWith(nouvelleNav);
    } else {
      document.body.prepend(nouvelleNav);
    }
    document.body.style.paddingTop = '70px';
  });
})();
