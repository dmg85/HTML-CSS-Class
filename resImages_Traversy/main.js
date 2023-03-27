const slides = document.querySelectorAll('.slide');
const next = document.querySelectorAll('#next');
const prev = document.querySelectorAll('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.previousElementSibling) {
        // Add current to next next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length -1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});