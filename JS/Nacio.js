// ******************************************
// **            (FUNCIONA)                **
// SOLICITUD AJAX 5 REGISTROS
$('.get-five').click(function() {
    $.ajax({
        url: 'http://localhost:3000/5/registros',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Datos recibidos del servidor:', data);
            if(data.length > 0) {
                $('.delete-search-btns').show(); // Muestra el botón de eliminar si hay registros
            }

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
// SOLICITUD AJAX 5 REGISTROS
/* ************************************** 
    ************************************** */
    
    
// ******************************************
// **            (FUNCIONA)                **
// SOLICITUD AJAX 10 REGISTROS
$('.get-ten').click(function() {
$.ajax({
    url: 'http://localhost:3000/10/registros',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log('Datos recibidos del servidor:', data);
        if(data.length > 0) {
            $('.delete-search-btns').show(); // Muestra el botón de eliminar si hay registros
        }

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
// SOLICITUD AJAX 10 REGISTROS
/* ************************************** 
    ************************************** */
    

// ******************************************
// **            (FUNCIONA)                **
// SOLICITUD AJAX 25 REGISTROS  
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
        if(data.length > 0) {
            $('.delete-search-btns').show(); // Muestra el botón de eliminar si hay registros
        }

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
// SOLICITUD AJAX 25 REGISTROS  
/* ************************************** 
    ************************************** */

    
// ******************************************
// **            (FUNCIONA)                **
// SOLICITUD AJAX CERRAR SESIÓN
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
// SOLICITUD AJAX CERRAR SESIÓN
/* ************************************** 
    ************************************** */


// *************************************************
// **               (FUNCIONA)                    **
// FUNCION REDIRECCIONAMIENTO PAGINA INTERNACIONALES
$('#internacionales').click(function() {
    $.ajax({
        url: '/internacionales',
        type: 'GET',
        success: function(response) {
            window.location.href = '/internacionales'
            console.log('Respuesta recibida:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error en la petición AJAX:', error);
        }
    });
});
// FUNCION REDIRECCIONAMIENTO PAGINA INTERNACIONALES
/* ************************************************* 
    ********************************************* */

// *************************************************
// **               (FUNCIONA)                    **
// EVENTO ELIMINAR REGISTTROS DE TABLA
$('.delete-search-btns').click(function() {
    $('#tbody_datos').empty();
    $('.delete-search-btns').hide(); // OCultar boton
})
/* ************************************************* 
    ********************************************* */