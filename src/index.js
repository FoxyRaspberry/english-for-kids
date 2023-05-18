import './style.css';
import './images/bg.png';
import './images/icon_home.png';
import './images/icon_menu.png';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));
