const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const overlayNode = $('.overlay');
    const subnavBoxs = $$('.header__navbar__item:not(.header__other>.header__navbar__item:first-child)');
    const headerBox = $('.header__box');
    const headerBtn = $('.header__btn__nav');
    const headerOpenSubs = [...$$('.header__navbar:not(.header__navbar.header__other) .header__navbar__item'), ...$$('.header__respon .header__respon__item')];

    return {
        handleOverlay() {
            subnavBoxs.forEach((subnavBox) => {
                subnavBox.onmouseover = () => {
                    overlayNode.classList.add('overlay--open');
                };
                subnavBox.onmouseout = () => {
                    overlayNode.classList.remove('overlay--open');
                };
            });

        },

        handleClick() {
            headerBtn.onclick = () => {
                headerBtn.querySelector('.fa-bars').classList.toggle('display-none');
                headerBtn.querySelector('.fa-xmark').classList.toggle('display-none');
                headerBox.classList.toggle('show');

                if (headerBtn.querySelector('.fa-bars').classList.contains('display-none')) headerBtn.style.right = '0';
                else headerBtn.style.right = '2rem';
            };

            headerOpenSubs.forEach(headerOpenSub => {
                headerOpenSub.firstElementChild.onclick = (e) => {
                    e.preventDefault();
                    headerOpenSub.querySelector('div .fa-plus').classList.toggle('display-none');
                    headerOpenSub.querySelector('div .fa-minus').classList.toggle('display-none');


                    if (headerOpenSub.querySelector('div .fa-plus').classList.contains('display-none')) { headerOpenSub.lastElementChild.style.height = `${headerOpenSub.firstElementChild.nextElementSibling.firstElementChild.clientHeight}px`; }
                    else { headerOpenSub.lastElementChild.style.height = '0'; }

                    console.log(headerOpenSub.firstElementChild.nextElementSibling.firstElementChild.clientHeight);
                    console.log(headerOpenSub.firstElementChild.nextElementSibling.firstElementChild);
                };

            });

        },

        start() {
            this.handleOverlay();
            this.handleClick();
        }
    };
})();

app.start();
