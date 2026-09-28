(() => {
    "use strict";

    function initializeNewsletter() {
        const form = document.getElementById("newsletterForm");
        const fields = document.getElementById("newsletterFields");
        const email = document.getElementById("newsletterEmail");

        if (!form || !fields || !email) {
            return;
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            email.value = email.value.trim();
            email.setCustomValidity("");

            if (email.validity.valueMissing) {
                email.setCustomValidity("Escribe un correo ficticio para la prueba.");
            } else if (email.validity.typeMismatch) {
                email.setCustomValidity("Usa un formato como nombre@example.com.");
            }

            const isValid = email.checkValidity();
            email.setAttribute("aria-invalid", String(!isValid));

            if (!isValid) {
                email.reportValidity();
            }
        });

        email.addEventListener("input", () => {
            email.setCustomValidity("");
            email.removeAttribute("aria-invalid");
        });

        // Habilitar solo despues de instalar el bloqueo del envio real.
        form.noValidate = true;
        fields.disabled = false;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeNewsletter, { once: true });
    } else {
        initializeNewsletter();
    }
})();
