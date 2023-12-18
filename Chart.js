var ctx = 'myGraphic';

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [], // Inicializamos las etiquetas vacías
        datasets: [{
            label: 'Mes',
            backgroundColor: 'rgb(250, 103, 8)',
            data: [] // Inicializamos los datos vacíos
        }, {
            label: 'Año',
            backgroundColor: 'rgb(5, 89, 166)',
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
        myChart.data.labels.push(element.año); 
        myChart.data.datasets[0].data.push(element.valor_mes); 
        myChart.data.datasets[1].data.push(element.valor_año); 
    });

    // Actualizar el gráfico
    myChart.update();
};

console.log('Mostrando datos');