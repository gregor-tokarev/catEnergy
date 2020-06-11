import anime from 'animejs';
import scrollpoint from '~/js/scrollpoint';

const point = document.querySelector('.live-example');
let triggered = false;

const animation = anime({
    targets: '.result__number',
    round: 1,
    delay: 500,
    autoplay: false,
    duration: 3000,
    innerHTML: element => [0, element.dataset.value]
});
scrollpoint(point, () => {
    if (!triggered) {
        triggered = true;
        animation.play();
    }
});
