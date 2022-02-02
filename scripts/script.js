// Hamburger Menu

const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector("nav");

const about = document.querySelector("#aboutLink");
const skills = document.querySelector("#skillsLink");
const projects = document.querySelector("#projectsLink");
const contact = document.querySelector("#contactLink");

const menuToggle = () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("showMenu");
};

menuBtn.addEventListener("click", menuToggle);
about.addEventListener("click", menuToggle);
skills.addEventListener("click", menuToggle);
projects.addEventListener("click", menuToggle);
contact.addEventListener("click", menuToggle);


// scroll animations
AOS.init();