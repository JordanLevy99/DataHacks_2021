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
        text: 'Correlation between each Feature and Happiness Score',
    },
    xAxis: {
        categories: ['Happiness Score 2015', 'Happiness Score 2016', 'Happiness Score 2017', 'Happiness Score 2018',
                    'Happiness Score 2019'],
        labels: {
            style: {
                color: 'dark gray'
            }
        }
    },
    yAxis: {
        categories: ['GDP','Life Expectancy', 'Freedom', 'Government Corruption', 'Generosity', 'Social Support'],
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
        data: [[0, 0, 0.78], [0, 1, 0.72], [0, 2, 0.57], [0, 3, 0.4], [0, 4, 0.18], [0, 5, 0.74],
        [1, 0, 0.79], [1, 1, 0.77], [1, 2, 0.57], [1, 3, 0.4], [1, 4, 0.16], [1, 5, 0.74], 
        [2, 0, 0.81], [2, 1, 0.78], [2, 2, 0.57], [2, 3, 0.43], [2, 4, 0.16], [2, 5, 0.75],
        [3, 0, 0.8], [3, 1, 0.78], [3, 2, 0.54], [3, 3, 0.42], [3, 4, 0.14], [3,5,0.75], 
        [4, 0, 0.79], [4, 1, 0.78], [4, 2, 0.57], [4, 3, 0.39], [4, 4, 0.076], [4,5,0.78]],
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