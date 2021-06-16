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
  const searchContent = document.querySelector('.contact_content');
  if (searchContent === null) {
    document.body.appendChild(contactcontent);
  }
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
  const desert = document.createElement('h3');
  desert.classList.add('desert');
  desert.textContent = 'Desert';
  const deserts = document.createElement('div');
  deserts.classList.add('deserts');
  deserts.innerHTML = `
  <div class="dish">
       <div>treat: Choclate Brownie</div>
         <div>cousine: American</div>
        <div>Price: $6</div>
      </div>
       <div class="dish">
         <div>Treat: Gelate Ice Cream</div>
        <div>cousine: Italian</div>
        <div>Price: $5</div>
     </div>
      <div class="dish">
       <div>Treat: Carrot Cake</div>
         <div>cousine: British/div>
      <div>Price: $4</div>
       </div>   
  `;

  container.innerHTML = `
  <div class="our_menu_header">
    <h2>Our Menu</h2>
  </div>
  <div class="new_menu">
    <div class="starters">
      <h3>Starters</h3>
      <div>
          <div>Dish: Greek olives</div>
          <div>cousine: Greek</div>
          <div>Price: $4</div>
      </div>
      <div class="dish">
        <div>Dish: Hot potatoes</div>
        <div>cousine: Irish</div>
        <div>Price: $4</div>
      </div>
      <div class="dish">
        <div>Dish: fuul</div>
        <div>cousine: Egyptian</div>
        <div>Price: $6</div>
      </div>  
    </div>
    <div>
      <h3>Mains</h3>
      <div class="dish">
        <div>Dish: Mashroms pasta/div>
          <div>cousine: Italian</div>
          <div>Price: $12</div>
        </div>
        <div class="dish">
          <div>Dish: Rice Curry</div>
          <div>cousine: Indian</div>
          <div>Price: $9</div>
        </div>
        <div class="dish">
          <div>Dish: Sushi</div>
          <div>cousine: Japanes</div>
        <div>Price: $13</div>
      </div> 
    </div>
  </div>
  `;
  container.appendChild(desert);
  container.appendChild(deserts);
  const searchMenuContent = document.querySelector('.menu_content');
  if (searchMenuContent === null) {
    document.body.appendChild(menuContent);
  }
};

//
