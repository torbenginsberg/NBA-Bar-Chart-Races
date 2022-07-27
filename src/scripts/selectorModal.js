class selectorModalSetup {
    constructor() {
        this.modalBtn = document.querySelector('.modal-btn');
        this.modalBg = document.querySelector('.modal-bg');
        this.modalClose = document.querySelector('.modal-close');
        this.selectorField = document.querySelector('.select-field');
        this.playerList = document.querySelector('.list');
        this.downArrow = document.querySelector('.down-arrow');
        this.letsRaceBtn = document.querySelector('.lets-race');
        this.addSelectorModalListeners();
    }

    addSelectorModalListeners() {
        let that = this;
        this.modalBtn.addEventListener('click', function() {
            that.modalBg.classList.add('bg-active');
        });
        
        this.modalClose.addEventListener('click', function() {
            that.modalBg.classList.remove('bg-active');
        });
        
        document.querySelector('.select-field').addEventListener('click', () => {
            document.querySelector('.list').classList.toggle('show');
            document.querySelector('.down-arrow').classList.toggle('rotate180');
        })
        
        this.selectorField.addEventListener('click', function () {
            that.playerList.classList.toggle('show-dropdown');
            that.downArrow.classList.toggle('rotate180');
        })
    }
}

export default selectorModalSetup;