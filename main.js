const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slides a');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let index = 0;
let interval;

// Move slider
function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    // update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Next
function slideNext() {
    index = (index + 1) % slideItems.length;
    updateSlider();
}

// Prev
function slidePrev() {
    index = (index - 1 + slideItems.length) % slideItems.length;
    updateSlider();
}

// Buttons
next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

// Dots click
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

// Auto slide
function startAutoSlide() {
    interval = setInterval(slideNext, 6000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

// Pause on hover (desktop)
const container = document.querySelector('.slider-continer');
container.addEventListener('mouseenter', stopAutoSlide);
container.addEventListener('mouseleave', startAutoSlide);

// Start
startAutoSlide();

// Accordion logic
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === 'block';

        // Close all
        document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');

        // Open current if it wasn't open
        if (!isOpen) {
            body.style.display = 'block';
        }
    });
});


// burger
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("header nav");

    burger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});



//doc cards 
function toggleInfo(button) {
    const extraInfo = button.nextElementSibling;
    if (extraInfo.style.display === "block") {
        extraInfo.style.display = "none";
        button.textContent = "Mostrar más";
    } else {
        extraInfo.style.display = "block";
        button.textContent = "Mostrar menos";
    }
}


