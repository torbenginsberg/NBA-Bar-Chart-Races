import racingChart from './scripts/racingChart'

document.addEventListener('DOMContentLoaded', () => {
    let chart = new racingChart();
    let updateIntervalID = setInterval(chart.updateChart.bind(chart), 500);
})
