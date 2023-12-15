<?php
    // $host = "localhost";
    // $usuario = "root";
    // $clave = "";
    // $base_de_datos = "user";
    $host =  '72.167.77.8';
    $user =  'IT_USER';
    $password =  '{Nd8=[So7Uk3';
    $database =  'DATA_NACIONAL';

$conexion = new mysqli($host, $user, $password, $database);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($conexion) {
    echo "Conexion exitosa";
} else {
    echo "Error al conectarse";
}

$conexion->set_charset("utf8");
?>
