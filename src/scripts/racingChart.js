import dataFunctionsObj from './dataSetup';
import teamColors from "../../files/teamColors";

class racingChart {
    constructor() {
        this.year = 2020;
        this.labels = ['LeBron James', 'Kevin Durant', 'Kawhi Leonard', 'Luka Dončić', 'Nikola Jokić', 'Joel Embiid', 'Anthony Davis', 'LaMelo Ball'];
        this.data = dataFunctionsObj.getDataForPlayers(this.labels);
        this.chartLabel = 'Points';
        this.backgroundColors = this.getColors(this.labels, 'background');
        this.borderColors = this.getColors(this.labels, 'border');
        this.myConfig = this.getConfig();
        this.drawChart(this.myConfig);
    }

    getColors(players, type) {
      let colorCodes = [];
      for(let i=0; i < players.length; i++) {
        let teamCode = dataFunctionsObj.getTeam(players[i]);
        let currentObj = teamColors.find(ele => ele['team'] === teamCode);
        colorCodes.push(currentObj[type]);
      }
      return colorCodes;
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

    drawChart(config) {
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    }

    getConfig() {
      const data = {
        labels: this.labels,
        datasets: [{
          label: this.chartLabel,
          data: this.getPoints(this.year),
          backgroundColor: this.backgroundColors,
          borderColor: this.borderColors,
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

      return config;
    }

    updateChart() {
      let merged = this.labels.map(function(label, i) {
        
        return {
            'labels': this.myConfig.data.labels[i],
            'dataPoints': this.myConfig.data.datasets[0].data[i],
            'backgroundColor': this.myConfig.data.datasets[0].backgroundColor[i],
            'borderColor': this.myConfig.data.datasets[0].borderColor[i]
        }
      }, this)
      
      const lab = [];
      const dp = [];
      const bgc = [];
      const bc = [];
      const dataSort = merged.sort((b, a) => {
          return a.dataPoints - b.dataPoints
      });

      for(let i = 0; i < dataSort.length; i++){
          lab.push(dataSort[i].labels);
          dp.push(dataSort[i].dataPoints);
          bgc.push(dataSort[i].backgroundColor);
          bc.push(dataSort[i].borderColor);
      }
      this.myConfig.data.labels = lab;
      this.myConfig.data.datasets[0].data = dp;
      this.myConfig.data.datasets[0].backgroundColor = bgc;
      this.myConfig.data.datasets[0].borderColor = bc;

    // will need to increment the year from 2000 - 2021 at every interval
    // when incrementing, need to update each players value by indexing in the playerValuesEachYear obj for the next year

      // this.update();
    }
}


export default racingChart;