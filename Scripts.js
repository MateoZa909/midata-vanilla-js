// ***************************************************
// ***************************************************

// ***************************************************
// ***************************************************

// 3 ------------------------------------------------
// Script para traer registros dependiendo de que boton se use
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia a los botones y el <tbody>
    const buttons = document.querySelectorAll(".get-five, .get-ten");
    const tbody = document.getElementById("tbody_datos");

    // Agregar evento de clic a los botones
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Ocultar el <tbody> antes de la solicitud AJAX
            tbody.style.display = "none";

            const script = button.getAttribute("data-script");
            const registros = button.getAttribute("data-registros");

            // Realizar una solicitud AJAX para ejecutar el script PHP correspondiente
            const xhr = new XMLHttpRequest();
            xhr.open("GET", script + "?registros=" + registros, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText); // Muestra la respuesta del servidor en la consola
                    tbody.innerHTML = xhr.responseText;
                    tbody.style.display = "table-row-group";
                }
            };
            xhr.send();
        });
    });
});
// Script para traer registros dependiendo de que boton se use
// 3 ------------------------------------------------

// ***************************************************
// ***************************************************

// 4 ----------------------------------
// Función para actualizar el contador de la próxima actualización
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las celdas con la clase 'countdown'
    var countdownElements = document.querySelectorAll('.countdown');

    // Función para actualizar el contador regresivo
    const actualizarContadorRegresivo = (element) => {
      var tiempoFinal = element.dataset.time;
      var fechaFinal = new Date('2023-12-13T' + tiempoFinal + ':00');

      const actualizar = () => {
        var ahora = new Date();
        var diferencia = Math.floor((fechaFinal - ahora) / 1000);

        if (diferencia <= 0) {
          element.textContent = '¡Tiempo terminado!';
          return;
        }

        var horas = Math.floor(diferencia / 3600);
        var minutos = Math.floor((diferencia % 3600) / 60);
        var segundos = diferencia % 60;

        element.textContent = horas + 'h ' + minutos + 'm ' + segundos + 's';

        setTimeout(actualizar, 1000);
      }

      actualizar();
    }

    countdownElements.forEach(function (element) {
      actualizarContadorRegresivo(element);
    });
  });
// Función para actualizar el contador de la próxima actualización
// 4 ----------------------------------

// ***************************************************
// ***************************************************

// 5 -----------------------------------
// Mostrar segunda tabla y fila seleccionada
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#table-campaigns tbody tr');
    const secondaryTable = document.getElementById('second-table');
    let selectedRow = null;

    // Agregar un controlador de clic a las filas de la tabla principal
    rows.forEach((row) => {
        row.addEventListener('click', () => {
            const isSelected = row.classList.contains('selected');

            rows.forEach((otherRow) => {
                otherRow.classList.remove('selected');
            });

            if (!isSelected) {
                row.classList.add('selected');
                showSecondaryTable(row);
            } else {
                hideSecondaryTable();
            }
        });
    });

    // Controlador de clic para ocultar la segunda tabla y deseleccionar fila
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#table-campaigns') && !event.target.closest('#second-table')) {
            hideSecondaryTable();
            rows.forEach((otherRow) => {
                otherRow.classList.remove('selected');
            });
        }
    });

    // Controlador de clic para ocultar la segunda tabla al hacer clic en la imagen x-icon
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('x-icon')) {
            hideSecondaryTable();
            // Desmarca la fila seleccionada
            rows.forEach((otherRow) => {
                otherRow.classList.remove('selected');
            });
        }
    });

    // Función para ocultar la segunda tabla
    function hideSecondaryTable() {
        secondaryTable.style.display = 'none';
    }

    // Función para mostrar la segunda tabla con contenido personalizado
    function showSecondaryTable(clickedRow) {
        const tables = [
            { name: 'Tabla 1', icon: 'ojo.png' },
            { name: 'Tabla 2', icon: 'ojo.png' }
        ];

        const content = `
            <table>
                <tr><th>Tablas relacionadas</th><th><img class="x-icon" src="./assets/delete.svg" alt=""></th></tr>
                ${tables.map(table => `<tr><td>${table.name}</td><td><img class="eye-icon" src="./assets/${table.icon}" alt=""></td></tr>`).join('')}
            </table>`;

        secondaryTable.innerHTML = content;
        secondaryTable.style.display = 'block';
    }
});
// Mostrar segunda tabla y fila seleccionada
// 5 -----------------------------------

// ***************************************************
// ***************************************************

// 6 --------------------------------------------
// Editar periodicidad de Campañas
function startCustomTimeout() {
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;

    customTimeout(days, hours, minutes, function() {
        console.log("¡El temporizador ha finalizado!");
    });
}

function customTimeout(days, hours, minutes, callback) {
    const totalMilliseconds = (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
    setTimeout(callback, totalMilliseconds);
}
// Editar periodicidad de Campañas
// 6 --------------------------------------------

// ***************************************************
// ***************************************************

// 7 ----------------------------------------------
// Mostrar y esconder modal para ajustes
var btnSetting = document.getElementById("btn-setting");
        var containerModal = document.querySelector(".container-modal");
        var modalTimer; // Variable para el temporizador
        var modalVisible = false; // Variable para rastrear la visibilidad del modal

        btnSetting.addEventListener("click", function() {
            if (!modalVisible) {
                // Mostrar el contenedor modal si no está visible
                containerModal.style.display = "block";
                
                // Iniciar el temporizador de 4 segundos para ocultar el contenedor
                modalTimer = setTimeout(function() {
                    containerModal.style.display = "none"; // Ocultar el contenedor después de 4 segundos
                }, 4000); // 4000 milisegundos = 4 segundos
                
                modalVisible = true; // El modal está visible
            } else {
                // Ocultar el contenedor modal si está visible y se hace clic nuevamente en el botón
                containerModal.style.display = "none";
                clearTimeout(modalTimer); // Cancelar el temporizador
                modalVisible = false; // El modal está oculto
            }
        });

        // Agregar un event listener para detectar clics dentro de containerModal
        containerModal.addEventListener("click", function(event) {
            // Cancelar el temporizador si se hizo clic en algún elemento dentro de containerModal
            clearTimeout(modalTimer);
        });

        // Agregar event listeners para detectar cambios en los campos de entrada dentro de containerModal
        var daysInput = document.getElementById("days");
        var hoursInput = document.getElementById("hours");
        var minutesInput = document.getElementById("minutes");

        [daysInput, hoursInput, minutesInput].forEach(function(input) {
            input.addEventListener("input", function() {
                // Cancelar el temporizador si se ha tocado algún elemento dentro del modal
                clearTimeout(modalTimer);
            });
        });
// Mostrar y esconder modal para ajustes
// 7 ----------------------------------------------






