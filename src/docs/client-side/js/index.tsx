import { initMobileMenu } from './menu/mobile-menu';
import { initMenuCollapsible, initMenuScroll } from './menu/side-menu';
import { handleDarkLightModes } from './dark-mode';
import hljs from 'highlight.js';

const init = () => {
  if(hljs){
    hljs.highlightAll();
  }

  const $special = document.getElementById('special-page');
  if($special) return;

  initMobileMenu();
  initMenuScroll();
  initMenuCollapsible();
  handleDarkLightModes();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};
