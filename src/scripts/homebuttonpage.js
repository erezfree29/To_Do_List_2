const homebuttonpage = (() => {
  const content = document.querySelector('.content');
  const homeButton = document.querySelector('.home');
  homeButton.addEventListener('click', () => {
    const contactContent = document.querySelector('.contact_content');
    const menuContent = document.querySelector('.menu_content');
    if (contactContent !== null) {
      contactContent.parentNode.removeChild(contactContent);
      document.body.appendChild(content);
    }
    if (menuContent !== null) {
      menuContent.parentNode.removeChild(menuContent);
      document.body.appendChild(content);
    }
  });
})();
export default homebuttonpage;
