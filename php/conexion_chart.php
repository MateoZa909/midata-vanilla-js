<?php

$conex = mysqli_connect("localhost", "root", "", "años");

if (!$conex) {
    die("No se pudo conectar: " . mysqli_connect_error());
}

$sql = "SELECT * FROM suma_años";

// Ejecutar la consulta SQL
$resultado = mysqli_query($conex, $sql);

if (!$resultado) {
    die("Error en la consulta: " . mysqli_error($conex));
}

while ($fila = mysqli_fetch_assoc($resultado)) {
    // Aquí puedes acceder a los datos de cada fila
    // Por ejemplo, para imprimir el contenido de una columna llamada "campo_nombre":
    echo "2015: " . $fila['2015'];
    echo "2016: " . $fila['2016'];
    echo "2017: " . $fila['2017'];
    echo "2018: " . $fila['2018'];
    echo "2019: " . $fila['2019'];
    echo "2020: " . $fila['2020'];
    echo "2021: " . $fila['2021'];
    echo "2022: " . $fila['2022'];
}

// Liberar los resultados
mysqli_free_result($resultado);

// Cerrar la conexión
mysqli_close($conex);


?>