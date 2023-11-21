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