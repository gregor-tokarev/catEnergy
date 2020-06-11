import anime from 'animejs';
import scrollpoint from '~/js/scrollpoint';

const benefits = document.querySelector('.benefits');
scrollpoint(benefits, () => {
    anime({
        targets: '.card',
        translateX: 200,
        opacity: 1,
        delay: anime.stagger(200)
    })
});
