const range = document.querySelector('.live-example__control');
const beforeImg = document.querySelector('.live-example__img-1');
const afterImg = document.querySelector('.live-example__img-2');

range.addEventListener('input', event => {
    if (document.documentElement.clientWidth < 767) {
        range.style.backgroundImage = `linear-gradient(90deg, #68b738 0%, #68b738 ${ range.value }%, #fff ${ range.value }%)`;
    }
    afterImg.style.width = `${ range.value }%`;
    beforeImg.style.width = `${ 100 - range.value }%`;
});
afterImg.style.width = `${ range.value }%`;
beforeImg.style.width = `${ 100 - range.value }%`;
