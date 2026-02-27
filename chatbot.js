/* ============================================
   LP PLAST - INTELLIGENT CHATBOT
   Professional FAQ & Support System
   ============================================ */

const chatbotData = {
    uz: {
        greeting: "Assalomu alaykum! LP Plast kompaniyasining virtual yordamchisiman. Sizga qanday yordam bera olaman?",
        categories: {
            products: "Mahsulotlar",
            quality: "Sifat va Sertifikatlar",
            pricing: "Narxlar va Buyurtma",
            delivery: "Yetkazib berish",
            company: "Kompaniya haqida",
            technical: "Texnik ma'lumotlar"
        },
        faqs: [
            // Mahsulotlar
            {
                category: "products",
                question: "Qanday mahsulotlar ishlab chiqarasiz?",
                answer: "Biz 3 asosiy mahsulot turini ishlab chiqaramiz:\n\n1. **PET Preformalar** - 12g dan 30g gacha, turli hajm va ranglar\n2. **PP Qopqoqlar** - 28mm, 30mm, 38mm o'lchamlarda\n3. **Tutqichlar (Handles)** - 5L, 10L, 19L idishlar uchun\n\nBarcha mahsulotlar 100% Virgin material bilan ishlab chiqariladi.",
                keywords: ["mahsulot", "nima", "ishlab chiqarish", "product", "preform", "qopqoq", "tutqich"]
            },
            {
                category: "products",
                question: "PET preformalar qanday o'lchamlarda mavjud?",
                answer: "PET preformalarimiz quyidagi o'lchamlarda mavjud:\n\n• **Og'irligi**: 12g, 16g, 18g, 24g, 28g, 30g\n• **Bo'yin o'lchami**: PCO 1881, PCO 2925\n• **Ranglar**: Shaffof, ko'k, yashil, jigarrang\n• **Hajm**: 0.5L dan 5L gacha\n\nMaxsus buyurtmalar uchun individual o'lchamlar ham tayyorlaymiz.",
                keywords: ["preform", "o'lcham", "hajm", "size", "pet", "gramm"]
            },
            {
                category: "products",
                question: "PP qopqoqlar qanday turlari bor?",
                answer: "PP qopqoqlarimiz:\n\n• **28mm** - Gazli ichimliklar uchun\n• **30mm** - Universal qopqoqlar\n• **38mm** - Katta idishlar uchun\n\n**Xususiyatlari**:\n- Yuqori sifatli PP material\n- Gazli va gazsiz ichimliklar uchun\n- Turli ranglar (oq, qizil, ko'k, yashil)\n- Maxsus dizaynlar mavjud",
                keywords: ["qopqoq", "cap", "pp", "o'lcham", "tur", "type"]
            },
            {
                category: "quality",
                question: "Qanday sertifikatlarga egasiz?",
                answer: "Bizning sertifikatlarimiz:\n\n✅ **ISO 9001:2015** - Sifat menejmenti tizimi\n✅ **ISO 22000:2018** - Oziq-ovqat xavfsizligi\n✅ **HACCP** - Xavf tahlili va nazorat\n✅ **FDA Approved** - AQSh standartlari\n✅ **GMP Certified** - Yaxshi ishlab chiqarish amaliyoti\n✅ **Ekologik Sertifikat** - Atrof-muhit xavfsizligi\n\nBarcha sertifikatlar 2023-yilda yangilangan.",
                keywords: ["sertifikat", "iso", "haccp", "fda", "sifat", "quality", "certificate"]
            },
            {
                category: "quality",
                question: "Mahsulotlaringiz oziq-ovqat uchun xavfsizmi?",
                answer: "Ha, 100% xavfsiz! ✅\n\n**Kafolatlar**:\n• ISO 22000:2018 sertifikati\n• FDA tasdiqlangan materiallar\n• 100% Virgin PET va PP\n• Oziq-ovqat uchun maxsus ishlab chiqarilgan\n• Har bir partiya laboratoriya tekshiruvidan o'tadi\n• HACCP standartlariga mos\n\nMahsulotlarimiz suv, ichimliklar va oziq-ovqat mahsulotlari uchun to'liq xavfsiz.",
                keywords: ["xavfsiz", "oziq-ovqat", "food", "safe", "virgin", "material"]
            },
            {
                category: "pricing",
                question: "Narxlar qancha?",
                answer: "Narxlar quyidagi omillarga bog'liq:\n\n📊 **Asosiy omillar**:\n• Mahsulot turi va o'lchami\n• Buyurtma hajmi (ko'p bo'lsa - arzonroq)\n• Material turi (shaffof/rangli)\n• Yetkazib berish masofasi\n\n💰 **Minimal buyurtma**:\n• PET preformalar: 50,000 dona\n• PP qopqoqlar: 100,000 dona\n• Tutqichlar: 10,000 dona\n\n📞 Aniq narx uchun: +998 90 123 45 67\n📧 Email: info@petpreform.uz",
                keywords: ["narx", "price", "qancha", "cost", "pul", "money"]
            },
            {
                category: "pricing",
                question: "Minimal buyurtma hajmi qancha?",
                answer: "Minimal buyurtma hajmlari:\n\n📦 **PET Preformalar**: 50,000 dona\n📦 **PP Qopqoqlar**: 100,000 dona\n📦 **Tutqichlar**: 10,000 dona\n\n💡 **Eslatma**: Katta hajmli buyurtmalar uchun maxsus chegirmalar mavjud!\n\nTest buyurtmalari uchun ham kelishish mumkin.",
                keywords: ["minimal", "minimum", "buyurtma", "order", "hajm", "miqdor"]
            },
            {
                category: "delivery",
                question: "Yetkazib berish qancha vaqt oladi?",
                answer: "⏱️ **Yetkazib berish muddatlari**:\n\n• **Toshkent shahri**: 1-2 kun\n• **O'zbekiston bo'ylab**: 3-5 kun\n• **MDH davlatlari**: 7-14 kun\n• **Maxsus buyurtmalar**: 15-20 kun\n\n🚚 **Yetkazib berish**:\n• Bepul yetkazib berish (katta buyurtmalar)\n• O'z transportimiz mavjud\n• Xalqaro yuk tashish\n• Kafolatlangan xavfsiz yetkazish",
                keywords: ["yetkazib berish", "delivery", "vaqt", "time", "qachon", "when", "transport"]
            },
            {
                category: "delivery",
                question: "Qaysi hududlarga yetkazib berasiz?",
                answer: "🌍 **Yetkazib berish hududlari**:\n\n✅ **O'zbekiston**: Barcha viloyatlar\n✅ **Qozog'iston**\n✅ **Qirg'iziston**\n✅ **Tojikiston**\n✅ **Turkmaniston**\n✅ **Rossiya** (ayrim hududlar)\n\n📍 Boshqa davlatlar uchun individual kelishuv mumkin.\n\n🚚 O'z transport parkimiz va ishonchli hamkorlarimiz orqali xavfsiz yetkazib beramiz.",
                keywords: ["hudud", "region", "qayerga", "where", "davlat", "country", "eksport"]
            },
            {
                category: "company",
                question: "Kompaniya qachon tashkil topgan?",
                answer: "🏭 **LP Plast tarixi**:\n\n📅 **2018-yil** - Kompaniya tashkil topgan\n📈 **6+ yillik** tajriba\n🏆 **200+ mijoz** O'zbekiston va MDH davlatlarida\n⚙️ **200,000+ dona** kunlik ishlab chiqarish quvvati\n\n**Texnologiyalar**:\n• HUSKY (Kanada) - PET preformalar\n• NETSTAL (Shveytsariya) - PP mahsulotlar\n\nZamonaviy Yevropa uskunalari bilan jihozlangan.",
                keywords: ["kompaniya", "company", "qachon", "when", "tarix", "history", "haqida"]
            },
            {
                category: "company",
                question: "Qayerda joylashgansiz?",
                answer: "📍 **Manzil**: Toshkent, O'zbekiston\n\n📞 **Telefon**: +998 90 123 45 67\n📧 **Email**: info@petpreform.uz\n🌐 **Website**: www.petpreform.uz\n\n⏰ **Ish vaqti**:\nDushanba - Shanba: 09:00 - 18:00\nYakshanba: Dam olish\n\n🏭 Zavodimizga tashrif buyurish uchun oldindan kelishib oling!",
                keywords: ["manzil", "address", "qayerda", "where", "joylashgan", "location"]
            },
            {
                category: "technical",
                question: "Qanday uskunalar ishlatiladi?",
                answer: "🏭 **Zamonaviy uskunalar**:\n\n**PET Preformalar**:\n• HUSKY (Kanada) - Injection molding\n• Avtomatik sifat nazorati\n• 24/7 ishlab chiqarish\n\n**PP Mahsulotlar**:\n• NETSTAL (Shveytsariya)\n• Yuqori aniqlik va sifat\n• Energiya tejovchi texnologiya\n\n**Sifat nazorati**:\n• Zamonaviy laboratoriya\n• Har bir partiya tekshiruvi\n• ISO standartlari bo'yicha",
                keywords: ["uskuna", "equipment", "texnologiya", "technology", "mashina", "husky", "netstal"]
            },
            {
                category: "technical",
                question: "Maxsus buyurtma qabul qilasizmi?",
                answer: "✅ Ha, maxsus buyurtmalar qabul qilamiz!\n\n**Imkoniyatlar**:\n• Maxsus o'lchamlar\n• Individual dizayn\n• Logotip va brending\n• Noyob ranglar\n• Maxsus qadoqlash\n\n📋 **Jarayon**:\n1. Texnik topshiriq tayyorlash\n2. Namuna ishlab chiqarish\n3. Tasdiqlash\n4. Asosiy ishlab chiqarish\n\n⏱️ Muddati: 20-30 kun\n💰 Minimal buyurtma: kelishiladi\n\n📞 Batafsil: +998 90 123 45 67",
                keywords: ["maxsus", "custom", "individual", "buyurtma", "order", "dizayn"]
            },
            {
                category: "pricing",
                question: "To'lov usullari qanday?",
                answer: "💳 **To'lov usullari**:\n\n✅ **Naqd pul** - O'zbekiston uchun\n✅ **Bank o'tkazmasi** - Barcha mijozlar\n✅ **Valyuta** - Eksport uchun (USD, EUR)\n✅ **Kredit** - Doimiy mijozlar uchun\n\n📋 **To'lov shartlari**:\n• Oldindan to'lov: 30-50%\n• Qolgan qism: yetkazib berishda\n• Doimiy mijozlar: maxsus shartlar\n\n📄 Barcha hujjatlar rasmiy ravishda rasmiylashtiriladi.",
                keywords: ["to'lov", "payment", "pul", "money", "bank", "naqd"]
            },
            {
                category: "quality",
                question: "Kafolat berasizmi?",
                answer: "✅ **Ha, to'liq kafolat beramiz!**\n\n🛡️ **Kafolat shartlari**:\n• Ishlab chiqarish nuqsonlari: 100% almashtirish\n• Sifat kafolati: ISO standartlari\n• Transport shikastlanishi: sug'urta\n\n📋 **Tekshirish**:\n• Har bir partiya sertifikati\n• Laboratoriya xulosasi\n• Sifat pasporti\n\n⚠️ **Eslatma**: Noto'g'ri saqlash va ishlatish kafolatga kirmaydi.\n\n📞 Muammo bo'lsa: +998 90 123 45 67",
                keywords: ["kafolat", "warranty", "guarantee", "sifat", "quality", "muammo"]
            },
            {
                category: "company",
                question: "Nechta xodim ishlaydi?",
                answer: "👥 **Jamoa**:\n\n• **100+ xodim** - Jami\n• **50+ ishchi** - Ishlab chiqarish\n• **20+ muhandis** - Texnik xizmat\n• **15+ mutaxassis** - Sifat nazorati\n• **15+ xodim** - Boshqaruv va sotish\n\n🎓 **Malaka**:\n• Professional ta'lim\n• Doimiy treninglar\n• Xalqaro tajriba\n• Yuqori malaka\n\nJamoamiz - bizning kuchimiz! 💪",
                keywords: ["xodim", "employee", "jamoa", "team", "ishchi", "worker"]
            }
        ]
    },
    ru: {
        greeting: "Здравствуйте! Я виртуальный помощник компании LP Plast. Чем могу помочь?",
        categories: {
            products: "Продукция",
            quality: "Качество и Сертификаты",
            pricing: "Цены и Заказ",
            delivery: "Доставка",
            company: "О компании",
            technical: "Техническая информация"
        },
        faqs: [
            {
                category: "products",
                question: "Какую продукцию вы производите?",
                answer: "Мы производим 3 основных вида продукции:\n\n1. **PET Преформы** - от 12г до 30г, различные объемы и цвета\n2. **PP Крышки** - размеры 28мм, 30мм, 38мм\n3. **Ручки (Handles)** - для емкостей 5L, 10L, 19L\n\nВся продукция изготовлена из 100% Virgin материала.",
                keywords: ["продукция", "производство", "product", "preform", "крышка", "ручка", "что"]
            },
            {
                category: "quality",
                question: "Какие у вас сертификаты?",
                answer: "Наши сертификаты:\n\n✅ **ISO 9001:2015** - Система менеджмента качества\n✅ **ISO 22000:2018** - Безопасность пищевых продуктов\n✅ **HACCP** - Анализ рисков и контроль\n✅ **FDA Approved** - Стандарты США\n✅ **GMP Certified** - Надлежащая производственная практика\n✅ **Экологический Сертификат**\n\nВсе сертификаты обновлены в 2023 году.",
                keywords: ["сертификат", "iso", "haccp", "fda", "качество", "quality"]
            },
            {
                category: "pricing",
                question: "Сколько стоит?",
                answer: "Цены зависят от:\n\n📊 **Основные факторы**:\n• Тип и размер продукции\n• Объем заказа (больше - дешевле)\n• Тип материала (прозрачный/цветной)\n• Расстояние доставки\n\n💰 **Минимальный заказ**:\n• PET преформы: 50,000 шт\n• PP крышки: 100,000 шт\n• Ручки: 10,000 шт\n\n📞 Точная цена: +998 90 123 45 67\n📧 Email: info@petpreform.uz",
                keywords: ["цена", "price", "сколько", "cost", "стоимость"]
            },
            {
                category: "delivery",
                question: "Сроки доставки?",
                answer: "⏱️ **Сроки доставки**:\n\n• **Ташкент**: 1-2 дня\n• **По Узбекистану**: 3-5 дней\n• **Страны СНГ**: 7-14 дней\n• **Спецзаказы**: 15-20 дней\n\n🚚 Бесплатная доставка для крупных заказов!",
                keywords: ["доставка", "delivery", "срок", "время", "когда"]
            },
            {
                category: "company",
                question: "Где вы находитесь?",
                answer: "📍 **Адрес**: Ташкент, Узбекистан\n\n📞 **Телефон**: +998 90 123 45 67\n📧 **Email**: info@petpreform.uz\n\n⏰ **Рабочее время**:\nПонедельник - Суббота: 09:00 - 18:00\nВоскресенье: Выходной",
                keywords: ["адрес", "address", "где", "where", "находится", "location"]
            }
        ]
    },
    en: {
        greeting: "Hello! I'm LP Plast's virtual assistant. How can I help you?",
        categories: {
            products: "Products",
            quality: "Quality & Certificates",
            pricing: "Pricing & Orders",
            delivery: "Delivery",
            company: "About Company",
            technical: "Technical Info"
        },
        faqs: [
            {
                category: "products",
                question: "What products do you manufacture?",
                answer: "We manufacture 3 main product types:\n\n1. **PET Preforms** - 12g to 30g, various volumes and colors\n2. **PP Caps** - 28mm, 30mm, 38mm sizes\n3. **Handles** - for 5L, 10L, 19L containers\n\nAll products made from 100% Virgin material.",
                keywords: ["product", "manufacture", "preform", "cap", "handle", "what"]
            },
            {
                category: "quality",
                question: "What certificates do you have?",
                answer: "Our certificates:\n\n✅ **ISO 9001:2015** - Quality management system\n✅ **ISO 22000:2018** - Food safety\n✅ **HACCP** - Risk analysis and control\n✅ **FDA Approved** - US standards\n✅ **GMP Certified** - Good manufacturing practice\n✅ **Eco Certificate**\n\nAll certificates updated in 2023.",
                keywords: ["certificate", "iso", "haccp", "fda", "quality"]
            },
            {
                category: "pricing",
                question: "What are the prices?",
                answer: "Prices depend on:\n\n📊 **Main factors**:\n• Product type and size\n• Order volume (more = cheaper)\n• Material type (clear/colored)\n• Delivery distance\n\n💰 **Minimum order**:\n• PET preforms: 50,000 pcs\n• PP caps: 100,000 pcs\n• Handles: 10,000 pcs\n\n📞 Exact price: +998 90 123 45 67\n📧 Email: info@petpreform.uz",
                keywords: ["price", "cost", "how much", "pricing"]
            },
            {
                category: "delivery",
                question: "Delivery time?",
                answer: "⏱️ **Delivery times**:\n\n• **Tashkent city**: 1-2 days\n• **Uzbekistan**: 3-5 days\n• **CIS countries**: 7-14 days\n• **Custom orders**: 15-20 days\n\n🚚 Free delivery for large orders!",
                keywords: ["delivery", "time", "when", "shipping"]
            },
            {
                category: "company",
                question: "Where are you located?",
                answer: "📍 **Address**: Tashkent, Uzbekistan\n\n📞 **Phone**: +998 90 123 45 67\n📧 **Email**: info@petpreform.uz\n\n⏰ **Working hours**:\nMonday - Saturday: 09:00 AM - 06:00 PM\nSunday: Closed",
                keywords: ["address", "where", "location", "find"]
            }
        ]
    }
};

