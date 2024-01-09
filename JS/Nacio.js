// Solicitud Ajax 5 regisrors
$('.get-five').click(function() {
    $.ajax({
        url: 'http://localhost:3000/5/registros',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Datos recibidos del servidor:', data);
            // Limpiar el contenido actual del tbody
            $('#tbody_datos').empty();
    
            // Iterar a través de los datos y agregar filas a la tabla
            $.each(data, function(index, registro) {
                var fila = $('<tr>');
                fila.append($('<td>').text(registro.CAL_ID));
                fila.append($('<td>').text(registro.CAL_CONTACT));
                fila.append($('<td>').text(registro.CAL_AGENT_FN));
                fila.append($('<td>').text(registro.CAL_AGENT_LN));
                fila.append($('<td>').text(registro.CAL_PHONE));
                fila.append($('<td>').text(registro.CAL_CALL_START));
                fila.append($('<td>').text(registro.CAL_CALL_FINISH));
                fila.append($('<td>').text(registro.CAL_CAMPAIGN));
                fila.append($('<td>').text(registro.CAL_QUEUE));
                fila.append($('<td>').text(registro.CAL_TIME_LENGTH));
                fila.append($('<td>').text(registro.CAL_TIME_QUEUE));
                fila.append($('<td>').text(registro.CAL_TIME_SPEAKE));
                fila.append($('<td>').text(registro.CAL_TIME_WRAP));
                fila.append($('<td>').text(registro.CAL_HANGUP));
                fila.append($('<td>').text(registro.CAL_TYPEDOC));
                fila.append($('<td>').text(registro.CAL_DOCUMENTO));
                fila.append($('<td>').text(registro.CAL_MOTIVO));
                $('#tbody_datos').append(fila);
            });
        },
        error: function(error) {
            console.error('Error al obtener los últimos 5 registros:', error);
        }
    });
    });
    
// Solicitud Ajax 10 regisrors
$('.get-ten').click(function() {
$.ajax({
    url: 'http://localhost:3000/10/registros',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log('Datos recibidos del servidor:', data);
        // Limpiar el contenido actual del tbody
        $('#tbody_datos').empty();

        // Iterar a través de los datos y agregar filas a la tabla
        $.each(data, function(index, registro) {
            var fila = $('<tr>');
            fila.append($('<td>').text(registro.CAL_ID));
            fila.append($('<td>').text(registro.CAL_CONTACT));
            fila.append($('<td>').text(registro.CAL_AGENT_FN));
            fila.append($('<td>').text(registro.CAL_AGENT_LN));
            fila.append($('<td>').text(registro.CAL_PHONE));
            fila.append($('<td>').text(registro.CAL_CALL_START));
            fila.append($('<td>').text(registro.CAL_CALL_FINISH));
            fila.append($('<td>').text(registro.CAL_CAMPAIGN));
            fila.append($('<td>').text(registro.CAL_QUEUE));
            fila.append($('<td>').text(registro.CAL_TIME_LENGTH));
            fila.append($('<td>').text(registro.CAL_TIME_QUEUE));
            fila.append($('<td>').text(registro.CAL_TIME_SPEAKE));
            fila.append($('<td>').text(registro.CAL_TIME_WRAP));
            fila.append($('<td>').text(registro.CAL_HANGUP));
            fila.append($('<td>').text(registro.CAL_TYPEDOC));
            fila.append($('<td>').text(registro.CAL_DOCUMENTO));
            fila.append($('<td>').text(registro.CAL_MOTIVO));
            $('#tbody_datos').append(fila);
        });
    },
    error: function(error) {
        console.error('Error al obtener los últimos 25 registros:', error);
    }
});
});

// Solicitud Ajax 25 regisrors
$('#btn-twenty-five').click(function() {
$.ajax({
    url: 'http://localhost:3000/25/registros',
    type: 'GET',
    dataType: 'json',
    beforeSend: function(){
        console.log('hola');
    },
    success: function(data) {
        console.log('Datos recibidos del servidor:', data);
        // Limpiar el contenido actual del tbody
        $('#tbody_datos').empty();

        // Iterar a través de los datos y agregar filas a la tabla
        $.each(data, function(index, registro) {
            var fila = $('<tr>');
            fila.append($('<td>').text(registro.CAL_ID));
            fila.append($('<td>').text(registro.CAL_CONTACT));
            fila.append($('<td>').text(registro.CAL_AGENT_FN));
            fila.append($('<td>').text(registro.CAL_AGENT_LN));
            fila.append($('<td>').text(registro.CAL_PHONE));
            fila.append($('<td>').text(registro.CAL_CALL_START));
            fila.append($('<td>').text(registro.CAL_CALL_FINISH));
            fila.append($('<td>').text(registro.CAL_CAMPAIGN));
            fila.append($('<td>').text(registro.CAL_QUEUE));
            fila.append($('<td>').text(registro.CAL_TIME_LENGTH));
            fila.append($('<td>').text(registro.CAL_TIME_QUEUE));
            fila.append($('<td>').text(registro.CAL_TIME_SPEAKE));
            fila.append($('<td>').text(registro.CAL_TIME_WRAP));
            fila.append($('<td>').text(registro.CAL_HANGUP));
            fila.append($('<td>').text(registro.CAL_TYPEDOC));
            fila.append($('<td>').text(registro.CAL_DOCUMENTO));
            fila.append($('<td>').text(registro.CAL_MOTIVO));
            $('#tbody_datos').append(fila);
        });
    },
    error: function(error) {
        console.error('Error al obtener los últimos 25 registros:', error);
    }
});
});

// Solicitud Ajax cerrar sesión
$("#btn-logout").on("click", function() {
    $.ajax({
        type: "POST",
        url: "/logout",
        dataType: "json"
    })
    .done(function(response) {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = '/login-signup';
    })
    .fail(function(error) {
        console.log("Error al cerrar sesión:", error.responseText);
        // Manejar el error aquí
    });
});