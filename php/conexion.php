<?php
    $host = "localhost";
    $usuario = "root";
    $clave = "";
    $base_de_datos = "user";

$conexion = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

<<<<<<< HEAD
// if ($conexion) {
//     echo "Conexion exitosa";
// } else {
//     echo "Error al conectarse";
// }

=======
>>>>>>> 83237936b0af0995cf7017a00934b7af17ed637a
$conexion->set_charset("utf8");
?>
