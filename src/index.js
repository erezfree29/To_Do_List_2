import _ from 'lodash';
import './style.css';
import Restaurant from './Restaurant.jpg';
function headline() {
  let h1 = document.createElement('h1');
  h1.textContent = 'Welcome to our amazing Restaurant';
  return h1;
}


function pictureDiv() {
  const element = document.createElement('div');
  element.classList.add('picture');
  const myIcon = new Image();
  myIcon.src = Restaurant;
  element.appendChild(myIcon);
  return element;
}


function description() {
  const description = document.createElement('p');
  description.innerHTML += "Let’s Shake It Up At Bill’s....<br />";
  description.innerHTML += "This summer we’re offering something a bit special. Our truly... <br />";
  description.innerHTML += "fantastic limited-edition special cocktails now at half price, so...<br />";
  description.innerHTML += "exciting you'll want to twist and shout about it. Available all day,...<br />";
  description.innerHTML += "the Shake It Up Baby with Malfy Con Limone Gin, Cointreau,...<br />";
  description.innerHTML += "Cranberry Juice & Lime was £8.50 now £4.25. Twistin’ The Night...<br />";
  description.innerHTML += "Away with Blood Orange Gin and Fever-Tree Mediterranean Tonic...<br />";
  description.innerHTML += "£8.50 now £4.25, and Summer Loving with St. Germain Elderflower...<br />";
  description.innerHTML += "Liqueur with Fever-Tree White Grape & Apricot Soda £7.50 now...<br />";
  description.innerHTML += "£3.75....<br />";
  return description
}

const content = document.querySelector('.content');
content.appendChild(headline());
content.appendChild(pictureDiv());
content.appendChild(description());






