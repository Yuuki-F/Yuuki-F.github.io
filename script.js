document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('scroll', function() {
    let currentPos = window.scrollY;
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(function(section) {
        if (section.offsetTop <= currentPos && (section.offsetTop + section.offsetHeight) > currentPos) {
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    navLink.classList.add('active');
                }
            });
        }
    });
});