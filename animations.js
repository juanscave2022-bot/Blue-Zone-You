// ═══════════════════════════════════════════════
// Blue Zone You — Global Animations
// Custom cursor, scroll reveals, hover effects
// ═══════════════════════════════════════════════

(function() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none)').matches;
  if (reducedMotion) return;

  // ═══ CUSTOM CURSOR ═══
  if (!isTouchDevice) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    // Only hide native cursor after custom cursor is in DOM
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    // Ring follows with lerp for buttery trailing effect
    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Hover detection for interactive elements
    const interactiveSelector = 'a, button, [role="button"], .liquid-glass, .liquid-glass-strong, details summary, .hover-lift, .hover-tilt, input, textarea';

    document.addEventListener('mouseover', function(e) {
      if (e.target.closest(interactiveSelector)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', function(e) {
      if (e.target.closest(interactiveSelector)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    // Click feedback
    document.addEventListener('mousedown', function() {
      document.body.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', function() {
      document.body.classList.remove('cursor-click');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function() {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  // ═══ SCROLL REVEAL ═══
  function initScrollReveal() {
    // Auto-tag elements for reveal
    const selectors = [
      // Headings
      { sel: '.section-block h2, .page-hero h1', cls: 'reveal' },
      // Paragraphs after headings
      { sel: '.section-block > div > p, .page-hero p', cls: 'reveal' },
      // Card grids
      { sel: '.grid', cls: 'reveal-stagger' },
      // Individual cards
      { sel: '.liquid-glass.rounded-3xl, .liquid-glass-strong.rounded-3xl', cls: 'reveal-scale hover-lift hover-shimmer' },
      // Stat boxes
      { sel: '.liquid-glass.rounded-2xl', cls: 'reveal-scale hover-shimmer' },
      // Images
      { sel: '.rounded-3xl:has(> img)', cls: 'reveal-scale hover-zoom' },
      // Bullet lists
      { sel: 'ul.space-y-3', cls: 'reveal' },
      // CTAs
      { sel: '.flex.flex-wrap.gap-4, .flex.flex-col.sm\\:flex-row', cls: 'reveal' },
      // FAQ details
      { sel: 'details', cls: 'reveal' },
      // Kicker text
      { sel: 'p.tracking-widest', cls: 'reveal' },
      // Breadcrumb
      { sel: 'nav.flex.items-center.gap-2', cls: 'reveal' },
    ];

    selectors.forEach(function(item) {
      document.querySelectorAll(item.sel).forEach(function(el) {
        // Don't double-tag
        if (!el.classList.contains('reveal') && !el.classList.contains('reveal-stagger') && !el.classList.contains('reveal-scale') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
          item.cls.split(' ').forEach(function(c) { el.classList.add(c); });
        }
      });
    });

    // Add hover-lift to all glass cards that don't have it
    document.querySelectorAll('.liquid-glass.rounded-3xl, .liquid-glass-strong.rounded-3xl').forEach(function(el) {
      if (!el.classList.contains('hover-lift')) el.classList.add('hover-lift');
    });

    // Add hover-zoom to all image containers
    document.querySelectorAll('.rounded-3xl').forEach(function(el) {
      if (el.querySelector('img') && !el.classList.contains('hover-zoom')) {
        el.classList.add('hover-zoom');
      }
    });

    // Add hover-glow to CTA buttons
    document.querySelectorAll('a.bg-brand-gold').forEach(function(el) {
      if (!el.classList.contains('hover-glow')) {
        el.classList.add('hover-glow');
        el.classList.add('hover-icon-rotate');
      }
    });

    // Observe all reveal elements
    const allReveal = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left, .reveal-right, .reveal-scale');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Don't unobserve — let it re-trigger if needed
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      allReveal.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      allReveal.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  // ═══ PARALLAX on stat numbers ═══
  function initCountUp() {
    const statNumbers = document.querySelectorAll('.font-heading.italic.text-brand-gold');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const text = entry.target.textContent.trim();
          const num = parseInt(text);

          // Only animate pure numbers
          if (!isNaN(num) && num > 0 && num < 10000 && text === String(num)) {
            const duration = 1200;
            const start = performance.now();
            const end = num;

            function step(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              entry.target.textContent = Math.round(eased * end);
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(el) { observer.observe(el); });
  }

  // ═══ NAV LINK HOVER UNDERLINES ═══
  function initNavEffects() {
    document.querySelectorAll('#main-nav a:not(.bg-brand-gold)').forEach(function(link) {
      if (!link.classList.contains('hover-underline') && link.textContent.trim().length < 30) {
        link.classList.add('hover-underline');
      }
    });
  }

  // ═══ SMOOTH SECTION TRANSITIONS ═══
  function initSectionFade() {
    // Add a subtle top-border glow on scroll
    const sections = document.querySelectorAll('.section-block');
    sections.forEach(function(section, i) {
      if (i > 0) {
        section.style.position = 'relative';
      }
    });
  }

  // ═══ INIT ═══
  // Wait for DOM + shared.js to finish
  function init() {
    initScrollReveal();
    initCountUp();
    initNavEffects();
    initSectionFade();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Delay slightly to let shared.js render nav/footer
      setTimeout(init, 100);
    });
  } else {
    setTimeout(init, 100);
  }
})();
