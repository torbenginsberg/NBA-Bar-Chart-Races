import racingChart from './scripts/racingChart';
import selectorModalSetup from './scripts/selectorModal';

document.addEventListener('DOMContentLoaded', () => {
    let selectorModal = new selectorModalSetup();
    selectorModal.letsRaceBtn.addEventListener('click', () => {
        let checkedPlayers = selectorModal.getCheckedPlayers();
        let startYear = selectorModal.getStartYear();
        let endYear = selectorModal.getEndYear();
        let targetDataString = selectorModal.getCheckedStat();

        let chart = new racingChart(checkedPlayers, startYear, endYear, targetDataString);

        let updateIntervalID = setInterval(chart.updateChart.bind(chart), 500);

        selectorModal.modalBg.classList.remove('bg-active');
        
        selectorModal.modalBtn.addEventListener('click', () => {
            chart.myChart.destroy();
            clearInterval(updateIntervalID);
        })
    })
})
