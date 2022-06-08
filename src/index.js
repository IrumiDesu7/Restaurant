import { hero, initializeLoad } from './initial';
import menu from './menu';

initializeLoad(hero);

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Menus') {
    const currentContent = document.querySelector('.hero');
    currentContent.classList.remove('hero');
    currentContent.classList.add('menu');
    currentContent.innerHTML = `${menu().innerHTML}`;
  }

  if (e.target.textContent === 'Simpresto') {
    const currentContent = document.querySelector('.menu');
    currentContent.classList.remove('menu');
    currentContent.classList.add('hero');
    currentContent.innerHTML = `${hero().innerHTML}`;
  }
});
