import racingChart from './scripts/racingChart';
import selectorModalSetup from './scripts/selectorModal';

document.addEventListener('DOMContentLoaded', () => {
    let selectorModal = new selectorModalSetup();
    selectorModal.letsRaceBtn.addEventListener('click', () => {
        let chart = new racingChart();
        let updateIntervalID = setInterval(chart.updateChart.bind(chart), 500);
        selectorModal.modalBg.classList.remove('bg-active');
    })
})
