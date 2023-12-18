<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi data</title>
    <link rel="stylesheet" href="./Styles/Login.css">
</head>
<body>
    
    <main>
        <div class="contain-all">
            
            <div class="box-back">
                <div class="box-back-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar</p>
                    <button id="btn-sign-in">Iniciar sesión</button>
                </div>

                <div class="box-back-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Registrate para que puedas iniciar sesión</p>
                    <button id="btn-sign-up">Regístrate</button>
                </div>
            </div>

            <!-- Formulario login y registro -->
            <div class="contain-login-register">
                <!-- Formulario login -->
                <form action="" class="form-login">
                    <h2>Iniciar sesión</h2>
                    <input type="text" placeholder="Correo electronico">
                    <input type="password" placeholder="Contraseña">
                    <button id="btn-login">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Entrar
                    </button>
                </form>

                <!-- Formulario registro -->
                <form action="php/registro.php" method="POST" class="form-register">
                    <h2>Regístrarse</h2>
                    <input type="text" name="nombre" placeholder="Nombre Completo">
                    <input type="text" name="correo" placeholder="Correo electronico">
                    <input type="text" name="usuario" placeholder="Nombre de usuario">
                    <input type="password" name="clave" placeholder="Contraseña">
                    <button id="btn-register">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Regístrarse
                    </button>
                </form>
            </div>

        </div>
        
        <div class="msg">
            <p>Registrado exitosamente!</p>
        </div>
    </main>

    <script src="./Login.js"></script>
</body>
</html>