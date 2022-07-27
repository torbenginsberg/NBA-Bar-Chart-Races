import pointsArray from "../../files/points";

export default {
    csvToObjects(dataArray) {
        let dataset = [];
        for(let i = 0; i < dataArray.length; i++) {
            const jsObject = {};
        
            const current = dataArray[i];
            let elements = current.split(',');
            let dateString = elements[0];
            let nameString = elements[1];
            let teamString = elements[2];
            let valueString = elements[3];
        
            jsObject['year'] = stringToYear(dateString);
            jsObject['name'] = nameString;
            jsObject['team'] = teamString;
            jsObject['value'] = parseInt(valueString);
        
            dataset.push(jsObject);
        }
        
        function stringToYear(string) {
            const parts = string.split('-');
            const part = parts[0];
            const myYear = parseInt(part);
            return myYear;
        }
    
        return dataset;
    },
    finalSum(playerName) {
        let currentDataset = csvToObjects(pointsArray);
        let filtered = currentDataset.filter(obj => obj['name'] === playerName);
        let total = 0;
        for(let i=0; i < filtered.length; i++) {
            let currentObj = filtered[i];
            let currentValue = currentObj['value'];
            total += currentValue;
        }
        return total;
    },

    getDataForPlayers(players) {
        let dataObject = {};
        let object = this;
        players.forEach(function(currentPlayer) {
            dataObject[currentPlayer] = object.playerValuesEachYear(currentPlayer);
        })
        return dataObject;
    },

    playerValuesEachYear(playerName) {
        let currentDataset = this.csvToObjects(pointsArray);
        let values = {};
        let filtered = currentDataset.filter(obj => obj['name'] === playerName);
        for(let y=2000; y < 2022; y++) {
            let currentObj = filtered.find(ele => ele['year'] === y);
            if(currentObj) {
                values[y] = currentObj['value'];
            } else {
                values[y] = 0;
            }
        }
        return values;
    },

    getTeam(playerName) {
        let currentDataset = this.csvToObjects(pointsArray);
        let playerObj = currentDataset.find(ele => ele['name'] === playerName);
        return playerObj['team'];
    }
}

// console.log(getDataForPlayers(['LeBron James', 'Kevin Durant', 'Kobe Bryant']))
// console.log(finalSum('LeBron James'));
// console.log(playerValuesEachYear('LeBron James'))
// console.log(csvToObjects(pointsArray));