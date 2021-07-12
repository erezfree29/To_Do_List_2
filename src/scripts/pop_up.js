const closeButtonFunction = (() => {
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'none';
  });
})();
export default closeButtonFunction;