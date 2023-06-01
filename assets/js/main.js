const app = {
    handleOverlay() {
        const overlayNode = document.querySelector('.overlay');
        const subnavBoxs = document.querySelectorAll('.header__navbar__item:not(.header__other>.header__navbar__item:first-child)');
        subnavBoxs.forEach((subnavBox) => {
            subnavBox.onmouseover = () => {
                overlayNode.classList.add('overlay--open');
            };
            subnavBox.onmouseout = () => {
                overlayNode.classList.remove('overlay--open');
            };
        });

    },

    start() {
        this.handleOverlay();
    }
};

app.start();
