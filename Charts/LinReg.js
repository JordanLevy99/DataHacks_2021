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
        text: 'Top 5 Countries with Most Growth'
    },

    yAxis: {
      title: {
        text: 'Prosperity'
      },
    //   min: 70,
    //   max: 79,
    //   startOnTick: true,
      
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
        pointStart: 2007
      }
    },
  
    series: [{
      name: 'Chad',
      data: [34.067547692192925, 36.354613622029625, 35.8691283331977, 36.87599203321669, 39.508369869656036, 39.94830407036675, 38.937186770968964, 39.80755297342936],
    }, {
      name: 'Togo',
      data: [40.59894328647189, 40.42844454447428, 41.00830099317763, 42.251966900295685, 44.80755148993598, 45.09957059224447, 45.689324696858726, 47.28680080837674],
    }, {
      name: 'Zimbabwe',
      data: [43.2351508670383, 41.921147452460396, 43.70265112982856, 46.44938850402832, 48.6956655714247, 48.96670765346951, 50.172019958496094, 49.56722640991211],
    }, {
      name: 'Ivory Coast',
      data: [44.145295249091255, 44.288614908854164, 44.963654200236, 44.627545250786675, 43.96750852796767, 46.128317303127716, 48.57547611660428, 49.12003877427843],
    }, {
      name: 'Georgia',
      data: [51.98064168294271, 53.208658854166664, 53.95058568318685, 55.44961717393663, 56.33345964219835, 56.92342673407661, 57.88071738349067, 57.58079952663846]
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


// Highcharts.chart(newLRG, {

//     title: {
//         text: 'Prosperity of 5 Most Prosperous Countries'
//     },

//     yAxis: {
//       title: {
//         text: 'Prosperity'
//       },
//     //   min: 70,
//     //   max: 79,
//     //   startOnTick: true,
      
//     },
  
//     xAxis: {
//       accessibility: {
//         rangeDescription: 'Range: 2007 to 2014'
//       },
//       tickInterval: 1
//     },
  
//     legend: {
//       layout: 'vertical',
//       align: 'right',
//       verticalAlign: 'middle'
//     },
  
//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false
//         },
//         pointStart: 2007
//       }
//     },
  
//     series: [{
//       name: 'Australia',
//       data: [77.67186906602647, 77.79921298556857, 77.74207560221355, 
//         78.21320343017578, 77.81163957383897, 77.26486290825738, 77.60149807400174, 76.94242519802518]
//     }, {
//       name: 'Netherlands',
//       data: [77.43161392211914, 77.41837692260742, 77.73303010728624, 
//         78.24202728271484, 78.19659762912326, 77.83169047037761, 77.83171505398221, 77.62882656521268]
//     }, {
//       name: 'Norway',
//       data: [76.91756863064236, 76.98685455322266, 77.57607777913411, 
//         77.74615224202473, 77.15247514512804, 77.81395806206598, 77.84742736816406, 78.50093672010634]
//     }, {
//       name: 'New Zealand',
//       data: [78.0983640882704, 77.55401357014973, 77.77457258436415, 77.9938481648763, 
//         78.18245273166232, 78.12682596842448, 78.8326432969835, 78.91474151611328]
//     }, {
//       name: 'Sweden',
//       data: [76.86514239841037, 77.13263914320204, 77.72930992974176, 78.65740246242947, 
//         78.48794852362738, 78.33687125311957, 77.62010447184245, 77.61029900444879]
//     }],
//     responsive: {
//       rules: [{
//         condition: {
//           maxWidth: 500
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//           }
//         }
//       }]
//     }
  
//   });



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
      text: 'Bottom 5 Countries with Most Growth'
    },  
    yAxis: {
      title: {
        text: 'Prosperity'
      },
        min: 30,
    //    max: 79,
        startOnTick: true
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
        pointStart: 2007
      }
    },
  
    series: [{
      name: 'Sudan',
      data: [43.07338290744357, 42.93077278137207, 42.98777071634928, 42.775794135199654, 41.596841388278534, 40.329337226019966, 40.44776153564453, 38.85887993706597]
    }, {
      name: 'Venezuela',
      data: [54.3490367465549, 52.686646143595375, 52.490030924479164, 52.824531979031036, 52.87612067328559, 53.172424952189125, 51.22822740342882, 50.26970566643609]
    }, {
      name: 'Central African Republic',
      data: [40.610100428263344, 41.10119289822049, 40.41649023691813, 39.286528481377495, 40.2028488583035, 40.1312510172526, 37.64913643731011, 38.101737552218964]
    }, {
      name: 'Nigeria',
      data: [48.40971967909071, 47.772352854410805, 45.7327880859375, 47.115267011854385, 47.67943149142795, 47.40531582302518, 46.17949761284722, 45.8256704542372]
    }, {
      name: 'Libya',
      data: [48.11105495029025, 48.130608876546226, 48.09419737921821, 48.109451082017685, 47.0650143093533, 48.7695558336046, 48.256165186564125, 45.914572397867836]
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


// Highcharts.chart(newLRL, {

//     title: {
//       text: 'Prosperity of 5 Least Prosperous Countries'
//     },  
//     yAxis: {
//       title: {
//         text: 'Prosperity'
//       },
//     //    min: 30,
//     //    max: 79,
//     //    startOnTick: true
//     },
  
//     xAxis: {
//       accessibility: {
//         rangeDescription: 'Range: 2007 to 2014'
//       },
//       tickInterval: 1
//     },
  
//     legend: {
//       layout: 'vertical',
//       align: 'right',
//       verticalAlign: 'middle'
//     },
  
//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false
//         },
//         pointStart: 2007
//       }
//     },
  
//     series: [{
//       name: 'Afghanistan',
//       data: [37.65897538926866, 37.64705848693848, 38.963036643134224, 
//         38.37829611036513, 36.900201161702476, 38.66849920484755, 38.93273417154948, 37.60717476738824]
//     }, {
//       name: 'Central African Republic',
//       data: [40.610100428263344, 41.10119289822049, 40.41649023691813, 
//         39.286528481377495, 40.2028488583035, 40.1312510172526, 37.64913643731011, 38.101737552218964]
//     }, {
//       name: 'Democratic Republic of Congo',
//       data: [37.9554386138916, 37.16770553588867, 37.37549654642741, 37.407493591308594, 
//         37.9289616478814, 38.83824708726671, 37.65847290886773, 38.06906594170464]
//     }, {
//       name: 'Chad',
//       data: [34.067547692192925, 36.354613622029625, 35.8691283331977, 36.87599203321669, 
//         39.508369869656036, 39.94830407036675, 38.937186770968964, 39.80755297342936]
//     }, {
//       name: 'Yemen',
//       data: [39.909220377604164, 39.96099726359049, 39.7200027041965, 39.852127922905815, 
//         38.095397525363495, 39.13356738620334, 39.089093102349175, 38.76679356892904]
//     }],
  
//     responsive: {
//       rules: [{
//         condition: {
//           maxWidth: 500
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//           }
//         }
//       }]
//     }
  
//   });