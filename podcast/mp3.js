const mp3s = [
    {
        title: "the swing",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt" // Add description link
    },
    {
        title: "the swing2",
        link: "/podcast/second.mp3",
        descriptionLink: "/path/to/second_description.txt" // Add description link
    }
];

// Fonction pour afficher les mp3
function affichermp3s() {
    const container = document.getElementById('services-container');
    mp3s.forEach(mp3 => {
        const mp3Element = document.createElement('div');
        mp3Element.classList.add('mp3');
        mp3Element.innerHTML = `
            <div class="service-card">
                <h2>${mp3.title}</h2>
                <audio controls>
                    <source src="${mp3.link}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <p><a href="${mp3.descriptionLink}" target="_blank">Description</a></p> <!-- Render description as a link -->
            </div>
        `;
        container.appendChild(mp3Element);
    });
}

// Appel de la fonction pour afficher les services
affichermp3s();
