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
        text: 'Feature Profile of United States vs New Zealand',
        x: -60,
        y: 2, 
        style: {
            fontSize: '1vw',
        }
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Business Environment', 'Economic Quality', 'Education', 'Natural Environment',
        'Governance', 'Health', 'Personal Freedom', 'Safety and Security', 'Social Capital'],
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
        name: 'New Zealand',
        data: [72.72828102111816, 80.70532894134521, 76.07744121551514, 74.75693321228027, 
            83.26545143127441, 80.4193754196167, 89.10429382324219, 79.43316459655762, 67.171875],
        color: Highcharts.getOptions().colors[1],
        pointPlacement: 'on'
    },{
        name: 'United States',
        data: [73.03541660308838, 77.26181125640869, 79.13576412200928, 68.90966510772705, 
            69.17028331756592, 78.82894706726074, 74.10174083709717, 72.0220775604248, 66.29130554199219],
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
        text: 'Feature Profile of United States vs Sweden',
        x: -60,
        y: 2, 
        style: {
            fontSize: '1vw',
        }
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Business Environment', 'Economic Quality', 'Education', 'Natural Environment', 
        'Governance', 'Health', 'Personal Freedom', 'Safety and Security', 'Social Capital'],
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
        name: 'Sweden',
        data: [70.92474555969238, 82.64419651031494, 77.87182998657227, 73.1750955581665, 
            84.62112998962402, 82.31127452850342, 85.53186893463135, 82.81623935699463, 60.34830141067505, 77.80496464835272],
        color: Highcharts.getOptions().colors[1],
        pointPlacement: 'on'
    },{
        name: 'United States',
        data: [73.03541660308838, 77.26181125640869, 79.13576412200928, 68.90966510772705, 
            69.17028331756592, 78.82894706726074, 74.10174083709717, 72.0220775604248, 66.29130554199219],
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





