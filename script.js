// Menu Toggle and Form Validation
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuList.classList.toggle('active');
});


function validarFormulario() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value.trim();
    const message = document.getElementById('textArea').value.trim();


    if (name === '') {
        alert('Por favor, preencha seu nome.');
        return false;
    }

    if (email === '') {
        alert('Por favor, preencha seu e-mail.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (topic === '') {
        alert('Por favor, preencha o assunto.');
        return false;
    }

    if (message === '') {
        alert('Por favor, escreva uma mensagem.');
        return false;
    }

    alert('Mensagem enviada com sucesso!');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validarFormulario()) {
            this.submit();
        }
    });
});

// Dark Mode 
document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    // Pega o ícone dentro do botão
    const themeIcon = darkModeToggle.querySelector('i');
    const body = document.body;

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        // Troca a classe do ícone para sol
        themeIcon.className = 'fa-solid fa-sun';
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        // Troca a classe do ícone para lua
        themeIcon.className = 'fa-solid fa-moon';
    };

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

});