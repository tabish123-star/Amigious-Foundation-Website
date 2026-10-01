// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Hero Image Slider
// ===============================

const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// Show Current Slide

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

// Next Slide

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// Previous Slide

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

// Right Button

if (nextBtn) {

    nextBtn.addEventListener("click", nextSlide);

}

// Left Button

if (prevBtn) {

    prevBtn.addEventListener("click", prevSlide);

}

// Auto Slide Every 4 Seconds

setInterval(() => {

    nextSlide();

}, 4000);
