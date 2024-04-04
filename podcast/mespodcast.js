const services = [
    {
        id: "vie",
        link: "/podcast/img/lavie.png",
        descriptionLink: "/podcast/blog.html"
    },
    {
        id: "amour",
        link: "/podcast/img/amour.png",
        descriptionLink: "/podcast/blog.html"
    }
];

function afficherServices() {
    const container = document.getElementById('podcasts-container');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.innerHTML = `
        <div class="profile-container">
            <div class="profile" id="${service.id}">
                <img src="${service.link}" alt="Podcast Ismail helali titre ${service.id}">
            </div>
            <div class="quote">${service.id}</div>
        </div>
        `;
        container.appendChild(serviceElement);

        const imageElement = serviceElement.querySelector('.profile img');
        imageElement.addEventListener('click', () => {
            window.location.href = service.descriptionLink;
        });
    });
}

afficherServices();
