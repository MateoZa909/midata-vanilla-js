<?php

    $conexion = mysqli_connect("localhost", "root", "", "user");

    if ($conexion) {
        echo "Conectado exitosamente";
    } else {
        echo "Error en la conexión";
    }

?>
