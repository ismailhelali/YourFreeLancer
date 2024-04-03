const podcasts = [
    {
        id: "vie",
        link: "/podcast/img/lavie.png",
        descriptionLink: "/podcast/blog.html" // Add description link
    },
    {
        id: "vie",
        link: "/podcast/img/lavie.png",
        descriptionLink: "/podcast/blog.html" // Add description link
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

// Fonction pour afficher les podcast
async function afficherpodcasts() {
    const container = document.getElementById('podcasts-containe');
    for (const podcast of podcasts) {
        const podcastElement = document.createElement('div');
        podcastElement.classList.add('podcast');

        // Fetch description content asynchronously
        const descriptionContent = await getDescriptionContent(podcast.descriptionLink);

        podcastElement.innerHTML = `
        <div class="profile-container">
        <div class="profile">
            <img src="${podcast.link}" alt="Podcast Ismail helali titre La vie">
        </div>
        <a href="${podcast.descriptionLink}">
        <div class="quote">La vie sous forme de Poesie - Ismail Helali</div></a>
    </div>
        `;
        container.appendChild(podcastElement);
    }
}

// Appel de la fonction pour afficher les services
afficherpodcasts();



