const track = document.querySelector('.slider-track');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const cards = document.querySelectorAll('.product-card');

let currentIndex = 0;

function getVisibleCards() {

    if (window.innerWidth <= 600) {
        return 1;
    }

    if (window.innerWidth <= 992) {
        return 2;
    }

    return 4;
}

function updateSlider() {

    const cardWidth = cards[0].offsetWidth + 20;

    track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {

    const visibleCards = getVisibleCards();

    if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
    }

    updateSlider();
});

prevBtn.addEventListener('click', () => {

    if (currentIndex > 0) {
        currentIndex--;
    }

    updateSlider();
});

window.addEventListener('resize', updateSlider);
