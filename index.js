let popup = document.getElementById("popup");
let container = document.getElementById("container")
let yesButton = document.getElementById("yesButton");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");

function closePopup() {
    popup.classList.add("inv");
    container.classList.add("inv");

    section2.classList.remove("inv");
    section3.classList.remove("inv");
    section4.classList.remove("inv");

}


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
