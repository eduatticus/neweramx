// access the images
let slideImages = document.querySelectorAll('.slides img');
// access the prev and next buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// attach events
next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);


//code for the next button
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    slideImages[counter].classList.remove('active'); // Hide current

    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    resetSlides(); // Hide all
    slideImages[counter].classList.add('active'); // Show new
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';

    indicators();
}

function resetSlides() {
    slideImages.forEach(img => {
        img.classList.remove('active');
        img.style.animation = '';
    });
}
//code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

//auto  sliding
function autoSliding() {
    deleteInterval = setInterval(timer, 7000);
    function timer() {
        slideNext();
        indicators();
    }
}
autoSliding();

//stop auto sliding when mouse is over
const container = document.querySelector('.slider-continer');
container.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});

//Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

//Add and remove active class from the indicators
function indicators() {
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

//Add clink event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (imageId == counter) {
        return;
    }
    else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}


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


