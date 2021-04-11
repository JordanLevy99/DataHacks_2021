////////////////////////////////////////    Following code is modifed from HighCharts demos ////////////////////////////////////////

var newLR2 = document.createElement('figure');
newLR2.className = 'lrct2';
newLR2.id ='ss20'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'k';
document.getElementById('linregr2').appendChild(outerDiv1);
document.getElementById('k').appendChild(newLR2);

Highcharts.setOptions({
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});

Highcharts.chart(newLR2, {

    title: {
      text: 'Average Global Prosperity Over 2007 - 2014',
    },
    yAxis: {
      title: {
        text: 'Average Global Prosperity'
      },
      endOnTick: true
    },
    credits: {
      enabled: false
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
    },
    caption: {
      text: '<b>Figure 1</b>',
      align: 'center'
    }

  });



var newLR2 = document.createElement('figure');
newLR2.className = 'lrct2';
newLR2.id ='ss20'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'k2';
document.getElementById('linregr2').appendChild(outerDiv1);
document.getElementById('k2').appendChild(newLR2);




Highcharts.chart(newLR2, {
    title: {
        text: 'Average Pillar Values Over 2007 - 2014',
    },
    xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2007 to 2014'
        },
        tickInterval: 1
      },
      yAxis: {
        title: {
          text: 'Average Pillar Values'
        },
      },
      credits: {
        enabled: false
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
          pointStart: 2007
        }
      },
    series: [{
        name: 'Business Environment',
        data: [47.92838970926784, 48.51531481902872, 49.25169350796898, 50.13334695444811, 50.95235329186356, 52.41147111726287, 53.32989147365493, 52.60430590738386],
      }, {
        name: 'Economic Quality',
        data: [61.41184493199291, 61.537451494460136, 61.5066271020262, 61.66737306838068, 61.72723908392375, 61.548767653087644, 61.498656842532576, 61.76711242470965]
      }, {
        name: 'Education',
        data: [53.09667181488651, 53.316868494021016, 53.41222380951747, 54.33770947808387, 54.4990125310501, 54.52653100826596, 54.50362437203427, 54.52256980998404],    
      }, {  
        name: 'Natural Environment',
        data: [58.33321050349498, 58.760940628563795, 59.03438859977978, 60.34599224833034, 60.610673405180044, 60.62184207071394, 60.93976505970795, 61.33548145166179]
      }, {
        name: 'Governance',
        data: [49.45172971687061, 49.716395269304314, 49.76290601691944, 49.75355634753336, 49.87716422625036, 49.754352006336184, 49.58116338077008, 49.77562224624941]
      }, {
        name: 'Health',
        data: [68.55346185568995, 68.85712205003571, 69.1924981238858, 69.42307312216535, 69.73136487103149, 69.88804951610182, 69.79720001732743, 69.61244352711927]
     }, {
        name: 'Personal Freedon',
        data: [58.11590163979754, 57.21723185289626, 57.47395164694562, 57.461164896920224, 57.970009643759504, 57.22293181707395, 58.026707258800535, 58.48674429823088]
     }, {
        name: 'Safety and Security',
        data: [66.49595383509694, 66.44898182913761, 66.53767366857336, 66.71476297570555, 66.58083819702968, 66.48215195316597, 66.46270867162103, 65.99771060559574],
     }, {
        name: 'Social Capital',
        data: [49.43424541038155, 49.14710413529569, 49.266487159985026, 49.77320854135808, 49.599092726739464, 49.79163268428521, 50.30410007502409, 50.42458648169601],
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
      },
      caption: {
        text: '<b>Figure 2</b>',
        align: 'center'
      }
    
    });






