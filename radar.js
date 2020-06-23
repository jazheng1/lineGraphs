let radarData = {
  labels: ["Attack","Defense","Health","Stamina", "XP"],
  datasets: [
    {
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      data: [45, 39, 30, 35, 86],
      label: 'Monster 1'
    },
  ]
}

let myRadarChart = new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: radarData,
  options: {
    scale: {
      ticks: {
          suggestedMin: 0, // starts chart at 0 and no the lowest point number
          suggestedMax: 100,
          display: false,  // removes the numbers that would run up the chart at 180 degrees line
      },
      pointLabels: {
        fontSize: 20
      },
      gridLines: {
        lineWidth: 0
      }
    }
  }
});
