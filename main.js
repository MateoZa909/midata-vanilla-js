// Solicitud Ajax 5 regisrors
document.querySelector('.get-five').addEventListener('click', function () {
    fetch('/5-registros')
      .then(response => response.json())
      .then(data => {
        // Manejar los datos recibidos, por ejemplo, actualizar la vista
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener los últimos 5 registros:', error);
      });
});

// Solicitud Ajax 10 regisrors
document.querySelector('.get-ten').addEventListener('click', function () {
fetch('/10-registros')  // Debes definir '/10-registros' como una ruta en tu aplicación
    .then(response => response.json())
    .then(data => {
    // Manejar los datos recibidos, por ejemplo, actualizar la vista
    console.log(data);
    })
    .catch(error => {
    console.error('Error al obtener los últimos 10 registros:', error);
    });
});

// Solicitud Ajax 25 regisrors
document.querySelector('#btn-twenty-five').addEventListener('click', function () {
    fetch('/25-registros')  // Debes definir '/25-registros' como una ruta en tu aplicación
      .then(response => response.json())
      .then(data => {
        // Manejar los datos recibidos, por ejemplo, actualizar la vista
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener los últimos 25 registros:', error);
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
    $('#actualizarBoton').on('click', function() {
      const nuevoContenido = 'Nuevo contenido para la campaña'; // El nuevo contenido que deseas establecer

      // Realiza una solicitud POST al nuevo endpoint
      $.ajax({
        url: '/actualizar-message-campaign',
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
    $('#mostrarActualizarBoton').on('click', function() {
      const nuevoContenido = 'Nuevo contenido para eliminar campaña'; // El nuevo contenido que deseas establecer

      // Realiza una solicitud POST al nuevo endpoint
      $.ajax({
        url: '/mostrar-y-actualizar-message-delete',
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