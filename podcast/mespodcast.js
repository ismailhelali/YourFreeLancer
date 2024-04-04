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
                <img src="${service.link}" alt="Podcast Ismail helali titre La vie">
            </div>
            <div class="quote">${service.id}</div>
        </div>
        `;
        container.appendChild(serviceElement);

        // Adding click event listener to each profile
        const profileElement = serviceElement.querySelector('.profile');
        profileElement.addEventListener('click', () => {
            // Navigate to description link when profile is clicked
            window.location.href = service.descriptionLink;
        });
    });
}

afficherServices();
