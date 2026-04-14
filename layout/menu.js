const menus = [
    {
        title: "Lezajal Podcast",
        link: "/podcast"
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

function createNavbar() {
    const shell = document.createElement("div");
    shell.className = "navbar-shell";

    const navbar = document.createElement("nav");
    navbar.className = "navbar";
    navbar.setAttribute("aria-label", "Navigation principale");

    const brandLink = document.createElement("a");
    brandLink.className = "brand-link";
    brandLink.href = "/";
    brandLink.innerHTML = `
        <img src="/pictures/ismailhelali-logo.png" alt="Logo Ismail Helali">
        <span>Ismail Helali</span>
    `;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "nav-links");
    toggle.textContent = "Menu";

    const navLinks = document.createElement("ul");
    navLinks.className = "nav-links";
    navLinks.id = "nav-links";

    menus.forEach(menu => {
        const menuItem = document.createElement("li");

        if (menu.subMenus) {
            menuItem.className = "dropdown";

            const trigger = document.createElement("button");
            trigger.type = "button";
            trigger.className = "dropdown-trigger";
            trigger.setAttribute("aria-expanded", "false");
            trigger.textContent = menu.title;

            const dropdownContent = document.createElement("ul");
            dropdownContent.className = "dropdown-content";

            menu.subMenus.forEach(subMenu => {
                const subMenuItem = document.createElement("li");
                const subMenuLink = document.createElement("a");
                subMenuLink.textContent = subMenu.title;
                subMenuLink.href = subMenu.link;
                subMenuItem.appendChild(subMenuLink);
                dropdownContent.appendChild(subMenuItem);
            });

            trigger.addEventListener("click", () => {
                const isOpen = menuItem.classList.toggle("open");
                trigger.setAttribute("aria-expanded", String(isOpen));
            });

            menuItem.appendChild(trigger);
            menuItem.appendChild(dropdownContent);
        } else {
            const link = document.createElement("a");
            link.textContent = menu.title;
            link.href = menu.link || "#";
            menuItem.appendChild(link);
        }

        navLinks.appendChild(menuItem);
    });

    toggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", event => {
        if (!navbar.contains(event.target)) {
            navbar.querySelectorAll(".dropdown.open").forEach(dropdown => {
                dropdown.classList.remove("open");
                const trigger = dropdown.querySelector(".dropdown-trigger");
                if (trigger) {
                    trigger.setAttribute("aria-expanded", "false");
                }
            });
        }
    });

    navbar.appendChild(brandLink);
    navbar.appendChild(toggle);
    navbar.appendChild(navLinks);
    shell.appendChild(navbar);

    const mountPoint = document.getElementById("menu") || document.getElementById("navbarContainer");
    if (mountPoint) {
        mountPoint.replaceWith(shell);
    } else {
        document.body.prepend(shell);
    }
}

createNavbar();
