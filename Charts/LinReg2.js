////////////////////////////////////////    Following code is modifed from HighCharts demos ////////////////////////////////////////

var newLR2 = document.createElement('figure');
newLR2.className = 'lrct2';
newLR2.id ='ss20'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'k';
document.getElementById('linregr2').appendChild(outerDiv1);
document.getElementById('k').appendChild(newLR2);


Highcharts.chart(newLR2, {

    title: {
      text: 'Average Global Prosperity Over 2007 - 2014'
    },
    yAxis: {
      title: {
        text: 'Average Global Prosperity'
      },
      endOnTick: true
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2007 to 2014'
      },
      tickInterval: 1
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: [{
        name: 'Average Global Prosperity',
        data: [56.9801566019421,
            57.057490063638156,
            57.2709388484002,
            57.734465292547306,
            57.94974977520311,
            58.02752553625484,
            58.27153523905255,
            58.28073075029229]
    // }, {
    //     name: 'Business Environment',
    //     data: [47.92838970926784, 48.51531481902872, 49.25169350796898, 50.13334695444811, 50.95235329186356, 52.41147111726287, 53.32989147365493, 52.60430590738386],
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });