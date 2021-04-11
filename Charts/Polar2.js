var newP = document.createElement('figure');
newP.className = 'polarct';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j3';
document.getElementById('polar2').appendChild(outerDiv1);
document.getElementById('j3').appendChild(newP);

Highcharts.chart(newP, {

    chart: {
        polar: true,
        type: 'area'
    },
    title: {
        text: 'Feature Profile of United States vs Norway',
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
        name: 'Norway',
        data: [0.28006776, 0.19348767, 0.1134952, 0.06418219, 0.271, 0.29776021],
        color: '#bad9e9',
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
outerDiv1.id = 'j4';
document.getElementById('polar2').appendChild(outerDiv1);
document.getElementById('j4').appendChild(newP);

Highcharts.chart(newP, {

    chart: {
        polar: true,
        type: 'area'
    },
    title: {
        text: 'Feature Profile of United States vs Iceland',
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
        name: 'Iceland',
        data: [0.27096014, 0.20145297, 0.11604163, 0.02316906, 0.354, 0.31886904],
        color: Highcharts.getOptions().colors[5],
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