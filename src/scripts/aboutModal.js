class aboutModal {
    constructor() {
        this.aboutLink = document.querySelector('.about-link');
        this.aboutModalBG = document.querySelector('.about-modal-bg');
        this.aboutModalClose = document.querySelector('.about-modal-close');
        this.setEventListeners();
    }

    setEventListeners() {
        let that = this;
        this.aboutLink.addEventListener('click', function(){
            that.aboutModalBG.classList.add('about-modal-bg-active');
        })

        this.aboutModalClose.addEventListener('click', function() {
            that.aboutModalBG.classList.remove('about-modal-bg-active');
        })
    }
}

export default aboutModal;
