// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myScat");

// Define the data 
var data = [{
        "x": 0.0591715976331361,
        "y": 0.125580811252041
    },
    {
        "x": 0.0637860082304527,
        "y": 0
    },
    {
        "x": 0.0669456066945607,
        "y": 0.23176761433869
    },
    {
        "x": 0.0673400673400673,
        "y": 0
    },
    {
        "x": 0.0742904841402337,
        "y": 0
    },
    {
        "x": 0.0747404844290657,
        "y": 0
    },
    {
        "x": 0.0809102402022756,
        "y": 0
    },
    {
        "x": 0.0820679681851048,
        "y": 0
    },
    {
        "x": 0.0830097087378641,
        "y": 0.0904159132007233
    },
    {
        "x": 0.0838323353293413,
        "y": 0
    },
    {
        "x": 0.0851608187134503,
        "y": 0
    },
    {
        "x": 0.0857059848925044,
        "y": 0.0942151874882231
    },
    {
        "x": 0.086427267194157,
        "y": 0.148522204069508
    },
    {
        "x": 0.0895156345800123,
        "y": 0
    },
    {
        "x": 0.0937062937062937,
        "y": 0.161664062079
    },
    {
        "x": 0.0946502057613169,
        "y": 0.230911330049261
    },
    {
        "x": 0.0965250965250965,
        "y": 0.316480734235303
    },
    {
        "x": 0.100538091192297,
        "y": 0.0540569760527596
    },
    {
        "x": 0.109756097560976,
        "y": 0.231280716970223
    },
    {
        "x": 0.11003861003861,
        "y": 0.165384933432564
    },
    {
        "x": 0.118163403106009,
        "y": 0.0594813228646205
    },
    {
        "x": 0.120280948200176,
        "y": 0
    },
    {
        "x": 0.121240601503759,
        "y": 0.0873820342537574
    },
    {
        "x": 0.121376811594203,
        "y": 0.0887075312694048
    },
    {
        "x": 0.121827411167513,
        "y": 0.228128208052926
    },
    {
        "x": 0.124624624624625,
        "y": 0.0642178268687388
    },
    {
        "x": 0.127497621313035,
        "y": 0.14993627708224
    },
    {
        "x": 0.127962085308057,
        "y": 0.557546794105934
    },
    {
        "x": 0.130681818181818,
        "y": 0.136128505309012
    },
    {
        "x": 0.133039647577093,
        "y": 0.144237703735757
    },
    {
        "x": 0.141215106732348,
        "y": 0.127121337316469
    },
    {
        "x": 0.141478212906784,
        "y": 0.100300902708124
    },
    {
        "x": 0.149253731343284,
        "y": 0.351476200040169
    },
    {
        "x": 0.167575993764614,
        "y": 0.198912611059541
    },
    {
        "x": 0.169962586851951,
        "y": 0.227583067819754
    },
    {
        "x": 0.177207263619286,
        "y": 0.278629144608526
    },
    {
        "x": 0.179124579124579,
        "y": 0.398922908148
    },
    {
        "x": 0.185645272601794,
        "y": 0.130582397492818
    },
    {
        "x": 0.210711768851304,
        "y": 0.0480492023832404
    },
    {
        "x": 0.213066999583854,
        "y": 0.144990575612585
    },
    {
        "x": 0.218390804597701,
        "y": 0.255623721881391
    },
    {
        "x": 0.22400857449089,
        "y": 0.635907581431499
    },
    {
        "x": 0.226049515608181,
        "y": 0.0744657085412168
    },
    {
        "x": 0.230769230769231,
        "y": 0.260579528872212
    },
    {
        "x": 0.237560192616372,
        "y": 0.103989739679018
    },
    {
        "x": 0.245844269466317,
        "y": 0.124766063630692
    },
    {
        "x": 0.24776324845148,
        "y": 0.0492150204242335
    },
    {
        "x": 0.255775577557756,
        "y": 0.0668449197860962
    },
    {
        "x": 0.263473053892216,
        "y": 0.114876507754164
    },
    {
        "x": 0.265469061876248,
        "y": 0.26780035483547
    },
    {
        "x": 0.266351989211059,
        "y": 0.289304017192924
    },
    {
        "x": 0.266375545851528,
        "y": 0.393494228751312
    },
    {
        "x": 0.268539325842697,
        "y": 0.287535342885896
    },
    {
        "x": 0.279823269513991,
        "y": 0.487394213301431
    },
    {
        "x": 0.284105131414268,
        "y": 0.40180006428801
    },
    {
        "x": 0.293906810035842,
        "y": 0.493900330913222
    },
    {
        "x": 0.299172501591343,
        "y": 0.202613716948637
    },
    {
        "x": 0.300981461286805,
        "y": 0.305064063453325
    },
    {
        "x": 0.318066157760814,
        "y": 0.598009482721797
    },
    {
        "x": 0.321510824504836,
        "y": 0.881787088499359
    },
    {
        "x": 0.333870101986044,
        "y": 0.643024788605601
    },
    {
        "x": 0.371230845279288,
        "y": 0.472497845965702
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
        labels: ['Tres Cruces', 'Pocitos', 'Parque Rodo', 'La Blanqueada', 'Punta Carretas', 'Punta Gorda', 'Atahualpa', 'Pque. Batlle - V. Dolores', 'Centro', 'Carrasco', 'Malvin', 'Cordon', 'Prado - Nueva Savona', 'Larrañaga', 'Aguada', 'Palermo', 'Barrio Sur', 'Buceo', 'Capurro - Bella Vista', 'Paso De Las Duranas', 'Brazo Oriental', 'Reducto', 'La Comercial', 'La Figurita', 'Jacinto Vera', 'Mercado Modelo - Bolivar', 'Carrasco Norte', 'Ciudad Vieja', 'Sayago', 'Villa Muñoz - Retiro', 'Aires Puros', 'Union', 'Malvin Norte', 'Castro - P. Castellanos', 'Belvedere', 'Cerrito', 'La Teja', 'Las Canteras', 'Maroñas - Parque Guarani', 'Peñarol - Lavalleja', 'Villa Española', 'Cerro', 'Colon Sureste - Abayuba', 'Flor De Maroñas', 'Colon Centro Y Noroeste', 'Lezica - Melilla', 'Conciliacion', 'Ituzaingo', 'Banados De Carrasco', 'Nuevo Paris', 'Paso De La Arena', 'Las Acacias', 'Manga', 'Piedras Blancas', 'Pta. Rieles - Bella Italia', 'Tres Ombues - Victoria', 'Jardines Del Hipodromo', 'Villa Garcia - Manga Rur.', 'Manga - Toledo Chico', 'La Paloma - Tomkinson', 'Casabo - Pajas Blancas', 'Casavalle'],
        datasets: [{
            data: data, // Specify the data values array
            borderColor: '#07373b', // Add custom color border            
            backgroundColor: '#4da1a9', // Add custom color background (Points and Fill)
        }]
    },
    options: options
});