////////////////////////////////////////    Following code is modifed from HighCharts demos ////////////////////////////////////////

var newLRG = document.createElement('figure');
newLRG.className = 'lrct';
newLRG.id ='gdp'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'q';
document.getElementById('linregr').appendChild(outerDiv1);
document.getElementById('q').appendChild(newLRG);


Highcharts.chart(newLRG, {

    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },
  
    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },
  
    yAxis: {
      title: {
        text: 'Prosperity'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2007 to 2014'
      }
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
      name: 'Australia',
      data: [77.67186906602647, 77.79921298556857, 77.74207560221355, 
        78.21320343017578, 77.81163957383897, 77.26486290825738, 77.60149807400174, 76.94242519802518]
    }, {
      name: 'Netherlands',
      data: [77.43161392211914, 77.41837692260742, 77.73303010728624, 
        78.24202728271484, 78.19659762912326, 77.83169047037761, 77.83171505398221, 77.62882656521268]
    }, {
      name: 'Norway',
      data: [76.91756863064236, 76.98685455322266, 77.57607777913411, 
        77.74615224202473, 77.15247514512804, 77.81395806206598, 77.84742736816406, 78.50093672010634]
    }, {
      name: 'New Zealand',
      data: [78.0983640882704, 77.55401357014973, 77.77457258436415, 77.9938481648763, 
        78.18245273166232, 78.12682596842448, 78.8326432969835, 78.91474151611328]
    }, {
      name: 'Sweden',
      data: [76.86514239841037, 77.13263914320204, 77.72930992974176, 78.65740246242947, 
        78.48794852362738, 78.33687125311957, 77.62010447184245, 77.61029900444879]
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



////////////////////////////////////////    Following code is modifed from HighCharts demos ////////////////////////////////////////

var newLRL = document.createElement('figure');
newLRL.className = 'lrct';
newLRL.id ='life'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'q2';
document.getElementById('linregr').appendChild(outerDiv1);
document.getElementById('q2').appendChild(newLRL);


Highcharts.chart(newLRL, {

    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },
  
    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },
  
    yAxis: {
      title: {
        text: 'Prosperity'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2007 to 2014'
      }
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
      name: 'Afghanistan',
      data: [37.65897538926866, 37.64705848693848, 38.963036643134224, 
        38.37829611036513, 36.900201161702476, 38.66849920484755, 38.93273417154948, 37.60717476738824]
    }, {
      name: 'Central African Republic',
      data: [40.610100428263344, 41.10119289822049, 40.41649023691813, 
        39.286528481377495, 40.2028488583035, 40.1312510172526, 37.64913643731011, 38.101737552218964]
    }, {
      name: 'Democratic Republic of Congo',
      data: [37.9554386138916, 37.16770553588867, 37.37549654642741, 37.407493591308594, 
        37.9289616478814, 38.83824708726671, 37.65847290886773, 38.06906594170464]
    }, {
      name: 'Chad',
      data: [34.067547692192925, 36.354613622029625, 35.8691283331977, 36.87599203321669, 
        39.508369869656036, 39.94830407036675, 38.937186770968964, 39.80755297342936]
    }, {
      name: 'Yemen',
      data: [39.909220377604164, 39.96099726359049, 39.7200027041965, 39.852127922905815, 
        38.095397525363495, 39.13356738620334, 39.089093102349175, 38.76679356892904]
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