const infos = [
    {
        cnt: "Prendre Contact",
        name: "Nom et Prenom",
        number: "votre numero.",
        email: "votre Email",
        msg: "Describe your problem"
    }
];

// Fonction pour afficher les informations de contact
function afficherinfo() {
    const container = document.getElementById('contactform');
    infos.forEach(info => {
        const infoElement = document.createElement('div');
        infoElement.classList.add('container');
        infoElement.innerHTML = `
            <h4>${info.cnt}</h4>
            <input type="text" name="your-name" placeholder="${info.name}">
            <input type="text" name="your-number" placeholder="${info.number}">
            <input type="email" name="your-email" placeholder="${info.email}">
            <textarea name="message" rows="7" placeholder="${info.msg}"></textarea>
            <input type="submit" value="Submit" id="submit"></input>
        `;
        container.appendChild(infoElement);
    });
}

// Appel de la fonction pour afficher les informations de contact
afficherinfo();
