<?php

$usuario = "root";
$clave = "";
$base_de_datos = "datatable";
$host = "localhost"; // Reemplaza "localhost" con la dirección del servidor de la base de datos si es necesario

// Establecer la conexión a la base de datos
$conexion = new mysqli($host, $usuario, $clave, $base_de_datos);

// Verificar si la conexión tuvo éxito
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta SQL para traer todos los registros de la tabla (reemplaza "nombre_de_tabla" con el nombre real de tu tabla)
$sql = "SELECT CAL_ID, CAL_CONTACT, CAL_AGENT_FN, CAL_AGENT_LN, CAL_PHONE, CAL_CALL_START, CAL_CALL_FINISH, CAL_CAMPAIGN, CAL_QUEUE, CAL_TIME_LENGTH, CAL_TIME_QUEUE, CAL_TIME_SPEAKE, CAL_TIME_WRAP, CAL_HANGUP, CAL_TYPEDOC, CAL_DOCUMENTO, CAL_MOTIVO FROM data";

// Ejecutar la consulta
$resultado = $conexion->query($sql);

// Verificar si la consulta tuvo éxito
if ($resultado) {
    // Recorrer los resultados y procesar los registros
    while ($fila = $resultado->fetch_assoc()) {
        // Acceder a las nuevas columnas y mostrar su contenido
        $calID = $fila["CAL_ID"];
        $calContacto = $fila["CAL_CONTACT"];
        $calAgenteNombre = $fila["CAL_AGENT_FN"];
        $calAgenteApellido = $fila["CAL_AGENT_LN"];
        $calTelefono = $fila["CAL_PHONE"];
        $calInicioLlamada = $fila["CAL_CALL_START"];
        $calFinLlamada = $fila["CAL_CALL_FINISH"];
        $calCampania = $fila["CAL_CAMPAIGN"];
        $calCola = $fila["CAL_QUEUE"];
        $calDuracionTotal = $fila["CAL_TIME_LENGTH"];
        $calDuracionCola = $fila["CAL_TIME_QUEUE"];
        $calDuracionHablando = $fila["CAL_TIME_SPEAKE"];
        $calDuracionWrap = $fila["CAL_TIME_WRAP"];
        $calHangup = $fila["CAL_HANGUP"];
        $calTipoDoc = $fila["CAL_TYPEDOC"];
        $calDocumento = $fila["CAL_DOCUMENTO"];
        $calMotivo = $fila["CAL_MOTIVO"];

        // Mostrar la información de las nuevas columnas
        echo "ID: " . $calID . "<br>";
        echo "Contacto: " . $calContacto . "<br>";
        echo "Agente: " . $calAgenteNombre . " " . $calAgenteApellido . "<br>";
        echo "Teléfono: " . $calTelefono . "<br>";
        echo "Inicio de Llamada: " . $calInicioLlamada . "<br>";
        echo "Fin de Llamada: " . $calFinLlamada . "<br>";
        echo "Campaña: " . $calCampania . "<br>";
        echo "Cola: " . $calCola . "<br>";
        echo "Duración Total: " . $calDuracionTotal . "<br>";
        echo "Duración en Cola: " . $calDuracionCola . "<br>";
        echo "Duración Hablando: " . $calDuracionHablando . "<br>";
        echo "Duración Wrap: " . $calDuracionWrap . "<br>";
        echo "Hangup: " . $calHangup . "<br>";
        echo "Tipo de Documento: " . $calTipoDoc . "<br>";
        echo "Documento: " . $calDocumento . "<br>";
        echo "Motivo: " . $calMotivo . "<br>";
    }
    
    // Liberar los resultados
    $resultado->free();
} else {
    echo "Error en la consulta: " . $conexion->error;
}

// Cerrar la conexión a la base de datos
$conexion->close();

?>