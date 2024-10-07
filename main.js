// Menu bars toggle functionality
let menu = document.querySelector("#menu-bars");
let navBar = document.querySelector(".navbar");

// menu.onclick = function() {
//     menu.classList.toggle('fa-times');  // Toggle 'fa-times' class for the menu icon
//     navBar.classList.toggle('active');  // Toggle 'active' class for the navbar
// };
document.querySelector("#menu-bars").onclick = function () {
  document.querySelector("#menu-bars").classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active");
};
// Search form toggle functionality
document.querySelector("#search-icon").onclick = function () {
  document.querySelector("#search-form").classList.toggle("active"); // Toggle 'active' for the search form
};

// Close search form functionality
document.querySelector("#close").onclick = function () {
  document.querySelector("#search-form").classList.remove("active"); // Remove 'active' from search form
};

// Remove active classes when scrolling
window.onscroll = () => {
  menu.classList.remove("fa-times"); // Remove 'fa-times' class from the menu icon
  navBar.classList.remove("active"); // Remove 'active' class from the navbar
};
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: false,
});

// Add event listeners to control the dropdown if needed
document.querySelectorAll(".dropdown").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.querySelector(".dropdown-content").style.display = "block";
  });
  item.addEventListener("mouseout", () => {
    item.querySelector(".dropdown-content").style.display = "none";
  });
});
