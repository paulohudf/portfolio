// Fade-in effect when scrolling
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.animation = "fadeIn 1s forwards";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = 70; // adjust for sticky header height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});

// Fade-in project cards on scroll
const projects = document.querySelectorAll('.project.card');

const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
        }
    });
}, { threshold: 0.2 });

projects.forEach(project => {
    projectObserver.observe(project);
});

// Scroll Animation for Hero and About
const scrollElements = document.querySelectorAll('.hero-content, #about');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

scrollElements.forEach(el => {
    scrollObserver.observe(el);
});
