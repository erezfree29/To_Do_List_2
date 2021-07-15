const completed = (() => {
  let tasksArray = [];
  if (localStorage.getItem('tasksListArray') != null) {
     tasksArray = JSON.parse(localStorage.getItem('tasksListArray'));
  }

  tasksArray.forEach((task) => {
    const toDoList = document.querySelector('.lists_container');
    const list = document.querySelector('#columns');
    const liDescription = document.createElement('li');
    liDescription.classList.add('column');
    liDescription.setAttribute('draggable', true);
    liDescription.innerHTML = '<input type="checkbox"><i class="fas fa-ellipsis-v"></i>';
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
  });
  localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
})();

export default completed;
