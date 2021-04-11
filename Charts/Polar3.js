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
        text: 'Pillar Profile of United States vs Netherlands',
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
        name: 'Netherlands',
        data: [70.85384559631348, 82.65077209472656, 81.15325736999512, 63.718239307403564, 
            82.28918647766113, 81.99205780029297, 89.7507209777832, 82.68065357208252, 65.01437950134277],
        color: Highcharts.getOptions().colors[1],
        pointPlacement: 'on'
    },{
        name: 'United States',
        data: [73.03541660308838, 77.26181125640869, 79.13576412200928, 68.90966510772705, 
            69.17028331756592, 78.82894706726074, 74.10174083709717, 72.0220775604248],
        
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


