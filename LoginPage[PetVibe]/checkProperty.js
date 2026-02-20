const numberInput = document.getElementById('numberInput');
const passwordInput = document.getElementById('passwordInput');
const numberWarning = document.getElementById('numberWarning');
const passwordWarning = document.getElementById('passwordWarning');
const loginButton = document.getElementById('loginButton');
const warning = document.getElementsByClassName('warning');


loginButton.onclick = function()
{
    if(numberInput.value == "" || passwordInput.value == "")
    {
        numberWarning.textContent = 'Please Fill in';
        passwordWarning.textContent = 'Please Fill in';
    }
}

numberInput.onclick = function()
{
    numberWarning.textContent = '';
    passwordWarning.textContent = '';
}