const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        let progress = timeElapsed / 500;
        if (progress > 1) {
            progress = 1;
        }

        const newPosition = startPosition + (distance * easeInOutQuad(progress));
        window.scrollTo(0, newPosition);

        if (progress < 1 ) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animation);
}


const sections = document.querySelectorAll('section');

window.addEventListener('load', () => {
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 800);
    });
});