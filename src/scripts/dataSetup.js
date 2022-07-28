import pointsArray from "../../files/points";
import reboundsArray from "../../files/rebounds";

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
    getDataForPlayers(players, string) {
        let dataObject = {};
        let object = this;
        players.forEach(function(currentPlayer) {
            dataObject[currentPlayer] = object.playerValuesEachYear(currentPlayer, string);
        })
        return dataObject;
    },

    playerValuesEachYear(playerName, string) {
        let targetArray = this.getTargetCSV(string); 
        let currentDataset = this.csvToObjects(targetArray);
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

    getTeam(playerName, string) {
        let targetArray = this.getTargetCSV(string);
        let currentDataset = this.csvToObjects(targetArray);
        let playerObj = currentDataset.find(ele => ele['name'] === playerName);
        return playerObj['team'];
    },
    getNames() {
        let names = [];
        for(let i = 0; i < reboundsArray.length; i++) {
            const current = reboundsArray[i];
            let elements = current.split(',');
            let nameString = elements[1];
            if (!names.includes(nameString)) {
                names.push(nameString)
            }
        }
        return names.sort();
    },
    getTargetCSV(string) {
        if (string === "Points") {
            return pointsArray;
        } else if (string === "Rebounds") {
            return reboundsArray;
        } else if (string === "Assists") {
            return pointsArray;
        } else if (string === "Win Shares") {
            return pointsArray;
        }
    }
}
