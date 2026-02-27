# 🌍 LP PLAST - TIL TIZIMI QO'LLANMA

## ✅ NIMA QILINDI

### 1. LOGO YANGILANDI
- ✅ Logo fayl: `1659435845912995954.jpg`
- ✅ Yangi nom: `images/logo-lpplast.jpg`
- ✅ `index.html` da yangilandi (2 joyda)
- ✅ Header va Footer da ko'rinadi

### 2. TARJIMA TIZIMI TO'LIQ QAYTA YOZILDI
- ✅ Har bir bo'lim uchun alohida tarjimalar
- ✅ 3 til: O'zbek, Rus, Ingliz
- ✅ Jami 60 ta tarjima kaliti
- ✅ Debug rejimi qo'shildi (console.log)

---

## 📋 BO'LIMLAR VA TARJIMALAR

### 1. NAVIGATSIYA (6 ta)
```
nav_home        → Bosh sahifa / Главная / Home
nav_products    → Mahsulotlar / Продукция / Products
nav_quality     → Sifat / Качество / Quality
nav_gallery     → Galeriya / Галерея / Gallery
nav_about       → Biz haqimizda / О нас / About Us
nav_contact     → Kontaktlar / Контакты / Contact
```

### 2. HERO BO'LIMI (9 ta)
```
hero_badge      → Sertifikat belgisi
hero_title_1    → Sarlavha 1-qism
hero_title_2    → Sarlavha 2-qism
hero_title_3    → Sarlavha 3-qism
hero_description → Tavsif matni
hero_stat_1     → Yillik Tajriba
hero_stat_2     → Kunlik Quvvat
hero_stat_3     → Hamkorlar
hero_stat_4     → Mamnuniyat
```

### 3. SERTIFIKATLAR (15 ta)
```
cert_badge          → Bo'lim belgisi
cert_title          → Bo'lim sarlavhasi
cert_description    → Bo'lim tavsifi
cert_iso9001_title  → ISO 9001:2015
cert_iso9001_desc   → ISO 9001 tavsifi
cert_iso22000_title → ISO 22000:2018
cert_iso22000_desc  → ISO 22000 tavsifi
cert_haccp_title    → HACCP
cert_haccp_desc     → HACCP tavsifi
cert_fda_title      → FDA Approved
cert_fda_desc       → FDA tavsifi
cert_gmp_title      → GMP Certified
cert_gmp_desc       → GMP tavsifi
cert_eco_title      → Ekologik Sertifikat
cert_eco_desc       → Ekologik tavsifi
```

### 4. MAHSULOTLAR (10 ta)
```
products_badge          → Bo'lim belgisi
products_title          → Bo'lim sarlavhasi
products_description    → Bo'lim tavsifi
products_pet_title      → PET Preformalar
products_pet_desc       → PET tavsifi
products_pp_title       → PP Qopqoqlar
products_pp_desc        → PP tavsifi
products_handles_title  → Tutqichlar
products_handles_desc   → Tutqichlar tavsifi
products_details        → Batafsil Ma'lumot
```

### 5. USTUNLIKLAR (15 ta)
```
why_badge           → Bo'lim belgisi
why_title           → Bo'lim sarlavhasi
why_description     → Bo'lim tavsifi
why_tech_title      → Zamonaviy Texnologiyalar
why_tech_desc       → Texnologiya tavsifi
why_team_title      → Professional Jamoa
why_team_desc       → Jamoa tavsifi
why_capacity_title  → Yuqori Quvvat
why_capacity_desc   → Quvvat tavsifi
why_delivery_title  → Tezkor Yetkazish
why_delivery_desc   → Yetkazish tavsifi
why_quality_title   → Sifat Kafolati
why_quality_desc    → Sifat tavsifi
why_price_title     → Raqobatbardosh Narxlar
why_price_desc      → Narx tavsifi
```

### 6. FOOTER (5 ta)
```
footer_description  → Kompaniya tavsifi
footer_pages        → Sahifalar
footer_contact      → Kontakt
footer_rights       → Huquqlar matni
common_location     → Toshkent, O'zbekiston
```

---

## 🧪 QANDAY TEKSHIRISH

### 1. Test Sahifani Oching
```
test-til.html
```

### 2. Brauzer Konsolini Oching
- F12 tugmasini bosing
- "Console" tabini tanlang

### 3. Quyidagi Xabarlarni Ko'ring
```
🚀 translations.js fayli yuklandi
📄 Sahifa yuklandi
🌍 Til tizimi ishga tushdi. Joriy til: uz
⚙️ Til tizimi sozlanmoqda...
🔧 Til tugmalari yaratilmoqda...
✅ Til tugmalari qo'shildi
🔗 Hodisalar bog'lanmoqda...
🔘 Topilgan tugmalar: 3
📝 Tarjimalar qo'llanmoqda: uz
✅ Tarjimalar qo'llandi: XX ta element
✅ Til tizimi tayyor!
```

