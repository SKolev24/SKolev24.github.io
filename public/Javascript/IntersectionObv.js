document.addEventListener("DOMContentLoaded", () => {
    const textcontainer = document.querySelector(".TextContainer");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('visible', entry.isIntersecting)
            })
        })

    observer.observe(textcontainer);
});
