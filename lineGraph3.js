let data6 = {
  labels: ["July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "All-Time",
        data: [2382, 2010, 4960, 6210, 7520, 5203],
        fill: false,
        borderColor: 'orange',
      }
    ]
  }
let data5 = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
    datasets: [
      {
        label: "Today",
        data: [62, 81, 12, 93, 41, 24, 61],
        fill: false,
        borderColor: 'yellow',
      }
    ]
  }
let CHART3 = document.getElementById('lineChart3');
let myLineChart3 = new Chart(CHART3, {
  type: 'line',
  data: data5,
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
