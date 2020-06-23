let data3 = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
  datasets: [
    {
      label: "Today",
      data: [6, 8, 2, 7, 4, 7, 6],
      fill: false,
      borderColor: 'purple',
    }
  ]
}
let data4 = {
  labels: ["January", "Febraury", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "All-Time",
      data: [65000, 69000, 90000, 81000, 21000, 70000, 60000],
      fill: false,
      borderColor: "violet"
    }
  ]
}
let CHART = document.getElementById('lineChart1');
let myLineChart = new Chart(CHART, {
  type: 'line',
  data: data3,
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
    },
    animation: {
      animationEasing : "easeInQuart",
    }
  }
});
