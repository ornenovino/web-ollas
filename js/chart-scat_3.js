// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myScat3");

// Define the data 
var data = [{
        "x": 3.484281778,
        "y": 0.161664062
    },
    {
        "x": 3.012830734,
        "y": 0.127121337
    },
    {
        "x": 4.128947258,
        "y": 0
    },
    {
        "x": 2.032299757,
        "y": 0.114876508
    },
    {
        "x": 3.491659403,
        "y": 0.316480734
    },
    {
        "x": 2.598044157,
        "y": 0.227583068
    },
    {
        "x": 3.400209427,
        "y": 0.059481323
    },
    {
        "x": 3.945026875,
        "y": 0.054056976
    },
    {
        "x": 3.41648984,
        "y": 0.231280717
    },
    {
        "x": 5,
        "y": 0
    },
    {
        "x": 4.539077282,
        "y": 0.149936277
    },
    {
        "x": 1.282086134,
        "y": 0.643024789
    },
    {
        "x": 1,
        "y": 0.472497846
    },
    {
        "x": 2.66010046,
        "y": 0.198912611
    },
    {
        "x": 3.876931667,
        "y": 0.090415913
    },
    {
        "x": 2.287793398,
        "y": 0.278629145
    },
    {
        "x": 2.167134762,
        "y": 0.635907581
    },
    {
        "x": 2.865025043,
        "y": 0.557546794
    },
    {
        "x": 2.011228085,
        "y": 0.10398974
    },
    {
        "x": 2.639439344,
        "y": 0.074465709
    },
    {
        "x": 1.998435497,
        "y": 0.04921502
    },
    {
        "x": 3.651178598,
        "y": 0.094215187
    },
    {
        "x": 2.331221819,
        "y": 0.260579529
    },
    {
        "x": 2.113767862,
        "y": 0.06684492
    },
    {
        "x": 3.231884003,
        "y": 0.228128208
    },
    {
        "x": 1.647547841,
        "y": 0.202613717
    },
    {
        "x": 3.835178375,
        "y": 0
    },
    {
        "x": 3.129065514,
        "y": 0.087382034
    },
    {
        "x": 3.067567587,
        "y": 0.088707531
    },
    {
        "x": 1.299328804,
        "y": 0.881787088
    },
    {
        "x": 2.725103378,
        "y": 0.398922908
    },
    {
        "x": 3.688202143,
        "y": 0
    },
    {
        "x": 1.724678993,
        "y": 0.393494229
    },
    {
        "x": 2.806431055,
        "y": 0.130582397
    },
    {
        "x": 2.329942942,
        "y": 0.124766064
    },
    {
        "x": 4.531620026,
        "y": 0
    },
    {
        "x": 2.568263292,
        "y": 0.3514762
    },
    {
        "x": 1.423896909,
        "y": 0.287535343
    },
    {
        "x": 1.088178039,
        "y": 0.598009483
    },
    {
        "x": 2.077444315,
        "y": 0.048049202
    },
    {
        "x": 3.280447006,
        "y": 0.064217827
    },
    {
        "x": 1.757759929,
        "y": 0.267800355
    },
    {
        "x": 3.739234447,
        "y": 0.23091133
    },
    {
        "x": 4.309759617,
        "y": 0.231767614
    },
    {
        "x": 1.626970172,
        "y": 0.289304017
    },
    {
        "x": 3.644067764,
        "y": 0.165384933
    },
    {
        "x": 2.214700937,
        "y": 0.144990576
    },
    {
        "x": 1.524699569,
        "y": 0.487394213
    },
    {
        "x": 4.720317841,
        "y": 0
    },
    {
        "x": 4.027118206,
        "y": 0
    },
    {
        "x": 3.918826103,
        "y": 0.148522204
    },
    {
        "x": 1.48189187,
        "y": 0.401800064
    },
    {
        "x": 5,
        "y": 0
    },
    {
        "x": 4.937394619,
        "y": 0
    },
    {
        "x": 3.205390453,
        "y": 0
    },
    {
        "x": 3.075193882,
        "y": 0.136128505
    },
    {
        "x": 4.010784149,
        "y": 0.125580811
    },
    {
        "x": 1.623271227,
        "y": 0.493900331
    },
    {
        "x": 3.171323776,
        "y": 0.100300903
    },
    {
        "x": 2.443251848,
        "y": 0.255623722
    },
    {
        "x": 1.390056014,
        "y": 0.305064063
    },
    {
        "x": 2.769852638,
        "y": 0.144237704
    }
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
    legend: {
        display: false
    }
};

// End Defining data
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        labels: ['Aguada', 'Aires Puros', 'Atahualpa', 'Banados De Carrasco', 'Barrio Sur', 'Belvedere', 'Brazo Oriental', 'Buceo', 'Capurro - Bella Vista', 'Carrasco', 'Carrasco Norte', 'Casabo - Pajas Blancas', 'Casavalle', 'Castro - P. Castellanos', 'Centro', 'Cerrito', 'Cerro', 'Ciudad Vieja', 'Colon Centro Y Noroeste', 'Colon Sureste - Abayuba', 'Conciliacion', 'Cordon', 'Flor De Maroñas', 'Ituzaingo', 'Jacinto Vera', 'Jardines Del Hipodromo', 'La Blanqueada', 'La Comercial', 'La Figurita', 'La Paloma - Tomkinson', 'La Teja', 'Larrañaga', 'Las Acacias', 'Las Canteras', 'Lezica - Melilla', 'Malvin', 'Malvin Norte', 'Manga', 'Manga - Toledo Chico', 'Maroñas - Parque Guarani', 'Mercado Modelo - Bolivar', 'Nuevo Paris', 'Palermo', 'Parque Rodo', 'Paso De La Arena', 'Paso De Las Duranas', 'Peñarol - Lavalleja', 'Piedras Blancas', 'Pocitos', 'Pque. Batlle - V. Dolores', 'Prado - Nueva Savona', 'Pta. Rieles - Bella Italia', 'Punta Carretas', 'Punta Gorda', 'Reducto', 'Sayago', 'Tres Cruces', 'Tres Ombues - Victoria', 'Union', 'Villa Española', 'Villa Garcia - Manga Rur.', 'Villa Muñoz - Retiro'],
        datasets: [{
            data: data, // Specify the data values array
            borderColor: '#673497', // Add custom color border            
            backgroundColor: '#7c6592', // Add custom color background (Points and Fill)
        }]
    },
    options: options
});