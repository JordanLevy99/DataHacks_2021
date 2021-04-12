
/////////////////// Bottom 5 Countries ///////////////////
var groupedcolct = document.createElement('figure');
groupedcolct.className = 'pillar';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j1';
document.getElementById('groupedcolct').appendChild(outerDiv1);
document.getElementById('j1').appendChild(groupedcolct);

Highcharts.chart(groupedcolct, {

    title: {
      text: 'Bottom 5 Countries with Most Growth',
      style: {
        fontSize: '16px'
      }
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
    credits: {
      enabled: false
    },
    
    caption: {
      text: '<b>Figure 5</b>',
      align: 'center'
    },

    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
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

/////////////////// Bottom 5 Countries ///////////////////
var groupedcolct = document.createElement('figure');
groupedcolct.className = 'pillar';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j11';
document.getElementById('groupedcolct').appendChild(outerDiv1);
document.getElementById('j11').appendChild(groupedcolct);


Highcharts.chart(groupedcolct, {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Pillar Growth per Bottom Countries'
    },
    xAxis: {
      categories: ['Central African Republic', 'Libya', 'Nigeria', 'Sudan', 'Venezuela']
    },
    yAxis: {
      title: {
        text: 'Average Change'
      }
    },
    credits: {
      enabled: false
    },
    caption: {
      text: '<b>Figure 6</b>',
      align: 'center'
    },
    series: [{
      name: 'Economic Quality',
      data: [-0.007816136870003154, -0.013005575634574162, 
        0.0033238853188692907, -0.002503917819389745, -0.015725606571048933]
    }, {
        name: 'Business Environment',
        data: [0.012842187884093859, -0.006511793799591881, 
            -0.005201959460530148, -0.021759908175185694, 0.006015592329110087]
    }, {
        name: 'Governance',
        data: [-0.006422523177788131, -0.022149190630637694, 
            -0.013827058061570696, -0.006062056232331803, -0.034383363170066295]
    }, {
        name: 'Education',
        data: [0.03519406766643862, 0.0026087891411068487, 
            0.0006764869890945047, -0.012943812466696514, -0.005256601427823027]
    }, {
      name: 'Health',
      data: [-0.002731292559821963, -0.0022989163198753326, 
        0.008835552100205035, -0.0033535292040108855, 0.0003579422317008252]
    }, {
        name: 'Safety and Security',
        data: [-0.035999376651756565, -0.01981820373252885, 
            -0.03795919241382906, -0.011638113561864505, -0.0015754595152476236]
    }, {
        name: 'Personal Freedom',
        data: [-0.025961795663510534, 0.004504630461985792, 
            -0.02425751156783018, -0.049184277210860716, -0.019247075592670027]
    }, {
        name: 'Social Capital',
        data: [-0.024000085300294294, 0.0021957373502088373, 
            -0.003927450849397052, -0.019657360121914436, -0.013997584294864529]
    }, {
      name: 'Natural Environment',
      data: [0.005136910924319116, 0.00018307377626824994, 
        0.006387702558590336, -0.00010430673953598646, -0.012850783150127554]
    }]
  });



