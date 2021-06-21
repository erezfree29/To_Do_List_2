const menuButtonPage = () => {
  const menuButton = document.querySelector('.menu');
  menuButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const contactContent = document.querySelector('.contact_content');
    if (content !== null) {
      content.parentNode.removeChild(content);
    }
    if (contactContent !== null) {
      contactContent.parentNode.removeChild(contactContent);
    }
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu_content');
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('menu_container');
    menuContent.appendChild(container);
    const desert = document.createElement('h3');
    desert.classList.add('desert');
    desert.textContent = 'Desert';
    const deserts = document.createElement('div');
    deserts.classList.add('deserts');
    deserts.innerHTML = `
    <div class="dish">
         <div>treat: Choclate Brownie</div>
           <div>cousine: American</div>
          <div>Price: $6</div>
        </div>
         <div class="dish">
           <div>Treat: Gelate Ice Cream</div>
          <div>cousine: Italian</div>
          <div>Price: $5</div>
       </div>
        <div class="dish">
         <div>Treat: Carrot Cake</div>
           <div>cousine: British/div>
        <div>Price: $4</div>
         </div>   
    `;

    container.innerHTML = `
    <div class="our_menu_header">
      <h2>Our Menu</h2>
    </div>
    <div class="new_menu">
      <div class="starters">
        <h3>Starters</h3>
        <div>
            <div>Dish: Greek olives</div>
            <div>cousine: Greek</div>
            <div>Price: $4</div>
        </div>
        <div class="dish">
          <div>Dish: Hot potatoes</div>
          <div>cousine: Irish</div>
          <div>Price: $4</div>
        </div>
        <div class="dish">
          <div>Dish: fuul</div>
          <div>cousine: Egyptian</div>
          <div>Price: $6</div>
        </div>  
      </div>
      <div>
        <h3>Mains</h3>
        <div class="dish">
          <div>Dish: Mashroms pasta/div>
            <div>cousine: Italian</div>
            <div>Price: $12</div>
          </div>
          <div class="dish">
            <div>Dish: Rice Curry</div>
            <div>cousine: Indian</div>
            <div>Price: $9</div>
          </div>
          <div class="dish">
            <div>Dish: Sushi</div>
            <div>cousine: Japanes</div>
          <div>Price: $13</div>
        </div> 
      </div>
    </div>
    `;
    container.appendChild(desert);
    container.appendChild(deserts);
    const searchMenuContent = document.querySelector('.menu_content');
    if (searchMenuContent === null) {
      document.body.appendChild(menuContent);
    }
  });
};

export default menuButtonPage();