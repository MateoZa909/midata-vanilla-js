// Solicitud Ajax 5 regisrors
$('.get-five').click(function() {
  $.ajax({
      url: '/5-registros',
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

// Solicitud Ajax 10 regisrors
$('.get-ten').click(function() {
  $.ajax({
      url: '/10-registros',
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
      url: '/25-registros',
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


// Función para cargar contenido de /nacionales
$("#nacionales").click(function() {
    $.ajax({
        url: "/nacionales",
        method: "GET",
        success: function(data) {
            $("#contenido").html(data);
        },
        error: function(error) {
            console.error("Error al cargar /nacionales", error);
        }
    });
});

// Función para cargar contenido de /internacionales
$("#internacionales").click(function() {
    $.ajax({
        url: "/internacionales",
        method: "GET",
        success: function(data) {
            $("#contenido").html(data);
        },
        error: function(error) {
            console.error("Error al cargar /internacionales", error);
        }
    });
});

// Funcion para agregar campaña 
$(document).ready(function() {
    $('.back-add').on('click', function() {
      const nuevoContenido = 'Nuevo contenido para la campaña'; // El nuevo contenido que deseas establecer

      // Realiza una solicitud POST al nuevo endpoint
      $.ajax({
        url: '/añadir-campaña',
        method: 'POST',
        data: { nuevoContenido: nuevoContenido },
        success: function(response) {
          // Actualiza el contenido del contenedor message-campaign con el nuevoContenido
          $('#contenidoCampaign').text(nuevoContenido);
          $('.message-campaign').show(); // Muestra el contenedor si estaba oculto
          alert(response.mensaje); // Muestra un mensaje de éxito
        },
        error: function(error) {
          alert('Error al actualizar el contenido: ' + error.statusText);
        }
      });
    });
});

// Funcion para eliminar campaña
$(document).ready(function() {
    $('.back-del').on('click', function() {
      const nuevoContenido = 'Nuevo contenido para eliminar campaña'; // El nuevo contenido que deseas establecer

      // Realiza una solicitud POST al nuevo endpoint
      $.ajax({
        url: '/eliminar-campaña',
        method: 'POST',
        data: { nuevoContenido: nuevoContenido },
        success: function(response) {
          // Actualiza el contenido del contenedor message-delete con el nuevoContenido
          $('#contenidoDelete').text(nuevoContenido);
          $('.message-delete').show(); // Muestra el contenedor si estaba oculto
          alert(response.mensaje); // Muestra un mensaje de éxito
        },
        error: function(error) {
          alert('Error al mostrar/actualizar el contenido: ' + error.statusText);
        }
      });
    });
});

// Funcion para actualizar
$(document).ready(function() {
  $('.message-setting').click(function() {
      // ID del registro que deseas actualizar
      const idActualizar = 1; // Reemplaza esto con el ID real del registro que deseas actualizar

      // Nuevos valores para las columnas
      const nuevoValor1 = 'NuevoValor1'; // Reemplaza con el nuevo valor para columna1
      const nuevoValor2 = 'NuevoValor2'; // Reemplaza con el nuevo valor para columna2
      const nuevoValor3 = 'NuevoValor3'; // Reemplaza con el nuevo valor para columna3

      // Datos a enviar en la solicitud POST
      const datos = {
          idActualizar: idActualizar,
          nuevoValor1: nuevoValor1,
          nuevoValor2: nuevoValor2,
          nuevoValor3: nuevoValor3
      };

      // Realiza la solicitud POST para actualizar la configuración
      $.post('/api/configuracion', datos, function(response) {
          // Maneja la respuesta del servidor (por ejemplo, muestra un mensaje de éxito)
          console.log(response.mensaje);
      });
  });
});