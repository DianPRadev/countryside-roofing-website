// shared.js — inject nav, topbar, and footer into every page

const CURRENT_PAGE = document.body.dataset.page || '';

function renderTopbar() {
  return `
  <div class="topbar">
    <div class="topbar-in">
      <div class="topbar-l">
        <span>📍 Streamwood, IL · Serving all Chicagoland</span>
        <span>Mon–Fri 7am–8pm · Sat 7am–5pm</span>
      </div>
      <div class="topbar-r">
        <span class="tb-badge">BBB A+ Rated</span>
        <a href="tel:8472215600">📞 (847) 221-5600</a>
        <a href="index.html#estimate">Free Estimate →</a>
      </div>
    </div>
  </div>`;
}

function renderNav() {
  const pages = [
    { id: 'services',  label: 'Services',     href: 'services.html' },
    { id: 'about',     label: 'About Us',     href: 'about.html' },
    { id: 'process',   label: 'Our Process',  href: 'process.html' },
    { id: 'areas',     label: 'Service Areas',href: 'areas.html' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-a${CURRENT_PAGE === p.id ? ' active' : ''}">${p.label}</a>`
  ).join('');
  return `
  <nav class="sitenav">
    <div class="nav-in">
      <a href="index.html" class="logo">
        <div class="logo-ico">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <div>
          <div class="logo-name">Countryside</div>
          <div class="logo-sub">Roofing · Siding · Windows</div>
        </div>
      </a>
      <div class="nav-links">
        ${links}
        <a href="tel:8472215600" class="nav-a">(847) 221-5600</a>
        <a href="index.html#estimate" class="nav-a nav-cta">Free Estimate</a>
      </div>
    </div>
  </nav>`;
}

function renderTrustBar() {
  const items = [
    { icon: 'shield', label: 'Licensed &amp; Insured in Illinois' },
    { icon: 'check-circle', label: 'Lifetime Material Warranty' },
    { icon: 'users', label: 'Family-Owned Since 1973' },
    { icon: 'star', label: 'BBB A+ Accredited' },
    { icon: 'credit-card', label: 'Financing Available' },
    { icon: 'clock', label: '5-Year Labor Warranty' },
  ];
  const icons = {
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    'check-circle': '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    'credit-card': '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  };
  const html = items.map(i => `
    <div class="trust-item">
      <div class="trust-ico">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">${icons[i.icon]}</svg>
      </div>
      ${i.label}
    </div>`).join('');
  return `<div class="trust-bar"><div class="trust-bar-in">${html}</div></div>`;
}

function renderCtaBand(title = 'Ready to Get Started?', sub = 'Call us today or request a free estimate — no obligation, no pressure.') {
  return `
  <div class="cta-band">
    <div class="cta-band-in">
      <div>
        <div class="cta-band-title">${title}</div>
        <div class="cta-band-sub">${sub}</div>
      </div>
      <div class="cta-band-btns">
        <a href="index.html#estimate" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          Get a Free Estimate
        </a>
        <a href="tel:8472215600" class="btn-outline">📞 (847) 221-5600</a>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="logo" style="margin-bottom:14px;display:inline-flex">
          <div class="logo-ico" style="background:rgba(255,255,255,.1)">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <div>
            <div class="logo-name" style="color:white">Countryside</div>
            <div class="logo-sub">Roofing · Siding · Windows</div>
          </div>
        </a>
        <div class="footer-brand-text">Family-owned and operated since 1973. Serving homeowners throughout Chicagoland with quality roofing, siding, and window services. Our reputation is our greatest asset.</div>
        <div class="footer-accreds">
          <span class="accred">BBB A+</span>
          <span class="accred">Est. 1973</span>
          <span class="accred">Licensed IL</span>
          <span class="accred">4.8★ Google</span>
        </div>
      </div>
      <div>
        <div class="footer-h">Services</div>
        <ul class="footer-links">
          <li><a href="services.html#roofing">Roof Replacement</a></li>
          <li><a href="services.html#roofing">Roof Repair</a></li>
          <li><a href="services.html#siding">Siding Installation</a></li>
          <li><a href="services.html#windows">Window Replacement</a></li>
          <li><a href="services.html#gutters">Gutters</a></li>
          <li><a href="services.html#storm">Storm Damage</a></li>
          <li><a href="services.html#storm">Insurance Claims</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-h">Company</div>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="process.html">Our Process</a></li>
          <li><a href="areas.html">Service Areas</a></li>
          <li><a href="about.html#reviews">Testimonials</a></li>
          <li><a href="index.html#estimate">Financing</a></li>
          <li><a href="index.html#estimate">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-h">Contact Us</div>
        <div class="footer-contact-item">
          <svg class="fci-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          <a href="tel:8472215600" style="color:var(--gold2);font-weight:600">(847) 221-5600</a>
        </div>
        <div class="footer-contact-item">
          <svg class="fci-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>1542 Burgundy Pkwy, Streamwood, IL 60107</span>
        </div>
        <div class="footer-contact-item">
          <svg class="fci-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Fri 7am–8pm · Sat 7am–5pm</span>
        </div>
        <a href="index.html#estimate" style="display:inline-block;margin-top:16px;background:var(--green);color:white;padding:10px 20px;border-radius:8px;font-weight:600;font-size:13px;text-decoration:none">Get a Free Estimate</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Countryside Roofing, Siding &amp; Windows, Inc. All rights reserved.</span>
      <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Sitemap</a></span>
    </div>
  </footer>`;
}

// Auto-inject
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('topbar-mount')?.insertAdjacentHTML('afterbegin', renderTopbar());
  document.getElementById('nav-mount')?.insertAdjacentHTML('afterbegin', renderNav());
  document.getElementById('trust-bar-mount')?.insertAdjacentHTML('afterbegin', renderTrustBar());
  const ctaMount = document.getElementById('cta-band-mount');
  if (ctaMount) {
    const title = ctaMount.dataset.title;
    const sub   = ctaMount.dataset.sub;
    ctaMount.insertAdjacentHTML('afterbegin', renderCtaBand(title, sub));
  }
  document.getElementById('footer-mount')?.insertAdjacentHTML('afterbegin', renderFooter());

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
