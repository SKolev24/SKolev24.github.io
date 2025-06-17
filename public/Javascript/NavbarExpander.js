
const navbar = document.querySelector('.navbar');

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-600px 0px 0px 0px"
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('expanded-navbar');
        } else {
            navbar.classList.remove('expanded-navbar');
        }
    });
};

const target = document.querySelector('.container');
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(target);