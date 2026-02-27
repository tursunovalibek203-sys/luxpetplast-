/* ============================================
   SAMPLAST STYLE SCROLL ANIMATIONS
   Modern scroll effects and interactions
   ============================================ */

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Samplast-style animations loading...');
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize counter animations
    initCounterAnimations();
    
    // Initialize card hover effects
    initCardEffects();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    console.log('Samplast-style animations ready!');
});

// Add animation classes to elements
function addAnimationClasses() {
    // Fade in from bottom
    const fadeUpElements = document.querySelectorAll('.section-header, .card-corporate, .product-showcase');
    fadeUpElements.forEach(el => {
        el.classList.add('fade-up');
    });
    
    // Fade in from left
    const fadeLeftElements = document.querySelectorAll('.hero-content-corporate');
    fadeLeftElements.forEach(el => {
        el.classList.add('fade-left');
    });
    
    // Fade in from right
    const fadeRightElements = document.querySelectorAll('.product-showcase-image-container');
    fadeRightElements.forEach(el => {
        el.classList.add('fade-right');
    });
    
    // Scale in
    const scaleElements = document.querySelectorAll('.gallery-item, .cert-card');
    scaleElements.forEach(el => {
        el.classList.add('scale-in');
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    animatedElements.forEach(el => {
        animateOnScroll.observe(el);
    });
}

// Parallax effects for images
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.product-showcase-image, .gallery-item img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = el.offsetHeight;
            
            // Only apply parallax when element is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxSpeed = 0.3;
                const yPos = -(scrolled - elementTop) * parallaxSpeed;
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// Counter animations for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');
    const hasK = target.includes('K');
    
    // Extract number
    let number = parseInt(target.replace(/[^0-9]/g, ''));
    if (hasK) number = number * 1000;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (hasK) {
            displayValue = Math.floor(current / 1000) + 'K';
        }
        if (hasPlus) displayValue += '+';
        if (isPercentage) displayValue += '%';
        
        element.textContent = displayValue;
    }, duration / steps);
}

// Card hover effects
function initCardEffects() {
    const cards = document.querySelectorAll('.card-corporate, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Reveal animation on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});

// Stagger animation for lists
function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-in');
        }, index * delay);
    });
}

// Apply stagger to card grids
const cardGridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('staggered')) {
            entry.target.classList.add('staggered');
            const cards = entry.target.querySelectorAll('.card-corporate, .gallery-item');
            staggerAnimation(cards, 150);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-grid, .gallery-grid').forEach(grid => {
    cardGridObserver.observe(grid);
});
