// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

function toggleMode() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    modeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
    localStorage.setItem('darkMode', isDark);
}

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    toggleMode();
}

modeToggle.addEventListener('click', toggleMode);

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
    
    // Show/hide scroll to top button
    const scrollTop = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const offsetTop = document.querySelector(href).offsetTop;
        
        window.scrollTo({
            top: offsetTop - 70,
            behavior: 'smooth'
        });
        
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Scroll to top functionality
document.getElementById('scrollTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Typewriter Effect
const typewriterElement = document.querySelector('.typewriter');
const typewriterText = typewriterElement.textContent;
typewriterElement.textContent = '';

let i = 0;
const typeSpeed = 100;

function type() {
    if (i < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(i);
        i++;
        setTimeout(type, typeSpeed);
    }
}

window.addEventListener('load', () => {
    setTimeout(type, 1000);
});