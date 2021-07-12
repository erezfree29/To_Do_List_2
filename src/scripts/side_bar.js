import newProjectFunction from './project';
const sideBar = () => {
  let projects = [];
  const projectsButton = document.querySelector('.button');
  const addProjectButton = document.querySelector('.add');
  const projectsList = document.querySelector('.projects_list');
  const form = document.querySelector('.form-popup');
  projectsButton.addEventListener('click', () => {
    if (projectsList.style.display === 'none') {
      projectsList.style.display = 'block';
    } else {
      projectsList.style.display = 'none';
    }
  });

  if (FlocalStorage.getItem('savedArray') != null) {
    projects = JSON.parse(localStorage.getItem('savedArray'));
  }

  addProjectButton.addEventListener('click', () => {
    form.style.display = 'block';
  });
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => {
    form.style.display = 'none';
    const name = document.querySelector('.name_input');
    const project = newProjectFunction(name.value);
    if (localStorage.getItem('savedArray') != null) {
      projects = JSON.parse(localStorage.getItem('savedArray'));
    }
    projects.push(project);
    localStorage.setItem('savedArray', JSON.stringify(projects));
  });
  for (let i = 0; i < projects.length; i++) {
    const projectLine = document.createElement('li');
    projectLine.textContent = projects[i].name;
    projectsList.appendChild(projectLine);
  }
};
export default sideBar;