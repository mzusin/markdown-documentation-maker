import { initMobileMenu } from './menu/mobile-menu';
import { initMenuCollapsible, initMenuScroll } from './menu/side-menu';
import { handleDarkLightModes } from './dark-mode';

const init = () => {
  initMobileMenu();
  initMenuScroll();
  initMenuCollapsible();
  handleDarkLightModes();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};
