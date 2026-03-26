// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.skill-card, .game-card, .contact-card, .stat, .about-text, .about-stats, .section-label, section h2, .contact-intro'
).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
