# 🌍 LP Plast - Ko'p Tillilik Tizimi

## Qo'llab-quvvatlanadigan Tillar

- 🇺🇿 **O'zbek** (uz) - Asosiy til
- 🇷🇺 **Русский** (ru) - Rus tili
- 🇬🇧 **English** (en) - Ingliz tili

## Tizim Arxitekturasi

### 1. Fayllar Tuzilishi

```
├── translations.js          # Asosiy tarjima fayli
├── styles-premium.css       # Til almashtirish tugmalari uchun CSS
└── index.html              # data-i18n atributlari bilan
```

### 2. Qanday Ishlaydi

#### A. Tarjimalar Bazasi (translations.js)

```javascript
const translations = {
    uz: {
        nav_home: "Bosh sahifa",
        hero_title: "O'zbekistonning Yetakchi",
        // ...
    },
    ru: {
        nav_home: "Главная",
        hero_title: "Ведущий Производитель",
        // ...
    },
    en: {
        nav_home: "Home",
        hero_title: "Leading Manufacturer",
        // ...
    }
};
```

#### B. HTML Elementlarga Tarjima Qo'shish

```html
<!-- Oddiy matn -->
<h1 data-i18n="hero_title">O'zbekistonning Yetakchi</h1>

<!-- Tugma matni -->
<button data-i18n="btn_quote">Narx So'rash</button>

<!-- Link matni -->
<a href="#" data-i18n="nav_home">Bosh sahifa</a>

<!-- Placeholder -->
<input type="text" data-i18n="form_name" placeholder="Ismingiz">
```

## Yangi Tarjima Qo'shish

### 1. translations.js fayliga qo'shish

```javascript
const translations = {
    uz: {
        new_key: "O'zbek tilidagi matn",
    },
    ru: {
        new_key: "Текст на русском",
    },
    en: {
        new_key: "Text in English",
    }
};
```

### 2. HTML elementga atribut qo'shish

```html
<div data-i18n="new_key">O'zbek tilidagi matn</div>
```

## Til Almashtirish Tugmalari

### Desktop Ko'rinishi
- Header ichida, navigatsiya menyusi yonida
- 3 ta tugma: 🇺🇿 O'zb | 🇷🇺 Рус | 🇬🇧 Eng
- Gradient background va hover effektlar

### Mobile Ko'rinishi
- O'ng pastda fixed position
- Vertikal joylashgan
- Faqat bayroqlar ko'rinadi

## Xususiyatlar

### 1. LocalStorage Saqlash
```javascript
// Tanlangan til localStorage ga saqlanadi
localStorage.setItem('lpplast_language', 'uz');
```

### 2. Avtomatik Yuklash
```javascript
// Sahifa yangilanganida oxirgi tanlangan til yuklanadi
this.currentLang = this.getStoredLanguage() || 'uz';
```

### 3. Smooth Transition
```javascript
// Til o'zgarganda yumshoq o'tish effekti
document.body.style.opacity = '0.7';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 300);
```

### 4. Custom Event
```javascript
// Til o'zgarganda event chiqariladi
window.dispatchEvent(new CustomEvent('languageChanged', { 
    detail: { lang } 
}));
```

## Boshqa Sahifalarga Qo'llash

### 1. Script qo'shish
```html
<head>
    <script src="translations.js"></script>
</head>
```

### 2. data-i18n atributlarini qo'shish
```html
<h1 data-i18n="page_title">Sahifa Sarlavhasi</h1>
<p data-i18n="page_description">Tavsif</p>
```

### 3. Tarjimalarni qo'shish
```javascript
// translations.js fayliga
const translations = {
    uz: {
        page_title: "Sahifa Sarlavhasi",
        page_description: "Tavsif",
    },
    // ru va en uchun ham
};
```

## API

### LanguageManager Class

```javascript
// Til olish
window.langManager.currentLang // 'uz', 'ru', 'en'

// Til o'zgartirish
window.langManager.switchLanguage('ru');

// Tarjima olish
window.langManager.translate('hero_title');

// Event listener
window.addEventListener('languageChanged', (e) => {
    console.log('Yangi til:', e.detail.lang);
});
```

## CSS Customization

### Tugma Ranglari
```css
.lang-btn {
    background: transparent;
    color: var(--gray-600);
}

.lang-btn.active {
    background: var(--gradient-primary);
    color: white;
}
```

### Mobile Position
```css
@media (max-width: 1024px) {
    .language-switcher {
        position: fixed;
        bottom: 80px;
        right: 20px;
    }
}
```

## Tarjima Qo'llanmasi

### Kategoriyalar

1. **Navigation** - nav_*
   - nav_home, nav_products, nav_quality, etc.

2. **Hero Section** - hero_*
   - hero_title, hero_description, hero_btn_*, etc.

3. **Products** - products_*
   - products_title, products_pet_title, etc.

4. **Certifications** - cert_*
   - cert_iso9001_title, cert_haccp_desc, etc.

5. **Common** - common_*
   - common_phone, common_email, common_address

6. **Buttons** - btn_*
   - btn_quote, btn_contact, btn_send

## Performance

- ✅ Minimal JavaScript (< 10KB)
- ✅ LocalStorage caching
- ✅ Lazy loading
- ✅ No external dependencies
- ✅ Fast switching (< 300ms)

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## Kelajakda Qo'shilishi Mumkin

- [ ] Avtomatik til aniqlash (browser language)
- [ ] URL parametr orqali til (example.com?lang=ru)
- [ ] Dinamik tarjima yuklash (JSON files)
- [ ] Admin panel tarjimalar uchun
- [ ] Tarjima eksport/import (CSV, JSON)

## Muammolarni Hal Qilish

### Tarjima ko'rinmayapti
1. `data-i18n` atributi to'g'ri yozilganini tekshiring
2. `translations.js` faylida kalit mavjudligini tekshiring
3. Browser console da xatolarni tekshiring

### Til saqlanmayapti
1. LocalStorage yoqilganini tekshiring
2. Browser privacy mode emas ekanligini tekshiring

### Tugmalar ko'rinmayapti
1. `styles-premium.css` yuklangan ekanligini tekshiring
2. CSS konfliktlarini tekshiring

## Yordam

Savollar yoki muammolar bo'lsa:
- 📧 Email: info@lpplast.uz
- 📞 Telefon: +998 90 123 45 67

---

**Yaratilgan:** 2024
**Versiya:** 1.0.0
**Muallif:** LP Plast Development Team
