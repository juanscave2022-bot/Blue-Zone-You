// ============================================
// Blue Zone You — Shared Components & Scripts
// ============================================

// --- NAVBAR ---
function renderNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const pages = [
    { label: 'Home', href: '/index.html', id: 'home' },
    {
      label: 'Genetic Testing', href: '/pages/genetic-testing.html', id: 'genetic-testing',
      children: [
        { label: 'DNA Longevity Test', href: '/pages/genetic-testing/dna-longevity-test.html' },
        { label: 'Epigenetic Age Testing', href: '/pages/genetic-testing/epigenetic-age-testing.html' },
        { label: 'Nutrigenomics Panel', href: '/pages/genetic-testing/nutrigenomics-panel.html' },
        { label: 'Cardiovascular Gene Panel', href: '/pages/genetic-testing/cardiovascular-gene-panel.html' },
        { label: 'Longevity Blueprint Report', href: '/pages/genetic-testing/longevity-blueprint-report.html' },
      ]
    },
    {
      label: 'Hormones', href: '/pages/hormones.html', id: 'hormones',
      children: [
        { label: 'Bioidentical HRT', href: '/pages/hormones/bioidentical-hrt.html' },
        { label: 'Testosterone Optimization', href: '/pages/hormones/testosterone-optimization.html' },
        { label: 'Female Hormone Balance', href: '/pages/hormones/female-hormone-balance.html' },
        { label: 'Thyroid Support', href: '/pages/hormones/thyroid-support.html' },
        { label: 'Hormone Quiz', href: '/pages/hormones/hormone-quiz.html' },
      ]
    },
    {
      label: 'Weight & Body', href: '/pages/weight-body.html', id: 'weight-body',
      children: [
        { label: 'Metabolic Weight Loss', href: '/pages/weight-body/metabolic-weight-loss.html' },
        { label: 'GLP-1 Therapy', href: '/pages/weight-body/glp1-therapy.html' },
        { label: 'Body Composition', href: '/pages/weight-body/body-composition.html' },
        { label: 'Nutrition Guidance', href: '/pages/weight-body/nutrition-guidance.html' },
        { label: 'Nutraceuticals', href: '/pages/weight-body/nutraceuticals.html' },
      ]
    },
    {
      label: 'Wellness', href: '/pages/wellness.html', id: 'wellness',
      children: [
        { label: 'IV Nutrient Therapy', href: '/pages/wellness/iv-nutrient-therapy.html' },
        { label: 'Peptide Therapy', href: '/pages/wellness/peptide-therapy.html' },
        { label: 'NAD+ Therapy', href: '/pages/wellness/nad-therapy.html' },
        { label: 'Red Light Therapy', href: '/pages/wellness/red-light-therapy.html' },
        { label: 'Hyperbaric Oxygen', href: '/pages/wellness/hyperbaric-oxygen.html' },
        { label: 'Recovery Protocols', href: '/pages/wellness/recovery-protocols.html' },
      ]
    },
    {
      label: 'Aesthetics', href: '/pages/aesthetics.html', id: 'aesthetics',
      children: [
        { label: 'Skin Rejuvenation', href: '/pages/aesthetics/skin-rejuvenation.html' },
        { label: 'Hair Restoration', href: '/pages/aesthetics/hair-restoration.html' },
        { label: 'Body Contouring', href: '/pages/aesthetics/body-contouring.html' },
        { label: 'Anti-Aging Treatments', href: '/pages/aesthetics/anti-aging-treatments.html' },
      ]
    },
    { label: 'About', href: '/pages/about.html', id: 'about' },
  ];

  // Top bar
  let topBar = `
    <div class="hidden lg:flex items-center justify-between px-8 lg:px-16 py-1 border-b border-white/5 text-xs font-body text-white/60">
      <div class="flex items-center gap-6">
        <a href="tel:+13867323003" class="hover:text-brand-gold transition-colors flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          (386) 732-3003
        </a>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Daytona Beach, FL
        </span>
      </div>
      <div class="flex items-center gap-4">
        <a href="/pages/presale.html" class="hover:text-brand-gold transition-colors font-semibold">Unlock Discounted Pricing Now</a>
        <span class="text-white/20">|</span>
        <a href="#" class="hover:text-brand-gold transition-colors">Patient Portal</a>
        <span class="text-white/20">|</span>
        <div class="flex items-center gap-3">
          <a href="https://instagram.com/bluezoneyou" target="_blank" class="hover:text-brand-gold transition-colors" aria-label="Instagram"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="https://facebook.com/bluezoneyou" target="_blank" class="hover:text-brand-gold transition-colors" aria-label="Facebook"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://youtube.com/@bluezoneyou" target="_blank" class="hover:text-brand-gold transition-colors" aria-label="YouTube"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="https://tiktok.com/@bluezoneyou" target="_blank" class="hover:text-brand-gold transition-colors" aria-label="TikTok"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </div>
      </div>
    </div>`;

  // Desktop nav items
  let desktopLinks = '';
  pages.forEach(p => {
    const isActive = activePage === p.id;
    const activeClass = isActive ? 'text-brand-gold' : 'text-white/90';
    if (p.children) {
      let dropdown = p.children.map(c =>
        `<a href="${c.href}" class="px-4 py-2.5 text-sm text-white/90 font-body hover:bg-white/5 rounded-xl transition-colors block">${c.label}</a>`
      ).join('');
      desktopLinks += `
        <div class="nav-item relative">
          <a href="${p.href}" class="px-4 py-2 text-sm font-medium ${activeClass} font-body hover:text-brand-gold transition-colors rounded-lg flex items-center gap-1">
            ${p.label}
            <svg class="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <div class="nav-dropdown absolute top-full left-0 pt-2 w-64">
            <div class="liquid-glass-strong rounded-2xl p-3 flex flex-col gap-0.5">${dropdown}</div>
          </div>
        </div>`;
    } else {
      desktopLinks += `<a href="${p.href}" class="px-4 py-2 text-sm font-medium ${activeClass} font-body hover:text-brand-gold transition-colors rounded-lg">${p.label}</a>`;
    }
  });

  // Mobile links
  let mobileLinks = '';
  pages.forEach(p => {
    if (p.children) {
      let sub = p.children.map(c =>
        `<a href="${c.href}" class="mobile-link px-4 py-2.5 text-sm text-white/80 font-body hover:bg-white/5 rounded-xl transition-colors block">${c.label}</a>`
      ).join('');
      mobileLinks += `
        <div class="mobile-accordion">
          <button class="mobile-acc-btn w-full px-4 py-3 text-base text-white font-body hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between" aria-expanded="false">
            ${p.label}
            <svg class="w-4 h-4 opacity-50 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mobile-acc-content hidden pl-4 flex flex-col gap-0.5">${sub}</div>
        </div>`;
    } else {
      mobileLinks += `<a href="${p.href}" class="mobile-link px-4 py-3 text-base text-white font-body hover:bg-white/5 rounded-xl transition-colors block">${p.label}</a>`;
    }
  });

  nav.innerHTML = `
    ${topBar}
    <div class="flex items-center justify-between px-6 lg:px-16 py-2 lg:py-1">
      <a href="/index.html" class="flex-shrink-0">
        <img src="/bzy-header-logo.png" alt="Blue Zone You" class="h-6 lg:h-7 object-contain" />
      </a>
      <div class="hidden lg:flex items-center gap-1">${desktopLinks}</div>
      <div class="flex items-center gap-3">
        <a href="/pages/book.html" class="hidden md:flex bg-brand-gold text-white rounded-xl px-5 py-2.5 text-sm font-semibold font-body items-center gap-2 hover:brightness-110 transition-all">
          Book Genetic Test
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <button id="mobile-toggle" aria-label="Open menu" class="lg:hidden liquid-glass w-11 h-11 rounded-xl flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="hidden lg:hidden border-t border-white/5 px-6 pb-6 pt-4 max-h-[80vh] overflow-y-auto">
      <div class="flex flex-col gap-1">
        ${mobileLinks}
        <a href="/pages/book.html" class="mobile-link mt-3 bg-brand-gold text-white rounded-xl px-5 py-3.5 text-sm font-semibold font-body text-center hover:brightness-110 transition-all flex items-center justify-center gap-2">
          Book Your Genetic Test
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>`;

  // Mobile toggle
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      toggle.setAttribute('aria-label', menu.classList.contains('hidden') ? 'Open menu' : 'Close menu');
    });
    menu.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => menu.classList.add('hidden')));
    menu.querySelectorAll('.mobile-acc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isOpen = !content.classList.contains('hidden');
        content.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!isOpen));
        btn.querySelector('svg').style.transform = isOpen ? '' : 'rotate(180deg)';
      });
    });
  }

  // Nav bg on scroll
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 100 ? 'rgba(15,27,51,0.95)' : 'rgba(10,10,10,0.6)';
  }, { passive: true });
}

