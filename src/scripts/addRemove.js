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

    liDescription.innerHTML += task.description;
    list.appendChild(liDescription);
    toDoList.appendChild(list);
    const edits = document.querySelectorAll('.edit');
    const edit = edits[edits.length - 1];
    edit.addEventListener('click', () => {
      alert(1);
    });

    localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
  });
})();

export default addRemove;