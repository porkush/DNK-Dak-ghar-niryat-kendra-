// const header = document.querySelector('.Header');
// const nav = document.querySelector('.Navbar')
// const topOfNav = header.offsetTop;

// function fixNav(){
//     if (window.scrollY >= topOfNav){
//         nav.style.paddingTop = header.offsetHeight + 2 + 'px';
//     }
//     else{
//         nav.style.paddingTop = 0;
//     }
// }
// // for fixing the navbar at top
// window.addEventListener('scroll',fixNav);

// // Get the slider images
// var sliderImages = document.querySelectorAll('.slider-image');

// // Set the current slide index
// var currentSlideIndex = 0;

// // Show the current slide
// function showCurrentSlide() {
//   for (var i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].classList.remove('active');
//   }

//   sliderImages[currentSlideIndex].classList.add('active');
// }

// // Next slide
// function nextSlide() {
//   currentSlideIndex++;

//   if (currentSlideIndex >= sliderImages.length) {
//     currentSlideIndex = 0;
//   }

//   showCurrentSlide();
// }

// // Previous slide
// function previousSlide() {
//   currentSlideIndex--;

//   if (currentSlideIndex < 0) {
//     currentSlideIndex = sliderImages.length - 1;
//   }

//   showCurrentSlide();
// }

// // Show the first slide on page load
// showCurrentSlide();

// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);