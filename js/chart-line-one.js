// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myLinePlotone");

// Define the data 
var data = [
    0.9,
    0.6,
    0.6,
    0.6,
    0.6,
    0.5,
    0.5,
    0.5,
    0.4,
    0.4,
    0.4,
    0.4,
    0.3,
    0.3,
    0.3,
    0.3,
    0.3,
    0.3,
    0.3,
    0.3,
    0.2,
    0.2,
    0.2,
    0.2,
    0.2,
    0.2,
    0.2,
    0.2,
    0.2,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0.1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
]; // Add data values to array

// End Defining data
var options = {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
            }
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90
            }
        }]
    },
    legend: {
        display: false
    }
};

// End Defining data
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['La Paloma - Tomkinson', 'Casabo - Pajas Blancas', 'Cerro', 'Manga - Toledo Chico', 'Ciudad Vieja', 'Tres Ombues - Victoria', 'Piedras Blancas', 'Casavalle', 'Pta. Rieles - Bella Italia', 'La Teja', 'Las Acacias', 'Malvin Norte', 'Barrio Sur', 'Villa Garcia - Manga Rur.', 'Paso De La Arena', 'Manga', 'Cerrito', 'Nuevo Paris', 'Flor De Maroñas', 'Villa Española', 'Parque Rodo', 'Capurro - Bella Vista', 'Palermo', 'Jacinto Vera', 'Belvedere', 'Jardines Del Hipodromo', 'Castro - P. Castellanos', 'Paso De Las Duranas', 'Aguada', 'Carrasco Norte', 'Prado - Nueva Savona', 'Peñarol - Lavalleja', 'Villa Muñoz - Retiro', 'Sayago', 'Las Canteras', 'Aires Puros', 'Tres Cruces', 'Lezica - Melilla', 'Banados De Carrasco', 'Colon Centro Y Noroeste', 'Union', 'Cordon', 'Centro', 'La Figurita', 'La Comercial', 'Colon Sureste - Abayuba', 'Ituzaingo', 'Mercado Modelo - Bolivar', 'Brazo Oriental', 'Buceo', 'Conciliacion', 'Maroñas - Parque Guarani', 'Atahualpa', 'Carrasco', 'La Blanqueada', 'Larrañaga', 'Malvin', 'Pocitos', 'Pque. Batlle - V. Dolores', 'Punta Carretas', 'Punta Gorda', 'Reducto'],
        datasets: [{
            label: 'Cantidad de ollas cada 1000 habitantes por barrio', // Name the series
            data: data, // Specify the data values array
            borderColor: '#4d2e05', // Add custom color border            
            backgroundColor: '#ffa630', // Add custom color background (Points and Fill)
            showLine: false
        }]
    },
    options: options
});