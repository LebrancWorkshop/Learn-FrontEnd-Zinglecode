const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const user = {
  email: email.value,
  password: password.value
};

function handleSubmit(event) {
  event.preventDefault();
  fetch('https://reqres.in/api/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    alert(`ID: ${result.id}`);
    
  })
  .catch((error) => {
    console.error(error.message);
  })
}

form.addEventListener('submit', handleSubmit);
