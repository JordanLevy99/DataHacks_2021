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





////////////////////////////////////////    Following code is modifed from HighCharts demos ////////////////////////////////////////

var newLRL = document.createElement('figure');
newLRL.className = 'lrct';
newLRL.id ='life'
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'q2';
document.getElementById('linregr').appendChild(outerDiv1);
document.getElementById('q2').appendChild(newLRL);


Highcharts.chart(newLRL, {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Pillar Growth per Top Countries'
  },
  xAxis: {
    categories: ['Ivory Coast', 'Georgia', 'Chad', 'Togo', 'Zimbabwe']
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Economic Quality',
    data: [0.00468631058676694, 0.0065813279941771, 0.002608897968983115, 0.004400390666229992, 0.01663490480642693]
  }, {
      name: 'Business Environment',
      data: [0.043732945405460466, 0.03323529411161408, 0.050852023175399275, 0.04503690922731951, 0.06037747243014091]
  }, {
      name: 'Governance',
      data: [0.05674934471913118, 0.036756623334303073, 0.011849554784280958, 0.018709900809051883, 0.06585881697512064]
  }, {
      name: 'Education',
      data: [0.01443184786332763, 0.003992169395210521, 0.018528773656376618, 0.011526959706490647, 0.002965119364473745]
  }, {
    name: 'Health',
    data: [-0.00028438818429199486, -0.0032538281688444526, 0.013872634163174302, 0.003928374262460954, 0.018976763832811994]
  }, {
      name: 'Safety and Security',
      data: [-0.004313386893742721, 0.011764306634643784, 0.023809014264994044, 0.0037501338327363687, 0.008068017652640203]
  }, {
      name: 'Personal Freedom',
      data: [0.014123948856986424, 0.01723538915674583, 0.03187516088939524, 0.05942296845910344, 0.008782066514060771]
  }, {
      name: 'Social Capital',
      data: [0.011769761042057958, 0.01478402760491404, 0.023479314193096235, 0.031381123092487195, 0.012339154473416158]
  }, {
    name: 'Natural Environment',
    data: [0.007721158720545462, 0.007072280863614333, 0.01128134174104245, 0.012435066762782832, 0.0025035262990638074]
  }]
});

// Highcharts.chart(newLRL, {
//   chart: {
//     type: 'column'
//   },
//   title: {
//     text: 'Pillar Growth per Bottom Countries'
//   },
//   xAxis: {
//     categories: ['Central African Republic', 'Libya', 'Nigeria', 'Sudan', 'Venezuela']
//   },
//   credits: {
//     enabled: false
//   },
//   series: [{
//     name: 'Economic Quality',
//     data: [-0.007816136870003154, -0.013005575634574162, 
//       0.0033238853188692907, -0.002503917819389745, -0.015725606571048933]
//   }, {
//       name: 'Business Environment',
//       data: [0.012842187884093859, -0.006511793799591881, 
//           -0.005201959460530148, -0.021759908175185694, 0.006015592329110087]
//   }, {
//       name: 'Governance',
//       data: [-0.006422523177788131, -0.022149190630637694, 
//           -0.013827058061570696, -0.006062056232331803, -0.034383363170066295]
//   }, {
//       name: 'Education',
//       data: [0.03519406766643862, 0.0026087891411068487, 
//           0.0006764869890945047, -0.012943812466696514, -0.005256601427823027]
//   }, {
//     name: 'Health',
//     data: [-0.002731292559821963, -0.0022989163198753326, 
//       0.008835552100205035, -0.0033535292040108855, 0.0003579422317008252]
//   }, {
//       name: 'Safety and Security',
//       data: [-0.035999376651756565, -0.01981820373252885, 
//           -0.03795919241382906, -0.011638113561864505, -0.0015754595152476236]
//   }, {
//       name: 'Personal Freedom',
//       data: [-0.025961795663510534, 0.004504630461985792, 
//           -0.02425751156783018, -0.049184277210860716, -0.019247075592670027]
//   }, {
//       name: 'Social Capital',
//       data: [-0.024000085300294294, 0.0021957373502088373, 
//           -0.003927450849397052, -0.019657360121914436, -0.013997584294864529]
//   }, {
//     name: 'Natural Environment',
//     data: [0.005136910924319116, 0.00018307377626824994, 
//       0.006387702558590336, -0.00010430673953598646, -0.012850783150127554]
//   }]
// });

