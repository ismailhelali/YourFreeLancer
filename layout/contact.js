const contactFields = [
    {
        label: "Nom et prénom",
        name: "your-name",
        type: "text",
        placeholder: "Votre nom complet"
    },
    {
        label: "Numéro",
        name: "your-number",
        type: "text",
        placeholder: "Votre numéro de téléphone"
    },
    {
        label: "Email",
        name: "your-email",
        type: "email",
        placeholder: "Votre adresse email"
    },
    {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Décrivez votre besoin ou votre projet"
    }
];

function buildContactForm() {
    const form = document.getElementById("contactform");
    if (!form || form.children.length > 0) {
        return;
    }

    const title = document.createElement("div");
    title.className = "contact-intro";
    title.innerHTML = `
        <h3>Prendre contact</h3>
        <p class="form-status" id="form-status" aria-live="polite"></p>
    `;

    form.appendChild(title);

    contactFields.forEach(field => {
        const wrapper = document.createElement("div");
        wrapper.className = "contact-field";

        const label = document.createElement("label");
        label.setAttribute("for", field.name);
        label.textContent = field.label;

        const input = field.type === "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");

        input.name = field.name;
        input.id = field.name;
        input.placeholder = field.placeholder;
        input.required = true;

        if (field.type !== "textarea") {
            input.type = field.type;
        } else {
            input.rows = 7;
        }

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        form.appendChild(wrapper);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.id = "submit";
    submit.className = "cta-button";
    submit.textContent = "Envoyer la demande";

    form.appendChild(submit);
}

buildContactForm();
