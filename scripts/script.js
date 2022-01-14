// Create a drop down menu when hamburger menu is clicked

// 1. Create a variable for the hamburger menu
// 2. Display none main menu and show hamburger menu
// 3. Add an event listener, specifically listening for the hamburger menu when clicked
// 4. When clicked, show the navBar
// 5. Add transition from hamburger menu to X icon
// 6. When X is clicked, hide navBar
// <i class="fas fa-times"></i>

const hamMenu = document.querySelector(".fa-bars");

const navMenu = document.querySelector("#mainNav");

hamMenu.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

AOS.init();