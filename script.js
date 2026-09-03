/* 
   Linear Coffee Design System - GSAP Advanced Motion Script
   Following gpt-taste skill directive & Linear design guidance
*/

document.addEventListener('DOMContentLoaded', () => {
  setupCodeTabs();
  setupCopyEmail();
  setupMobileNav();
  setupDockScrollTracking();

  // Initialize GSAP Motion & ScrollTrigger animations once GSAP loads
  if (typeof gsap !== 'undefined') {
    initGsapAnimations();
  } else {
    window.addEventListener('load', () => {
      if (typeof gsap !== 'undefined') initGsapAnimations();
    });
  }
});

  // Safety fallback: Hide preloader after 3 seconds if animation is delayed
  setTimeout(() => {
    const overlay = document.getElementById('introOverlay');
    const targetLogo = document.querySelector('.brand-logo-img');
    const brandName = document.querySelector('.brand-mark span');
    if (overlay && overlay.style.display !== 'none') {
      overlay.style.transition = 'opacity 0.4s ease';
      overlay.style.opacity = '0';
      if (targetLogo) targetLogo.style.opacity = '1';
      if (brandName) brandName.style.opacity = '1';
      setTimeout(() => { overlay.style.display = 'none'; }, 450);
    }
  }, 3000);
const codeSnippets = {
  fintech: `
<span class="code-comment"># FirstPay eCommerce - Core Automation & Vulnerability Hardening</span>
<span class="code-keyword">import</span> asyncio
<span class="code-keyword">from</span> security <span class="code-keyword">import</span> role_required, audit_logger

<span class="code-keyword">class</span> <span class="code-fn">FintechBackendService</span>:
    <span class="code-keyword">def</span> <span class="code-fn">__init__</span>(self, db_session, encryption_key):
        self.db = db_session
        self.key = encryption_key

    <span class="code-keyword">@role_required</span>(<span class="code-string">"ADMIN_FINANCE"</span>)
    <span class="code-keyword">async def</span> <span class="code-fn">sync_high_volume_transactions</span>(self, batch_payload):
        <span class="code-comment">"""Process batch sync with sub-millisecond API runtime optimization."""</span>
        audit_logger.info(<span class="code-string">"Batch payload received, hardening RBAC checks"</span>)
        verified_batch = [item <span class="code-keyword">for</span> item <span class="code-keyword">in</span> batch_payload <span class="code-keyword">if</span> item.is_valid()]
        
        <span class="code-keyword">return await</span> self.db.bulk_insert_async(verified_batch)
`.trim(),

  court_scraper: `
<span class="code-comment"># Court Data Scraper Pipelines (CESTAT, NGT, NCLT, NCLAT)</span>
<span class="code-keyword">import</span> requests
<span class="code-keyword">from</span> bs4 <span class="code-keyword">import</span> BeautifulSoup

<span class="code-keyword">async def</span> <span class="code-fn">fetch_tribunal_listings</span>(tribunal_code, session_token):
    headers = {
        <span class="code-string">"X-CSRF-Token"</span>: session_token,
        <span class="code-string">"User-Agent"</span>: <span class="code-string">"CourtDataParser/2.4 (Automated ETL)"</span>
    }
    <span class="code-comment"># Dynamic handshake & async POST payload ingest</span>
    response = <span class="code-keyword">await</span> requests.post_async(f<span class="code-string">"https://tribunal.gov.in/{tribunal_code}/api"</span>, headers=headers)
    parsed_pdf = parse_multipart_pdf_buffer(response.content)
    <span class="code-keyword">return</span> parsed_pdf.extract_case_rows()
`.trim(),

  security_audit: `
<span class="code-comment"># Nmap Reconnaissance & Vulnerability Discovery Log</span>
$ nmap -sV -sC -p 1-65535 192.168.1.104 -oN college_audit.log

PORT     STATE SERVICE VERSION
80/tcp   open  http    Apache/2.4.41 (Internal Confidential Archive)
443/tcp  open  ssl/http OpenSSL 1.1.1f
8080/tcp open  http-proxy Tomcat/9.0.31 [VULNERABLE: AUTH BYPASS DISCOVERED]

<span class="code-comment">[ALERT] Unauthenticated endpoint /api/admin/docs exposed without JWT checks</span>
<span class="code-comment">[ACTION] Authored formal mitigation report: Firewall rules + Local IDS deployment</span>
`.trim(),

  shopify_pos: `
<span class="code-comment">// ProjectKaapi & IIIT Hyderabad Cafe POS Inventory Sync</span>
<span class="code-keyword">async function</span> <span class="code-fn">syncCafePosBilling</span>(orderId, items) {
  <span class="code-keyword">const</span> payload = {
    storefront: <span class="code-string">"projectkaapi.com"</span>,
    location: <span class="code-string">"IIIT_HYD_CAFE"</span>,
    timestamp: Date.now(),
    lineItems: items
  };

  <span class="code-keyword">const</span> res = <span class="code-keyword">await</span> fetch(<span class="code-string">"/api/pos/v1/checkout"</span>, {
    method: <span class="code-string">"POST"</span>,
    headers: { <span class="code-string">"Content-Type"</span>: <span class="code-string">"application/json"</span> },
    body: JSON.stringify(payload)
  });
  <span class="code-keyword">return</span> res.json();
}
`.trim()
};

