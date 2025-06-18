document.addEventListener("DOMContentLoaded", () => {
    const skillsCycle = document.querySelectorAll('.skills-cycle');

    skillsCycle.forEach(skillcycler => {
        const scrollerInner = skillcycler.querySelector(".scroller-inner");

        const items = Array.from(scrollerInner.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(clone);
        });

        const scrollDistance = scrollerInner.scrollWidth / 2;
        scrollerInner.style.setProperty('--scroll-distance', `${scrollDistance}px`);

        skillcycler.setAttribute("data-animated", true);
    });
});
