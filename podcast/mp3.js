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

function affichermp3s(id) {
    const container = document.getElementById('services-container');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    mp3s.forEach(mp3 => {
        if (mp3.id === id) {
            const mp3Element = document.createElement('div');
            mp3Element.classList.add('mp3');

            mp3Element.innerHTML = `
                <div class="service-card">
                    <h2>${mp3.title}</h2>
                    <audio controls class="custom-audio">
                        <source src="${mp3.link}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            `;
            container.appendChild(mp3Element);
        }
    });
}

// Get the ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Call the function to display the MP3 element with the clicked ID
affichermp3s(id);
