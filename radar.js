let radar = document.getElementById('radarChart');
let myRadarChart = new Chart(radar, {
  type: 'radar',
  data: {
    labels : ["Attack","Defense","Health","Stamina"],
    datasets : [
      {
        fill: true,
        backgroundColor : "rgba(54, 162, 235, 0.2)",
        pointBackgroundColor: "blue",
        pointBorderColor:"white",
        borderColor : "blue",
        label: 'Monster2',
        data : [45,39,30,35]
      },
    ]
  },
  options: {
    scale: {
      ticks: {
          suggestedMin: 0, // starts chart at 0 and no the lowest point number
          suggestedMax: 100,
          display: false,  // removes the numbers that would run up the chart at 180 degrees line
      },
      pointLabels: {
        fontSize: 20
      }
    }
  }
});
