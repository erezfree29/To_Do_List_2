/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import '../style.css';
import navBar from './navbar';
import home from './home';
import menu from './menu';
import contact from './contact';
import header from './header';
import pictureDiv from './picture';
import description from './description';

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.home');
const contactButton = document.querySelector('.contact');
const content = document.querySelector('.content');

homeButton.onclick = function () {
  const contactContent = document.querySelector('.contact_content');
  const menuContent = document.querySelector('.menu_content');
  if (contactContent !== null) {
    contactContent.parentNode.removeChild(contactContent);
    document.body.appendChild(content);
  }
  if (menuContent !== null) {
    menuContent.parentNode.removeChild(menuContent);
    document.body.appendChild(content);
  }
};

contactButton.onclick = function () {
  const content = document.querySelector('.content');
  const menuContent = document.querySelector('.menu_content');
  if (content !== null) {
    content.parentNode.removeChild(content);
  }
  if (menuContent !== null) {
    menuContent.parentNode.removeChild(menuContent);
  }
  const contactcontent = document.createElement('div');
  contactcontent.classList.add('contact_content');
  const container = document.createElement('div');
  container.classList.add('container');
  contactcontent.appendChild(container);
  const usheader = document.createElement('div');
  usheader.classList.add('usheader');
  usheader.textContent = 'contact us';
  container.innerHTML = `
  <div class="us"></div>
  <div class="contactp">
    <div class="row">Name: Erez Friemagor</div>
    <div class="row">Positon: Manager</div>
    <div class="row">Email: ToBusyToAnswer@unavilable.com</div>
  </div>
  <div class="contactp second">
    <div class="row">Name: Snopy the dog</div>
    <div class="row">Positon: Chef</div>
    <div class="row">Email: wofwof@unavilable.com</div>
  </div>
  <div class="contactp third">
  <div class="row">Name: Mr Bin</div>
  <div class="row">Positon: Waiter</div>
  <div class="row">Email: stuckinthe90's@unavilable.com</div>
</div>
  `;
  container.appendChild(usheader);
  document.body.appendChild(contactcontent);
};

menuButton.onclick = function () {
  const content = document.querySelector('.content');
  const contactContent = document.querySelector('.contact_content');
  if (content !== null) {
    content.parentNode.removeChild(content);
  }
  if (contactContent !== null) {
    contactContent.parentNode.removeChild(contactContent);
  }
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu_content');
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('menu_container');
  menuContent.appendChild(container);
  container.innerHTML = `
  <div class="our_menu"></div>
    <h2>Our Menu</h2>
    <div class="contactp dish_one">
    <div class="row">Dish: Mashroms pasta</div>
    <div class="row">cousine: Italian</div>
    <div class="row">Price: $18</div>
  </div> 
 </div>
  `;
  document.body.appendChild(menuContent);
};
