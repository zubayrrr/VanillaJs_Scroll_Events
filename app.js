// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear;

// ********** close links ************
const navToggle = document.querySelectorAll(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".links-container");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");

  const containerHeight = linksContainer.getBoundingClientRect();
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // navigate to specific section
    const id = e.currentTarget.getAttribute("href").slice(1); // get id from the currentTarget's href attribute
    const element = document.getElementById(id);

    let position = element.offsetTop;
    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});
