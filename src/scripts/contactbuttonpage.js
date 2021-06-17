const contactbuttonpage = (() => {
  const contactButton = document.querySelector('.contact');
  contactButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const menuContent = document.querySelector('.menu_content');
    if (content !== null) {
      content.parentNode.removeChild(content);
    }
    if (menuContent !== null) {
      menuContent.parentNode.removeChild(menuContent);
    }
    const contactcontent = document.createElement('div');
    contactcontent.classList.add('contact_content');
    const container = document.createElement('div');
    container.classList.add('container');
    contactcontent.appendChild(container);
    const usheader = document.createElement('div');
    usheader.classList.add('usheader');
    usheader.textContent = 'contact us';
    container.innerHTML = `
    <div class="us"></div>
    <div class="contactp">
      <div class="row">Name: Erez Friemagor</div>
      <div class="row">Positon: Manager</div>
      <div class="row">Email: ToBusyToAnswer@unavilable.com</div>
    </div>
    <div class="contactp second">
      <div class="row">Name: Snopy the dog</div>
      <div class="row">Positon: Chef</div>
      <div class="row">Email: wofwof@unavilable.com</div>
    </div>
    <div class="contactp third">
    <div class="row">Name: Mr Bin</div>
    <div class="row">Positon: Waiter</div>
    <div class="row">Email: stuckinthe90's@unavilable.com</div>
  </div>
    `;
    container.appendChild(usheader);
    const searchContent = document.querySelector('.contact_content');
    if (searchContent === null) {
      document.body.appendChild(contactcontent);
    }
  });
})();

export default contactbuttonpage;