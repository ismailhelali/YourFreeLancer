function menu() {
    const container = document.getElementById('menu');
    
    // Create navbar element
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    // Create ul element
    const ul = document.createElement('ul');
    ul.classList.add('nav-links');

    // Create li elements and append them to ul
    const menus = [
        {
            titre: "Ismail Helali",
            class: "logo",
            link: "/YourFreeLancer/"
        },
        {
            titre: "Accueil",
            class: "li",
            link: "/YourFreeLancer/"
        },
        {
            titre: "Services",
            class: "dropdown",
            link: [
                { text: "Accompagnement", url: "/YourFreeLancer/Diagnostic_accompagnement" },
                { text: "Marketing", url: "/YourFreeLancer/marketing" },
                { text: "Photography", url: "/YourFreeLancer/photography" },
                { text: "Articles", url: "/YourFreeLancer/blog" }
            ]
        },
        {
            titre: "Contact",
            class: "li",
            link: "#contact"
        }
    ];

    menus.forEach(menuItem => {
        const li = document.createElement('li');
        li.classList.add(menuItem.class);
        
        if (menuItem.titre) {
            const a = document.createElement('a');
            a.setAttribute('href', menuItem.link);
            a.textContent = menuItem.titre;
            li.appendChild(a);
        } else if (menuItem.class === "dropdown") {
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.classList.add('dropbtn');
            a.textContent = menuItem.titre;
            li.appendChild(a);

            const div = document.createElement('div');
            div.classList.add('dropdown-content');
            menuItem.link.forEach(item => {
                const a = document.createElement('a');
                a.setAttribute('href', item.url);
                a.textContent = item.text;
                div.appendChild(a);
            });
            li.appendChild(div);
        } else {
            li.innerHTML = menuItem.link;
        }

        ul.appendChild(li);
    });

    // Append ul to navbar
    navbar.appendChild(ul);

    // Append navbar to the menu div
    container.appendChild(navbar);
}

// Call the menu function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', menu);
