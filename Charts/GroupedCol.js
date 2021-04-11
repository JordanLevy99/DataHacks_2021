Highcharts.chart('groupedcolct', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 3 Factors to Happiness for the Top 5 Countries',
        style: {
            color: 'dark gray'
        }
    },
    xAxis: {
        categories: ['Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands'],
        labels: {
            style: {
                color: 'dark gray'
            }
        }
    },
    yAxis: {
        allowDecimals: true,
        min: 0,
        title: {
            text: 'Extent of Impact on Happiness',
            style: {
                color: 'dark gray'
            }
        },
        labels: {
            style: {
                color: 'dark gray'
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>'
        }
    },
    series: [{
        name: 'Social Support',
        color: Highcharts.getOptions().colors[0],
        data: [1.587, 1.573, 1.581, 1.624, 1.521],
    }, {
        name: 'GDP',
        color: Highcharts.getOptions().colors[5],
        data: [1.34, 1.383, 1.488, 1.38, 1.396],
    }, {
        name: 'Life Expectancy',
        color: Highcharts.getOptions().colors[6],
        data: [0.986, 0.996, 1.028, 1.026, 0.999]
    }]
});

