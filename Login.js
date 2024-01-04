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
        // Iniciar la validación de los campos
        let camposVacios = false;
    
        // Validar campo nombre
        if (nameInput.value.trim() === "") {
            if (!nameMessage) {
                // Código para mostrar mensaje de error para el nombre
                nameMessage = true;
            }
            camposVacios = true;
        }
    
        // Validar campo correo
        if (emailInput.value.trim() === "") {
            if (!emailMessage) {
                // Código para mostrar mensaje de error para el correo
                emailMessage = true;
            }
            camposVacios = true;
        }
    
        // Validar campo usuario
        if (userInput.value.trim() === "") {
            if (!userMessage) {
                // Código para mostrar mensaje de error para el usuario
                userMessage = true;
            }
            camposVacios = true;
        }
    
        // Validar campo contraseña
        if (passwordInput.value.trim() === "") {
            if (!passwordMessage) {
                // Código para mostrar mensaje de error para la contraseña
                passwordMessage = true;
            }
            camposVacios = true;
        }
    
        // Si hay campos vacíos, prevenir el envío del formulario
        if (camposVacios) {
            event.preventDefault();
            return;
        }
    
        // Código para manejar el envío exitoso del formulario
    });
});

$('#btn-login').on('click', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos de correo electrónico y contraseña
    var correo = $("input[name='correo-login']").val();
    var clave = $("input[name='pasw-login']").val();

    // Crear el objeto con los datos del usuario
    var loginData = {
        correo: correo,
        clave: clave
    };

    // Realizar la solicitud AJAX POST
    $.ajax({
        type: "POST",
        url: "/login", // Asegúrate de que esta ruta coincida con tu endpoint del servidor
        data: JSON.stringify(loginData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
            // Manejar la respuesta del servidor en caso de éxito
            console.log("Inicio de sesión exitoso");
            // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        },
        error: function(error) {
            // Manejar errores en la solicitud AJAX
            console.error("Error en el inicio de sesión:", error.responseText);
            // Aquí puedes mostrar un mensaje de error
        }
    });
});

// Funcion peticion al endpoint de registro de datos
$("#btn-register").on("click", function(event) {
    event.preventDefault();

    var userData = {
        nombre: $("input[name='nombre']").val(),
        correo: $("input[name='correo']").val(),
        usuario: $("input[name='usuario']").val(),
        clave: $("input[name='clave']").val()
    };

    $.ajax({
        type: "POST",
        url: "/registro",
        data: userData,
        dataType: "json"
    })
    .done(function(response) {
        console.log("Registro exitoso");
        $(".msg").html("<p>Registrado exitosamente!</p>")
                .css("display", "flex")
                .show();
        
        setTimeout(function() { $(".msg").hide(); }, 3000);
    
    })
    .fail(function(error) {
        console.log("Error en el registro:", error.responseText);
        $(".msg").html("<p>Error en el registro</p>")
                .css("display", "flex")
                .show();
    
        setTimeout(function() { $(".msg").hide(); }, 3000);
    });
});

btnRegister.addEventListener('click', Register);
btnLogin.addEventListener('click', Login);
