const scriptURL = "https://script.google.com/macros/s/AKfycbwJsXJverqP6QPgetzD53rVW9DPunt2XdTIrJv7_6n7AZXKOm3PA0lCmxWsFWjJ84qPng/exec";

const form = document.forms["contact-form"];
const submitButton = document.getElementById("submit");
const statusElement = document.getElementById("form-status");

function updateStatus(message, state) {
    if (!statusElement) {
        return;
    }

    statusElement.textContent = message;
    statusElement.classList.remove("is-error", "is-success");

    if (state) {
        statusElement.classList.add(state);
    }
}

if (form) {
    form.addEventListener("submit", async event => {
        event.preventDefault();

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Envoi en cours...";
        }

        updateStatus("Envoi du message...", "");

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            form.reset();
            updateStatus("Merci, votre message a bien ete envoye.", "is-success");
        } catch (error) {
            updateStatus("Une erreur est survenue. Merci de reessayer dans un instant.", "is-error");
            console.error("Error!", error.message);
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Envoyer la demande";
            }
        }
    });
}
