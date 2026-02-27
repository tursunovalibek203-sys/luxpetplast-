// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // Product Category Filtering
    const categoryTabs = document.querySelectorAll('.tab-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Quote Form Handling
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.fullName || !data.company || !data.phone || !data.email || !data.productType || !data.quantity) {
                alert('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Iltimos, to\'g\'ri email manzilini kiriting!');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(data.phone)) {
                alert('Iltimos, to\'g\'ri telefon raqamini kiriting!');
                return;
            }
            
            // Agreement check
            if (!data.agreement) {
                alert('Iltimos, maxfiylik siyosati bilan roziligingizni tasdiqlang!');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Yuborilmoqda...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Sizning so\'rovingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.phone || !data.subject || !data.message) {
                alert('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(data.phone)) {
                alert('Iltimos, to\'g\'ri telefon raqamini kiriting!');
                return;
            }
            
            // Privacy agreement check
            if (!data.privacy) {
                alert('Iltimos, maxfiylik siyosati bilan roziligingizni tasdiqlang!');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Yuborilmoqda...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Career Form Handling
    const careerForm = document.getElementById('careerForm');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.fullName || !data.phone || !data.email || !data.position || !data.experience) {
                alert('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Iltimos, to\'g\'ri email manzilini kiriting!');
                return;
            }
            
            // CV file check
            const cvFile = document.getElementById('cv').files[0];
            if (cvFile) {
                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                if (!allowedTypes.includes(cvFile.type)) {
                    alert('Iltimos, CV ni PDF yoki Word formatida yuklang!');
                    return;
                }
                
                // Check file size (max 5MB)
                if (cvFile.size > 5 * 1024 * 1024) {
                    alert('CV fayli hajmi 5MB dan oshmasligi kerak!');
                    return;
                }
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Yuborilmoqda...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Smooth scrolling for anchor links
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

    // Auto-fill product type from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    if (productParam) {
        const productSelect = document.getElementById('productType');
        if (productSelect) {
            // Map URL parameters to select values
            const productMap = {
                'pco-2925-12g': 'pet-preforms',
                'pco-2925-16g': 'pet-preforms',
                'pco-2925-24g': 'pet-preforms',
                'pco-1881-15g': 'pet-preforms',
                'pco-1881-21g': 'pet-preforms',
                'pco-1881-30g': 'pet-preforms',
                'oil-bottle-26g': 'pet-preforms',
                'oil-bottle-36g': 'pet-preforms',
                'preform-52g-38mm': 'pet-preforms',
                'preform-70g-38mm': 'pet-preforms',
                'preform-72g-48mm': 'pet-preforms',
                'preform-135g-48mm': 'pet-preforms',
                'preform-250g-48mm': 'pet-preforms',
                'preform-700g-55mm': 'pet-preforms',
                'preform-670g-55mm': 'pet-preforms',
                'handle-48mm': 'handles',
                'handle-38mm': 'handles',
                'handle-28mm': 'handles',
                'cap-48mm': 'pp-caps',
                'cap-38mm': 'pp-caps',
                'cap-28mm-gas': 'pp-caps',
                'cap-28mm-no-gas': 'pp-caps',
                'oil-cap-dkm': 'pp-caps',
                'oil-cap-okm': 'pp-caps',
                'oil-cap-19l': 'pp-caps',
                'custom': 'custom'
            };
            
            const selectValue = productMap[productParam] || productParam;
            productSelect.value = selectValue;
            
            // Also fill specifications field with product name
            const specificationsField = document.getElementById('specifications');
            if (specificationsField && productParam !== 'custom') {
                specificationsField.value = `Mahsulot: ${productParam}`;
            }
        }
    }

    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type !== 'submit') {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .feature-card, .team-member, .certificate-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});


// WhatsApp Integration
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp floating button
    const whatsappNumber = '+998901234567'; // Ozingizning raqamingizni kiriting
    const whatsappMessage = 'Assalomu alaykum! PET Preform mahsulotlari haqida malumot olmoqchiman.';
    
    // Create WhatsApp button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.setAttribute('aria-label', 'WhatsApp bilan boglanish');
    document.body.appendChild(whatsappBtn);
    
    // WhatsApp tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'whatsapp-tooltip';
    tooltip.innerHTML = `
        <h4>Savolingiz bormi?</h4>
        <p>WhatsApp orqali biz bilan boglaning!</p>
    `;
    document.body.appendChild(tooltip);
    
    // Show tooltip after 3 seconds
    setTimeout(() => {
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 5000);
    }, 3000);
    
    // Show tooltip on hover
    whatsappBtn.addEventListener('mouseenter', () => {
        tooltip.classList.add('show');
    });
    
    whatsappBtn.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
    });
});

