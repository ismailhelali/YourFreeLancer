let currentIndex = 0; // Index of the currently displayed image

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const photoURLs = [
        { url: "https://images.pexels.com/photos/20021841/pexels-photo-20021841/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "The Golden Sunset By Ismail Helali" },
        { url: "https://images.pexels.com/photos/20021809/pexels-photo-20021809/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Harhoura Sunset By Ismail Helali" },
        { url: "https://images.pexels.com/photos/20021956/pexels-photo-20021956/free-photo-of-the-golden-sunset-2-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "The One By Ismail Helali" },
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
                    <button onclick="navigate(-1)">Previous</button>
                    <button onclick="navigate(1)">Next</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lightboxContent);
}


function navigate(direction) {
    currentIndex += direction; // Update currentIndex based on direction
    
    // Check if currentIndex is out of bounds
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
