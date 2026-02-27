/* ============================================
   LP PLAST - ADVANCED FEATURES
   Video Background, Parallax, Advanced Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 Advanced features loading...');
    
    // ============================================
    // VIDEO BACKGROUND HANDLER
    // Auto-play with fallback to image
    // ============================================
    
    const videoBackgrounds = document.querySelectorAll('.hero-video');
    
    videoBackgrounds.forEach(video => {
        // Try to play video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('✅ Video playing');
            }).catch(error => {
                console.log('⚠️ Video autoplay blocked, using fallback image');
                video.style.display = 'none';
            });
        }
        
        // Pause video when not in viewport (performance)
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.25 });
        
        videoObserver.observe(video);
    });
    
    // ============================================
    // ADVANCED PARALLAX EFFECT
    // Multiple layers with different speeds
    // ============================================
    
    let ticking = false;
    let lastScrollY = 0;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        // Parallax backgrounds
        document.querySelectorAll('[data-parallax]').forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Parallax images
        document.querySelectorAll('[data-parallax-image]').forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-image')) || 0.3;
            const rect = el.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * speed;
            el.style.transform = `translate3d(0, ${offset}px, 0)`;
        });
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // ============================================
    // HEADER SCROLL BEHAVIOR
    // Hide on scroll down, show on scroll up
    // ============================================
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // SMOOTH SCROLL WITH OFFSET
    // Account for fixed header
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // TYPING ANIMATION
    // Typewriter effect for hero text
    // ============================================
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Apply to elements with data-typewriter
    document.querySelectorAll('[data-typewriter]').forEach(el => {
        const text = el.textContent;
        const speed = parseInt(el.getAttribute('data-typewriter')) || 50;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(el, text, speed);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(el);
    });
    
    // ============================================
    // NUMBER COUNTER WITH EASING
    // Smooth counting animation
    // ============================================
    
    function easeOutQuad(t) {
        return t * (2 - t);
    }
    
    function animateCounterEased(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            const current = Math.floor(easedProgress * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
                const suffix = element.getAttribute('data-suffix');
                if (suffix) {
                    element.textContent = target + suffix;
                }
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // ============================================
    // IMAGE LAZY LOAD WITH BLUR EFFECT
    // Progressive image loading
    // ============================================
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    // Create temporary image to preload
                    const tempImg = new Image();
                    tempImg.onload = function() {
                        img.src = src;
                        img.removeAttribute('data-src');
                        img.style.filter = 'blur(0)';
                        img.classList.add('loaded');
                    };
                    tempImg.src = src;
                    
                    // Add blur effect while loading
                    img.style.filter = 'blur(10px)';
                    img.style.transition = 'filter 0.6s ease';
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // ============================================
    // MOUSE FOLLOW EFFECT
    // Cursor trail or spotlight
    // ============================================
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #3498db;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor hover effects
    document.querySelectorAll('a, button, .card-samplast').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#e74c3c';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#3498db';
        });
    });
    
    // ============================================
    // SCROLL PROGRESS CIRCLE
    // Circular progress indicator
    // ============================================
    
    const progressCircle = document.createElement('div');
    progressCircle.innerHTML = `
        <svg width="60" height="60" style="transform: rotate(-90deg);">
            <circle cx="30" cy="30" r="25" fill="none" stroke="#e9ecef" stroke-width="4"/>
            <circle id="progress-circle" cx="30" cy="30" r="25" fill="none" stroke="#3498db" stroke-width="4" 
                    stroke-dasharray="157" stroke-dashoffset="157" stroke-linecap="round"/>
        </svg>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 12px; font-weight: 600; color: #3498db;">
            <span id="progress-percent">0</span>%
        </div>
    `;
    progressCircle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        cursor: pointer;
        z-index: 9998;
        display: none;
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(progressCircle);
    
    const progressCirclePath = document.getElementById('progress-circle');
    const progressPercent = document.getElementById('progress-percent');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        const offset = 157 - (157 * scrolled / 100);
        
        progressCirclePath.style.strokeDashoffset = offset;
        progressPercent.textContent = Math.round(scrolled);
        
        if (scrolled > 10) {
            progressCircle.style.display = 'flex';
        } else {
            progressCircle.style.display = 'none';
        }
    });
    
    progressCircle.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // PERFORMANCE MONITORING
    // Log performance metrics
    // ============================================
    
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        
        console.log('📊 Performance Metrics:');
        console.log(`   Page Load: ${pageLoadTime}ms`);
        console.log(`   Connect: ${connectTime}ms`);
        console.log(`   Render: ${renderTime}ms`);
    });
    
    console.log('✅ Advanced features loaded successfully!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (window.pageYOffset / windowHeight) * 100;
}
