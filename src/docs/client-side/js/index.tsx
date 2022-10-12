const initMobileMenu = () => {
  const $btn = document.getElementById('mobile-menu-btn');
  if(!$btn) return;

  $btn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.body.classList.toggle('mobile-menu-opened');
  });

  document.body.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });

  const $sideMenu = document.getElementById('side-menu');
  if(!$sideMenu) return;

  $sideMenu.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  const $close = document.getElementById('mobile-menu-close-btn');
  if(!$close) return;

  $close.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });
};

const initMenuScroll = () => {
  const $menu = document.querySelector('.side-menu');
  if(!$menu) return;

  const path = window.location.pathname;
  const $link = $menu.querySelector(`a[href='${ path }']`);
  if(!$link) return;

  $link.scrollIntoView({
    block: 'center',
  });
};

const init = () => {
  initMobileMenu();
  initMenuScroll();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};
