// Get all the slide containers
const slideContainers = document.querySelectorAll('.slider-container');

slideContainers.forEach((container) => {
  const slider = container.querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  const prevButton = slider.querySelector('.prev');
  const nextButton = slider.querySelector('.next');
  let slideIndex = 0;
  let intervalId = null;

  // Initialize the slideshow for this container
  initializeSlider();

  function initializeSlider() {
    if (slides.length > 0) {
      slides[slideIndex].classList.add('displaySlide');
      intervalId = setInterval(nextSlide, 9000);
    }
  }

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
  }

  function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 9000);
  }

  function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 9000);
  }

  // Add event listeners for prev/next buttons
  if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
  }

  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
  }
});