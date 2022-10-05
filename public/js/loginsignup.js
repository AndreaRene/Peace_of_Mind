const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      user_name: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/dashboard');
  } else {
    alert('Failed to login');
  }
};

const signupFormHandler = async function (event) {
  event.preventDefault();

  const user_name = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      user_name, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
