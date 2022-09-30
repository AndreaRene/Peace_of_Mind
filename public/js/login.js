//Not sure if this is the right place for this code,
//can be moved to wherever frontend js is at
//or wherever the script called after the button press is at

//!! This code is for input handling, not for validation

//this variable will change to the content of html form/textbox
const enteredUser = "Johnny"

//this variable will change to content of html for password
const enteredPass = "Pass"

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
        if(/^[a-zA-Z0-9]+$/.test(password)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//test case
console.log(handleUsername(enteredUser, 5, 20));