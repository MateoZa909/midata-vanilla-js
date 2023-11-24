$(document).ready(function() {
    // Boton "Todos"
    $('#btn-all').on('click', function() {
        const query = "SELECT * FROM CGN_LLAMADAS_INBOUND WHERE STR_TO_DATE(CAL_CALL_START, '%Y-%m-%d %H:%i') BETWEEN STR_TO_DATE('2023-11-1', '%Y-%m-%d') AND STR_TO_DATE('2023-11-2', '%Y-%m-%d') LIMIT 50";
        updateTable(query);
    });

    // Boton "5 ultimos"
    $('#btn-last-ten').on('click', function() {
        // Aquí pones la consulta que deseas enviar al backend para los últimos 10
        const query = "SELECT * FROM CGN_LLAMADAS_INBOUND ORDER BY DESC LIMIT 10";
        updateTable(query);
    });

    // Boton "Actualizar todo"
    $('#btn-updateAll').on('click', function() {
        const lastFive = "SELECT * FROM CGN_LLAMADAS_INBOUND ORDER BY DESC LIMIT 5";
        updateTable(lastFive);
    });

    // Boton "Actualizar ahora"
    $('#update-now').on('click', function() {
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
    $('.btn-setting').on('click', function() {
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

    // Boton eliminar
    $('.btn-delete').on('click', function() {
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

    // Botones Nacionales e Internacional
    $('#btn-nacionales').on('click', function() {
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
    $('#btn-internacionales').on('click', function() {
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

// Función para actualizar la tabla con datos de la consulta
function updateTable(query) {
    $.ajax({
        url: 'http://localhost:3000/query',
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
}

// Evento clic en fila de la tabla principal
$('#database-table tbody').on('click', 'tr', function() {
    const rowData = getRowData($(this));
    sendRowClickRequest(rowData);
});

// Función para obtener datos de la fila
function getRowData(row) {
    const rowData = [];
    row.find('td').each(function() {
        rowData.push($(this).text());
    });
    return rowData;
}

// Función para enviar la solicitud al servidor cuando se hace clic en una fila
function sendRowClickRequest(rowData) {
    $.ajax({
        url: 'http://localhost:3000/row-click',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ rowData: rowData }),
        success: function(response) {
            console.log(response); // Manejar la respuesta del servidor
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}

