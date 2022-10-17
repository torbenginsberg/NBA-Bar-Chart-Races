class howToModal {
    constructor() {
        this.howToLink = document.querySelector('.how-to-link');
        this.howToModalBG = document.querySelector('.how-to-modal-bg');
        this.howToModalClose = document.querySelector('#how-to-modal-close');
        this.setEventListeners();
    }

    setEventListeners() {
        let that = this;
        this.howToLink.addEventListener('click', function(){
            that.howToModalBG.classList.add('how-to-modal-bg-active');
        })

        this.howToModalClose.addEventListener('click', function() {
            that.howToModalBG.classList.remove('how-to-modal-bg-active');
        })
    }
}

export default howToModal;