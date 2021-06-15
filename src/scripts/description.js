function description() {
  const content = document.querySelector('.content');
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
  content.appendChild(description);
}

export default description();