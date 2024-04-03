const services = [
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

// Fonction pour afficher les podcast
function afficherServices() {
    const container = document.getElementById('podcasts-container');
    services.forEach(service => {
       
        serviceElement.innerHTML = `
        <div class="profile-container">
        <div class="profile">
            <img src="${service.link}" alt="Podcast Ismail helali titre La vie">
        </div>
        <a href="${service.descriptionLink}">
        <div class="quote">La vie sous forme de Poesie - Ismail Helali</div></a>
    </div>
        `;
        container.appendChild(serviceElement);
    });
}

// Appel de la fonction pour afficher les services
afficherServices();
