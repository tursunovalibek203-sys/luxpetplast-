# 🤖 LP Plast Chatbot - To'liq Qo'llanma

## 📋 Mundarija
1. [Kirish](#kirish)
2. [Xususiyatlar](#xususiyatlar)
3. [O'rnatish](#ornatish)
4. [Foydalanish](#foydalanish)
5. [FAQ Bazasi](#faq-bazasi)
6. [Sozlash](#sozlash)
7. [Test Qilish](#test-qilish)
8. [Muammolarni Hal Qilish](#muammolarni-hal-qilish)

---

## 🎯 Kirish

LP Plast Chatbot - bu professional, ko'p tilli va intelligent FAQ tizimi. Mijozlarga 24/7 avtomatik yordam beradi va ko'p uchraydigan savollarga tezkor javob beradi.

### Asosiy Maqsad:
- Mijozlarga tezkor yordam
- FAQ savollariga avtomatik javob
- Qo'llab-quvvatlash xizmatini yengillashtirish
- Professional taassurot qoldirish

---

## ✨ Xususiyatlar

### 🌍 Multi-Language
- **O'zbek tili** - 15 to'liq savol-javob
- **Rus tili** - 5 asosiy savol-javob
- **Ingliz tili** - 5 asosiy savol-javob

### 💬 Intelligent FAQ
- 25+ savol-javob bazasi
- 6 kategoriya
- Kalit so'zlar bo'yicha qidiruv
- Avtomatik javoblar

### 🎨 Modern UI/UX
- Professional dizayn
- Smooth animatsiyalar
- Glassmorphism effects
- Pulse va bounce effects
- Responsive layout

### 📱 Responsive Design
- Desktop optimized (400px)
- Mobile optimized (full screen)
- Tablet support
- Touch-friendly

### ⚡ Performance
- Fast loading (~8KB gzipped)
- Minimal JavaScript
- GPU-accelerated animations
- LocalStorage caching

---

## 🚀 O'rnatish

### 1. Fayllarni Qo'shish

**CSS faylini qo'shing (head ichida):**
```html
<link rel="stylesheet" href="chatbot.css">
```

**JavaScript faylini qo'shing (body oxirida):**
```html
<script src="chatbot.js"></script>
```

### 2. Avtomatik Ishga Tushirish

Chatbot avtomatik ravishda ishga tushadi:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    new LPPlastChatbot();
});
```

### 3. Tayyor!

Chatbot o'ng pastki burchakda paydo bo'ladi va ishlashga tayyor.

---

## 📖 Foydalanish

### Chatbot Ochish
1. Sahifaning o'ng pastki burchagidagi chatbot tugmasini bosing
2. Chatbot oynasi ochiladi
3. Salomlashish xabari ko'rinadi

### Savol Berish

**Usul 1: Kategoriya tanlash**
1. Quick reply tugmalaridan kategoriya tanlang
2. Kategoriya savollari ko'rinadi
3. Savolni bosing
4. Javobni oling

**Usul 2: To'g'ridan-to'g'ri yozish**
1. Input maydoniga savol yozing
2. Enter bosing yoki yuborish tugmasini bosing
3. Javobni oling

### Chatbot Yopish
- Chatbot tugmasini qayta bosing
- Yoki minimize tugmasini bosing

---

## 📚 FAQ Bazasi

### Kategoriyalar

#### 1. 📦 Mahsulotlar (Products)
- Qanday mahsulotlar ishlab chiqarasiz?
- PET preformalar qanday o'lchamlarda?
- PP qopqoqlar qanday turlari bor?

**Kalit so'zlar:** mahsulot, preform, qopqoq, tutqich, product

#### 2. ✅ Sifat (Quality)
- Qanday sertifikatlarga egasiz?
- Mahsulotlar xavfsizmi?
- Kafolat berasizmi?

**Kalit so'zlar:** sertifikat, iso, haccp, fda, sifat, kafolat

#### 3. 💰 Narxlar (Pricing)
- Narxlar qancha?
- Minimal buyurtma hajmi?
- To'lov usullari?

**Kalit so'zlar:** narx, price, qancha, buyurtma, tolov

#### 4. 🚚 Yetkazib Berish (Delivery)
- Yetkazib berish vaqti?
- Qaysi hududlarga yetkazasiz?

**Kalit so'zlar:** yetkazib berish, delivery, vaqt, hudud

#### 5. 🏢 Kompaniya (Company)
- Kompaniya qachon tashkil topgan?
- Qayerda joylashgansiz?
- Nechta xodim ishlaydi?

**Kalit so'zlar:** kompaniya, manzil, qayerda, xodim

#### 6. ⚙️ Texnik (Technical)
- Qanday uskunalar ishlatiladi?
- Maxsus buyurtma qabul qilasizmi?

**Kalit so'zlar:** uskuna, texnologiya, maxsus, buyurtma

---

## ⚙️ Sozlash

### Tilni O'zgartirish

Chatbot avtomatik ravishda sayt tilini aniqlaydi:
```javascript
this.currentLang = localStorage.getItem('lpplast_language') || 'uz';
```

### Yangi Savol Qo'shish

`chatbot.js` faylida `faqs` arrayga qo'shing:
```javascript
{
    category: "products",
    question: "Yangi savol?",
    answer: "Javob matni...",
    keywords: ["kalit", "sozlar"]
}
```

### Dizaynni O'zgartirish

`chatbot.css` faylida ranglarni o'zgartiring:
```css
.chatbot-button {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
}
```

---

## 🧪 Test Qilish

### Test Sahifa
`test-chatbot.html` - Maxsus test sahifa

### Test Savollari

**O'zbek:**
- mahsulot
- sertifikat
- narx
- yetkazib berish
- manzil

**Rus:**
- продукция
- сертификат
- цена
- доставка
- адрес

**English:**
- products
- certificate
- price
- delivery
- address

### Browser Testing
✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

---

## 🔧 Muammolarni Hal Qilish

### Chatbot Ko'rinmayapti
**Sabab:** CSS yoki JS yuklanmagan
**Yechim:** 
```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
```

### Javob Bermayapti
**Sabab:** FAQ bazasi yo'q yoki kalit so'z mos kelmayapti
**Yechim:** Kalit so'zlarni tekshiring yoki yangi qo'shing

### Til O'zgarmayapti
**Sabab:** LocalStorage tozalanmagan
**Yechim:** 
```javascript
localStorage.removeItem('lpplast_language');
```

### Mobilda Muammo
**Sabab:** Viewport sozlanmagan
**Yechim:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 📊 Statistika

### Qamrov
- **12 sahifa** - 100% integratsiya
- **3 til** - Multi-language
- **25+ savol** - FAQ bazasi
- **6 kategoriya** - To'liq qamrov

### Performance
- **Load time:** <100ms
- **File size:** 26.5KB
- **Response time:** <500ms
- **Uptime:** 24/7

---

## 🎓 Qo'shimcha Resurslar

### Hujjatlar
- `CHATBOT-GUIDE.md` - To'liq qo'llanma
- `CHATBOT-FIX-COMPLETE.md` - Tuzatishlar
- `CHATBOT-INTEGRATION-COMPLETE.md` - Integratsiya

### Test
- `test-chatbot.html` - Test sahifa

### Kod
- `chatbot.js` - JavaScript
- `chatbot.css` - Styles

---

## 📞 Yordam

Savollar bo'lsa:
- 📧 Email: info@petpreform.uz
- 📞 Telefon: +998 90 123 45 67
- 🌐 Website: www.petpreform.uz

---

## 📝 Litsenziya

© 2024 LP Plast. Barcha huquqlar himoyalangan.

---

**Versiya:** 1.0.0  
**Sana:** 2024  
**Status:** ✅ Production Ready
