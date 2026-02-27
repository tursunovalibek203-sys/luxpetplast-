/* WhatsApp Widget */
(function() {
    // WhatsApp raqami (o'zingizning raqamingizni kiriting)
    const whatsappNumber = '998712000000'; // Format: country code + number (no + or spaces)
    
    // Translations
    const translations = {
        uz: {
            tooltip: "WhatsApp orqali yozing",
            message: "Assalomu alaykum! LUX PET PLAST haqida ma'lumot olmoqchiman."
        },
        ru: {
            tooltip: "Напишите в WhatsApp",
            message: "Здравствуйте! Хочу получить информацию о LUX PET PLAST."
        },
        en: {
            tooltip: "Chat on WhatsApp",
            message: "Hello! I would like to get information about LUX PET PLAST."
        }
    };
    
    // Get current language
    function getCurrentLanguage() {
        return localStorage.getItem('selectedLanguage') || 'uz';
    }
    
    // Create WhatsApp button
    function createWhatsAppButton() {
        const lang = getCurrentLanguage();
        const text = translations[lang];
        
        const button = document.createElement('a');
        button.className = 'whatsapp-float';
        button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.message)}`;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.setAttribute('aria-label', text.tooltip);
        
        button.innerHTML = `
            <span class="whatsapp-tooltip">${text.tooltip}</span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.321-0.525c-1.331-2.197-2.039-4.722-2.039-7.321 0-7.605 6.195-13.8 13.8-13.8s13.8 6.195 13.8 13.8-6.228 13.867-13.833 13.867zM21.863 18.896c-0.326-0.163-1.926-0.951-2.224-1.060s-0.515-0.163-0.733 0.163c-0.217 0.326-0.842 1.060-1.033 1.278s-0.38 0.245-0.706 0.082c-0.326-0.163-1.377-0.508-2.623-1.62-0.969-0.865-1.623-1.933-1.813-2.259s-0.020-0.502 0.143-0.665c0.146-0.146 0.326-0.38 0.489-0.57s0.217-0.326 0.326-0.544 0.054-0.408-0.027-0.57c-0.082-0.163-0.733-1.765-1.005-2.417s-0.537-0.544-0.733-0.544c-0.19-0.009-0.408-0.009-0.625-0.009s-0.57 0.082-0.869 0.408c-0.299 0.326-1.141 1.114-1.141 2.716s1.168 3.151 1.33 3.369c0.163 0.217 2.293 3.502 5.553 4.911 0.777 0.335 1.384 0.536 1.858 0.686 0.781 0.245 1.491 0.211 2.054 0.128 0.627-0.094 1.926-0.788 2.198-1.547s0.272-1.411 0.19-1.547c-0.081-0.136-0.299-0.217-0.625-0.38z"/>
            </svg>
        `;
        
        document.body.appendChild(button);
    }
    
    // Update button text when language changes
    function updateButtonText() {
        const button = document.querySelector('.whatsapp-float');
        if (button) {
            const lang = getCurrentLanguage();
            const text = translations[lang];
            const tooltip = button.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.textContent = text.tooltip;
            }
            button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.message)}`;
            button.setAttribute('aria-label', text.tooltip);
        }
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWhatsAppButton);
    } else {
        createWhatsAppButton();
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', updateButtonText);
    
    // Also check periodically for language changes (fallback)
    let lastLang = getCurrentLanguage();
    setInterval(() => {
        const currentLang = getCurrentLanguage();
        if (currentLang !== lastLang) {
            lastLang = currentLang;
            updateButtonText();
        }
    }, 1000);
})();
