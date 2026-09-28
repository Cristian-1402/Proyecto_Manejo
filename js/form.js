(() => {
    "use strict";

    function initializeNewsletter() {
        const form = document.getElementById("newsletterForm");
        const fields = document.getElementById("newsletterFields");
        const email = document.getElementById("newsletterEmail");

        if (!form || !fields || !email) {
            return;
        }

        const message = document.createElement("p");
        message.id = "newsletterMessage";
        message.className = "sonia-newsletter__message small mt-3 mb-0";
        message.setAttribute("role", "status");
        message.setAttribute("aria-live", "polite");
        message.setAttribute("aria-atomic", "true");
        fields.insertAdjacentElement("afterend", message);

        const description = email.getAttribute("aria-describedby") || "";
        email.setAttribute("aria-describedby", `${description} ${message.id}`.trim());

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
                message.textContent = `Revisa el correo: ${email.validationMessage}`;
                email.focus();
                return;
            }

            message.textContent = "Prueba completada: el formato del correo es correcto. " +
                "No se enviaron ni almacenaron datos y no se genero una suscripcion.";
        });

        email.addEventListener("input", () => {
            email.setCustomValidity("");
            email.removeAttribute("aria-invalid");
            message.textContent = "";
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
