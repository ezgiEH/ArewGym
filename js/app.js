let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = Array.from(document.getElementsByClassName("slide"));
    const dots = Array.from(document.getElementsByClassName("dot"));

    const slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile__menu__section");
    const mobileMenuIcon = document.querySelector(".hamburger__icon");

    mobileMenu.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
}
