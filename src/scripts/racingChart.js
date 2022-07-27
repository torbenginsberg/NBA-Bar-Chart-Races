import dataFunctionsObj from './dataSetup';

class racingChart {
    constructor() {
        this.year = 2020;
        this.labels = ['LeBron James', 'Kevin Durant', 'Kawhi Leonard', 'Luka Dončić', 'Nikola Jokić', 'Joel Embiid', 'Anthony Davis', 'LaMelo Ball'];
        this.data = dataFunctionsObj.getDataForPlayers(this.labels);
        this.chartLabel = 'Points';
        this.backgroundColors = this.getBackgroundColors(this.labels);
        this.drawChart();
    }

    getBackgroundColors(players) {
      let colorCodes = [];
      for(let i=0; i < players.length; i++) {
        let teamCode = dataFunctionsObj.getTeam(players[0]);
      }
      
    }

    getPoints(year) {
      let points = [];
      for(let i = 0; i < this.labels.length; i++){
        let currentName = this.labels[i];
        let currentPlayerData = this.data[currentName];
        let thisYearPoints = currentPlayerData[year];
        points.push(thisYearPoints);
      }
      return points;
    }

    drawChart() {
      const data = {
        labels: this.labels,
        datasets: [{
          label: this.chartLabel, // label will need to change dynamically if I end up putting in multiple graph options
          data: this.getPoints(this.year), // the starting data point will be index 0 from the playerValuesEachYear function
          backgroundColor: [    //both backgroundColor and borderColor will be auto determined by the playerObj team value, referencing TeamColors file
            '#860038',
            '#000000',
            '#C8102E',
            '#00538C',
            '#0E2240',
            '#006BB6',
            '#552583',
            '#1d1160'
          ],
          borderColor: [
            '#041E42',
            '#FFFFFF',
            '#1D428A',
            '#002B5E',
            '#FEC524',
            '#ED174C',
            '#FDB927',
            '00788c'
          ],
          borderWidth: 2
        }]
      };

      const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    }

    updateChart() {
      let merged = this.labels.map((label, i) => {
        return {
            'labels': myChart.config.data.labels[i],
            'dataPoints': myChart.config.data.datasets[0].data[i],
            'backgroundColor': myChart.config.data.datasets[0].backgroundColor[i],
            'borderColor': myChart.config.data.datasets[0].borderColor[i]
        }
      })

      const lab = [];
      const dp = [];
      const bgc = [];
      const bc = [];

      const dataSort = merged.sort((b, a) => {
          return a.dataPoints - b.dataPoints
      });

      for(i = 0; i < dataSort.length; i++){
          lab.push(dataSort[i].labels);
          dp.push(dataSort[i].dataPoints);
          bgc.push(dataSort[i].backgroundColor);
          bc.push(dataSort[i].borderColor);
      }
      myChart.config.data.labels = lab;
      myChart.config.data.datasets[0].data = dp;
      myChart.config.data.datasets[0].backgroundColor = bgc;
      myChart.config.data.datasets[0].borderColor = bc;

    // will need to increment the year from 2000 - 2021 at every interval
    // when incrementing, need to update each players value by indexing in the playerValuesEachYear obj for the next year

      myChart.update();
    }
}

// const labels = ['LeBron James', 'Kevin Durant', 'Kawhi Leonard', 'Luka Doncic', 'Nikola Jokic', 'Joel Embiid', 'Anthony Davis', 'LaMelo Ball'];
// const data = {
//       labels: ['LeBron James', 'Kevin Durant', 'Kawhi Leonard', 'Luka Doncic', 'Nikola Jokic', 'Joel Embiid', 'Anthony Davis', 'LaMelo Ball'],
//       datasets: [{
//         label: 'Points Scored', // label will need to change dynamically if I end up putting in multiple graph options
//         data: [25000, 20000, 18000, 16000, 22000, 24000, 14000, 9500], // the starting data point will be index 0 from the playerValuesEachYear function
//         backgroundColor: [    //both backgroundColor and borderColor will be auto determined by the playerObj team value, referencing TeamColors file
//           '#860038',
//           '#000000',
//           '#C8102E',
//           '#00538C',
//           '#0E2240',
//           '#006BB6',
//           '#552583',
//           '#1d1160'
//         ],
//         borderColor: [
//           '#041E42',
//           '#FFFFFF',
//           '#1D428A',
//           '#002B5E',
//           '#FEC524',
//           '#ED174C',
//           '#FDB927',
//           '00788c'
//         ],
//         borderWidth: 2
//       }]
//     };

//     const config = {
//       type: 'bar',
//       data,
//       options: {
//         indexAxis: 'y',
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     };

//     const myChart = new Chart(
//       document.getElementById('myChart'),
//       config
//     );

//     setInterval(function update(){
//         let merged = labels.map((label, i) => {
//             return {
//                 'labels': myChart.config.data.labels[i],
//                 'dataPoints': myChart.config.data.datasets[0].data[i],
//                 'backgroundColor': myChart.config.data.datasets[0].backgroundColor[i],
//                 'borderColor': myChart.config.data.datasets[0].borderColor[i]
//             }
//         })

//         const lab = [];
//         const dp = [];
//         const bgc = [];
//         const bc = [];

//         const dataSort = merged.sort((b, a) => {
//             return a.dataPoints - b.dataPoints
//         });

//         for(i = 0; i < dataSort.length; i++){
//             lab.push(dataSort[i].labels);
//             dp.push(dataSort[i].dataPoints);
//             bgc.push(dataSort[i].backgroundColor);
//             bc.push(dataSort[i].borderColor);
//         }
//         myChart.config.data.labels = lab;
//         myChart.config.data.datasets[0].data = dp;
//         myChart.config.data.datasets[0].backgroundColor = bgc;
//         myChart.config.data.datasets[0].borderColor = bc;

//         // will need to increment the year from 2000 - 2021 at every interval
//         // when incrementing, need to update each players value by indexing in the playerValuesEachYear obj for the next year

//         myChart.update();
//     }, 500);

export default racingChart;