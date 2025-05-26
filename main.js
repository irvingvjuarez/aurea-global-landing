const ctaButtons = document.querySelectorAll(".cta");

ctaButtons.forEach(button => {
    button.addEventListener("click", () => {
        const email = "contacto@aureaglobal.com"; // Replace with your actual email
        const subject = "Interesado en servicios de exportación";
        const body = "Hola, estoy interesado en conocer más sobre sus servicios de exportación.";
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});
