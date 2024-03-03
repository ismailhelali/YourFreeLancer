// Function to create the navbar HTML
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');

    menus.forEach(menu => {
        const menuItem = document.createElement('li');
        if (menu.subMenus) {
            menuItem.classList.add('dropdown');
            const dropdownToggle = document.createElement('a');
            dropdownToggle.setAttribute('href', menu.link || '#');
            dropdownToggle.textContent = menu.title;
            menuItem.appendChild(dropdownToggle);

            const dropdownContent = document.createElement('ul');
            dropdownContent.classList.add('dropdown-content');
            menu.subMenus.forEach(subMenu => {
                const subMenuItem = document.createElement('li');
                const subMenuLink = document.createElement('a');
                subMenuLink.setAttribute('href', subMenu.link);
                subMenuLink.textContent = subMenu.title;
                subMenuItem.appendChild(subMenuLink);
                dropdownContent.appendChild(subMenuItem);
            });
            menuItem.appendChild(dropdownContent);
        } else {
            const link = document.createElement('a');
            link.setAttribute('href', menu.link || '#');
            link.textContent = menu.title;
            menuItem.appendChild(link);
        }
        navLinks.appendChild(menuItem);
    });

    navbar.appendChild(navLinks);
    document.body.appendChild(navbar);
}

// Call the function to create the navbar
createNavbar();
