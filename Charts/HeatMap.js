function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.theme = {
    colors: ["#bd2b35", "#f4aa8a", "#d9614e", "#d3d3d3", "#d7e8ef", "#63a4cd","#bae3cc"]
};
// // Apply the theme
Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('heatmapct', {
    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
        style: {
            fontFamily: 'Open Sans'
        }
    },
    title: {
        text: 'Correlation between each Pillar and Prosperity',
    },
    xAxis: {
        categories: ['Business Environment', 'Economic Quality', 'Education', 'Natural Environment', 
        'Governance', 'Health', 'Personal Freedom', 'Safety and Security', 'Social Capital'],
        labels: {
            style: {
                color: 'dark gray'
            }
        }
    },
    yAxis: {
        categories: ['Chad Prosperity', 'Georgia Prosperity', 'Ivory Coast Prosperity', 'Togo', 'Zimbabwe Prosperity'],
        title: 'Features',
        reversed: true,
        labels: {
            style: {
                color: 'dark gray'
            }
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                style: {
                    textOutline: '0px',
                    fontWeight: 'bold'
                }
            }
        }
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
            }
        }
    },
    colorAxis: {
        min: 0,
        minColor: 'white',
        maxColor: "#bd2b35"
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },
    tooltip: {
        formatter: function () {
            return 'The correlation between '+ getPointCategoryName(this.point, 'x') + ' and ' + 
                    getPointCategoryName(this.point, 'y') + ' is ' + this.point.value;
        }
    },
    series: [{
        name: 'Correlations',
        borderWidth: 1,
        data: [[0, 0, 0.896], [1, 0, 0.233], [2, 0, 0.848], [3, 0, 0.897], 
        [4, 0, 0.524], [5, 0, 0.932], [6, 0, 0.746], [7, 0,  0.823],
        [8, 0, 0.604],
        [0, 1, 0.965], [1, 1, 0.737], [2, 1, 0.953], [3, 1, 0.892], 
        [4, 1, 0.972], [5, 1, -0.077 ], [6, 1, 0.968], [7, 1,  0.900],
        [8, 1, 0.858],
        [0, 2, 0.930], [1, 2, 0.635], [2, 2, 0.751], [3, 2, 0.799], 
        [4, 2, 0.948], [5, 2, 0.403], [6, 2, 0.873], [7, 2,  -0.020],
        [8, 2, 0.914],
        [0, 3, 0.973], [1, 3, 0.962], [2, 3, 0.866], [3, 3, 0.983], 
        [4, 3,  0.922], [5, 3, 0.887], [6, 3, 0.972], [7, 3,  -0.212],
        [8, 3, 0.906],
        [0, 4, 0.891], [1, 4, 0.995], [2, 4, 0.806], [3, 4, 0.923], 
        [4, 4, 0.950], [5, 4, 0.966], [6, 4, 0.933], [7, 4,  0.957],
        [8, 4, 0.891]],


        dataLabels: {
            enabled: true,
            color: '#000000'
        },
        borderColor: 'black',
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        },
                        style: {
                            color: 'black' 
                        }
                    }
                }
            }
        }]
    }

});