// Live Chat Widget
document.addEventListener('DOMContentLoaded', function() {
    // Create chat toggle button
    const chatToggle = document.createElement('div');
    chatToggle.className = 'chat-toggle';
    chatToggle.innerHTML = '<span class="notification-badge">1</span>';
    document.body.appendChild(chatToggle);
    
    // Create chat widget
    const chatWidget = document.createElement('div');
    chatWidget.className = 'chat-widget';
    chatWidget.innerHTML = `
        <div class="chat-header">
            <div class="chat-header-info">
                <div class="chat-avatar">👋</div>
                <div class="chat-status">
                    <h4>PET Preform</h4>
                    <span>● Onlayn</span>
                </div>
            </div>
            <button class="chat-close">×</button>
        </div>
        <div class="chat-body" id="chatBody">
            <div class="chat-message bot">
                <div class="message-bubble">
                    Assalomu alaykum! PET Preform kompaniyasiga xush kelibsiz. Sizga qanday yordam bera olaman?
                </div>
                <div class="message-time">${getCurrentTime()}</div>
            </div>
            <div class="chat-quick-replies">
                <button class="quick-reply-btn" data-reply="Mahsulotlar haqida">Mahsulotlar haqida</button>
                <button class="quick-reply-btn" data-reply="Narx so'rash">Narx so'rash</button>
                <button class="quick-reply-btn" data-reply="Yetkazib berish">Yetkazib berish</button>
            </div>
        </div>
        <div class="chat-footer">
            <div class="chat-input-wrapper">
                <input type="text" class="chat-input" placeholder="Xabar yozing..." id="chatInput">
                <button class="chat-send-btn" id="chatSend">➤</button>
            </div>
        </div>
    `;
    document.body.appendChild(chatWidget);
    
    // Chat functionality
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatClose = chatWidget.querySelector('.chat-close');
    const notificationBadge = chatToggle.querySelector('.notification-badge');
    
    // Toggle chat
    chatToggle.addEventListener('click', function() {
        chatWidget.classList.toggle('open');
        chatToggle.classList.toggle('active');
        if (chatWidget.classList.contains('open')) {
            notificationBadge.style.display = 'none';
            chatInput.focus();
        }
    });
    
    // Close chat
    chatClose.addEventListener('click', function() {
        chatWidget.classList.remove('open');
        chatToggle.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                addBotResponse(message);
            }, 1000);
        }
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Quick replies
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-reply-btn')) {
            const reply = e.target.getAttribute('data-reply');
            addUserMessage(reply);
            e.target.parentElement.remove();
            
            setTimeout(() => {
                addBotResponse(reply);
            }, 1000);
        }
    });
    
    // Add user message
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message user';
        messageDiv.innerHTML = `
            <div class="message-bubble">${text}</div>
            <div class="message-time">${getCurrentTime()}</div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    // Add bot response
    function addBotResponse(userMessage) {
        let response = '';
        
        if (userMessage.toLowerCase().includes('mahsulot')) {
            response = 'Bizda 30+ turli PET preform, PP qopqoq va tutqichlar mavjud. <a href="products.html">Mahsulotlar sahifasiga</a> o\'ting yoki narx so\'rang.';
        } else if (userMessage.toLowerCase().includes('narx')) {
            response = 'Narx so\'rash uchun <a href="quote.html">bu yerga</a> o\'ting yoki telefon orqali bog\'laning: +998 90 123 45 67';
        } else if (userMessage.toLowerCase().includes('yetkazib')) {
            response = 'Biz O\'zbekistonning barcha viloyatlariga va MDH davlatlariga yetkazib beramiz. Toshkent bo\'ylab 24 soat ichida yetkazamiz.';
        } else {
            response = 'Rahmat! Tez orada mutaxassislarimiz siz bilan bog\'lanishadi. Telefon: +998 90 123 45 67';
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.innerHTML = `
            <div class="message-bubble">${response}</div>
            <div class="message-time">${getCurrentTime()}</div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    // Get current time
    function getCurrentTime() {
        const now = new Date();
        return now.getHours().toString().padStart(2, '0') + ':' + 
               now.getMinutes().toString().padStart(2, '0');
    }
    
    // Show notification after 5 seconds
    setTimeout(() => {
        if (!chatWidget.classList.contains('open')) {
            notificationBadge.style.display = 'flex';
        }
    }, 5000);
});

// Contact Methods Floating
document.addEventListener('DOMContentLoaded', function() {
    const contactFloating = document.createElement('div');
    contactFloating.className = 'contact-floating';
    contactFloating.innerHTML = `
        <a href="tel:+998901234567" class="contact-btn phone" title="Telefon qilish">📞</a>
        <a href="https://t.me/petpreform_uz" target="_blank" class="contact-btn telegram" title="Telegram">✈️</a>
        <a href="mailto:info@petpreform.uz" class="contact-btn email" title="Email yuborish">✉️</a>
    `;
    document.body.appendChild(contactFloating);
    
    // Show/hide on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 300) {
            contactFloating.classList.add('show');
        } else {
            contactFloating.classList.remove('show');
        }
        
        lastScroll = currentScroll;
    });
});


