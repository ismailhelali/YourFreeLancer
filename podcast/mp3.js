const mp3s = [
    {
        title: "the swing",
        link: "/podcast/mp3/first.mp3",
        description: "Nous prodiguons des conseils et accompagnons les entreprises tout au long de leur chaîne d'approvisionnement."
    },
    {
        title: "the swing2",
        link: "/podcast/second.mp3",
        description: "Nous avons élaboré une méthode visant à identifier et analyser les risques susceptibles de compromettre la qualité de vos services et d'engendrer des coûts supplémentaires à chaque étape de votre travail. Nous intervenons de manière proactive pour remédier à ces problématiques."
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
                <p>${mp3.description}</p>
            </div>
        `;
        container.appendChild(mp3Element);
    });
}

// Appel de la fonction pour afficher les services
affichermp3s();
