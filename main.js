 // hamb
 let hamb = document.querySelector('.hamb');
 let navMenu = document.querySelector('.menu');

 hamb.addEventListener('click', mobileMenu);

 function mobileMenu() {
   hamb.classList.toggle('active');
   navMenu.classList.toggle('active');
 }



 let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let slidesToShow = 3; // Initialization with maximum number of slides

function getSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 425) {
        return 1;
    } else if (width <= 768) {
        return 2;
    } else {
        return 3;
    }
}

function getSlideWidth() {
    return 100 / slidesToShow;
}

function showSlide(index) {
    slidesToShow = getSlidesToShow();
    const slideWidth = getSlideWidth();
    
    if (index >= totalSlides - slidesToShow) {
        slides.style.transition = 'none';
        currentSlide = 0;
        slides.style.transform = `translateX(0)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            showSlide(currentSlide + 1);
        }, 0);
    } else if (index < 0) {
        slides.style.transition = 'none';
        currentSlide = totalSlides - slidesToShow;
        slides.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            showSlide(currentSlide - 1);
        }, 0);
    } else {
        currentSlide = index;
        slides.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatic slide switching every 3 seconds
// setInterval(() => {
//     moveSlide(1);
// }, 3000);

// Window resize listeners
window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    const slideWidth = getSlideWidth();
    showSlide(currentSlide);
});

// Show the first slide first
showSlide(currentSlide);
