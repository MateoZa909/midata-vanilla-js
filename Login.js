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
var nombreInput = document.querySelector('input[name="nombre"]');
var correoInput = document.querySelector('input[name="correo"]');
var usuarioInput = document.querySelector('input[name="usuario"]');
var claveInput = document.querySelector('input[name="clave"]');

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

        if (nombreInput.value.trim() === "") {
            const pElement = document.createElement("p");
            pElement.classList.add("name-warning");
            pElement.textContent = "Debe escribir el nombre";
            form.insertBefore(pElement, correoInput);
            camposVacios = true;
        }

        if (correoInput.value.trim() === "") {
            const pElement = document.createElement("p");
            pElement.classList.add("correo-warning");
            pElement.textContent = "Debe escribir el correo";
            form.insertBefore(pElement, usuarioInput);
            camposVacios = true;
        }

        if (usuarioInput.value.trim() === "") {
            const pElement = document.createElement("p");
            pElement.classList.add("user-warning");
            pElement.textContent = "Debe escribir el nombre de usuario";
            form.insertBefore(pElement, claveInput);
            camposVacios = true;
        }

        if (claveInput.value.trim() === "") {
            const pElement = document.createElement("p");
            pElement.classList.add("password-warning");
            pElement.textContent = "Debe escribir la contraseña";
            form.insertBefore(pElement, btnRegisterForm);
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
