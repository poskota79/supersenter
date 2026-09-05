/**
 * SUPERSENTER — Sticky Header & Mobile Drawer Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
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
