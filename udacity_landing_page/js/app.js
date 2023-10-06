// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list"); // Updated selector to use getElementById

// Helper function to set a section as active
function setActive(section) {
    section.classList.add("your-active-class");
}

// Helper function to remove active class from a section
function removeActive(section) {
    section.classList.remove("your-active-class");
}

// Helper function to make sections active based on viewport
function makeActive() {
    sections.forEach((section) => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            setActive(section);
        } else {
            removeActive(section);
        }
    });
}

// Helper function to scroll to a section smoothly
function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
}

// Build the navigation menu dynamically
function buildNav() {
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionName = section.getAttribute("data-nav");
        const navItem = document.createElement("li");
        navItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
        
        // Scroll to section on link click
        navItem.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").slice(1);
            scrollToSection(targetId);
        });

        navList.appendChild(navItem);
    });
}

document.addEventListener("DOMContentLoaded", buildNav); // Build the menu when the page loads

document.addEventListener("scroll", function () {
    makeActive(); // Set sections as active on scroll
});

// Highlight the initial active section on page load
makeActive();