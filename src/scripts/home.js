
function home () {
  const nav = document.querySelector('nav');
  const home = document.createElement('a');
  home.classList.add('home');
  home.setAttribute('href','./index.html');
  home.textContent = 'home';
  nav.appendChild(home);
}

export default home();








