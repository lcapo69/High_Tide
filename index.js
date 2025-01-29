function checkAge() {
  let age = prompt("Please enter your age:");

  if (age >= 21) {
    alert("Welcome!");
  } else {
    alert("You must be 21 or older to access this content.");
  }
}

checkAge(); 

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
