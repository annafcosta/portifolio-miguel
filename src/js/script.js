const nav = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

nav.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to delete social_media in future sections
document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home");
    const socialMedia = document.querySelector(".social_media");

    const homePosition = homeSection.getBoundingClientRect();

    if (
        homePosition.bottom >= 0 && homePosition.top <= window.innerHeight
    ) {
        socialMedia.classList.remove("hidden");
    } else {
        socialMedia.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");

    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
    });
});

// Function to display the popup
function showPopup(targetId) {
    const popup = document.getElementById(targetId);
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        popup.classList.remove("hidden");
        overlay.style.display = "block";
    }
}

function hidePopup(targetId) {
    const popup = document.getElementById(targetId);
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        popup.classList.add("hidden");
        overlay.style.display = "none";
    }
}

const openButtons = document.querySelectorAll(".read-more");
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        showPopup(targetId);
    });
});

const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        hidePopup(targetId);
    });
});

document.getElementById('overlay').addEventListener("click", () => {
    const popup = document.querySelector(".popup:not(.hidden)");
    if (popup) {
        hidePopup(popup.id);
    }
});

// Function to make the div flip
function toggleFlip() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flip');
}