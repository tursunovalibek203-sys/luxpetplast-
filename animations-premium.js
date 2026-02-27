/* ============================================
   PREMIUM INDUSTRIAL ANIMATIONS
   100% Professional Factory Website Style
   Based on Samplast & Modern Industrial Standards
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        // Intersection Observer settings
        observer: {
            threshold: 0.2,              // Trigger when 20% visible
            rootMargin: '0px 0px -80px 0px'  // Start animation 80px before viewport
        },
        
        // Animation timings
        timing: {
            sectionFade: 700,            // Section fade duration (ms)
            staggerDelay: 150,           // Delay between staggered items (ms)
            counterDuration: 2000,       // Counter animation duration (ms)
            hoverTransition: 300         // Hover effect duration (ms)
        },
        
        // Easing functions
        easing: {
            smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Smooth ease
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',  // Bounce
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'        // Sharp
        }
    };

    // ============================================
    // INTERSECTION OBSERVER
    // ============================================
    const createObserver = (callback, options = {}) => {
        const observerOptions = {
            ...CONFIG.observer,
            ...options
        };
        return new IntersectionObserver(callback, observerOptions);
    };

    // ============================================
    // SECTION FADE-UP ANIMATION
    // ============================================
    function initSectionAnimations() {
        const sections = document.querySelectorAll('.section, .hero-corporate');
        
        const sectionObserver = createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        sections.forEach(section => {
            // XIRALIK O'CHIRILDI - Darhol ko'rinadi!
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = `opacity ${CONFIG.timing.sectionFade}ms ${CONFIG.easing.smooth}, transform ${CONFIG.timing.sectionFade}ms ${CONFIG.easing.smooth}`;
            
            // Observer yo'q, darhol ko'rinadi
            section.classList.add('animated');
        });
    }

    // ============================================
    // STAGGER ANIMATION FOR CARDS
    // ============================================
    function initStaggerAnimations() {
        const grids = document.querySelectorAll('.card-grid, .gallery-grid');
        
        const gridObserver = createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('staggered')) {
                    entry.target.classList.add('staggered');
                    
                    const items = entry.target.querySelectorAll('.card-corporate, .gallery-item, .cert-card');
                    items.forEach((item, index) => {
                        // XIRALIK O'CHIRILDI - Kartochkalar darhol ko'rinadi!
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.transition = `opacity 600ms ${CONFIG.easing.smooth}, transform 600ms ${CONFIG.easing.smooth}`;
                    });
                }
            });
        });

        grids.forEach(grid => gridObserver.observe(grid));
    }

    // ============================================
    // COUNTER ANIMATION (Statistics)
    // ============================================
    function initCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        const counterObserver = createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    function animateCounter(element) {
        const target = element.textContent;
        const isPercentage = target.includes('%');
        const hasPlus = target.includes('+');
        const hasK = target.includes('K');
        
        // Extract number
        let number = parseInt(target.replace(/[^0-9]/g, ''));
        if (hasK) number = number * 1000;
        
        const duration = CONFIG.timing.counterDuration;
        const steps = 60;
        const increment = number / steps;
        const stepDuration = duration / steps;
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
        }, stepDuration);
    }

    // ============================================
    // CARD HOVER EFFECTS (Subtle & Professional)
    // ============================================
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.card-corporate, .gallery-item, .cert-card');
        
        cards.forEach(card => {
            // Set transition
            card.style.transition = `transform ${CONFIG.timing.hoverTransition}ms ${CONFIG.easing.smooth}, box-shadow ${CONFIG.timing.hoverTransition}ms ${CONFIG.easing.smooth}`;
            
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
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

    // ============================================
    // SCROLL PROGRESS INDICATOR
    // ============================================
    function initScrollProgress() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #3b82f6);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        `;
        document.body.appendChild(progressBar);
        
        // Update on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = (window.pageYOffset / windowHeight) * 100;
                    progressBar.style.width = scrolled + '%';
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ============================================
    // PARALLAX EFFECT (Subtle for images)
    // ============================================
    function initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.product-showcase-image, .gallery-item img');
        
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    
                    parallaxElements.forEach(el => {
                        const rect = el.getBoundingClientRect();
                        
                        // Only apply when in viewport
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const speed = 0.2; // Subtle parallax
                            const yPos = -(scrolled - (rect.top + scrolled)) * speed;
                            el.style.transform = `translateY(${yPos}px)`;
                        }
                    });
                    
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScroll = 0;
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;
                    
                    if (currentScroll > 100) {
                        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                        header.style.background = 'rgba(255, 255, 255, 0.98)';
                    } else {
                        header.style.boxShadow = '';
                        header.style.background = '';
                    }
                    
                    lastScroll = currentScroll;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ============================================
    // IMAGE LAZY LOAD WITH FADE
    // ============================================
    function initLazyImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 500ms ease';
                    
                    img.addEventListener('load', () => {
                        img.style.opacity = '1';
                    });
                    
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // INITIALIZE ALL ANIMATIONS
    // ============================================
    function init() {
        console.log('🎨 Premium Industrial Animations Loading...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startAnimations);
        } else {
            startAnimations();
        }
    }

    function startAnimations() {
        try {
            initSectionAnimations();
            initStaggerAnimations();
            initCounterAnimations();
            initCardHoverEffects();
            initSmoothScroll();
            initScrollProgress();
            initParallaxEffect();
            initHeaderScroll();
            initLazyImages();
            
            console.log('✅ Premium Industrial Animations Ready!');
        } catch (error) {
            console.error('❌ Animation Error:', error);
        }
    }

    // Start initialization
    init();

})();
