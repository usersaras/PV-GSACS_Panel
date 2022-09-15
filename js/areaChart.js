// Area Chart Example
let l =[];
let data = [];
let data2 = [];
const today = new Date();
const dd = String(today.getDate()+1).padStart(2, '0');
for(i=1; i<dd; i++){
    l.push(i);
    data.push(Math.floor(Math.random() * (5000 - 4000 + 1) + 4000))
    data2.push(Math.floor(Math.random() * (4800 - 3700 + 1) + 3700))
}

const orderValue = [...data2].reduce(add, 0); // with initial value to avoid when the array is empty
const invoicedSales = [...data].reduce(add, 0); // with initial value to avoid when the array is empty

function add(accumulator, a) {
  return accumulator + a;
}

const diff = (orderValue) - (invoicedSales);

const el = document.getElementById('difference');

if(diff<0){
    el.innerHTML = `
        <button href="#" class="mb-0 p-2 bg-danger text-white rounded d-inline-block border-0" data-toggle="tooltip" title="Difference this month">- $${diff.toString().substr(1)}</button>
    `;
} 

console.log(diff);

var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [...l],
    datasets: [{
      label: "Order Value",
      lineTension: 0.3,
      backgroundColor: "brown",
      borderColor: "brown",
      pointRadius: 3,
      pointBackgroundColor: "brown",
      pointBorderColor: "brown",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "brown",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [...data],
    },
    {
        label: "Invoiced Sales",
        lineTension: 0.3,
        backgroundColor: "green",
        borderColor: "green",
        pointRadius: 3,
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "green",
        pointHoverBorderColor: "green",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [...data2],
      }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: {
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      },
      yAxes: {
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 5,
          padding: 10
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      },
    },
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
