function contact() {
  const nav = document.querySelector('nav');
  const home = document.createElement('button');
  home.classList.add('contact');
  home.textContent = 'contact';
  nav.appendChild(home);
}

export default contact();