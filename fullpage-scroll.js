/* ============================================
   SAMPLAST STYLE FULLPAGE SCROLL
   Layered sections with smooth reveal animation
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        // Animation settings
        animationDuration: 800,
        animationEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Scroll settings
        scrollSensitivity: 100,
        touchSensitivity: 50,
        
        // Navigation
        showDots: true,
        showArrows: true,
        keyboardEnabled: true,
        
        // Behavior
        loopTop: false,
        loopBottom: false,
        autoScrolling: true
    };

    // ============================================
    // STATE
    // ============================================
    let state = {
        currentSection: 0,
        totalSections: 0,
        isAnimating: false,
        lastScrollTime: 0,
        touchStartY: 0,
        sections: []
    };

    // ============================================
    // INITIALIZE
    // ============================================
    function init() {
        // Check if fullpage should be enabled
        const shouldEnable = document.body.classList.contains('fullpage-enabled') || 
                           document.body.hasAttribute('data-fullpage');
        
        if (!shouldEnable) {
            console.log('ℹ️ Fullpage Scroll: Disabled (add "fullpage-enabled" class to body to enable)');
            return;
        }
        
        console.log('🎬 Samplast Fullpage Scroll Loading...');
        
        // Get all sections
        state.sections = Array.from(document.querySelectorAll('.section, .hero-corporate'));
        state.totalSections = state.sections.length;
        
        if (state.totalSections === 0) {
            console.warn('⚠️ No sections found');
            return;
        }
        
        // Enable fullpage mode
        document.body.classList.add('fullpage-enabled');
        
        // Setup sections
        setupSections();
        
        // Create navigation
        if (CONFIG.showDots) createDotNavigation();
        if (CONFIG.showArrows) createArrowNavigation();
        
        // Bind events
        bindEvents();
        
        // Set initial section
        goToSection(0, false);
        
        console.log(`✅ Fullpage Scroll Ready! (${state.totalSections} sections)`);
    }

    // ============================================
    // SETUP SECTIONS
    // ============================================
    function setupSections() {
        state.sections.forEach((section, index) => {
            // Add data attribute
            section.setAttribute('data-section-index', index);
            
            // Add class
            section.classList.add('fp-section');
            
            // Set initial styles
            section.style.position = 'fixed';
            section.style.top = '0';
            section.style.left = '0';
            section.style.width = '100%';
            section.style.height = '100vh';
            section.style.overflow = 'auto';
            section.style.transition = `transform ${CONFIG.animationDuration}ms ${CONFIG.animationEasing}`;
            
            // Set z-index (reverse order - first section on top)
            section.style.zIndex = state.totalSections - index;
            
            // Set initial transform
            if (index === 0) {
                section.style.transform = 'translateY(0)';
                section.classList.add('fp-active');
            } else {
                section.style.transform = 'translateY(100%)';
            }
        });
    }

    // ============================================
    // NAVIGATION - DOTS
    // ============================================
    function createDotNavigation() {
        const nav = document.createElement('div');
        nav.className = 'fp-nav';
        nav.innerHTML = state.sections.map((section, index) => {
            const title = section.querySelector('h1, h2, .section-title')?.textContent || `Section ${index + 1}`;
            return `
                <div class="fp-nav-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <span class="fp-nav-dot"></span>
                    <span class="fp-nav-tooltip">${title}</span>
                </div>
            `;
        }).join('');
        
        document.body.appendChild(nav);
        
        // Bind click events
        nav.querySelectorAll('.fp-nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'));
                goToSection(index);
            });
        });
    }

    // ============================================
    // NAVIGATION - ARROWS
    // ============================================
    function createArrowNavigation() {
        const arrows = document.createElement('div');
        arrows.className = 'fp-arrows';
        arrows.innerHTML = `
            <button class="fp-arrow fp-arrow-up" aria-label="Previous section">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
            <button class="fp-arrow fp-arrow-down" aria-label="Next section">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </button>
        `;
        
        document.body.appendChild(arrows);
        
        // Bind click events
        arrows.querySelector('.fp-arrow-up').addEventListener('click', () => moveSectionUp());
        arrows.querySelector('.fp-arrow-down').addEventListener('click', () => moveSectionDown());
        
        // Update arrow visibility
        updateArrows();
    }

    // ============================================
    // BIND EVENTS
    // ============================================
    function bindEvents() {
        // Mouse wheel
        window.addEventListener('wheel', handleWheel, { passive: false });
        
        // Touch events
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        
        // Keyboard
        if (CONFIG.keyboardEnabled) {
            window.addEventListener('keydown', handleKeyboard);
        }
        
        // Resize
        window.addEventListener('resize', handleResize);
    }

    // ============================================
    // HANDLE WHEEL
    // ============================================
    function handleWheel(e) {
        if (state.isAnimating) {
            e.preventDefault();
            return;
        }
        
        const now = Date.now();
        if (now - state.lastScrollTime < CONFIG.scrollSensitivity) {
            e.preventDefault();
            return;
        }
        
        const delta = e.deltaY;
        
        if (Math.abs(delta) > 10) {
            e.preventDefault();
            state.lastScrollTime = now;
            
            if (delta > 0) {
                moveSectionDown();
            } else {
                moveSectionUp();
            }
        }
    }

    // ============================================
    // HANDLE TOUCH
    // ============================================
    function handleTouchStart(e) {
        state.touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (state.isAnimating) {
            e.preventDefault();
            return;
        }
        
        const touchEndY = e.touches[0].clientY;
        const diff = state.touchStartY - touchEndY;
        
        if (Math.abs(diff) > CONFIG.touchSensitivity) {
            e.preventDefault();
            
            if (diff > 0) {
                moveSectionDown();
            } else {
                moveSectionUp();
            }
            
            state.touchStartY = touchEndY;
        }
    }

    // ============================================
    // HANDLE KEYBOARD
    // ============================================
    function handleKeyboard(e) {
        if (state.isAnimating) return;
        
        switch(e.key) {
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                moveSectionUp();
                break;
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                moveSectionDown();
                break;
            case 'Home':
                e.preventDefault();
                goToSection(0);
                break;
            case 'End':
                e.preventDefault();
                goToSection(state.totalSections - 1);
                break;
        }
    }

    // ============================================
    // HANDLE RESIZE
    // ============================================
    function handleResize() {
        state.sections.forEach(section => {
            section.style.height = '100vh';
        });
    }

    // ============================================
    // MOVE SECTION UP
    // ============================================
    function moveSectionUp() {
        if (state.currentSection > 0) {
            goToSection(state.currentSection - 1);
        } else if (CONFIG.loopTop) {
            goToSection(state.totalSections - 1);
        }
    }

    // ============================================
    // MOVE SECTION DOWN
    // ============================================
    function moveSectionDown() {
        if (state.currentSection < state.totalSections - 1) {
            goToSection(state.currentSection + 1);
        } else if (CONFIG.loopBottom) {
            goToSection(0);
        }
    }

    // ============================================
    // GO TO SECTION
    // ============================================
    function goToSection(index, animate = true) {
        if (index < 0 || index >= state.totalSections) return;
        if (index === state.currentSection) return;
        if (state.isAnimating && animate) return;
        
        const direction = index > state.currentSection ? 'down' : 'up';
        const oldIndex = state.currentSection;
        
        state.isAnimating = true;
        state.currentSection = index;
        
        // Update sections
        state.sections.forEach((section, i) => {
            section.classList.remove('fp-active');
            
            if (i < index) {
                // Sections above - slide up
                section.style.transform = 'translateY(-100%)';
            } else if (i === index) {
                // Current section - visible
                section.style.transform = 'translateY(0)';
                section.classList.add('fp-active');
            } else {
                // Sections below - stay below
                section.style.transform = 'translateY(100%)';
            }
        });
        
        // Update navigation
        updateNavigation();
        updateArrows();
        
        // Trigger callbacks
        onLeave(oldIndex, index, direction);
        
        // Reset animation flag
        setTimeout(() => {
            state.isAnimating = false;
            onAfterLoad(index, direction);
        }, animate ? CONFIG.animationDuration : 0);
    }

    // ============================================
    // UPDATE NAVIGATION
    // ============================================
    function updateNavigation() {
        const navItems = document.querySelectorAll('.fp-nav-item');
        navItems.forEach((item, index) => {
            if (index === state.currentSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // ============================================
    // UPDATE ARROWS
    // ============================================
    function updateArrows() {
        const upArrow = document.querySelector('.fp-arrow-up');
        const downArrow = document.querySelector('.fp-arrow-down');
        
        if (upArrow) {
            upArrow.style.opacity = state.currentSection === 0 && !CONFIG.loopTop ? '0.3' : '1';
            upArrow.style.pointerEvents = state.currentSection === 0 && !CONFIG.loopTop ? 'none' : 'auto';
        }
        
        if (downArrow) {
            downArrow.style.opacity = state.currentSection === state.totalSections - 1 && !CONFIG.loopBottom ? '0.3' : '1';
            downArrow.style.pointerEvents = state.currentSection === state.totalSections - 1 && !CONFIG.loopBottom ? 'none' : 'auto';
        }
    }

    // ============================================
    // CALLBACKS
    // ============================================
    function onLeave(oldIndex, newIndex, direction) {
        // Trigger custom event
        const event = new CustomEvent('fpLeave', {
            detail: { oldIndex, newIndex, direction }
        });
        window.dispatchEvent(event);
    }

    function onAfterLoad(index, direction) {
        // Trigger custom event
        const event = new CustomEvent('fpAfterLoad', {
            detail: { index, direction }
        });
        window.dispatchEvent(event);
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.fullpage = {
        moveTo: goToSection,
        moveUp: moveSectionUp,
        moveDown: moveSectionDown,
        getCurrentSection: () => state.currentSection,
        getTotalSections: () => state.totalSections
    };

    // ============================================
    // START
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
