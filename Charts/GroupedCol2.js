/////////////////// Bottom 5 Countries ///////////////////
var groupedcolct = document.createElement('figure');
groupedcolct.className = 'pillar';
var outerDiv1 = document.createElement('div');
outerDiv1.id = 'j2';
document.getElementById('pillar').appendChild(outerDiv1);
document.getElementById('j2').appendChild(groupedcolct);

Highcharts.chart(groupedcolct, {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column chart with negative values'
    },
    xAxis: {
      categories: ['Central African Republic', 'Libya', 'Nigeria', 'Sudan', 'Venezuela']
    },
    credits: {
      enabled: false
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