// Chatbot Class
class LPPlastChatbot {
    constructor() {
        this.currentLang = localStorage.getItem('lpplast_language') || 'uz';
        this.isOpen = false;
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
        
        // Listen for language changes
        window.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.updateChatbotLanguage();
        });
    }

    createChatWidget() {
        // Get current language texts
        const texts = this.getChatbotTexts();
        
        const widget = document.createElement('div');
        widget.innerHTML = `
            <!-- Chat Button -->
            <button id="chatbot-button" class="chatbot-button" title="${texts.buttonTitle}">
                <svg class="chatbot-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <svg class="chatbot-close-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span class="chatbot-badge">1</span>
            </button>

            <!-- Chat Window -->
            <div id="chatbot-window" class="chatbot-window">
                <div class="chatbot-header">
                    <div class="chatbot-header-info">
                        <div class="chatbot-avatar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </div>
                        <div>
                            <div class="chatbot-title">${texts.title}</div>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                ${texts.status}
                            </div>
                        </div>
                    </div>
                    <button class="chatbot-minimize">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
                
                <div class="chatbot-messages" id="chatbot-messages">
                    <!-- Messages will be added here -->
                </div>
                
                <div class="chatbot-quick-replies" id="chatbot-quick-replies">
                    <!-- Quick reply buttons -->
                </div>
                
                <div class="chatbot-input-area">
                    <input type="text" id="chatbot-input" class="chatbot-input" placeholder="${texts.placeholder}">
                    <button id="chatbot-send" class="chatbot-send-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
    }

    getChatbotTexts() {
        const texts = {
            uz: {
                buttonTitle: "Yordam kerakmi?",
                title: "LP Plast Yordamchi",
                status: "Online",
                placeholder: "Savolingizni yozing..."
            },
            ru: {
                buttonTitle: "Нужна помощь?",
                title: "Помощник LP Plast",
                status: "Онлайн",
                placeholder: "Напишите ваш вопрос..."
            },
            en: {
                buttonTitle: "Need help?",
                title: "LP Plast Assistant",
                status: "Online",
                placeholder: "Type your question..."
            }
        };
        
        return texts[this.currentLang] || texts.uz;
    }

    attachEventListeners() {
        const button = document.getElementById('chatbot-button');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const minimize = document.querySelector('.chatbot-minimize');

        button.addEventListener('click', () => this.toggleChat());
        minimize.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Show welcome message
        setTimeout(() => this.showWelcomeMessage(), 1000);
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        const button = document.getElementById('chatbot-button');
        const badge = document.querySelector('.chatbot-badge');
        
        if (this.isOpen) {
            window.classList.add('active');
            button.classList.add('active');
            if (badge) badge.style.display = 'none';
        } else {
            window.classList.remove('active');
            button.classList.remove('active');
        }
    }

    showWelcomeMessage() {
        const data = chatbotData[this.currentLang];
        
        if (!data || !data.greeting) {
            this.addMessage('Assalomu alaykum! LP Plast kompaniyasining virtual yordamchisiman. Sizga qanday yordam bera olaman?', 'bot');
        } else {
            this.addMessage(data.greeting, 'bot');
        }
        
        this.showQuickReplies();
    }

    updateChatbotLanguage() {
        // Get texts for current language
        const texts = this.getChatbotTexts();
        
        // Clear messages
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
        }
        
        // Update chatbot title and status
        const title = document.querySelector('.chatbot-title');
        const status = document.querySelector('.chatbot-status');
        const input = document.getElementById('chatbot-input');
        const button = document.getElementById('chatbot-button');
        
        if (title) title.textContent = texts.title;
        if (status) status.innerHTML = `<span class="status-dot"></span>${texts.status}`;
        if (input) input.placeholder = texts.placeholder;
        if (button) button.title = texts.buttonTitle;
        
        // Show welcome message in new language
        this.showWelcomeMessage();
    }

    showQuickReplies() {
        const data = chatbotData[this.currentLang];
        const container = document.getElementById('chatbot-quick-replies');
        
        if (!container || !data || !data.categories) return;
        
        container.innerHTML = '';
        
        Object.entries(data.categories).forEach(([key, value]) => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-btn';
            btn.textContent = value;
            btn.onclick = () => this.handleCategoryClick(key);
            container.appendChild(btn);
        });
    }

    handleCategoryClick(category) {
        const data = chatbotData[this.currentLang];
        
        if (!data || !data.faqs || !data.categories) return;
        
        const questions = data.faqs.filter(faq => faq.category === category);
        
        if (questions.length === 0) {
            this.addMessage('Bu kategoriyada savollar topilmadi.', 'bot');
            return;
        }
        
        this.addMessage(`${data.categories[category]} bo'yicha savollar:`, 'bot');
        
        questions.forEach((faq, index) => {
            setTimeout(() => {
                this.addMessage(faq.question, 'bot', true, () => {
                    this.addMessage(faq.answer, 'bot');
                });
            }, index * 100);
        });
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // Find answer
        setTimeout(() => {
            const answer = this.findAnswer(message);
            this.addMessage(answer, 'bot');
        }, 500);
    }

    findAnswer(question) {
        const data = chatbotData[this.currentLang];
        const lowerQuestion = question.toLowerCase();
        
        // Check if data and faqs exist
        if (!data || !data.faqs) {
            return `Kechirasiz, xatolik yuz berdi. 😔\n\n📞 +998 90 123 45 67\n📧 info@petpreform.uz`;
        }
        
        // Search in FAQs
        for (const faq of data.faqs) {
            // Check if keywords exist
            if (faq.keywords && Array.isArray(faq.keywords)) {
                for (const keyword of faq.keywords) {
                    if (lowerQuestion.includes(keyword.toLowerCase())) {
                        return faq.answer;
                    }
                }
            }
        }
        
        // Default response based on language
        if (this.currentLang === 'ru') {
            return `Извините, я не нашел ответ на этот вопрос. 😔\n\nВыберите одну из категорий или свяжитесь напрямую:\n\n📞 +998 90 123 45 67\n📧 info@petpreform.uz`;
        } else if (this.currentLang === 'en') {
            return `Sorry, I couldn't find an answer to this question. 😔\n\nPlease select a category or contact us directly:\n\n📞 +998 90 123 45 67\n📧 info@petpreform.uz`;
        } else {
            return `Kechirasiz, bu savolga javob topa olmadim. 😔\n\nQuyidagilardan birini tanlang yoki to'g'ridan-to'g'ri bog'laning:\n\n📞 +998 90 123 45 67\n📧 info@petpreform.uz`;
        }
    }

    addMessage(text, sender, isClickable = false, onClick = null) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        
        if (isClickable) {
            messageDiv.style.cursor = 'pointer';
            messageDiv.onclick = onClick;
            messageDiv.classList.add('clickable');
        }
        
        // Format message with markdown-like syntax
        const formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        
        messageDiv.innerHTML = `
            ${sender === 'bot' ? '<div class="message-avatar">🤖</div>' : ''}
            <div class="message-content">${formattedText}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    new LPPlastChatbot();
});
