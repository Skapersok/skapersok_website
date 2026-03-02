const yearNode = document.getElementById("year");

if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
    revealElements.forEach((node) => node.classList.add("is-visible"));
} else {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    revealElements.forEach((node) => observer.observe(node));
}

const systemMediaItems = document.querySelectorAll(".system-media");

systemMediaItems.forEach((media) => {
    const img = media.querySelector("img");

    if (!img) {
        return;
    }

    if (img.complete && img.naturalWidth > 0) {
        media.classList.add("has-image");
        return;
    }

    img.addEventListener("load", () => {
        media.classList.add("has-image");
    });

    img.addEventListener("error", () => {
        media.classList.remove("has-image");
    });
});
