/* ============================================
   COMPONENT-SPECIFIC ANIMATIONS
   Har bir element uchun alohida animatsiyalar
   ============================================ */

(function() {
    'use strict';

    console.log('🎨 Component Animations Loading...');

    // ============================================
    // 1. HEADER ANIMATIONS
    // ============================================
    function initHeaderAnimations() {
        const header = document.querySelector('.header');
        const logo = document.querySelector('.logo');
        const brandName = document.querySelector('.brand-name');
        const navLinks = document.querySelectorAll('.nav-link');
        const langButtons = document.querySelectorAll('.lang-btn');
        
        if (!header) return;

        // Logo hover effect
        if (logo) {
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
            });
            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        }

        // Brand name typing effect (on load)
        if (brandName) {
            const text = brandName.textContent;
            brandName.textContent = '';
            brandName.style.opacity = '1';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    brandName.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        }

        // Nav links hover effect
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.color = 'var(--primary-blue)';
            });
            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(0)';
                    this.style.color = '';
                }
            });
        });

        // Active link indicator animation
        function updateActiveLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    if (link) link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink);

        // Language buttons animation
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active from all
                langButtons.forEach(b => {
                    b.classList.remove('active');
                    b.style.transform = 'scale(1)';
                });
                
                // Add active to clicked
                this.classList.add('active');
                this.style.transform = 'scale(1.1)';
                
                // Bounce animation
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = '';
                header.style.background = '';
                header.style.backdropFilter = '';
            }
            
            // Hide/show header on scroll
            if (currentScroll > lastScroll && currentScroll > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ============================================
    // 2. HERO SECTION ANIMATIONS
    // ============================================
    function initHeroAnimations() {
        const heroBadge = document.querySelector('.hero-badge');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroButtons = document.querySelector('.hero-cta-buttons');
        const heroStats = document.querySelector('.hero-stats');

        // XIRALIK O'CHIRILDI - Darhol ko'rinadi!
        const elements = [heroBadge, heroTitle, heroSubtitle, heroButtons, heroStats];
        elements.forEach((el) => {
            if (el) {
                // Darhol ko'rinadi, animatsiya yo'q
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });

        // Badge pulse animation
        if (heroBadge) {
            setInterval(() => {
                heroBadge.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    heroBadge.style.transform = 'scale(1)';
                }, 300);
            }, 3000);
        }

        // Title gradient animation
        if (heroTitle) {
            heroTitle.style.backgroundImage = 'linear-gradient(90deg, var(--navy-blue), var(--primary-blue), var(--navy-blue))';
            heroTitle.style.backgroundSize = '200% auto';
            heroTitle.style.webkitBackgroundClip = 'text';
            heroTitle.style.backgroundClip = 'text';
            
            let position = 0;
            setInterval(() => {
                position = (position + 1) % 200;
                heroTitle.style.backgroundPosition = `${position}% center`;
            }, 50);
        }

        // Button hover effects
        const buttons = document.querySelectorAll('.btn-hero');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });
    }

    // ============================================
    // 3. STATS COUNTER ANIMATION
    // ============================================
    function initStatsAnimation() {
        const stats = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateStat(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    function animateStat(element) {
        const target = element.textContent;
        const hasPlus = target.includes('+');
        const hasPercent = target.includes('%');
        const hasK = target.includes('K');
        
        let number = parseInt(target.replace(/[^0-9]/g, ''));
        if (hasK) number *= 1000;
        
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(interval);
            }
            
            let display = Math.floor(current);
            if (hasK) display = Math.floor(current / 1000) + 'K';
            if (hasPlus) display += '+';
            if (hasPercent) display += '%';
            
            element.textContent = display;
            
            // Pulse effect
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        }, duration / steps);
    }

    // ============================================
    // 4. CARD ANIMATIONS
    // ============================================
    function initCardAnimations() {
        const cards = document.querySelectorAll('.card-corporate, .cert-card, .product-card-with-image');
        
        cards.forEach(card => {
            // Hover tilt effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });

            // Click ripple effect
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ============================================
    // 5. IMAGE ANIMATIONS
    // ============================================
    function initImageAnimations() {
        const images = document.querySelectorAll('.product-showcase-image, .gallery-item img, .product-image');
        
        images.forEach(img => {
            // Lazy load with fade
            if (img.loading === 'lazy') {
                img.style.opacity = '0';
                img.addEventListener('load', function() {
                    this.style.transition = 'opacity 0.6s ease';
                    this.style.opacity = '1';
                });
            }

            // Zoom on hover
            const container = img.closest('.product-showcase-image-container, .gallery-item, .product-card-with-image');
            if (container) {
                container.addEventListener('mouseenter', function() {
                    img.style.transform = 'scale(1.1)';
                });
                container.addEventListener('mouseleave', function() {
                    img.style.transform = 'scale(1)';
                });
            }

            // Click to view full
            img.addEventListener('click', function() {
                if (this.classList.contains('clickable')) {
                    openLightbox(this.src);
                }
            });
        });
    }

    // ============================================
    // 6. BUTTON ANIMATIONS
    // ============================================
    function initButtonAnimations() {
        const buttons = document.querySelectorAll('.btn, .card-link');
        
        buttons.forEach(btn => {
            // Magnetic effect
            btn.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });

            // Click animation
            btn.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    // ============================================
    // 7. SECTION BADGE ANIMATIONS
    // ============================================
    function initBadgeAnimations() {
        const badges = document.querySelectorAll('.section-badge');
        
        badges.forEach(badge => {
            // Float animation
            let direction = 1;
            let position = 0;
            
            setInterval(() => {
                position += direction * 0.5;
                if (position > 5 || position < -5) direction *= -1;
                badge.style.transform = `translateY(${position}px)`;
            }, 50);

            // Glow on hover
            badge.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.5)';
            });
            badge.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }

    // ============================================
    // 8. GALLERY ANIMATIONS
    // ============================================
    function initGalleryAnimations() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach((item, index) => {
            // XIRALIK O'CHIRILDI - Darhol ko'rinadi!
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';

            // Overlay animation
            const overlay = item.querySelector('.gallery-overlay');
            if (overlay) {
                item.addEventListener('mouseenter', function() {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0)';
                });
                item.addEventListener('mouseleave', function() {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(20px)';
                });
            }
        });
    }

    // ============================================
    // 9. FORM ANIMATIONS
    // ============================================
    function initFormAnimations() {
        const inputs = document.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Focus animation
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });

            // Typing animation
            input.addEventListener('input', function() {
                this.style.borderColor = 'var(--primary-blue)';
                setTimeout(() => {
                    this.style.borderColor = '';
                }, 300);
            });
        });
    }

    // ============================================
    // 10. SCROLL ANIMATIONS
    // ============================================
    function initScrollAnimations() {
        // Scroll to top button
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.pointerEvents = 'auto';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.pointerEvents = 'none';
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Parallax backgrounds
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(el => {
                const speed = el.getAttribute('data-parallax') || 0.5;
                const yPos = -(window.pageYOffset * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ============================================
    // INITIALIZE ALL
    // ============================================
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startAnimations);
        } else {
            startAnimations();
        }
    }

    function startAnimations() {
        try {
            initHeaderAnimations();
            initHeroAnimations();
            initStatsAnimation();
            initCardAnimations();
            initImageAnimations();
            initButtonAnimations();
            initBadgeAnimations();
            initGalleryAnimations();
            initFormAnimations();
            initScrollAnimations();
            
            console.log('✅ Component Animations Ready!');
        } catch (error) {
            console.error('❌ Component Animation Error:', error);
        }
    }

    // Start
    init();

})();
