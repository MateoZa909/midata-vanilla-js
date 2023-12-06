// Variables globales
var containForms = document.querySelector('.contain-login-register');
var formLogin = document.querySelector('.form-login');
var formRegister = document.querySelector('.form-register');

// Cajas
var boxLogin = document.querySelector('.box-back-login');
var boxRegister = document.querySelector('.box-back-register');
var boxMsg = document.querySelector('.msg');

// Botones
var btnLogin = document.querySelector('#btn-sign-in');
var btnRegister = document.querySelector('#btn-sign-up');
var btnRegisterForm = document.querySelector('#btn-register');

// Formulario 
var formulario = document.querySelector('.form-register');

// Inputs
var nameInput = document.querySelector('input[name="nombre"]');
var emailInput = document.querySelector('input[name="correo"]');
var userInput = document.querySelector('input[name="usuario"]');
var passwordInput = document.querySelector('input[name="clave"]');

// Variables de control
var nameMessage = false;
var emailMessage = false;
var userMessage = false;
var passwordMessage = false;

const Login = () => {
    formRegister.style.display = 'none';
    containForms.style.left = '10px';
    formLogin.style.display = 'block';
    boxRegister.style.opacity = '1';
    boxLogin.style.opacity = '0';
}

const Register = () => {
    formRegister.style.display = 'block';
    containForms.style.left = '410px';
    formLogin.style.display = 'none';
    boxRegister.style.opacity = '0';
    boxLogin.style.opacity = '1';
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-register");
    const msgContainer = document.querySelector(".msg");

    // Funcion limpiar inputs
    function limpiarCampos() {
        const inputs = form.querySelectorAll("input");
        inputs.forEach(function(input) {
            input.value = "";
        });
    }

    // Función ocultar mensaje de error
    const hideMessageError = (inputElement, messageElement) => {
        if (!messageElement) {
            return;
        }
        messageElement.style.display = 'none';
    }

    // Evento input campo nombre
    nameInput.addEventListener('input', () => {
        if (nameMessage) {
            hideMessageError(nameInput, form.querySelector(".name-warning"));
            nameMessage = false;
        }
    })

    // Evento input campo correo
    emailInput.addEventListener('input', () => {
        if (emailMessage) {
            hideMessageError(emailInput, form.querySelector(".correo-warning"));
            emailMessage = false;
        }
    })

    // Evento input campo usuario
    userInput.addEventListener('input', () => {
        if (userMessage) {
            hideMessageError(userInput, form.querySelector(".user-warning"));
            userMessage = false;
        }
    })

    // Evento input campo clave
    passwordInput.addEventListener('input', () => {
        if (passwordMessage) {
            hideMessageError(passwordInput, form.querySelector(".password-warning"));
            passwordMessage = false;
        }
    })

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validar que los campos no estén vacíos
        const inputs = form.querySelectorAll("input");
        let camposVacios = false;

        inputs.forEach(function(input) {
            if (input.value.trim() === "") {
                camposVacios = true;
            }
        });

        if (nameInput.value.trim() === "") {
            if (!nameMessage) {
                const pElement = document.createElement("p");
                pElement.classList.add("name-warning");
                pElement.textContent = "Debe escribir el nombre";
                form.insertBefore(pElement, emailInput);
                nameMessage = true;
            }
            camposVacios = true;
        }

        if (nameInput.value.trim() === "") {
            if (!emailMessage) {
                const pElement = document.createElement("p");
                pElement.classList.add("correo-warning");
                pElement.textContent = "Debe escribir el correo";
                form.insertBefore(pElement, userInput);
                emailMessage = true;
            }
            camposVacios = true;
        }

        if (userInput.value.trim() === "") {
            if (!userMessage) {
                 const pElement = document.createElement("p");
                pElement.classList.add("user-warning");
                pElement.textContent = "Debe escribir el nombre de usuario";
                form.insertBefore(pElement, passwordInput);
                userMessage = true;
            }
            camposVacios = true;
        }

        if (passwordInput.value.trim() === "") {
            if (!passwordMessage) {
                const pElement = document.createElement("p");
                pElement.classList.add("password-warning");
                pElement.textContent = "Debe escribir la contraseña";
                form.insertBefore(pElement, btnRegisterForm);
                passwordMessage = true;
            }
            camposVacios = true;
        }

        if (camposVacios) {
            return; // Detener el proceso si hay campos vacíos
        }

        msgContainer.style.display = "block";

        setTimeout(() => {
            msgContainer.style.display = "none";
        }, 3000);

        limpiarCampos();
    });
});

btnRegister.addEventListener('click', Register);
btnLogin.addEventListener('click', Login);
