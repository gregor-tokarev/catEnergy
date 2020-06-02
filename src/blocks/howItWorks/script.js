import anime from 'animejs';
import scrollpoint from '~/js/scrollpoint';

const animBlok = document.querySelector('.how-it-works');

if (!(document.documentElement.clientWidth < 767)) {
    scrollpoint(animBlok, () => {
        anime({
            targets: '.how-it-works__item',
            translateY: -100,
            duration: 800,
            opacity: 1,
            delay: anime.stagger(500, { from: 'center' })
        });
    });
} else {
    scrollpoint(animBlok, () => {
        anime({
            targets: '.how-it-works__item',
            translateY: -100,
            duration: 800,
            opacity: 1,
            delay: anime.stagger(500)
        });
    });
}
