var newP = document.createElement('figure');
newP.className = 'polarct';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j1';
document.getElementById('polar').appendChild(outerDiv1);
document.getElementById('j1').appendChild(newP);

Highcharts.chart(newP, {

    chart: {
        polar: true,
        type: 'area'
    },
    title: {
        text: 'Feature Profile of United States vs Finland',
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
        name: 'Finland',
        data: [0.26508408, 0.1950544, 0.11790307, 0.07774481, 0.153, 0.31394659],
        color: Highcharts.getOptions().colors[1],
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


var newP = document.createElement('figure');
newP.className = 'polarct';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j2';
document.getElementById('polar').appendChild(outerDiv1);
document.getElementById('j2').appendChild(newP);

Highcharts.chart(newP, {

    chart: {
        polar: true,
        type: 'area'
    },
    title: {
        text: 'Feature Profile of United States vs Denmark',
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
        name: 'Denmark',
        data: [0.26565501, 0.19131771, 0.11371494, 0.07875528, 0.252,0.30215136],
        color: Highcharts.getOptions().colors[3],
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





