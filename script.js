// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.section-title, .about-content, .theme-box, .timeline-item, .prize-card, .guideline-block, .step, .hashtag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add the animate-in class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Stagger animation for timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
});

// Stagger animation for prize cards
document.querySelectorAll('.prize-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger animation for steps
document.querySelectorAll('.step').forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
});

// Stagger animation for hashtags
document.querySelectorAll('.hashtag').forEach((tag, index) => {
    tag.style.transitionDelay = `${index * 0.1}s`;
});

console.log('Kawagoe AI Video Awards 2026 - Website Loaded');
