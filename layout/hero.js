const heros = [
    {
        titre: "Ismail Helali Auto-Entrepreneur et Ingénieur en Industries et Supply Chain | Rabat-Maroc.",
        description: "Je reste a votre disposition pour plus d'informations ."
    }
];

// Fonction pour afficher les services
function afficherhero() {
    const container = document.getElementById('hero');
    heros.forEach(hero => {
        const serviceElement = document.createElement('div');
        serviceElement.innerHTML = `
            <h2>${hero.titre}</h2>
            <br>
            <div class="inline">
            <a href="#contact">Prendre Contact</a>
            <h3>${hero.description}</h3>
            </div>
        `;
        container.appendChild(serviceElement);
    });
}

// Appel de la fonction pour afficher les services
afficherhero();
