const services = [
    {
        titre: "Conseil et Accompagnement",
        description: "Nous prodiguons des conseils et accompagnons les entreprises tout au long de leur chaîne d'approvisionnement."
    },
    {
        titre: "Évaluation des Risques",
        description: "Nous avons élaboré une méthode visant à identifier et analyser les risques susceptibles de compromettre la qualité de vos services et d'engendrer des coûts supplémentaires à chaque étape de votre travail. Nous intervenons de manière proactive pour remédier à ces problématiques."
    },
    {
        titre: "Amélioration Continue",
        description: "Enrichissez votre équipe grâce à nos consultants experts en amélioration continue, afin de permettre à votre entreprise de gagner en compétitivité et de se distinguer par la qualité de ses services par rapport à ses concurrents."
    },
    {
        titre: "Diagnostic de votre entreprise",
        description: "Poser les bonnes questions constitue la moitié du chemin vers la prospérité. Nous avons mis en place des méthodes de classe mondiale pour identifier les véritables problématiques de votre entreprise, que ce soit sur le plan financier, logistique, ou en termes de ressources humaines et matérielles. Cela vous permettra de mettre en lumière les possibilités de développement et d'optimisation."
    },
    {
        titre: "Formations spécialisées",
        description: "En plus de notre accompagnement personnalisé, nous proposons des formations spécialisées dans les domaines de la maintenance, la gestion des achats et approvisionnements, l'optimisation des tournées de livraison, l'optimisation de la production, le marketing digital, la gestion du flux financier, la gestion des conflits, la gestion des crises, et la négociation. Ces formations vous permettront de renforcer les compétences de votre équipe et d'atteindre vos objectifs avec succès."
    }
];

// Fonction pour afficher les services
function afficherServices() {
    const container = document.getElementById('services-container');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `
        <div class="service-card">
            <h3>${service.titre}</h3>
            <p>${service.description}</p>
            </div>
        `;
        container.appendChild(serviceElement);
    });
}

// Appel de la fonction pour afficher les services
afficherServices();
              
