const mp3s = [
    {
        title: "the swing",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt" // Add description link
    },
    {
        title: "the swing2",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt" // Add description link
    }
];

// Function to fetch description content asynchronously
async function getDescriptionContent(descriptionLink) {
    try {
        const response = await fetch(descriptionLink);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error(`Error fetching description: ${error.message}`);
        return "Description not available";
    }
}

// Fonction pour afficher les mp3
async function affichermp3s() {
    const container = document.getElementById('services-container');
    for (const mp3 of mp3s) {
        const mp3Element = document.createElement('div');
        mp3Element.classList.add('mp3');

        // Fetch description content asynchronously
        const descriptionContent = await getDescriptionContent(mp3.descriptionLink);

        mp3Element.innerHTML = `
            <div class="service-card">
                <h2>${mp3.title}</h2>
                <audio controls class="custom-audio">
                <source src="${mp3.link}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <p>${descriptionContent}</p>
            </div>
        `;
        container.appendChild(mp3Element);
    }
}

// Appel de la fonction pour afficher les services
affichermp3s();