function setupCodeTabs() {
  const tabs = document.querySelectorAll('.frame-tab');
  const codeDisplay = document.getElementById('codeDisplay');
  const filenameDisplay = document.getElementById('activeFilename');

  if (!codeDisplay) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const snippetKey = tab.getAttribute('data-snippet');
      const filename = tab.getAttribute('data-filename');

      // GSAP smooth transition for code content
      if (typeof gsap !== 'undefined') {
        gsap.to(codeDisplay, {
          opacity: 0,
          y: -4,
          duration: 0.15,
          onComplete: () => {
            if (codeSnippets[snippetKey]) {
              codeDisplay.innerHTML = codeSnippets[snippetKey];
            }
            if (filenameDisplay && filename) {
              filenameDisplay.textContent = filename;
            }
            gsap.to(codeDisplay, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
          }
        });
      } else {
        if (codeSnippets[snippetKey]) codeDisplay.innerHTML = codeSnippets[snippetKey];
        if (filenameDisplay && filename) filenameDisplay.textContent = filename;
      }
    });
  });
}

function setupCopyEmail() {
  const copyBtns = document.querySelectorAll('[data-copy-email]');
  const emailText = 'vasireddyvayush2004@gmail.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('Email copied: vasireddyvayush2004@gmail.com');
      }).catch(() => {
        showToast('Failed to copy email');
      });
    });
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastMessage = toast.querySelector('.toast-msg') || toast;
  toastMessage.textContent = msg;

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf(toast);
    gsap.fromTo(toast, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.35, ease: 'back.out(1.7)' }
    );
    setTimeout(() => {
      gsap.to(toast, { y: 60, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }, 3200);
  } else {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function setupMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

/* Scroll Active Tracking for Bottom Glass Floating Dock */
function setupDockScrollTracking() {
  const dockItems = document.querySelectorAll('.bottom-floating-dock .dock-item[data-section]');
  const sections = document.querySelectorAll('section[id]');

  if (!dockItems.length || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        dockItems.forEach(item => {
          if (item.getAttribute('data-section') === id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* GSAP Advanced Motion Engineering */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Preloader Intro Animated Logo Morph Sequence
  const introOverlay = document.getElementById('introOverlay');
  const introLogo = document.getElementById('introLogo');
  const targetLogo = document.querySelector('.brand-logo-img');
  const brandName = document.querySelector('.brand-mark span');

  let introTimeline = gsap.timeline();

  if (introOverlay && introLogo && targetLogo) {
    // Hide target logo initially so morph is seamless
    gsap.set(targetLogo, { opacity: 0 });
    if (brandName) gsap.set(brandName, { opacity: 0 });

    const introRect = introLogo.getBoundingClientRect();
    const targetRect = targetLogo.getBoundingClientRect();

    const deltaX = (targetRect.left + targetRect.width / 2) - (introRect.left + introRect.width / 2);
    const deltaY = (targetRect.top + targetRect.height / 2) - (introRect.top + introRect.height / 2);
    const scaleRatio = targetRect.width / introRect.width;

    introTimeline
      .fromTo(introLogo,
        { opacity: 0, scale: 1.8, filter: 'blur(12px) drop-shadow(0 0 35px rgba(169, 116, 79, 0.6))' },
        { opacity: 1, scale: 1, filter: 'blur(0px) drop-shadow(0 0 20px rgba(169, 116, 79, 0.35))', duration: 0.75, ease: 'power3.out' }
      )
      .to(introLogo, {
        x: deltaX,
        y: deltaY,
        scale: scaleRatio,
        duration: 0.95,
        ease: 'power4.inOut',
        delay: 0.25
      })
      .to(introOverlay, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          introOverlay.style.display = 'none';
          gsap.set(targetLogo, { opacity: 1 });
        }
      }, '-=0.4')
      .fromTo(brandName,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' },
        '-=0.25'
      );
  }

  // 2. Hero Stagger Entrance Sequence
  const heroElements = document.querySelectorAll('.hero-animate');
  if (heroElements.length) {
    introTimeline.from(heroElements, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    }, '-=0.2');
  }

  // Hero Product Frame Scale-in
  const heroFrame = document.querySelector('.hero-frame-animate');
  if (heroFrame) {
    introTimeline.from(heroFrame, {
      opacity: 0,
      y: 48,
      scale: 0.95,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.6');
  }

  // Floating Dock Entrance Animation
  const floatingDock = document.getElementById('floatingDock');
  if (floatingDock) {
    introTimeline.from(floatingDock, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.4)'
    }, '-=0.7');
  }

  // 2. ScrollTrigger Section & Card Reveal Animations
  if (typeof ScrollTrigger !== 'undefined') {
    const cardReveals = document.querySelectorAll('.card-reveal');
    cardReveals.forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 28,
        duration: 0.65,
        ease: 'power2.out'
      });
    });

    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }

  // 3. Magnetic Hover Physics for Primary/Secondary CTA Buttons & Dock Items
  const magneticElements = document.querySelectorAll('.magnetic-btn, .dock-item');
  magneticElements.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
      gsap.to(btn, { x: x, y: y, duration: 0.25, ease: 'power2.out' });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
    });
  });

  // 4. Subtle Card Hover Micro-scale Physics
  const allCards = document.querySelectorAll('.experience-card, .feature-card, .skill-category-card');
  allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -3, duration: 0.25, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out' });
    });
  });
}
