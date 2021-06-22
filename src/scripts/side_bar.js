const sideBar = () => {
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

  addProjectButton.addEventListener('click', () => {
    form.style.display = 'block';
  });
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => {
    const name = document.querySelector('input[type=text]');
    const newProject = document.createElement('li');
    newProject.textContent = name.value;
    projectsList.appendChild(newProject);
  });
};

export default sideBar;