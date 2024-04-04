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
            <img class="profile" id="${service.id}" src="${service.link}" alt="Podcast Ismail helali titre ${service.id}">
            <div class="quote">${service.id}</div>
        </div>
        `;
        container.appendChild(serviceElement);

        const imageElement = serviceElement.querySelector('.profile');
        imageElement.addEventListener('click', () => {
            console.log("Clicked on profile:", service.id);
            console.log("Navigating to:", service.descriptionLink);
            window.location.href = service.descriptionLink;
        });
    });
}

afficherServices();
