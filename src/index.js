import _ from 'lodash';
import './style.css';
import Bbc from './bbc.png';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Bbc;
   return element;
 }

 document.body.appendChild(component());