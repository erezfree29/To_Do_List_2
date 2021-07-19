const addRemove = (() => {
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => {
    let tasksArray = [];
    const taskDescription = document.querySelector('.add_to_tasks').value;
    if (localStorage.getItem('tasksListArray') != null) {
      tasksArray = JSON.parse(localStorage.getItem('tasksListArray'));
    }
    const task = {
      description: taskDescription,
      completed: false,
      index: tasksArray.length,
    };
    let flag = 'down';
    for (let i = 0; i < tasksArray.length; i += 1) {
      if (task.description === tasksArray[i].description) {
        flag = 'up';
      }
    }
    if (flag === 'down') {
      tasksArray.push(task);
    }

    const toDoList = document.querySelector('.lists_container');
    const list = document.querySelector('#columns');
    const liDescription = document.createElement('li');
    liDescription.classList.add('column');
    liDescription.setAttribute('draggable', true);
    liDescription.innerHTML = '<input type="checkbox"><a href="#" class="edit"><i class="fas fa-ellipsis-v"></i></a>';
    liDescription.firstChild.id = task.description;

    liDescription.addEventListener('change', () => {
      if (task.completed === false) {
        task.completed = true;
      } else {
        task.completed = false;
      }
      localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
    });

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = task.description;
    liDescription.appendChild(descriptionDiv);
    list.appendChild(liDescription);
    toDoList.appendChild(list);
    const edits = document.querySelectorAll('.edit');
    const edit = edits[edits.length - 1];
    edit.addEventListener('click', () => {
      list.children[list.children.length - 1].lastChild.contentEditable = true;
      edit.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      edit.addEventListener('click', () => {
        tasksArray.splice(tasksArray.length - 1, 1);
        localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
        window.location.reload();
      });
      liDescription.lastChild.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          tasksArray[tasksArray.length - 1].description = liDescription.lastChild.textContent;
          localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
          window.location.reload();
        }
      });
    });
    localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
  });
})();

export default addRemove;
