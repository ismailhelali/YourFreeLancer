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
                <div class="quote">${service.id}</div>
            </div>
        </div>
        `;
        container.appendChild(serviceElement);

        const profileElement = serviceElement.querySelector('.profile');
        if (!profileElement) {
            console.error("Profile element not found.");
            return;
        }

        profileElement.addEventListener('click', () => {
            console.log("Clicked on profile:", service.id);
            console.log("Navigating to:", service.descriptionLink);
            window.location.href = service.descriptionLink + '?id=' + service.id;
        });
    });
}

afficherServices();
