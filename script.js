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

    // If all checks pass, show success message
    alert('Mensagem enviada com sucesso!');
    return true; // Allow form submission
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Attach the script to the form
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        if (validarFormulario()) {
            // Form can be submitted here if needed
            this.submit(); // Uncomment this line to allow form submission
        }
    });
});