// --- FOOTER ---
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="px-6 md:px-16 lg:px-20 max-w-7xl mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div class="md:col-span-1">
          <img src="/bzy-logo-white.png" alt="Blue Zone You" class="h-14 object-contain mb-4" />
          <p class="text-xs text-white/40 font-body leading-relaxed">Precision longevity medicine powered by your genetics. Daytona Beach, FL.</p>
        </div>
        <div>
          <h4 class="text-xs font-body font-semibold text-white/80 mb-3 tracking-widest uppercase">Services</h4>
          <div class="flex flex-col gap-2">
            <a href="/pages/genetic-testing.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Genetic Testing</a>
            <a href="/pages/hormones.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Hormone Optimization</a>
            <a href="/pages/weight-body.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Weight & Body</a>
            <a href="/pages/wellness.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Wellness & Recovery</a>
            <a href="/pages/aesthetics.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Aesthetics</a>
          </div>
        </div>
        <div>
          <h4 class="text-xs font-body font-semibold text-white/80 mb-3 tracking-widest uppercase">Company</h4>
          <div class="flex flex-col gap-2">
            <a href="/pages/about.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">About Us</a>
            <a href="#" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">The Science</a>
            <a href="#" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Results</a>
            <a href="/pages/presale.html" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">Pre-Sale Packages</a>
          </div>
        </div>
        <div>
          <h4 class="text-xs font-body font-semibold text-white/80 mb-3 tracking-widest uppercase">Contact</h4>
          <div class="flex flex-col gap-2">
            <a href="tel:+13867323003" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">(386) 732-3003</a>
            <a href="mailto:info@bluezoneyou.com" class="text-sm text-white/50 font-body hover:text-brand-gold transition-colors">info@bluezoneyou.com</a>
            <span class="text-sm text-white/50 font-body">Daytona Beach, FL</span>
          </div>
        </div>
      </div>
      <div class="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/30 font-body">&copy; 2026 Blue Zone You. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-xs text-white/30 font-body hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="text-xs text-white/30 font-body hover:text-white/60 transition-colors">Terms of Service</a>
          <a href="#" class="text-xs text-white/30 font-body hover:text-white/60 transition-colors">HIPAA Notice</a>
        </div>
        <div class="flex items-center gap-4">
          <a href="https://instagram.com/bluezoneyou" target="_blank" class="text-white/30 hover:text-brand-gold transition-colors" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="https://facebook.com/bluezoneyou" target="_blank" class="text-white/30 hover:text-brand-gold transition-colors" aria-label="Facebook"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://youtube.com/@bluezoneyou" target="_blank" class="text-white/30 hover:text-brand-gold transition-colors" aria-label="YouTube"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="https://tiktok.com/@bluezoneyou" target="_blank" class="text-white/30 hover:text-brand-gold transition-colors" aria-label="TikTok"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </div>
      </div>
    </div>`;
}

// --- STICKY CTA ---
function renderStickyCTA() {
  const cta = document.getElementById('sticky-cta');
  if (!cta) return;

  cta.innerHTML = `
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3">
      <div class="hidden md:flex items-center gap-3">
        <img src="/bzy-icon-white.png" alt="" class="w-7 h-7 object-contain" />
        <span class="text-sm text-white font-body font-semibold">Limited Pre-Sale Pricing Available</span>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <a href="/pages/presale.html" class="flex-1 md:flex-none bg-brand-dark text-white rounded-xl px-6 py-2.5 text-sm font-bold font-body text-center flex items-center justify-center gap-2 hover:bg-brand-dark/80 transition-all shadow-lg">
          Unlock Discounted Pricing
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>`;

  window.addEventListener('scroll', () => {
    cta.style.transform = window.scrollY > window.innerHeight * 0.5 ? 'translateY(0)' : 'translateY(100%)';
  }, { passive: true });
}

// --- INIT ---
function initShared(activePage) {
  renderNav(activePage || 'home');
  renderFooter();
  renderStickyCTA();
}
