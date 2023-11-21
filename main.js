$(document).ready(function() {
  $('#btn-all').click(function() {
      // Aquí pones la consulta que deseas enviar al backend
      const query = "SELECT * FROM CGN_LLAMADAS_INBOUND WHERE STR_TO_DATE(CAL_CALL_START, '%Y-%m-%d %H:%i') BETWEEN STR_TO_DATE('2023-11-1', '%Y-%m-%d') AND STR_TO_DATE('2023-11-2', '%Y-%m-%d') LIMIT 5";

      $.ajax({
          url: 'http://localhost:3000/query', // Asegúrate de que esta sea la URL correcta de tu backend
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ query: query}),
          success: function(data) {
              // Vaciar la tabla actual
              $('#database-table tbody').empty();

              // Iterar sobre los datos y agregar filas a la tabla
              data.forEach(row => {
                  let html = '<tr>';
                  for (let key in row) {
                      html += `<td>${row[key]}</td>`;
                  }
                  html += '</tr>';
                  $('#database-table tbody').append(html);
              });
          },
          error: function(error) {
              console.error('Error:', error);
          }
      });
  });
});

// Boton 5 ultimos
$(document).ready(function() {
    $('#btn-all').click(function() {
        // Aquí pones la consulta que deseas enviar al backend
        const query = "SELECT * FROM CGN_LLAMADAS_INBOUND WHERE STR_TO_DATE(CAL_CALL_START, '%Y-%m-%d %H:%i') BETWEEN STR_TO_DATE('2023-11-1', '%Y-%m-%d') AND STR_TO_DATE('2023-11-2', '%Y-%m-%d') LIMIT 5";
  
        $.ajax({
            url: 'http://localhost:3000/query', // Asegúrate de que esta sea la URL correcta de tu backend
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ query: query}),
            success: function(data) {
                // Vaciar la tabla actual
                $('#database-table tbody').empty();
  
                // Iterar sobre los datos y agregar filas a la tabla
                data.forEach(row => {
                    let html = '<tr>';
                    for (let key in row) {
                        html += `<td>${row[key]}</td>`;
                    }
                    html += '</tr>';
                    $('#database-table tbody').append(html);
                });
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

// Boton actualizar todo
$(document).ready(function() {
    $('#btn-updateAll').click(function() {
        const lastFive = "SELECT * FROM CGN_LLAMADAS_INBOUND ORDER BY DESC LIMIT 5";
  
        $.ajax({
            url: 'http://localhost:3000/query',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ query: lastFive }),
            success: function(data) {
   
                $('#database-table tbody').empty();
  
                data.forEach(row => {
                    let html = '<tr>';
                    for (let key in row) {
                        html += `<td>${row[key]}</td>`;
                    }
                    html += '</tr>';
                    $('#database-table tbody').append(html);
                });
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

// Boton traer 10 ultimos
$(document).ready(function() {
    // Agrega un evento de clic al botón "10 últimos"
    $('#btn-last-ten').on('click', function() {
        const lastTen = "SELECT * FROM CGN_LLAMADAS_INBOUND WHERE STR_TO_DATE(CAL_CALL_START, '%Y-%m-%d %H:%i') BETWEEN STR_TO_DATE('2023-11-1', '%Y-%m-%d') AND STR_TO_DATE('2023-11-2', '%Y-%m-%d') LIMIT 5";

        $.ajax({
            url: 'http://localhost:3000/query',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ query: lastTen }),
            success: function(data) {
   
                $('#database-table tbody').empty();
  
                data.forEach(row => {
                    let html = '<tr>';
                    for (let key in row) {
                        html += `<td>${row[key]}</td>`;
                    }
                    html += '</tr>';
                    $('#database-table tbody').append(html);
                });
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

// boton actualizar ahora
document.getElementById('btn-updateNow').addEventListener('click', function() {
    // Hacer una solicitud al nuevo endpoint
    fetch('http://localhost:3000/update-now', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Icono ajustes 
$(document).ready(function () {
    $(".btn-setting").click(function () {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/setting-action",
            success: function (response) {

                alert('Configuración abierta correctamente'); 
            },
            error: function (error) {
                console.error('Error al abrir configuración:', error);
            }
        });
    });
});

// Boton eliminar
$(document).ready(function () {
    $('.btn-delete').click(function () {
        const rowId = $(this).closest('tr').text();
        fetch(`/delete-action/`, {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la acción de Delete');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });
});

// Botones Nacionales e Internacional
$(document).ready(function () {
    $('#btn-nacionales').click(function () {
        fetch('/nacionales-action', {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la acción para Nacionales');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });

// Manejar clic en el botón Internacionales
    $('#btn-internacionales').click(function () {
        fetch('/internacionales-action', {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la acción para Internacionales');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });
});