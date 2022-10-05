const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#user_name-input-login');
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
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

    const logout = async function() {
      const response = await fetch('api/user/logout', {
        method: 'POST' ,
        headers: {'content-Type': 'application/json'},
      });

      if (response.ok) {
        document.location.replace('/');
        alert('logged out!')
      } else {
        alert('Failed to logout');
      }
    };

    document.querySelector('#logout-link').addEventListener('click', logout);