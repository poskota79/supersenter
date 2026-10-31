/**
 * SUPERSENTER — Sticky Header & Mobile Drawer Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Tambah tautan Baterai & Charger (kategori 05) ke menu, disisipkan
  // setelah Senter Ultraviolet. Dijalankan dulu supaya tautan baru ikut
  // mendapat handler tutup-drawer dan penanda aktif di bawah.
  // Idempotent: tidak menambah dua kali bila tautan sudah ada.
  const desktopAnchor = document.querySelector('.nav-menu a[href="senter-ultraviolet.html"]');
  if (desktopAnchor && !document.querySelector('.nav-menu a[href="baterai-charger.html"]')) {
    const link = document.createElement('a');
    link.href = 'baterai-charger.html';
    link.className = 'nav-link';
    link.textContent = 'Baterai & Charger';
    desktopAnchor.insertAdjacentElement('afterend', link);
  }
  const mobileAnchor = document.querySelector('.mobile-nav-drawer a[href="senter-ultraviolet.html"]');
  if (mobileAnchor && !document.querySelector('.mobile-nav-drawer a[href="baterai-charger.html"]')) {
    const link = document.createElement('a');
    link.href = 'baterai-charger.html';
    link.className = 'mobile-nav-link';
    link.innerHTML = 'Baterai & Charger (Battery & Charger) <span>→</span>';
    mobileAnchor.insertAdjacentElement('afterend', link);
  }
  document.querySelectorAll('.footer-links a[href="senter-ultraviolet.html"]').forEach(anchor => {
    const list = anchor.closest('li');
    const container = list || anchor;
    const scope = list ? list.parentElement : anchor.parentElement;
    if (scope && !scope.querySelector('a[href="baterai-charger.html"]')) {
      if (list) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = 'baterai-charger.html';
        link.className = 'footer-link';
        link.textContent = 'Baterai & Charger';
        item.appendChild(link);
        list.insertAdjacentElement('afterend', item);
      } else {
        const link = document.createElement('a');
        link.href = 'baterai-charger.html';
        link.className = 'footer-link';
        link.textContent = 'Baterai & Charger';
        anchor.insertAdjacentElement('afterend', link);
      }
    }
  });

  const header = document.querySelector('.header-site');
  const mobileToggle = document.querySelector('.btn-mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky Scroll Class
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        mobileToggle.classList.remove('is-open');
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      } else {
        mobileToggle.classList.add('is-open');
        mobileDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-open');
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        mobileToggle.classList.remove('is-open');
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    // Close on click outside drawer
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('is-open') && 
          !mobileDrawer.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('is-open');
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Mark Active Nav Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('is-active');
    }
  });
});

/**
 * Google Analytics 4 — supersenter.com (Measurement ID: G-KLBZ674NQM).
 * Dimuat dari file bersama ini supaya semua halaman yang memakai navbar.js
 * otomatis terlacak, tanpa mengedit puluhan halaman satu per satu.
 */
(function () {
  if (window.__supersenterGaLoaded) return;
  window.__supersenterGaLoaded = true;
  var MEASUREMENT_ID = 'G-KLBZ674NQM';
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);
})();
