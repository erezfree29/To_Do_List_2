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
    tasksArray.push(task);
    localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
  });
})();

export default addRemove;