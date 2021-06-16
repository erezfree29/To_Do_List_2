function headline() {
  const content = document.querySelector('.content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to our amazing Restaurant';
  content.appendChild(h1);
}

export default headline();
