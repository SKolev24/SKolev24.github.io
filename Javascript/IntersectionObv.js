document.addEventListener("DOMContentLoaded", () => {
    const textcontainers = document.querySelectorAll(".TextContainer");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('visible', entry.isIntersecting)
            })
        })

    textcontainers.forEach(container => observer.observe(container));
});
