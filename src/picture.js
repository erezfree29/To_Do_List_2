import Restaurant from './Restaurant.jpg';
function pictureDiv() {
  const content = document.querySelector('.content');
  const element = document.createElement('div');
  element.classList.add('picture');
  const myIcon = new Image();
  myIcon.src = Restaurant;
  element.appendChild(myIcon);
  content.appendChild(element);
}

export default pictureDiv();

