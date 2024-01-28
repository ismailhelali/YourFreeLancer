document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const photoURLs = [
    'https://images.pexels.com/photos/20021841/pexels-photo-20021841/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/20021809/pexels-photo-20021809/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/20021956/pexels-photo-20021956/free-photo-of-the-golden-sunset-2-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // Add more photo URLs as needed
        // Add more photo URLs as needed
    ];

    function populateGallery() {
        photoURLs.forEach((url, index) => {
            const link = document.createElement("a");
            link.href = url;
            link.classList.add("gallery-item"); // Add class for lightbox functionality
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Photo";
            img.onload = updateProgressBar; // Update progress bar on image load
            link.appendChild(img);

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            const overlayContent = document.createElement("div");
            overlayContent.classList.add("overlay-content");
            overlayContent.innerHTML = `Image ${index + 1}`; // Example overlay content
            overlay.appendChild(overlayContent);
            link.appendChild(overlay);

            gallery.appendChild(link);
        });
    }

    function openLightbox(event) {
        event.preventDefault(); // Prevent default link behavior
        const clickedImage = event.target.closest(".gallery-item");
        if (clickedImage) {
            const lightboxContent = `
                <div class="lightbox-overlay" onclick="closeLightbox()">
                    <div class="lightbox-content">
                        <img src="${clickedImage.href}" alt="Photo">
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML("beforeend", lightboxContent);
        }
    }

    function closeLightbox() {
        const lightbox = document.querySelector(".lightbox-overlay");
        if (lightbox) {
            lightbox.remove();
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
