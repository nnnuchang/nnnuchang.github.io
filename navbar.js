document.querySelectorAll(".navbar-toggle").forEach((button) => {
    const navbar = button.closest(".navbar");

    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isExpanded));
        navbar.classList.toggle("is-open", !isExpanded);
    });
});