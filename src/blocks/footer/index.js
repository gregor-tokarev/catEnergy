import scrollpoint from '~/js/scrollpoint';
import anime from 'animejs';

const footer = document.querySelector('.footer');

document.body.style.paddingBottom = getComputedStyle(footer).height;
window.addEventListener('resize', () => {
    document.body.style.paddingBottom = getComputedStyle(footer).height;
});

scrollpoint(footer, () => {
    anime()
})
