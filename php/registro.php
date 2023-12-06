<?php

    include "conexion.php";

<<<<<<< HEAD
    echo $_SERVER['REQUEST_METHOD'];
=======
>>>>>>> 83237936b0af0995cf7017a00934b7af17ed637a
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    $clave = hash('sha512', $clave);

    $query = "INSERT INTO 
              users(nombre, correo, usuario, clave)
              VALUES 
              ('$nombre', '$correo', '$usuario','$clave')
    ";

    $resultado = $conexion->query($query);

    if ($resultado){
        return "true";
    }else{
        return "false";
    }

?>