// Eventos (Boton Actualizar todos), (Boton 5 ultimos), (Boton traer 50 registros), (Actualiza ahora), (Icono ajustes), (Boton eliminar), (Boton Nacional e Internacional)
$(document).ready(function() {
    // Boton 50 ultimos
    $('#btn-twentyFive').on('click', function() {
        const query = "SELECT * FROM CGN_LLAMADAS_INBOUND WHERE STR_TO_DATE(CAL_CALL_START, '%Y-%m-%d %H:%i') BETWEEN STR_TO_DATE('2023-11-1', '%Y-%m-%d') AND STR_TO_DATE('2023-11-2', '%Y-%m-%d') LIMIT 25";
        updateTable(query);
    });

    // Boton "5 ultimos"
    $('.btn-last-five').on('click', function() {
        // Aquí pones la consulta que deseas enviar al backend para los últimos 10
        const query = "SELECT * FROM CGN_LLAMADAS_INBOUND ORDER BY DESC LIMIT 5";
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

// Evento clic en fila de la tabla principal
$(document).ready(function() {
    $('#database-table tbody').on('click', 'tr', function() {
        const rowData = getRowData($(this));
        sendTableRelatedRequest(rowData);
    });

    // Función para enviar la solicitud al servidor cuando se hace clic en una fila
    function sendTableRelatedRequest(rowData) {
        $.ajax({
            url: '/midata/tablas-relacionadas',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ rowData: rowData }),
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor
                // Aquí puedes redirigir o realizar otras acciones después del éxito
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    }

    // Función para obtener datos de la fila
    function getRowData(row) {
        const rowData = [];
        row.find('td').each(function() {
            rowData.push($(this).text());
        });
        return rowData;
    }
});


// Función para enviar la solicitud al servidor cuando se hace clic en una fila
function sendRowClickRequest(rowData) {
    $.ajax({
        url: 'http://localhost:3000/midata/row-click',
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

// Eventos para los botones (Azules y Naranjas) de la pestaña Login y Register
$(document).ready(function() {
    // Evento clic para el botón azul de inicio de sesión
    $('#btn-sign-in').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/login',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor
                // Aquí puedes redirigir o realizar otras acciones después del éxito
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Evento clic para el botón azul de registro
    $('#btn-sign-up').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/register',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor
                // Aquí puedes redirigir o realizar otras acciones después del éxito
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Evento clic para el botón naranja de inicio de sesión
    $('#btn-login').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/btn-login',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor
                // Aquí puedes redirigir o realizar otras acciones después del éxito
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Evento clic para el botón naranja de registro
    $('#btn-register').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/btn-register',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor
                // Aquí puedes redirigir o realizar otras acciones después del éxito
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

// Evento del formulario de ajustes de periodicidad
$(document).ready(function() {
    $("#btn-apply").on("click", function() {
        // Obtén los valores de los campos de entrada con jQuery
        const days = $("#days").val();
        const hours = $("#hours").val();
        const minutes = $("#minutes").val();

        // Realiza la solicitud POST al endpoint del servidor con jQuery
        $.ajax({
            url: '/midata/submit-form',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ days, hours, minutes }),
            success: function(data) {
                console.log('Respuesta del servidor:', data);
            },
            error: function(error) {
                console.error('Error al enviar la solicitud:', error);
            }
        });
    });
});

// Eventos de (BOTON APLICAR), (BOTON DESACTIVAR CAMPAÑA),(IMAGEN DE AJUSTES)
$(document).ready(function() {
    // Evento clic para el botón Aplicar
    $('#btn-apply').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/apply',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor

                // Puedes realizar otras acciones después del éxito si es necesario
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Evento clic para el botón Desactivar campaña
    $('#btn-inactive-campaign').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/inactive-campaign',
            success: function(response) {
                console.log(response); // Manejar la respuesta del servidor

                // Puedes realizar otras acciones después del éxito si es necesario
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Evento clic para la imagen con ID icon-edit
    $('#icon-edit').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/midata/edit-icon',
            success: function(response) {
                console.log(response); 
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});


