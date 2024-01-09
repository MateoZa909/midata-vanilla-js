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

// ************************************************
// ***        (FALTA POR COMPLETAR)             ***
// PETICION AL ENDPOINT DE LOGIN
$('.form-login').on('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var correo = $("input[name='correo-login']").val().trim();
    var clave = $("input[name='pasw-login']").val().trim();
    
    // Validar si los campos están vacíos
    if (!correo || !clave) {
        if (!correo) {
            $("input[name='correo-login']").css('outline', '2px solid red');
        }
        if (!clave) {
            $("input[name='pasw-login']").css('outline', '2px solid red');
        }

        $(".msg").html("<p class='mensaje-error'>Por favor, completa todos los campos.</p>")
                 .css("display", "flex")
                 .show();
        setTimeout(() => { $(".msg").hide(); }, 3000);
        
        return; // Detiene la ejecución si algún campo está vacío
    }

    var loginData = {
        'correo-login': correo,
        'pasw-login': clave
    };

    $.ajax({
        type: "POST",
        url: "/login",
        data: loginData,
        dataType: "json"
    })
    .done(function(response) {
        console.log("Inicio de sesión exitoso");
        window.location.href = '/nacionales';
    })
    .fail(function(error) {
        console.log("Error en el inicio de sesión:", error.responseText);
        $(".msg").html("<p>Correo o contraseña no validos</p>")
                .css("display", "flex")
                .show();
    
        setTimeout(function() { $(".msg").hide(); }, 3000);
    });
});
// PETICION AL ENDPOINT DE LOGIN
/* ************************************************ 
   ********************************************* */

// PETICION AL ENDPOINT DE LOGIN
/* ************************************************ 
   ********************************************* */

// ******************************************
// **            (FUNCIONA)                **
// PETICION AL ENDPOINT DE REGISTRO
$(".form-register").on("submit", (event) => {
    event.preventDefault();

    // Validación de los campos
    var nombre = $("input[name='nombre']").val().trim();
    var correo = $("input[name='correo']").val().trim();
    var usuario = $("input[name='usuario']").val().trim();
    var clave = $("input[name='clave']").val().trim();
    
    if (!nombre || !correo || !usuario || !clave) {
        if (!nombre) {
            $("input[name='nombre']").css('outline', '2px solid red');
        }
        if (!correo) {
            $("input[name='correo']").css('outline', '2px solid red');
        }
        if (!usuario) {
            $("input[name='usuario']").css('outline', '2px solid red');
        }
        if (!clave) {
            $("input[name='clave']").css('outline', '2px solid red');
        }

        $(".msg").html("<p class='mensaje-error'>Por favor, completa todos los campos.</p>")
                 .css("display", "flex")
                 .show();
        setTimeout(() => { $(".msg").hide(); }, 3000);
        
        return; // Detiene la ejecución si algún campo está vacío
    }

    var userData = {
        nombre: nombre,
        correo: correo,
        usuario: usuario,
        clave: clave
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

        // Limpiar los campos del formulario
        $("input[name='nombre']").val('');
        $("input[name='correo']").val('');
        $("input[name='usuario']").val('');
        $("input[name='clave']").val('');
    })
    .fail(function(error) {
        console.log("Error en el registro:", error.responseText);
        $(".msg").html("<p>Error en el registro</p>")
                .css("display", "flex")
                .show();
    
        setTimeout(function() { $(".msg").hide(); }, 3000);
    });
});
// PETICION AL ENDPOINT DE REGISTRO
// ++++++++++++++++++++++++++++++++++++++++++

// EVENTO ELIMINAR OUTLINE 
$("input[name='nombre'], input[name='correo'], input[name='usuario'], input[name='clave']").on('input', function() {
    $(this).css('outline', 'none');
});
/* ************************************** 
   ************************************** */

// 
$("#togglePassword").on("click", function() {
    // Obtener el input de contraseña
    var passwordInput = $("input[name='pasw-login']")
    var eyeIcon = $("#eyeIcon")

    // Verificar si el tipo es password o text
    if (passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
        eyeIcon.attr("src", "./assets/ver.png");

    } else {
        passwordInput.attr("type", "password");
        eyeIcon.attr("src", "./assets/ojo-cerrado.png");
    }
});


btnRegister.addEventListener('click', Register);
btnLogin.addEventListener('click', Login);