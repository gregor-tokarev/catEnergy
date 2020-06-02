export default function(elem, cb, offset = 200) {
    const { top } = elem.getBoundingClientRect();
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY + document.documentElement.clientHeight - offset;
        if (scroll > top) {
            cb();
        }
    }, { passive: true });
}
