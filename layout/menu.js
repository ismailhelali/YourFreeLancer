document.addEventListener("DOMContentLoaded", function() {
    const menus = [
        {
            title: "Ismail Helali",
            home: "Accueil",
            linkhome: "/"
        },
        {
            title: "Services",
            link: "#",
            subMenus: [
                { title: "Accompagnement", link: "/YourFreeLancer/Diagnostic_accompagnement" },
                { title: "Marketing", link: "/YourFreeLancer/marketing" },
                { title: "Photography", link: "/YourFreeLancer/photography" }
            ]
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ];

    const container = document.getElementById('menu');
    menus.forEach(menu => {
        const menuElement = document.createElement('nav');
        menuElement.classList.add('navbar');
        let htmlContent = `<ul class="nav-links">`;
        if (menu.title === "Ismail Helali") {
            htmlContent += `<li><h1 class="logo"><a href="${menu.linkhome}">${menu.title}</a></h1></li>`;
        } else if (menu.subMenus) {
            htmlContent += `<li class="dropdown">
                                <a href="${menu.link}" class="dropbtn">${menu.title}</a>
                                <div class="dropdown-content">`;
            menu.subMenus.forEach(subMenu => {
                htmlContent += `<a href="${subMenu.link}">${subMenu.title}</a>`;
            });
            htmlContent += `</div></li>`;
        } else {
            htmlContent += `<li><a href="${menu.link}">${menu.title}</a></li>`;
        }
        htmlContent += `</ul>`;
        menuElement.innerHTML = htmlContent;
        container.appendChild(menuElement);
    });
});
