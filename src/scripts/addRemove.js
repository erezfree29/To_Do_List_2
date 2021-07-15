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
    localStorage.setItem('tasksListArray', JSON.stringify(tasksArray));
  });
  const editLinks = document.querySelectorAll('.edit');
  for (let i = 0; i < editLinks.length; i += 1) {

    editLinks[i].addEventListener('click', () => {
      alert(1);
    });
  }
})();

export default addRemove;