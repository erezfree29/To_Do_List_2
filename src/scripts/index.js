import '../style.css';
const taskOne = {
  description: 'Clean car',
  completed: true,
  index: 0,
};

const taskTwo = {
  description: 'Do insurance',
  completed: false,
  index: 1,
};

const taskThree = {
  description: 'Deposit money',
  completed: false,
  index: 2,
};

const tasksArray = [];
tasksArray.push(taskOne);
tasksArray.push(taskTwo);
tasksArray.push(taskThree);
tasksArray.forEach((task) => {
  const toDoList = document.querySelector('.lists_container');
  const list = document.createElement('ul');
  const liDescription = document.createElement('li');
  liDescription.innerHTML = '<input type="checkbox">';
  liDescription.innerHTML += task.description;
  list.appendChild(liDescription);
  toDoList.appendChild(list);
});

