// Hamburger Menu

const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector("#mainNav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("showMenu");
});

// scroll animations
AOS.init();
