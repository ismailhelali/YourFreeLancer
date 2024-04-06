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
                <audio src="${mp3.link}" controls></audio>
                <div class="controls">
                  <button class="play-pause"></button>
                  <input type="range" class="seek-bar" value="0">
                  <button class="mute"></button>
                  <input type="range" class="volume-bar" min="0" max="1" step="0.1" value="1">
                  <span class="current-time">0:00</span>
                  <span class="total-time">0:00</span>
                </div>
                <p class="description">By Ismail Helali</p>
              </div>
              
                `;
            })();

            container.appendChild(mp3Element);
        }
    });
}

affichermp3s();





