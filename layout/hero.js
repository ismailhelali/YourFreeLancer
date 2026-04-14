const heros = [
    {
        titre: "Ismail Helali",
        description: "Entrepreneuriat, contenu et accompagnement autour de projets utiles et concrets."
    }
];

function afficherhero() {
    const container = document.getElementById("hero");
    if (!container || container.children.length > 0) {
        return;
    }

    heros.forEach(hero => {
        const heroElement = document.createElement("div");
        heroElement.className = "container hero-content";
        heroElement.innerHTML = `
            <p class="eyebrow">Presentation</p>
            <h2>${hero.titre}</h2>
            <p>${hero.description}</p>
            <div class="hero-actions">
                <a href="#contact" class="cta-button">Prendre contact</a>
            </div>
        `;
        container.appendChild(heroElement);
    });
}

afficherhero();
