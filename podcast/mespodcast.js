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
    if (!container) {
        console.error("Container element not found.");
        return;
    }

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
        if (!imageElement) {
            console.error("Image element not found.");
            return;
        }

        imageElement.addEventListener('click', () => {
            console.log("Clicked on image:", service.id);
            console.log("Navigating to:", service.descriptionLink);
            window.location.href = service.descriptionLink;
        });
    });
}

afficherServices();
