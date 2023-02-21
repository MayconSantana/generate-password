// Select Elements
const divResult = document.querySelector('#result'),
passwordSpan = document.querySelector('#password'),
inputRange = document.querySelector('#range'),
size = document.querySelector('#size'),
btnGenerate = document.querySelector('#actionGenerate')


// Data Charset
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Functions
const changeScreens = () => {
    divResult.classList.remove('none');
}

const generatePassword = () => {
    let password = '';

    for (let i = 0, n = charset.length; i < inputRange.value; i++) {
        password += charset.charAt(Math.floor(Math.random() * n))
    }

    passwordSpan.innerHTML = password;
}

// Events
btnGenerate.addEventListener("click", () => {
    generatePassword();
    changeScreens();
})


size.innerHTML = `Tamanho: ${inputRange.value} Caracteres`;
inputRange.addEventListener('input', () => {
    size.innerHTML = `Tamanho: ${inputRange.value} Caracteres`;
})