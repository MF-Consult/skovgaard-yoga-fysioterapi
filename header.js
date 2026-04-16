(function () {

  // ── Highlight active nav link ─────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ── Inject header HTML ────────────────────────────────────────────────
  const logoHref = currentPage === 'index.html' ? '#' : 'index.html';
  const navLink = (href, label) => {
    const isActive = currentPage === href;
    return `<a href="${href}" class="hover:opacity-70 transition-opacity${isActive ? ' border-b-2 border-white/60 pb-0.5' : ''}">${label}</a>`;
  };
  const drawerLink = (href, label) => {
    const isActive = currentPage === href;
    return `<a href="${href}" class="drawer-link${isActive ? ' opacity-50' : ''}">${label}</a>`;
  };

  const html = `
    <header id="header" class="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="${logoHref}">
          <img src="Assets/aflangtlogo_web_final.png" alt="Skovgaard Logo" class="h-12 md:h-16 brightness-0 invert" id="logo">
        </a>
        <nav class="hidden lg:flex space-x-10 text-[0.75rem] uppercase tracking-[0.2em] font-bold text-white" id="nav">
          <div class="nav-dropdown">
            <button style="background:none;border:none;cursor:pointer;color:inherit;padding:0" class="hover:opacity-70 flex items-center gap-1 uppercase tracking-[0.2em] font-bold text-[0.75rem]">
              Ydelser <span style="font-size:8px">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="stress.html">Stressforløb (Privat)</a>
              <a href="stress-erhverv.html">Stressforløb (Virksomhed)</a>
              <a href="glad.html">GLA:D® Træning</a>
              <a href="gifted.html">Høj Begavelse</a>
              <a href="fysioterapi.html">Fysioterapi</a>
              <a href="yoga.html">Yogaterapi</a>
              <a href="boern.html">Børnefysioterapi</a>
              <a href="konsulent.html">Ekstern konsulent</a>
            </div>
          </div>
          ${navLink('https://www.skovgaardyogaogfysioterapi.dk/cohen/', 'Stresstest')}
          ${navLink('om.html', 'Om mig')}
          ${navLink('priser.html', 'Priser')}
          ${navLink('kontakt.html', 'Kontakt')}
        </nav>
        <a href="kontakt.html" id="cta-link" class="hidden sm:inline text-white border-b-2 border-white pb-1 text-[0.85rem] uppercase tracking-[0.2em] font-bold hover:opacity-70 transition-all">Book tid</a>
        <button class="hamburger-btn lg:hidden text-white" id="hamburger-btn" aria-label="Åbn menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <div id="drawer-backdrop" aria-hidden="true"></div>

    <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
      <div class="drawer-header">
        <button class="drawer-close-btn" id="mobile-close" aria-label="Luk menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="drawer-nav">
        <button class="drawer-accordion-trigger" id="drawer-ydelser-trigger" aria-expanded="false" aria-controls="drawer-ydelser-sub">
          Ydelser
          <svg class="chevron" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="drawer-sub-menu" id="drawer-ydelser-sub">
          <a href="stress.html">Stressforløb (Privat)</a>
          <a href="stress-erhverv.html">Stressforløb (Virksomhed)</a>
          <a href="glad.html">GLA:D® Træning</a>
          <a href="gifted.html">Høj Begavelse</a>
          <a href="fysioterapi.html">Fysioterapi</a>
          <a href="yoga.html">Yoga</a>
          <a href="boern.html">Børnefysioterapi</a>
          <a href="konsulent.html">Ekstern konsulent</a>
        </div>
        ${drawerLink('https://www.skovgaardyogaogfysioterapi.dk/cohen/', 'Stresstest')}
        ${drawerLink('om.html', 'Om mig')}
        ${drawerLink('priser.html', 'Priser')}
        ${drawerLink('kontakt.html', 'Kontakt')}
      </nav>
      <div class="drawer-footer">
        <a href="kontakt.html" class="drawer-cta">Book tid</a>
      </div>
    </div>
  `;

  const target = document.getElementById('site-header');
  if (target) target.outerHTML = html;

  // ── Header scroll behaviour ───────────────────────────────────────────
  const headerEl = document.getElementById('header');
  const logoEl = document.getElementById('logo');
  const navEl = document.getElementById('nav');
  const ctaEl = document.getElementById('cta-link');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const backdrop = document.getElementById('drawer-backdrop');
  const ydolserTrig = document.getElementById('drawer-ydelser-trigger');
  const ydolserSub = document.getElementById('drawer-ydelser-sub');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      headerEl.classList.add('scrolled');
      logoEl.classList.remove('brightness-0', 'invert');
      navEl.classList.replace('text-white', 'text-gray-600');
      if (ctaEl) { ctaEl.classList.replace('text-white', 'text-purple-900'); ctaEl.classList.replace('border-white', 'border-purple-900'); }
      hamburgerBtn.classList.remove('text-white');
      hamburgerBtn.classList.add('text-gray-800');
    } else {
      headerEl.classList.remove('scrolled');
      logoEl.classList.add('brightness-0', 'invert');
      navEl.classList.replace('text-gray-600', 'text-white');
      if (ctaEl) { ctaEl.classList.replace('text-purple-900', 'text-white'); ctaEl.classList.replace('border-purple-900', 'border-white'); }
      hamburgerBtn.classList.add('text-white');
      hamburgerBtn.classList.remove('text-gray-800');
    }
  });

  // ── Mobile drawer ─────────────────────────────────────────────────────
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburgerBtn.classList.add('open');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    hamburgerBtn.classList.remove('open');
  }

  hamburgerBtn.addEventListener('click', () => { mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu(); });
  mobileClose.addEventListener('click', closeMobileMenu);
  backdrop.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu(); });
  ydolserTrig.addEventListener('click', () => {
    const isOpen = ydolserSub.classList.toggle('open');
    ydolserTrig.setAttribute('aria-expanded', isOpen);
  });

  // ── Scroll-triggered fade-in (shared across all pages) ───────────────
  document.addEventListener('DOMContentLoaded', () => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
  });

})();
