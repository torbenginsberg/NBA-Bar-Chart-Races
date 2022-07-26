const fs = require('fs'); // inbuilt method used to read a file into buffer; File System Module

const csvToObjects = (csv) => {
    csv = fs.readFileSync('../../files/points.csv');
    const array = csv.toString().split('\n');
    const convertedArr = [];
    
    let dataset = [];
    
    for(let i = 1; i < array.length; i++) {
        const jsObject = {};
    
        const current = array[i];
        let elements = current.split(',');
        let dateString = elements[0];
        let nameString = elements[1];
        let teamString = elements[2];
        let valueString = elements[3];
    
        jsObject['date'] = stringToDate(dateString);
        jsObject['name'] = nameString;
        jsObject['team'] = teamString;
        jsObject['value'] = parseInt(valueString);
    
        dataset.push(jsObject);
    }
    
    function stringToDate(string) {
        const parts = string.split('-');
        const myDate = new Date(parts[0], parts[1] - 1, parts[2]);
        return myDate;
    }
}


// console.log(dataset);

function compoundValues(dataset) {
    let compoundedNames = [];
    for(let i = 0; i < dataset.length; i++) {
        let currentObj = dataset[i];
        let currentName = currentObj['name'];
        if (!compoundedNames.includes(currentName)) {
            let filtered = dataset.filter(obj => obj['name'] === currentName);
            compounder(filtered);
            compoundedNames.push(currentName);
        }
    }
}

function compounder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        next['value'] += current['value'];
    }
}

compundedDataset = compoundValues(dataset);

exports.csvToObjects = csvToObjects;
