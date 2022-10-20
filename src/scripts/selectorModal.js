import dataFunctionsObj from './dataSetup';

class selectorModalSetup {
    constructor() {
        this.modalBtn = document.querySelector('.modal-btn');
        this.modalBg = document.querySelector('.modal-bg');
        this.modalClose = document.querySelector('.modal-close');
        this.selectorField = document.querySelector('.select-field');
        this.playerList = document.querySelector('.list');
        this.downArrow = document.querySelector('.down-arrow');
        this.letsRaceBtn = document.querySelector('#my-race');
        this.exampleRaceBtn = document.querySelector('#example-race');
        this.playerSearchBar = document.querySelector('.input-selector');
        this.yearDisplay = document.querySelector('.year-display');
        this.yearDisplayPTag = document.querySelector('.year-display-text');
        this.addSelectorModalListeners();
        this.setNameSelectors();
        this.allPlayerOptions = document.querySelectorAll('.player');
        this.allPlayerInputs = document.querySelectorAll('.player-input');
        this.yearInputs = document.querySelectorAll('.year-input');
        this.statInputs = document.querySelectorAll('.stat-radio');
    }

    addSelectorModalListeners() {
        let that = this;
        this.modalBtn.addEventListener('click', function() {
            that.modalBg.classList.add('bg-active');
        });
        
        this.modalClose.addEventListener('click', function() {
            that.modalBg.classList.remove('bg-active');
        });
        
        this.downArrow.addEventListener('click', function() {
            that.playerList.classList.toggle('show-dropdown');
            that.downArrow.classList.toggle('rotate180');
        })

        this.playerSearchBar.addEventListener('keyup', function(e) {
            that.filterList(e.target.value);
        })

        this.letsRaceBtn.addEventListener('click', function() {
            that.yearDisplay.classList.toggle('year-display-active');
        })

        this.exampleRaceBtn.addEventListener('click', function() {
            that.yearDisplay.classList.toggle('year-display-active')
        })
    }

    filterList(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        this.allPlayerOptions.forEach( option => {
            let label = option.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        })
    }

    setNameSelectors() {
        let names = dataFunctionsObj.getNames();
        names.forEach( name => {
            let newLabel = document.createElement('label');
            newLabel.classList.add('player');

            let parentList = document.getElementById('parent-list');
            parentList.append(newLabel);

            let newInput = document.createElement('input');
            newInput.setAttribute('type', 'checkbox');
            newInput.classList.add('player-input');
            newLabel.append(newInput);
            newInput.insertAdjacentText('afterend', name);
        })
    }

    getCheckedPlayers() {
        let checkedPlayers = [];
        let nodeArray = Array.from(this.allPlayerInputs);
        let checkedNodeArray = nodeArray.filter(ele => ele.checked);

        checkedNodeArray.forEach(function(ele) {
            checkedPlayers.push(ele.parentNode.innerText);
        })

        return checkedPlayers;
    }

    getStartYear() {
        return parseInt(this.yearInputs[0].value);
    }

    getEndYear() {
        return parseInt(this.yearInputs[1].value);
    }

    getCheckedStat() {
        for(let i = 0; i < this.statInputs.length; i++) {
            let currentObj = this.statInputs[i];
            if (currentObj.checked) {
                return currentObj.id;
            }
        }
    }
}

export default selectorModalSetup;