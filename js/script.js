document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('header');
    const body = document.querySelector('body');

    if (navToggle && header && body) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('header-nav-open');
            body.classList.toggle('nav-open-body');

            // Toggle ARIA attribute for accessibility
            const isExpanded = header.classList.contains('header-nav-open');
            navToggle.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                navToggle.setAttribute('aria-label', 'Menü schließen');
            } else {
                navToggle.setAttribute('aria-label', 'Menü öffnen');
            }
        });
    }
});
