// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");

    // Fade in the gallery after the DOM is loaded
    gallery.style.opacity = 1;

    // Select all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Loop through each gallery item to set the background images
    galleryItems.forEach(item => {
        // Create a div for the background image
        const bgImage = document.createElement("div");
        bgImage.classList.add("bg-image");
        // Set the background image from the data attribute
        bgImage.style.backgroundImage = `url(${item.getAttribute('data-bg-image')})`;

        // Create a div for the gradient overlay
        const gradientOverlay = document.createElement("div");
        gradientOverlay.classList.add("gradient-overlay");

        // Insert the background image and gradient overlay as the first children of the gallery item
        item.insertBefore(bgImage, item.firstChild);
        item.insertBefore(gradientOverlay, item.firstChild);
    });
});
