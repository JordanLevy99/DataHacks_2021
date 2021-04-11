var newP = document.createElement('figure');
newP.className = 'polarct';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j5';
document.getElementById('polar3').appendChild(outerDiv1);
document.getElementById('j5').appendChild(newP);

Highcharts.chart(newP, {

    chart: {
        polar: true,
        type: 'area'
    },
    title: {
        text: 'Feature Profile of United States vs Netherlands',
        x: -60,
        y: 2, 
        style: {
            fontSize: '1vw',
        }
    },
    subtitle: {
        text: 'of the year 2019',
        x: -60,
        y: 20
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['GDP','Life Expectancy', 'Freedom', 'Lack of Government Corruption', 'Generosity',
        'Social Support'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        enabled: true,
        callbacks: {
            label: function(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            }
        }
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
    series: [{
        name: 'United States',
        data: [0.30977086, 0.18893212, 0.09814094, 0.02766969, 0.28, 0.31495893], 
        pointPlacement: 'on'
    },{
        name: 'Netherlands',
        data: [0.2740479, 0.19611307, 0.10934433, 0.0585002, 0.322, 0.29878288],
        color: Highcharts.getOptions().colors[6],
        pointPlacement: 'on'
    },],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});


