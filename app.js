
var logo = document.getElementsByClassName("logo")[0];
// logo.style.display = "none";
console.log(logo);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                logo.style.display = "block";
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                logo.style.display = "none";
            }
        });
        burger.classList.toggle('toggle');
    });



}

navSlide();