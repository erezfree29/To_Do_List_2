function container () {
  const content = document.querySelector("div");
  content.classList.add('content');
  const container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);
  const usheader = document.createElement('div');
  usheader.classList.add('usheader');
  usheader.textContent = "contact us";
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

  container.appendChild(usheader)
  document.body.appendChild(content);
}

export default container();