### 4. Til Tugmasini Bosing
- 🇺🇿 O'zb - O'zbek tili
- 🇷🇺 Рус - Rus tili
- 🇬🇧 Eng - Ingliz tili

### 5. Konsolda Ko'ring
```
🖱️ Tugma bosildi: ru
🔄 Til almashtirilmoqda: uz → ru
💾 Til saqlandi: ru
📝 Tarjimalar qo'llanmoqda: ru
✅ Tarjimalar qo'llandi: XX ta element
✅ Til almashtirildi: ru
```

---

## ❌ AGAR ISHLAMASA

### Muammo 1: Til tugmalari ko'rinmaydi
**Sabab:** CSS yuklanmagan
**Yechim:**
1. `styles-corporate.css` faylini tekshiring
2. Brauzer konsolida xatolarni ko'ring
3. Sahifani yangilang (Ctrl+F5)

### Muammo 2: Matnlar o'zgarmayd
**Sabab:** `data-i18n` atributlari yo'q
**Yechim:**
1. HTML elementda `data-i18n="kalit_nomi"` borligini tekshiring
2. `translations.js` da kalit borligini tekshiring
3. Konsolda xatolarni ko'ring

### Muammo 3: Console da xatolar
**Sabab:** JavaScript xatosi
**Yechim:**
1. F12 bosing va Console ni oching
2. Qizil xatolarni o'qing
3. Xato qatorini toping va tuzating

### Muammo 4: Logo ko'rinmaydi
**Sabab:** Fayl yo'li noto'g'ri
**Yechim:**
1. `images/logo-lpplast.jpg` fayl borligini tekshiring
2. Fayl nomini to'g'ri yozganingizni tekshiring
3. Brauzer konsolida 404 xatosini qidiring

---

## 🔧 QANDAY ISHLAYDI

### 1. Sahifa Yuklanganda
```javascript
1. translations.js fayli yuklanadi
2. LanguageManager sinfi yaratiladi
3. LocalStorage dan oxirgi til o'qiladi
4. Til tugmalari yaratiladi
5. Barcha data-i18n elementlar tarjima qilinadi
```

### 2. Til Tugmasi Bosilganda
```javascript
1. Tugma bosiladi
2. switchLanguage() funksiyasi chaqiriladi
3. Yangi til LocalStorage ga saqlanadi
4. Tugmalar yangilanadi (active class)
5. applyLanguage() barcha matnlarni yangilaydi
6. Chatbot ham yangilanadi (agar mavjud bo'lsa)
```

### 3. Tarjima Qo'llanishi
```javascript
1. Barcha [data-i18n] elementlar topiladi
2. Har bir element uchun:
   - data-i18n atributi o'qiladi
   - translations[til][kalit] topiladi
   - Element matni yangilanadi
3. HTML lang atributi yangilanadi
4. languageChanged hodisasi yuboriladi
```

---

## 📝 YANGI TARJIMA QO'SHISH

### 1. HTML ga qo'shing
```html
<span data-i18n="yangi_kalit">O'zbek matni</span>
```

### 2. translations.js ga qo'shing
```javascript
uz: {
    yangi_kalit: "O'zbek matni"
},
ru: {
    yangi_kalit: "Русский текст"
},
en: {
    yangi_kalit: "English text"
}
```

### 3. Sahifani yangilang
```
Ctrl + F5
```

---

## 🎯 MUHIM ESLATMALAR

1. **Har doim 3 tilga tarjima qo'shing** - O'zbek, Rus, Ingliz
2. **Kalit nomlarini bir xil yozing** - uz, ru, en da
3. **data-i18n atributini unutmang** - HTML da
4. **Console ni tekshiring** - Xatolarni ko'rish uchun
5. **LocalStorage ni tozalang** - Agar muammo bo'lsa

---

## 🚀 ISHGA TUSHIRISH

### 1. Asosiy Sahifa
```
index.html ni brauzerda oching
```

### 2. Test Sahifa
```
test-til.html ni brauzerda oching
```

### 3. Til Tugmalarini Bosing
```
🇺🇿 O'zb → 🇷🇺 Рус → 🇬🇧 Eng
```

### 4. Natijani Ko'ring
```
Barcha matnlar o'zgarishi kerak!
```

---

## ✅ TAYYOR!

Agar barcha qadamlarni to'g'ri bajarsangiz:
- ✅ Logo ko'rinadi
- ✅ Til tugmalari ishlaydi
- ✅ Matnlar o'zgaradi
- ✅ Til saqlanadi (LocalStorage)
- ✅ Console da xatolar yo'q

---

## 📞 YORDAM

Agar muammo bo'lsa:
1. F12 bosing va Console ni oching
2. Qizil xatolarni screenshot qiling
3. Xato matnini yuboring

**Omad! 🎉**
