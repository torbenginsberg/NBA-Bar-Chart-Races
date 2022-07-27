import racingChart from './scripts/racingChart';
import selectorModalSetup from './scripts/selectorModal';

document.addEventListener('DOMContentLoaded', () => {
    let selectorModal = new selectorModalSetup();
    selectorModal.letsRaceBtn.addEventListener('click', () => {
        let checkedPlayers = selectorModal.getCheckedPlayers();
        let chart = new racingChart(checkedPlayers);
        let updateIntervalID = setInterval(chart.updateChart.bind(chart), 500);
        selectorModal.modalBg.classList.remove('bg-active');
    })
})
