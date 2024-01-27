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
    photoURLs.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; // Open links in a new tab
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Photo';
        img.onload = () => updateProgressBar(); // Update progress bar on image load
        link.appendChild(img);
        gallery.appendChild(link);
    });
}

// Function to update progress bar as images load
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const loadedImages = gallery.querySelectorAll('img').length;
    const totalImages = photoURLs.length;
    const percentLoaded = (loadedImages / totalImages) * 100;
    progressBar.style.width = percentLoaded + '%';
}

// Call the function to populate the gallery
populateGallery();
