import racingChart from './scripts/racingChart';
import selectorModalSetup from './scripts/selectorModal';
import aboutModal from './scripts/aboutModal';
import howToModal from './scripts/howToModal';


document.addEventListener('DOMContentLoaded', () => {
    let aboutModal1 = new aboutModal();
    let howToModal1 = new howToModal();
    let selectorModal = new selectorModalSetup();
    selectorModal.letsRaceBtn.addEventListener('click', () => {
        let checkedPlayers = selectorModal.getCheckedPlayers();
        let startYear = selectorModal.getStartYear();
        let endYear = selectorModal.getEndYear();
        let targetDataString = selectorModal.getCheckedStat();

        let chart = new racingChart(checkedPlayers, startYear, endYear, targetDataString);

        let updateIntervalID = setInterval(chart.updateChart.bind(chart), 750);

        selectorModal.modalBg.classList.remove('bg-active');

        selectorModal.modalBtn.addEventListener('click', () => {
            chart.myChart.destroy();

            clearInterval(updateIntervalID);

            let playerInputs = Array.from(selectorModal.allPlayerInputs);
            let currentChecked = playerInputs.filter(ele => ele.checked);
            currentChecked.forEach(function(ele) {
                ele.checked = false;
            })

            selectorModal.yearDisplay.classList.toggle('year-display-active');
        })
    })
})
