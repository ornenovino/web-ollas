// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myScat2");

// Define the data 
var data = [{
        "x": 0.224432949,
        "y": 0.161664062079
    },
    {
        "x": 0.202485966,
        "y": 0.127121337316469
    },
    {
        "x": 0.151315789,
        "y": 0
    },
    {
        "x": 0.57622739,
        "y": 0.114876507754164
    },
    {
        "x": 0.181738367,
        "y": 0.316480734235303
    },
    {
        "x": 0.230441324,
        "y": 0.227583067819754
    },
    {
        "x": 0.178646197,
        "y": 0.0594813228646205
    },
    {
        "x": 0.13750749,
        "y": 0.0540569760527596
    },
    {
        "x": 0.188541982,
        "y": 0.231280716970223
    },
    {
        "x": 0.141064768,
        "y": 0
    },
    {
        "x": 0.193032015,
        "y": 0.14993627708224
    },
    {
        "x": 0.851927438,
        "y": 0.643024788605601
    },
    {
        "x": 0.6874872,
        "y": 0.472497845965702
    },
    {
        "x": 0.259559676,
        "y": 0.198912611059541
    },
    {
        "x": 0.223233996,
        "y": 0.0904159132007233
    },
    {
        "x": 0.294624295,
        "y": 0.278629144608526
    },
    {
        "x": 0.334269663,
        "y": 0.635907581431499
    },
    {
        "x": 0.277701778,
        "y": 0.557546794105934
    },
    {
        "x": 0.406549708,
        "y": 0.103989739679018
    },
    {
        "x": 0.494925085,
        "y": 0.0744657085412168
    },
    {
        "x": 0.358260325,
        "y": 0.0492150204242335
    },
    {
        "x": 0.203792279,
        "y": 0.0942151874882231
    },
    {
        "x": 0.347209653,
        "y": 0.260579528872212
    },
    {
        "x": 0.348630929,
        "y": 0.0668449197860962
    },
    {
        "x": 0.164251208,
        "y": 0.228128208052926
    },
    {
        "x": 0.461623718,
        "y": 0.202613716948637
    },
    {
        "x": 0.107626076,
        "y": 0
    },
    {
        "x": 0.172947858,
        "y": 0.0873820342537574
    },
    {
        "x": 0.153153153,
        "y": 0.0887075312694048
    },
    {
        "x": 0.722147651,
        "y": 0.881787088499359
    },
    {
        "x": 0.250715877,
        "y": 0.398922908148
    },
    {
        "x": 0.163233458,
        "y": 0
    },
    {
        "x": 0.37831669,
        "y": 0.393494228751312
    },
    {
        "x": 0.230499841,
        "y": 0.130582397492818
    },
    {
        "x": 0.565093572,
        "y": 0.124766063630692
    },
    {
        "x": 0.100236924,
        "y": 0
    },
    {
        "x": 0.224828935,
        "y": 0.351476200040169
    },
    {
        "x": 0.869360436,
        "y": 0.287535342885896
    },
    {
        "x": 0.944923505,
        "y": 0.598009482721797
    },
    {
        "x": 0.363988383,
        "y": 0.0480492023832404
    },
    {
        "x": 0.16461825,
        "y": 0.0642178268687388
    },
    {
        "x": 0.441936184,
        "y": 0.26780035483547
    },
    {
        "x": 0.155502392,
        "y": 0.230911330049261
    },
    {
        "x": 0.14427157,
        "y": 0.23176761433869
    },
    {
        "x": 0.921190893,
        "y": 0.289304017192924
    },
    {
        "x": 0.127845036,
        "y": 0.165384933432564
    },
    {
        "x": 0.325145322,
        "y": 0.144990575612585
    },
    {
        "x": 0.567089453,
        "y": 0.487394213301431
    },
    {
        "x": 0.132727961,
        "y": 0
    },
    {
        "x": 0.118368963,
        "y": 0
    },
    {
        "x": 0.128941617,
        "y": 0.148522204069508
    },
    {
        "x": 0.542432432,
        "y": 0.40180006428801
    },
    {
        "x": 0.145342669,
        "y": 0
    },
    {
        "x": 0.096937058,
        "y": 0
    },
    {
        "x": 0.186802974,
        "y": 0
    },
    {
        "x": 0.12751938,
        "y": 0.136128505309012
    },
    {
        "x": 0.166176471,
        "y": 0.125580811252041
    },
    {
        "x": 0.490078172,
        "y": 0.493900330913222
    },
    {
        "x": 0.226644087,
        "y": 0.100300902708124
    },
    {
        "x": 0.311778911,
        "y": 0.255623721881391
    },
    {
        "x": 0.919934641,
        "y": 0.305064063453325
    },
    {
        "x": 0.236804565,
        "y": 0.144237703735757
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
            borderColor: '#26520f', // Add custom color border            
            backgroundColor: '#98c680', // Add custom color background (Points and Fill)
        }]
    },
    options: options
});