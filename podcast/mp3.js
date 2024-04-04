const mp3s = [
    {
        id: "vie",
        title: "La vie",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt"
    },
    {
        id: "amour",
        title: "the swing2",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt"
    }
];

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

async function affichermp3s() {
    const container = document.getElementById('services-container');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    // Get the ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    mp3s.forEach(mp3 => {
        if (mp3.id === id) {
            const mp3Element = document.createElement('div');
            mp3Element.classList.add('mp3');

            (async () => {
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
            })();

            container.appendChild(mp3Element);
        }
    });
}

affichermp3s();
