(function () {

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Mobile nav ──
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const lockScroll = (lock) => {
    // iOS Safari ignores overflow:hidden on body alone, so html needs it too
    document.body.style.overflow = lock ? 'hidden' : '';
    document.documentElement.style.overflow = lock ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.classList.toggle('open', open);
    lockScroll(open);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      lockScroll(false);
    });
  });

  // ── Active nav link on scroll ──
  const sections    = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 220) current = s.id;
    });
    allNavLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // ── Intersection Observer (fade-up, service cards) ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Staggered service cards: delay is cleared after the entrance so hover never lags
  document.querySelectorAll('.service-card').forEach((card, i) => {
    const delay = i * 70;
    card.style.transitionDelay = delay + 'ms';
    card.addEventListener('transitionend', function clearDelay(e) {
      if (e.propertyName === 'opacity') {
        card.style.transitionDelay = '';
        card.removeEventListener('transitionend', clearDelay);
      }
    });
    observer.observe(card);
  });

  // ── Formspree AJAX submission ──
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.style.display    = 'none';
          success.style.display = 'block';
        } else {
          btn.textContent = 'Try Again';
          btn.disabled    = false;
        }
      } catch {
        btn.textContent = 'Try Again';
        btn.disabled    = false;
      }
    });
  }

  // ── Scroll progress bar ──
  const progress = document.getElementById('scrollProgress');
  if (progress) {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ── Animated stat counters ──
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion || isNaN(target)) { el.textContent = target + suffix; return; }
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number[data-count]').forEach(el => statObserver.observe(el));


  // ── Prefill contact form from tool results (?from=quiz|calc) ──
  (function prefillContact() {
    var params = new URLSearchParams(window.location.search);
    var from = params.get('from');
    if (!from) return;
    var msgBox = document.querySelector('#contact-form textarea[name="message"]');
    if (!msgBox) return;
    var money = function (v) { return '$' + Number(v).toLocaleString('en-US'); };
    var msg = '';
    if (from === 'quiz') {
      var recs = (params.get('recs') || '').split(' | ').filter(Boolean);
      msg = 'Hi, I took the IT Health Check on your site and scored ' +
        params.get('score') + ' out of ' + params.get('max') + ' (' + params.get('tier') + ').';
      if (recs.length) {
        msg += '\n\nSuggested next steps from my results:\n' +
          recs.map(function (r) { return '\u2022 ' + r; }).join('\n');
      }
      msg += "\n\nI'd like to discuss what this means for my practice.";
    } else if (from === 'calc') {
      var total = parseFloat(params.get('total')) || 0;
      msg = 'Hi, I ran the Cost of Doing Nothing calculator on your site. ' +
        'My estimated annual cost: ' + money(total) +
        ' (about ' + money(Math.round(total / 12)) + '/month).' +
        '\n\nBreakdown:' +
        '\n\u2022 Productivity drain: ' + money(params.get('drag')) +
        '\n\u2022 Downtime losses: ' + money(params.get('down')) +
        '\n\u2022 Estimated recoverable: ' + money(params.get('save')) +
        '\n\nMy inputs: ' + params.get('staff') + ' staff \u00b7 ' + money(params.get('rate')) + '/hr \u00b7 ' +
        params.get('hrs') + ' hrs lost per employee/month \u00b7 ' + params.get('events') + ' downtime events/yr \u00b7 ' +
        params.get('evhrs') + ' hrs/event \u00b7 ' + money(params.get('revhr')) + ' revenue lost per downtime hour.' +
        "\n\nI'd like to talk it through.";
    }
    if (msg) msgBox.value = msg;
  })();

  // ── Footer year ──
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();