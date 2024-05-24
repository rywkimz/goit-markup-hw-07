(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const menuToggleBtn = document.querySelector('.js-menu-toggle');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', !isMenuOpen);
    menuToggleBtn.setAttribute('aria-expanded', !isMenuOpen);
    bodyScrollLock.toggleBodyScroll(!isMenuOpen, mobileMenu);
  };

  menuToggleBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuToggleBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
