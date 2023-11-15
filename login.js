function validateLogin() {
    let enteredUsername = document.getElementById('username').value;
    let enteredPassword = document.getElementById('password').value;

    if (enteredUsername === 'admin' && enteredPassword === '123456789') {
         window.location.href = 'pagina.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}