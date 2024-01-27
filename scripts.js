
// Add photo links dynamically to the portfolio section
const gallery = document.getElementById('gallery');

// Array of photo URLs
const photoURLs = [
    'https://images.pexels.com/photos/20021841/pexels-photo-20021841/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/20021809/pexels-photo-20021809/free-photo-of-sunsite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/20021956/pexels-photo-20021956/free-photo-of-the-golden-sunset-2-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // Add more photo URLs as needed
];

// Function to create anchor elements with image tags and append them to the gallery
function populateGallery() {
    photoURLs.forEach((url, index) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; // Open links in a new tab
        link.classList.add('gallery-item'); // Add class for lightbox functionality
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Photo';
        img.onload = () => updateProgressBar(); // Update progress bar on image load
        link.appendChild(img);
        
        // Add overlay and overlay content
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const overlayContent = document.createElement('div');
        overlayContent.classList.add('overlay-content');
        overlayContent.innerHTML = `Image ${index + 1}`; // Example overlay content
        overlay.appendChild(overlayContent);
        link.appendChild(overlay);

        gallery.appendChild(link);
    });
}

// Call the function to populate the gallery
populateGallery();

