let data1 = {
  labels: ["January", "Febraury", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "All-Time",
        data: [90, 20, 40, 60, 63, 70, 53],
        fill: false,
        borderColor: 'blue',
      }
    ]
  }
let data2 = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
    datasets: [
      {
        label: "Today",
        data: [6, 8, 12, 9, 4, 2, 6],
        fill: false,
        borderColor: 'green',
      }
    ]
  }
let CHART2 = document.getElementById('lineChart2');
let myLineChart2 = new Chart(CHART2, {
  type: 'line',
  data: data1,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          lineWidth: 0
       }
      }],
      xAxes: [{
        gridLines: {
          lineWidth: 0
        }
     }]
    }
  }
});
