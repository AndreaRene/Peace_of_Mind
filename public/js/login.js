//Not sure if this is the right place for this code,
//can be moved to wherever frontend js is at
//or wherever the script called after the button press is at

//!! This code is for input handling, not for validation

//this variable will change to the content of html form/textbox
const enteredUser = "Johnny"

//this variable will change to content of html for password
const enteredPass = "Password!$%%"

function handleUsername(usernameInput, minLen, maxLen) {
    let username = usernameInput.trim();
    if(minLen <= username.length && username.length <= maxLen){
        if(/^[a-zA-Z0-9]+$/.test(username)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function handlePassword(passwordInput, minLen, maxLen) {
    let password = passwordInput.trim();
    if(minLen <= password.length && password.length <= maxLen){
        if(/^[a-zA-Z0-9!#$%\^&*+=\-]+$/.test(password)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
async function newFormHandler(event) {
    event.preventDefault();
    const enteredUser = document.querySelector('#USERNAME ID/CLASS HERE').value;
    const enteredPass = document.querySelector('#PASSWORD ID/CLASS HERE').value;
    //add other blanks of the form/receiving fetch request here,
    //also include them in body of fetch
    const response = await fetch(`/ROUTE OF LOGIN HERE`, {
      method: 'MRTHOD OF FETCH HERE',
      body: JSON.stringify({
        enteredUser,
        enteredPass,
        //include here
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
        //REPLACE THIS LINE BELOW WITH WHAT TO DO
        //AFTER SUCCESSFUL LOGIN
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
}
document.querySelector('NAME OF LOGIN FORM HERE').addEventListener('submit', newFormHandler);