function home() {
  const nav = document.querySelector('nav');
  const home = document.createElement('button');
  home.classList.add('home');
  home.textContent = 'home';
  nav.appendChild(home);
}

export default home();
