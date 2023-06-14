//solves number 4

// In a Javascript file, write a program which checks the following things:
// checks that the password is 12345678
// if the password is incorrect, send an alert message
// Your page should also include an <h1> tag. If the information in the 
// form is correct, have Javascript change the text in the <h1>.HTML 
// page.
function login(event){
    event.preventDefault();
    var passInput = document.getElementById("password");
    if(passInput.value === '12345678'){
        document.querySelector('h1').textContent = 'Correct Password'
    } else{
        alert("Incorrect Password")
        document.querySelector('h1').textContent = 'Enter password'
    }
}

document.getElementById('form').addEventListener('submit', login);