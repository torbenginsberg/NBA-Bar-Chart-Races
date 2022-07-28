import dataFunctionsObj from './dataSetup';
import teamColors from "../../files/teamColors";

class racingChart {
    constructor(labels, startYear, endYear, targetDataString) {
        this.startYear = startYear;
        this.trackingYear = parseInt(this.startYear.toString());
        this.endYear = endYear;
        this.targetDataString = targetDataString;
        this.labels = labels;
        this.data = dataFunctionsObj.getDataForPlayers(this.labels, this.targetDataString);
        this.chartLabel = this.targetDataString;
        this.backgroundColors = this.getColors(this.labels, 'background');
        this.borderColors = this.getColors(this.labels, 'border');
        this.myConfig = this.getConfig();
        this.myChart = this.drawChart(this.myConfig)
        this.createYearDisplay();
    }

    getColors(players, type) {
      let colorCodes = [];
      for(let i=0; i < players.length; i++) {
        let teamCode = dataFunctionsObj.getTeam(players[i], this.targetDataString);
        let currentObj = teamColors.find(ele => ele['team'] === teamCode);
        colorCodes.push(currentObj[type]);
      }
      return colorCodes;
    }

    getValues(year) {
      let values = [];
      for(let i = 0; i < this.labels.length; i++){
        let currentName = this.labels[i];
        let currentPlayerData = this.data[currentName];
        let thisYearValues = currentPlayerData[year];
        values.push(thisYearValues);
      }
      return values;
    }

    drawChart(config) {
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
      return myChart;
    }

    getConfig() {
      const data = {
        labels: this.labels,
        datasets: [{
          label: this.chartLabel,
          data: this.getValues(this.startYear),
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

      this.trackingYear += 1;
      if (this.trackingYear <= this.endYear) {
        for(let i = 0; i < this.labels.length; i++) {
          let currentName = this.labels[i];
          let nextVal = this.data[currentName][`${this.trackingYear}`];
          dp[lab.indexOf(currentName)] += nextVal;
        }
        this.myChart.update();
        this.incrementYearDisplay();
      } else {
        this.showYearsRange();
      }
    }

    createYearDisplay() {
      let display = document.querySelector('.year-display-text');
      display.innerText = this.trackingYear;
    }

    incrementYearDisplay() {
      let display = document.querySelector('.year-display-text');
      let parsedInt = parseInt(display.innerText) + 1;
      display.innerText = parsedInt.toString();
    }

    showYearsRange() {
      let display = document.querySelector('.year-display-text');
      let startYearString = this.startYear.toString();
      let endYearString = this.endYear.toString();
      display.innerText = startYearString + '-' + endYearString;
    }
}


export default racingChart;