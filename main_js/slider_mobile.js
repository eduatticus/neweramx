
  if (window.innerWidth <= 768) {
    const slides = document.querySelectorAll(".slides img");
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.left = "-100%";
        if (i === index) {
          slide.classList.add("active");
          slide.style.left = "0";
        }
      });
    }

    const slider = document.querySelector(".slides");

    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      if (endX < startX - 50) {
        // swipe left
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
      if (endX > startX + 50) {
        // swipe right
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
    }

    // Initialize
    showSlide(currentIndex);
  }

