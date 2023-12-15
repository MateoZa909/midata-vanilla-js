<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Data</title>
    <link rel="stylesheet" href="./Styles/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="shortcut icon" href="./assets/MD.png" type="image/x-icon">
</head>
<body>

    <div class="template">
        <div class="up-section">
            <div class="contain-logo">
                <div class="logomd">
                    <img src="./assets/MD.png" alt="logo">
                    <img class="arrow-down" src="./assets/arrow-down.png" alt="arrow back">
                </div>
    
                <div class="tools" style="display: none;">
                    <div class="arrow-up">
                        <img src="./assets/arrow-down.png" alt="arrow up">
                    </div>
                    <div class="box-tools">
                        <p>Option 1</p>
                        <img src="./assets/shapes.svg" alt="shape-icon">
                    </div>
    
                    <div class="box-tools">
                        <p>Option 2</p>
                        <img src="./assets/shape-polygong.svg" alt="shape-icon">
                    </div>
                </div>
            </div>
    
            <div class="contain-buttons">
                <div class="contain-buttons">
                    <button>
                        <i class="fa-solid fa-house" style="color: #dedede;"></i>
                        Nacionales
                    </button>
                    <button>
                        <i class="fa-solid fa-earth-americas" style="color: #dedede;"></i>
                        Internacionales
                    </button>
                </div>
            </div>
        </div>
    
        <div class="nextOne-section" >
            <div class="table-section">
                <div class="contain-table">
                    <table id="table-campaigns">
                        <thead>
                            <tr>
                                <th>Campañas</th>
                                <th>N° Regístros</th>
                                <th>Regístros nuevos por día</th>
                                <th>Última actualización</th>
                                <th>Veces actualizadas (Día)</th>
                                <th>Próxima actualización</th>
                                <th class="empty"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Campaña 1</td>
                                <td>1370</td>
                                <td>50</td>
                                <td>15:00</td>
                                <td>4</td>
                                <td class="countdown" data-time="10:00">10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 2</td>
                                <td>500</td>
                                <td>50</td>
                                <td>15:00</td>
                                <td>3</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 3</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 4</td>
                                <td>800</td>
                                <td>30</td>
                                <td>15:00</td>
                                <td>2</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 5</td>
                                <td>500</td>
                                <td>20</td>
                                <td>15:00</td>
                                <td>3</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 6</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 7</td>
                                <td>800</td>
                                <td>30</td>
                                <td>15:00</td>
                                <td>2</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
        
                            <tr>
                                <td>Campaña 8</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
    
                            <tr>
                                <td>Campaña 9</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
    
                            <tr>
                                <td>Campaña 10</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00"> 10:00</td>
                                <td></td>
                            </tr>
    
                            <tr>
                                <td>Campaña 11</td>
                                <td>2000</td>
                                <td>100</td>
                                <td>15:00</td>
                                <td>5</td>
                                <td class="countdown" data-time="10:00">10:00</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <table id="second-table" style="display: none;">
                        <thead>

                        </thead>
                        <tbody>
   
                        </tbody>
                    </table>
                </div>
            </div>
    
            <div class="settings-section">
                <!-- first section | setting-section -->
                <div class="content-updateAll">
                        <button id="btn-updateAll">Actualizar todo</button>
                </div>
                <!-- first section | setting-section -->
    
                <!-- second section | setting-section -->
                <div class="content-back-set-del">
                    <div class="between-divs">
                        <div class="content-empty-btn">
                                <button id="update-now">Actualizar ahora</button>
                        </div>
        
                        <div class="content-empty-icons">
                            <div class="container-set-icon">
                                <img id="btn-setting" class="btn-setting" src="./assets/setting.png" alt="setting icon">
                            </div>
                            
                            <div class="container-del-icon">
                                <img class="btn-delete" src="./assets/delete.png" alt="delete icon">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- second section | setting-section -->
    
                <!-- third section | setting-section -->
                <div class="content-request-btns">
                    <div class="container-title">
                        <p>Registros base de datos</p>
                    </div>
    
                    <div class="container-bring-register">
                        <p>Traer registros</p>
                    </div>
    
                    <div class="container-req-btns">
                        <button id="btn-all">50 últimos</button>
                        <button class="get-five">5 últimos</button>
                        <button>10 últimos</button>
                    </div>
                </div>
                <!-- third section | setting-section -->
            </div>
        </div>
    
        <div class="chart-and-table">
            <div class="section-chart" style="position: relative; height: 50vh; width: 50vw;">
                <canvas id="myGraphic"></canvas>
            </div>
    
            <div class="section-table-db">
                <table id="database-table">
                    <thead>
                        <th>CAL_ID</th>
                        <th>CAL_CONTACT</th>
                        <th>CAL_AGENT_FN</th>
                        <th>CAL_AGENT_LN</th>
                        <th>CAL_PHONE</th>
                        <th>CAL_CALL_START</th>
                        <th>CAL_CALL_FINISH</th>
                        <th>CAL_CAMPAIGN</th>
                        <th>CAL_QUEUE</th>
                        <th>CAL_TIME_LENGTH</th>
                        <th>CAL_TIME_QUEUE</th>
                        <th>CAL_TIME_SPEAKE</th>
                        <th>CAL_TIME_WRAP</th>
                        <th>CAL_HANGUP</th>
                        <th>CAL_TYPEDOC</th>
                        <th>CAL_DOCUMENTO</th>
                        <th>CAL_MOTIVO</th>
                    </thead>
                    <tbody id="tbody_datos">
    
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- Modal periodicidad -->
        <div class="container-modal" style="display: none;">
            <div class="title-and-form">
                <div class="title-h1">
                    <h1>Periodicidad</h1>
                </div>

                <form id="timeoutForm">
                    <div class="labels-and-inputs">
                        <div class="labels">
                            <label for="days">Días:</label>
                            <label for="hours">Horas:</label>
                            <label for="minutes">Minutos:</label>
                        </div>
    
                        <div class="inputs">
                            <input type="number" id="days" name="days" placeholder="0" required>
                            <input type="number" id="hours" name="hours" placeholder="0" required>
                            <input type="number" id="minutes" name="minutes" placeholder="0" required>
                        </div>
                    </div>
                    
                    <div class="btn-apply-content">
                        <button id="btn-apply" type="button" onclick="startCustomTimeout()">Aplicar</button>
                    </div>
                </form>
            </div>

            <div class="name-and-inactive">
                <div class="name-campaign">
                    <h1>Campaña 1</h1>
                    <div class="changeName-and-img">
                        <label for="icon-edit">Cambiar nombre</label>
                        <img id="icon-edit" src="./assets/edit.svg" alt="editar nombre">
                    </div>
                </div>

                <div class="content-btn">
                    <button id="inactive-campaign">Desactivar campaña</button>
                </div>
            </div>
        </div>
        <!-- Modal periodicidad -->

        <div class="box-behind" style="display: none;">
            <div class="delete-campaign">
                <h2>¿Desea eliminar la campaña?</h2>
                <div class="box-delete-campaings">
                    <button id="confirm-button">Si</button>
                    <button id="cancel-button">Cancelar</button>
                </div>
            </div>
        </div>
        
    </div>
    
    <!-- Link Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Link Font Awesome -->

    <!-- PARA MANDAR AL LOGIN.PHP -->
    <script>
        // JavaScript para manejar la interactividad de la caja de diálogo
        const confirmButton = document.getElementById('confirm-button');
        const cancelButton = document.getElementById('cancel-button');
        const boxBehind = document.querySelector('.box-behind');

        // Función para cerrar la caja de diálogo
        function closeDialog() {
            boxBehind.style.display = 'none';
        }

        // Agregar manejadores de eventos a los botones
        confirmButton.addEventListener('click', () => {
            // Aquí puedes agregar lógica para eliminar la campaña
            // ...
            closeDialog();
        });

        cancelButton.addEventListener('click', () => {
            closeDialog();
        });
    </script>
    <!-- PARA MANDAR AL LOGIN.PHP -->

    <!-- CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- CHART JS -->

    <!-- Eliminar campaña seleccionada -->
    <script>
        // Variable para almacenar la fila seleccionada
        let selectedRow = null;

        // Agregar un controlador de clic a las filas de la tabla
        const tableRows = document.querySelectorAll("#table-campaigns tbody tr");
        tableRows.forEach((row) => {
            row.addEventListener("click", () => {
                selectedRow = row;
            });
        });

        // Controlador de clic para el botón "btn-delete"
        const deleteButton = document.querySelector(".btn-delete");
        deleteButton.addEventListener("click", () => {
            if (selectedRow) {
                // Mostrar el fondo modal y la caja de confirmación
                document.querySelector(".box-behind").style.display = "flex";
            }
        });

        // Controlador de clic para el botón "Si" en la caja de confirmación
        document.getElementById("confirm-button").addEventListener("click", () => {
            if (selectedRow) {
                // Eliminar la fila seleccionada
                selectedRow.remove();
                selectedRow = null;
                // Ocultar el fondo modal y la caja de confirmación después de eliminar
                document.querySelector(".box-behind").style.display = "none";
            }
        });

        // Controlador de clic para el botón "Cancelar" en la caja de confirmación
        document.getElementById("cancel-button").addEventListener("click", () => {
            if (selectedRow) {
                // Ocultar el fondo modal y la caja de confirmación al hacer clic en "Cancelar"
                document.querySelector(".box-behind").style.display = "none";
            }
        });
    </script>
    <!-- Eliminar campaña seleccionada -->

    <!-- Traer registros tabla de datos inferior -->
    <script>
        $(document).ready(function () {
            try {
                // Realizar una solicitud AJAX para obtener los datos desde el servidor
                $.ajax({
                    url: 'php/conexion_tabla.php', // Reemplaza 'conexion_tabla.php' con la URL de tu script PHP que obtiene los datos
                    method: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        // Iterar a través de los datos y agregar filas a la tabla
                        $.each(data, function (index, record) {
                            $('#tbody_datos').append(`
                                <tr>
                                    <td>${record.CAL_ID}</td>
                                    <td>${record.CAL_CONTACT}</td>
                                    <td>${record.CAL_AGENT_FN}</td>
                                    <td>${record.CAL_AGENT_LN}</td>
                                    <td>${record.CAL_PHONE}</td>
                                    <td>${record.CAL_CALL_START}</td>
                                    <td>${record.CAL_CALL_FINISH}</td>
                                    <td>${record.CAL_CAMPAIGN}</td>
                                    <td>${record.CAL_QUEUE}</td>
                                    <td>${record.CAL_TIME_LENGTH}</td>
                                    <td>${record.CAL_TIME_QUEUE}</td>
                                    <td>${record.CAL_TIME_SPEAKE}</td>
                                    <td>${record.CAL_TIME_WRAP}</td>
                                    <td>${record.CAL_HANGUP}</td>
                                    <td>${record.CAL_TYPEDOC}</td>
                                    <td>${record.CAL_DOCUMENTO}</td>
                                    <td>${record.CAL_MOTIVO}</td>
                                </tr>
                            `);
                        });
                    },
                    error: function () {
                        throw new Error('Error al obtener los datos.');
                    }
                });
            } catch (error) {
                console.error(error.message);
            }
    });;
    </script>
    <!-- Traer registros tabla de datos inferior -->

    <!-- Script Chart.js -->
    <script>
        var ctx = 'myGraphic';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [], // Inicializamos las etiquetas vacías
                datasets: [{
                    label: 'Mes',
                    backgroundColor: [
                        'rgb(250, 103, 8)',
                    ],

                    backgroundColor: 'rgb(250, 103, 8)',
                    data: [] // Inicializamos los datos vacíos
                }, {
                    label: 'Año',
                    backgroundColor: [
                        'rgb(51, 51, 255)',
                    ]
                    backgroundColor: 'rgb(51, 51, 255)',
                    data: [] // Inicializamos los datos vacíos
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(0, 0, 0)'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Crecimiento de la base de datos',
                        color: 'rgb(0, 0, 0)',
                        font: {
                            size: 20,
                            family: 'Almarai'
                        }
                    }
                }
            }
        });

        // Url del servidor 
        let url = 'http://localhost/midata-vanilla-js/php/conexion_chart.php'
        let url = 'http://localhost/midata-vanilla-js/php/conexion_chart.php';

        // Peticion
        fetch(url)
            .then(response => response.json())
            .then(datos => mostrar(datos))
            .catch(err => console.log(err));

        const mostrar = (data) => {
             // Limpiar los datos actuales en el gráfico
            myChart.data.labels = [];
            myChart.data.datasets[0].data = [];
            myChart.data.datasets[1].data = [];
            
            // Recorrer los nuevos datos y agregarlos al gráfico
            data.valores.forEach(element => {
                myChart.data.labels.push(element.año); // Agregar el año como etiqueta
                myChart.data.datasets[0].data.push(element.valor_mes); // Agregar valor_mes para el conjunto de datos de Mes
                myChart.data.datasets[1].data.push(element.valor_año); // Agregar valor_año para el conjunto de datos de Año
            });

            // Actualizar el gráfico
            myChart.update();
        };

        console.log('Mostrando datos');

    </script>
    <!-- Script Chart.js -->

    <!-- Función para actualizar el contador de la próxima actualización -->
    <script>
    document.addEventListener('DOMContentLoaded', function () {
      // Obtener todas las celdas con la clase 'countdown'
      var countdownElements = document.querySelectorAll('.countdown');

      // Función para actualizar el contador regresivo
      const actualizarContadorRegresivo = (element) => {
        var tiempoFinal = element.dataset.time;
        var fechaFinal = new Date('2023-12-10T' + tiempoFinal + ':00');
        
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
    </script>
    <!-- Función para actualizar el contador de la próxima actualización -->

    <!-- Mostrar segunda tabla y fila seleccionada -->
    <script>
        // <!-- Script fila seleccionada -->
        document.addEventListener('DOMContentLoaded', () => {
        var rows = document.querySelectorAll('#table-campaigns tbody tr');

            rows.forEach((row) => {
                row.addEventListener('click', () => {
                    var isSelected = row.classList.contains('selected');

                    rows.forEach((otherRow) => {
                        otherRow.classList.remove('selected');

                    });

                    if (!isSelected) {
                        row.classList.add('selected');
                    }
                });
            });
        });
        // <!-- Script fila seleccionada -->

        // Script segunda tabla
        document.addEventListener('DOMContentLoaded', function () {
        var mainTable = document.getElementById('table-campaigns');
        const secondaryTable = document.getElementById('second-table');
        let selectedRow = null;

        // Evento principal a la tabla
        mainTable.addEventListener('click', (event) => {
        const clickedRow = event.target.closest('tr');
            if (clickedRow && mainTable.contains(clickedRow)) {
                if (selectedRow === clickedRow) {
                    // Si la fila clicada ya está seleccionada, oculta la tabla secundaria
                    hideSecondaryTable();
                    selectedRow = null; // Reinicia la variable de la fila seleccionada
                } else {
                    // Oculta la tabla secundaria para todas 
                    hideSecondaryTable();
                    showSecondaryTable(clickedRow);
                    selectedRow = clickedRow; // Guarda la fila seleccionada
                }
            }
        });

        // Función para ocultar la tabla secundaria
        const hideSecondaryTable = () => {
            var secondaryTable = document.getElementById('second-table');
            secondaryTable.style.display = 'none';
        }

        // Función para mostrar la tabla secundaria con contenido personalizado
        const showSecondaryTable = (clickedRow) => {
            var secondaryTable = document.getElementById('second-table');
            var secondaryTableContent = generateSecondaryTableContent(clickedRow);

            secondaryTable.innerHTML = secondaryTableContent;

            secondaryTable.style.display = 'block';
        }

        // Función para generar el contenido de la tabla secundaria
        const generateSecondaryTableContent = () => {
            const tables = [
                { name: 'Tabla 1', icon: 'ojo.png' },
                { name: 'Tabla 2', icon: 'ojo.png' }
            ];

            const content = `
                <table>
                    <tr><th>Tablas relacionadas</th><th><img class="x-icon" src="./assets/delete.svg" alt=""></th></tr>
                    ${tables.map(table => `<tr><td>${table.name}</td><td><img class="eye-icon" src="./assets/${table.icon}" alt=""></td></tr>`).join('')}
                </table>`;

            return content;
        }

        // Cerrar segunda tabla
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('x-icon')) {
                hideSecondaryTable();
            }
        });
    });
    // Script segunda tabla

    </script>
    <!-- Mostrar segunda tabla y fila seleccionada -->

    <!-- Editar periodicidad de Campañas -->
    <script>
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
    </script>
    <!-- Editar periodicidad de Campañas -->
    

    <!-- Mostrar y esconder modal para ajustes -->
    <script>
        var btnSetting = document.getElementById("btn-setting");
        var containerModal = document.querySelector(".container-modal");

        btnSetting.addEventListener("click", function() {

            if (containerModal.style.display === "none" || containerModal.style.display === "") {
                containerModal.style.display = "block";
            } else {
                containerModal.style.display = "none";
            }
        });
    </script>

    <!-- Demas scripts -->
    <script src="./main.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js" integrity="sha256-JG6hsuMjFnQ2spWq0UiaDRJBaarzhFbUxiUTxQDA9Lk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js" integrity="sha256-XF29CBwU1MWLaGEnsELogU6Y6rcc5nCkhhx89nFMIDQ=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js" integrity="sha256-J2sc79NPV/osLcIpzL3K8uJyAD7T5gaEFKlLDM18oxY=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js" integrity="sha256-CfcERD4Ov4+lKbWbYqXD6aFM9M51gN4GUEtDhkWABMo=" crossorigin="anonymous"></script>
    <!-- Demas scripts -->
</body>
</html>