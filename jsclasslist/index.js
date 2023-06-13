const button = document.querySelector('.button');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
  content.classList.toggle('dark-mode');
  if(button.innerHTML === 'Switch to Dark Mode') {
    button.innerHTML = 'Switch to Light Mode';
  } else {
    button.innerHTML = 'Switch to Dark Mode';
  }
});
