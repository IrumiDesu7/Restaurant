import './css/menu.css';
import Food from './img/food.png';
import { navbar } from './initial';

export default function menu() {
  const menuContainer = document.createElement('menu');
  menuContainer.innerHTML = `<div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div>`;
  menuContainer.innerHTML += `<div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div><div class="menu-item"> <img src="${Food}" alt="a picture of food"/> <div class="menu-desc"> A food that is made with love from our master chef will deliver the best taste for you </div><div class="menu-price">USD 30.50</div></div> `;
  menuContainer.classList.add('menu');
  return menuContainer;
}
