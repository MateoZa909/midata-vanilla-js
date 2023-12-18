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

// if ($conexion) {
//     echo "Conexion exitosa";
// } else {
//     echo "Error al conectarse";
// }

$conexion->set_charset("utf8");
?>
