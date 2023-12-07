<?php

<<<<<<< HEAD
$conex = mysqli_connect("localhost", "root", "", "años");
=======
$conex = mysqli_connect("localhost", "root", "", "año_mes"); // Cambié "año_mes" a "ano_mes" en la conexión
>>>>>>> aa4e660cee97dadd13d34620961d1e6450d13510

if (!$conex) {
    die("No se pudo conectar: " . mysqli_connect_error());
}

<<<<<<< HEAD
$sql = "SELECT * FROM suma_años";

// Ejecutar la consulta SQL
=======
$sql = "SELECT año, valor_año, valor_mes FROM valores"; // Cambié la consulta SQL para seleccionar las columnas adecuadas

>>>>>>> aa4e660cee97dadd13d34620961d1e6450d13510
$resultado = mysqli_query($conex, $sql);

if (!$resultado) {
    die("Error en la consulta: " . mysqli_error($conex));
}

<<<<<<< HEAD
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


=======
// Crear un array asociativo para almacenar los datos
$data = array();

while ($fila = mysqli_fetch_assoc($resultado)) {
    $data['valores'][] = $fila; // Almacenar toda la fila en el array 'valores'
}

// Convertir el array en formato JSON
$json_data = json_encode($data);

echo $json_data; // Imprimir el JSON resultante

mysqli_free_result($resultado);
mysqli_close($conex);

>>>>>>> aa4e660cee97dadd13d34620961d1e6450d13510
?>