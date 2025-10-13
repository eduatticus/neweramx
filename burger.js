// burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.top-links');

    burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    });