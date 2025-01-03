AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once - while scrolling down
});

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
    });

    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
}

buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
        manualNav(i);
        currentSlide = i;
    })
})




$(document).ready(function () {
    $('#story').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});