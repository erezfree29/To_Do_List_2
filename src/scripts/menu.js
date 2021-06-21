const menu = (() => {
  const nav = document.querySelector('nav');
  const home = document.createElement('button');
  home.classList.add('menu');
  home.textContent = 'menu';
  nav.appendChild(home);
})();

export default menu;