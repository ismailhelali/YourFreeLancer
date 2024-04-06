const menus = [
 
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

// Add logo menu item
const logoMenuItem = {
    title: "Logo",
    link: "/",
    logo: "/pictures/ismailhelali-logo.png" // Path to your logo image
};

// Insert the logo menu item at the beginning of the menus array
menus.unshift(logoMenuItem);

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

        if (menu.logo) { // Check if it's a logo item
            const logo = document.createElement('img');
            logo.src = menu.logo;
            logo.alt = 'Logo';
            menuItem.appendChild(logo);
        } else {
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
        }

        navLinks.appendChild(menuItem);
    });

    navbar.appendChild(navLinks);
    document.body.appendChild(navbar);
}

// Call the function to create the navbar
createNavbar();
