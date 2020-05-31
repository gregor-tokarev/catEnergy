const links = document.querySelectorAll('.header__item');

links.forEach(link => {
    if (window.location.href.includes(link.dataset.page)) link.classList.add('header__item--active');
})
