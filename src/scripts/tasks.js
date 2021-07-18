const completed = (() => {
  let tasksArray = [];
  if (localStorage.getItem('tasksListArray') != null) {
     tasksArray = JSON.parse(localStorage.getItem('tasksListArray'));
  }

  for (let i = 0; i < tasksArray.length; i += 1) {
    const toDoList = document.querySelector('.lists_container');
    const list = document.querySelector('#columns');
    const liDescription = document.createElement('li');
    liDescription.classList.add('column');
    liDescription.setAttribute('draggable', true);
    liDescription.innerHTML = '<input type="checkbox"><a href="#" class="edit"><i class="fas fa-ellipsis-v"></i></a>';
    liDescription.firstChild.id = tasksArray[i].description;
    liDescription.addEventListener('change', () => {
      if (tasksArray[i].completed === false) {
        tasksArray[i].completed = true;
      } else {
        tasksArray[i].completed = false;
      }
      localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
      const clear = document.querySelector('.clear');
      clear.addEventListener('click', () => {
        for (let i = 0; i < tasksArray.length; i += 1) {
          if (tasksArray[i].completed === true) {
            tasksArray.splice(i, 1);
            i -= 1;
          }
        }
        localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
        location.reload();
      });
    });
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = tasksArray[i].description;
    liDescription.appendChild(descriptionDiv);
    list.appendChild(liDescription);
    toDoList.appendChild(list);
    const edits = document.querySelectorAll('.edit');
    const edit = edits[edits.length - 1];
    edit.addEventListener('click', () => {
      list.children[i].lastChild.contentEditable = true;
      edit.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      edit.addEventListener('click', () => {
        tasksArray.splice(i, 1);
        localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
        location.reload();
      });


      liDescription.lastChild.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          tasksArray[i].description = liDescription.textContent;
          localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
          location.reload();
        }  
      });
    });
  }
  localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
})();

export default completed;
