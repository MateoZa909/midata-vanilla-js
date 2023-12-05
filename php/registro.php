<?php

    include "conexion.php";

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    $query = "INSERT INTO users(nombre, correo, usuario, clave)
              VALUES ('$nombre', '$correo', '$usuario', '$clave')
    ";

    $consulta = mysqli_query($conexion ,$query);
?>