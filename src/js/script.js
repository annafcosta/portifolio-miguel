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
