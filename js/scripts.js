const hamburgerElement = document.querySelector("#button");
const navElements = document.querySelector(".menuLinks");

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle("open");
    navElements.classList.toggle("open");
});