const menus = [
    {
        title: "Ismail Helali",
        home: "Accueil",
        linkhome: "/"
    },
    {
        title: "Lezajal Podcast",
        link: "/podcast",
    },
    {
        title: "Services",
        link: "#",
        subMenus: [
            { title: "Accompagnement", link: "/Diagnostic_accompagnement" },
            { title: "Marketing", link: "/marketing" },
            { title: "Photography", link: "/photography" }
        ]
    },
    {
        title: "Contact",
        link: "#contact"
    }
];


// Function to create the navbar HTML
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');

    menus.forEach(menu => {
        const menuItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = menu.title;
        link.setAttribute('href', menu.link || '#');

        if (menu.subMenus) {
            menuItem.classList.add('dropdown');
            const dropdownContent = document.createElement('ul');
            dropdownContent.classList.add('dropdown-content');
            menu.subMenus.forEach(subMenu => {
                const subMenuItem = document.createElement('li');
                const subMenuLink = document.createElement('a');
                subMenuLink.textContent = subMenu.title;
                subMenuLink.setAttribute('href', subMenu.link);
                subMenuItem.appendChild(subMenuLink);
                dropdownContent.appendChild(subMenuItem);
            });
            menuItem.appendChild(link);
            menuItem.appendChild(dropdownContent);
        } else {
            menuItem.appendChild(link);
        }
        navLinks.appendChild(menuItem);
    });

    navbar.appendChild(navLinks);
    document.body.appendChild(navbar);
}

// Call the function to create the navbar
createNavbar();

