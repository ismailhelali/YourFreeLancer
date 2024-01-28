let currentIndex = 0; // Index of the currently displayed image

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const photoURLs = [
        { url: "https://example.com/photo1.jpg", alt: "Photo 1" },
        { url: "https://example.com/photo2.jpg", alt: "Photo 2" },
        { url: "https://example.com/photo3.jpg", alt: "Photo 3" },
        // Add more photo URLs and alt text as needed
    ];

    function populateGallery() {
        photoURLs.forEach((photo, index) => {
            const link = document.createElement("a");
            link.href = photo.url;
            link.classList.add("gallery-item"); // Add class for lightbox functionality
            link.dataset.index = index; // Store index in dataset for navigation
            const img = document.createElement("img");
            img.src = photo.url;
            img.alt = photo.alt; // Set alt text
            img.onload = updateProgressBar; // Update progress bar on image load
            link.appendChild(img);
            gallery.appendChild(link);
        });
    }

    function openLightbox(event) {
        event.preventDefault(); // Prevent default link behavior
        const clickedImage = event.target.closest(".gallery-item");
        if (clickedImage) {
            currentIndex = parseInt(clickedImage.dataset.index); // Update currentIndex
            showLightbox(currentIndex);
        }
    }

    function showLightbox(index) {
        const lightboxContent = `
            <div class="lightbox-overlay" onclick="closeLightbox()">
                <div class="lightbox-content">
                    <img src="${photoURLs[index].url}" alt="${photoURLs[index].alt}">
                    <div class="navigation">
                        <button id="prevButton" onclick="navigate(-1)">Previous</button>
                        <button id="nextButton" onclick="navigate(1)">Next</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", lightboxContent);
    }

    function navigate(direction) {
        currentIndex += direction; // Update currentIndex based on direction
        if (currentIndex < 0) {
            currentIndex = photoURLs.length - 1; // Loop back to the last image
        } else if (currentIndex >= photoURLs.length) {
            currentIndex = 0; // Loop back to the first image
        }
        const lightbox = document.querySelector(".lightbox-overlay");
        if (lightbox) {
            lightbox.querySelector("img").src = photoURLs[currentIndex].url;
            lightbox.querySelector("img").alt = photoURLs[currentIndex].alt;
        }
    }

    function updateProgressBar() {
        const progressBar = document.getElementById("progress-bar");
        const loadedImages = gallery.querySelectorAll("img").length;
        const totalImages = photoURLs.length;
        const percentLoaded = (loadedImages / totalImages) * 100;
        progressBar.style.width = percentLoaded + "%";
    }

    populateGallery();
    gallery.addEventListener("click", openLightbox);
});

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox-overlay");
    if (lightbox) {
        lightbox.remove();
    }
}
