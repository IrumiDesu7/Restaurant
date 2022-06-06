import './style.css';
import Food from './food.png';

const content = document.querySelector('#content');

function navbar() {
  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = `<div class="logo"><a href="#">Simpresto</a></div><div class="links"> <ul> <li><a href="#">Menus</a></li><li><a href="#">Delivery</a></li><li><a href="#">Our location</a></li></ul> </div><div class="socials"> <a href="#" class="fa fa-facebook"></a> <a href="#" class="fa fa-instagram"></a></div>`;
  navbarContainer.classList.add('navbar');
  return navbarContainer;
}

function hero() {
  const heroContainer = document.createElement('div');
  heroContainer.innerHTML = `<div class="left"> <div class="bigHeroText"> Eat, Drink, Hangout at <span class="logoHero">Simpresto</span> </div><div class="littleHeroText"> Everyone love simplicity! So come and dine at Simpresto. </div><div class="actions"> <button class="actionBtns"><a href="">Order</a></button> <button class="actionBtns"><a href="">Our menus</a></button> <button class="actionBtns"><a href="">Reservations</a></button> </div></div><div class="right"> <img src="${Food}" alt=""/> </div>`;
  heroContainer.classList.add('hero');

  return heroContainer;
}

content.appendChild(navbar());
content.appendChild(hero());