// ============================================
// SCROLL ANIMATIONS & PARALLAX EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll Progress Bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // Scroll to Top Button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.setAttribute('aria-label', 'Yuqoriga qaytish');
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Intersection Observer for Scroll Animations - Samplast Style
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in, ' +
        '.rotate-in, .blur-focus, .slide-up, .zoom-in, .flip-in, .image-reveal, ' +
        '.product-card, .feature-card, .stat-item, .gallery-item, .preview-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax Effect
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        
        // Parallax backgrounds
        const parallaxBgs = document.querySelectorAll('.parallax-bg');
        parallaxBgs.forEach(bg => {
            const speed = bg.dataset.speed || 0.5;
            bg.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax images
        const parallaxImages = document.querySelectorAll('.parallax-image');
        parallaxImages.forEach(img => {
            const speed = img.dataset.speed || 0.3;
            const rect = img.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * speed;
            img.style.transform = `translateY(${offset}px)`;
        });
    });
    
    // Counter Animation
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Observe counters
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Smooth Reveal for Images - Enhanced
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    entry.target.style.filter = 'blur(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.product-card img, .feature-card img').forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(30px) scale(0.9) rotate(-5deg)';
        img.style.filter = 'blur(5px)';
        img.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
        imageObserver.observe(img);
    });
    
    // Tilt Effect on Cards - Enhanced with 3D
    document.querySelectorAll('.product-card, .feature-card, .equipment-card').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.perspective = '1000px';
        
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(20px)
                scale(1.05)
            `;
            
            // Add shine effect
            const shine = card.querySelector('.card-shine');
            if (!shine) {
                const shineEl = document.createElement('div');
                shineEl.className = 'card-shine';
                shineEl.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        ${Math.atan2(y - centerY, x - centerX) * (180 / Math.PI)}deg,
                        rgba(255,255,255,0) 0%,
                        rgba(255,255,255,0.3) 50%,
                        rgba(255,255,255,0) 100%
                    );
                    pointer-events: none;
                    transition: opacity 0.3s;
                `;
                card.appendChild(shineEl);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
            card.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.remove();
            }
        });
    });
    
    // Magnetic Button Effect - Enhanced
    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        btn.addEventListener('mousemove', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
        
        // Add click animation
        btn.addEventListener('click', function() {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Stagger Animation for Grid Items
    function staggerAnimation(selector, delay = 100) {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    }
    
    staggerAnimation('.product-card', 100);
    staggerAnimation('.feature-card', 150);
    staggerAnimation('.stat-item', 100);
    
    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserverLazy = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserverLazy.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserverLazy.observe(img));
    
    // Text Reveal Animation
    document.querySelectorAll('.text-reveal').forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.transitionDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
    
    // Scroll-triggered Animations for Sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Ripple Effect on Buttons
    document.querySelectorAll('.btn, .nav-link').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Parallax Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 600);
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll indicator to hero
    if (hero) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        hero.appendChild(scrollIndicator);
    }
    
    console.log('Scroll animations initialized ✓');
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SAMPLAST-STYLE SMOOTH SCROLL & PARALLAX
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll with Easing
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function smoothScrollUpdate() {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        // Parallax for all sections
        document.querySelectorAll('section').forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent > 0 && scrollPercent < 1) {
                const speed = 0.3 + (index % 3) * 0.1;
                section.style.transform = 	ranslateY(+scrollDelta * speed+px);
            }
        });
        
        // Parallax for images
        document.querySelectorAll('.parallax-image, .hero-image img, .quality-image img').forEach(img => {
            const rect = img.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent > 0 && scrollPercent < 1) {
                const offset = (scrollPercent - 0.5) * 100;
                img.style.transform = 	ranslateY(+offset * 0.3+px) scale(1.05);
            }
        });
        
        // Smooth reveal for cards
        document.querySelectorAll('.product-card, .feature-card, .stat-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            
            if (isVisible && !card.classList.contains('revealed')) {
                card.classList.add('revealed');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }
        });
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(smoothScrollUpdate);
            ticking = true;
        }
    });
    
    // Initialize cards
    document.querySelectorAll('.product-card, .feature-card, .stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.95)';
        card.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    // Smooth Observer with Samplast timing
    const smoothObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    });
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal-up, .scale-reveal, .fade-slide, .opacity-reveal, .clip-reveal, .blur-reveal-smooth, .rotate-reveal-smooth').forEach(el => {
        smoothObserver.observe(el);
    });
    
    // Smooth Parallax on Mouse Move
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    function animateParallax() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        document.querySelectorAll('.parallax-layer').forEach((layer, index) => {
            const speed = (index + 1) * 10;
            layer.style.transform = 	ranslate(+currentX * speed+px, +currentY * speed+px);
        });
        
        requestAnimationFrame(animateParallax);
    }
    
    animateParallax();
    
    // Smooth Section Fade In
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        sectionObserver.observe(section);
    });
    
    // Smooth Image Lazy Load
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        imageObserver.observe(img);
    });
    
    // Smooth Scroll to Anchor
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const targetPosition = target.offsetTop - 80;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500;
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
    
    // Smooth Text Reveal
    document.querySelectorAll('.text-reveal-smooth').forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split(' ').forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.transitionDelay = +index * 0.1+s;
            element.appendChild(span);
        });
    });
    
    // Smooth Background Parallax
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        document.querySelectorAll('.bg-parallax').forEach(bg => {
            bg.style.transform = 	ranslateY(+scrolled * 0.5+px);
        });
    });
    
    console.log('Samplast-style smooth animations initialized ');
});

