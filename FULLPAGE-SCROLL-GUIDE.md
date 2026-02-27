# 🎬 Samplast Style Fullpage Scroll Guide

## ⚠️ MUHIM: Opsional Feature

Bu fullpage scroll **OPSIONAL** - faqat kerak bo'lganda yoqiladi!

### 📁 Fayllar:

1. **index.html** - Oddiy scroll (default)
2. **index-fullpage.html** - Fullpage scroll yoqilgan

## 🚀 Qanday Yoqish

### Variant 1: Body ga class qo'shish

```html
<body class="fullpage-enabled">
```

### Variant 2: Data attribute

```html
<body data-fullpage>
```

### Variant 3: JavaScript orqali

```javascript
document.body.classList.add('fullpage-enabled');
// Keyin sahifani reload qiling
location.reload();
```

## 🎯 Nima Bu?

Har bir section alohida "sahifa" sifatida ishlaydi. Scroll qilganda:
1. Hozirgi section tepaga suriladi
2. Keyingi section ostidan reveal bo'ladi
3. Smooth va professional animatsiya

```
┌─────────────────┐
│   Hero Section  │ ← Fixed, z-index: 7
└─────────────────┘
        ↓ Scroll
┌─────────────────┐
│   Hero Section  │ ← Tepaga slide (-100%)
└─────────────────┘
┌─────────────────┐
│  Products       │ ← Reveal bo'ldi!
└─────────────────┘
```

## 📋 Xususiyatlar

### ✅ Asosiy Funksiyalar:

1. **Layered Scrolling** - Sections ustma-ust
2. **Smooth Animations** - 800ms professional
3. **Dot Navigation** - O'ng tarafda indicator
4. **Arrow Navigation** - Pastda up/down arrows
5. **Keyboard Support** - ↑↓ arrows, PageUp/Down, Home/End
6. **Mouse Wheel** - Scroll wheel support
7. **Touch Gestures** - Mobile swipe
8. **Responsive** - Mobile optimized

### 🎨 Samplast Uslubi:

- **Duration:** 800ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Direction:** Vertical only
- **Style:** Industrial, professional
- **Colors:** Blue gradient (#2563eb)

## 🚀 Qanday Ishlatish

### 1. Fayllarni Qo'shing:

```html
<!-- CSS -->
<link rel="stylesheet" href="fullpage-scroll.css">

<!-- JavaScript -->
<script src="fullpage-scroll.js"></script>
```

### 2. HTML Strukturasi:

Hech narsa o'zgartirmasangiz ham ishlaydi! Script avtomatik barcha `.section` va `.hero-corporate` ni topadi:

```html
<!-- Hero Section -->
<section class="hero-corporate" id="home">
    <!-- Content -->
</section>

<!-- Products Section -->
<section class="section" id="products">
    <!-- Content -->
</section>

<!-- Gallery Section -->
<section class="section" id="gallery">
    <!-- Content -->
</section>

<!-- About Section -->
<section class="section" id="about">
    <!-- Content -->
</section>

<!-- Clients Section -->
<section class="section" id="clients">
    <!-- Content -->
</section>

<!-- Contact Section -->
<section class="section" id="contact">
    <!-- Content -->
</section>
```

### 3. Avtomatik Ishlaydi!

Script yuklangandan keyin:
- ✅ Barcha sectionlar layered bo'ladi
- ✅ Dot navigation paydo bo'ladi
- ✅ Arrow navigation paydo bo'ladi
- ✅ Keyboard navigation ishlaydi
- ✅ Mouse wheel ishlaydi
- ✅ Touch gestures ishlaydi

## 🎮 Boshqarish

### Mouse:
- **Scroll Up** - Oldingi section
- **Scroll Down** - Keyingi section

### Keyboard:
- **↑ / PageUp** - Oldingi section
- **↓ / PageDown / Space** - Keyingi section
- **Home** - Birinchi section
- **End** - Oxirgi section

### Touch (Mobile):
- **Swipe Up** - Keyingi section
- **Swipe Down** - Oldingi section

### Navigation:
- **Dots** - Click qilsa o'sha sectionga o'tadi
- **Arrows** - Up/Down tugmalari

## ⚙️ Sozlamalar

`fullpage-scroll.js` faylida `CONFIG` obyektini o'zgartiring:

```javascript
const CONFIG = {
    // Animation settings
    animationDuration: 800,              // Animation tezligi (ms)
    animationEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Easing function
    
    // Scroll settings
    scrollSensitivity: 100,              // Scroll sensitivity (ms)
    touchSensitivity: 50,                // Touch sensitivity (px)
    
    // Navigation
    showDots: true,                      // Dot navigation ko'rsatish
    showArrows: true,                    // Arrow navigation ko'rsatish
    keyboardEnabled: true,               // Keyboard support
    
    // Behavior
    loopTop: false,                      // Birinchidan yuqoriga scroll = oxirgiga
    loopBottom: false,                   // Oxirgidan pastga scroll = birinchiga
    autoScrolling: true                  // Auto scrolling
};
```

## 🎨 Stillarni O'zgartirish

### Dot Navigation Rangi:

```css
.fp-nav-dot {
    background: rgba(37, 99, 235, 0.3);  /* Inactive rang */
    border: 2px solid rgba(37, 99, 235, 0.5);
}

.fp-nav-item.active .fp-nav-dot {
    background: #2563eb;  /* Active rang */
    border-color: #2563eb;
}
```

### Arrow Navigation Rangi:

```css
.fp-arrow {
    background: rgba(255, 255, 255, 0.95);
    color: #2563eb;
}

.fp-arrow:hover {
    background: #2563eb;
    color: white;
}
```

### Animation Tezligi:

```css
.fp-section {
    transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Mobile Optimizatsiya

### Avtomatik:
- Kichikroq dots
- Kichikroq arrows
- Touch gestures
- Tooltip yashiriladi

### Qo'shimcha Sozlash:

```css
@media (max-width: 768px) {
    .fp-nav {
        right: 10px;  /* Yaqinroq */
    }
    
    .fp-arrows {
        bottom: 15px;  /* Pastroq */
    }
}
```

## 🔌 JavaScript API

### Programmatik Boshqarish:

```javascript
// Sectionga o'tish
window.fullpage.moveTo(2);  // 3-chi sectionga (0-indexed)

// Yuqoriga
window.fullpage.moveUp();

// Pastga
window.fullpage.moveDown();

// Hozirgi section
const current = window.fullpage.getCurrentSection();
console.log('Current:', current);

// Jami sectionlar
const total = window.fullpage.getTotalSections();
console.log('Total:', total);
```

### Events:

```javascript
// Section o'zgarishidan oldin
window.addEventListener('fpLeave', (e) => {
    console.log('Leaving:', e.detail.oldIndex);
    console.log('Going to:', e.detail.newIndex);
    console.log('Direction:', e.detail.direction);
});

// Section o'zgarishidan keyin
window.addEventListener('fpAfterLoad', (e) => {
    console.log('Loaded:', e.detail.index);
    console.log('Direction:', e.detail.direction);
});
```

## 🎯 Misol: Custom Logic

### Section o'zgarganda biror narsa qilish:

```javascript
window.addEventListener('fpAfterLoad', (e) => {
    const index = e.detail.index;
    
    // Har bir sectionda turli narsa qilish
    switch(index) {
        case 0:
            console.log('Hero section!');
            // Hero animation
            break;
        case 1:
            console.log('Products section!');
            // Load products
            break;
        case 2:
            console.log('Gallery section!');
            // Load images
            break;
    }
});
```

### Muayyan sectionga o'tishni bloklash:

```javascript
window.addEventListener('fpLeave', (e) => {
    const newIndex = e.detail.newIndex;
    
    // Agar forma to'ldirilmagan bo'lsa, o'tishni bloklash
    if (newIndex === 5 && !formIsValid()) {
        e.preventDefault();
        alert('Iltimos, formani to\'ldiring!');
    }
});
```

## ♿ Accessibility

### Avtomatik:
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ ARIA labels
- ✅ Reduced motion support

### Reduced Motion:

```css
@media (prefers-reduced-motion: reduce) {
    .fp-section {
        transition: none !important;
    }
}
```

## 🐛 Debugging

### Console Messages:

```
🎬 Samplast Fullpage Scroll Loading...
✅ Fullpage Scroll Ready! (6 sections)
```

### Agar Ishlamasa:

1. **Sectionlar topilmadi:**
   - `.section` yoki `.hero-corporate` klassi borligini tekshiring

2. **Animatsiya ishlamayapti:**
   - CSS fayl yuklangan ekanligini tekshiring
   - Browser console da xatolarni tekshiring

3. **Navigation ko'rinmayapti:**
   - `CONFIG.showDots` va `CONFIG.showArrows` true ekanligini tekshiring

4. **Scroll ishlamayapti:**
   - `overflow: hidden` body da borligini tekshiring
   - Boshqa scroll scriptlar bilan konflikt yo'qligini tekshiring

### Test Qilish:

```javascript
// Console da test
console.log('Sections:', document.querySelectorAll('.fp-section').length);
console.log('Current:', window.fullpage.getCurrentSection());
console.log('Total:', window.fullpage.getTotalSections());

// Sectionga o'tish
window.fullpage.moveTo(2);
```

## 🎨 Samplast vs Bizning

| Xususiyat | Samplast | Bizning |
|-----------|----------|---------|
| Layered sections | ✅ | ✅ |
| Smooth animation | ✅ | ✅ |
| Dot navigation | ✅ | ✅ |
| Arrow navigation | ❌ | ✅ |
| Keyboard support | Basic | Full |
| Touch gestures | ✅ | ✅ |
| API | Limited | Full |
| Events | ❌ | ✅ |
| Accessibility | Basic | Full |
| Mobile optimized | ✅ | ✅ |

## 💡 Pro Tips

1. **Section Height** - Har bir section 100vh bo'lishi kerak
2. **Content Overflow** - Agar content ko'p bo'lsa, section ichida scroll qilish mumkin
3. **Performance** - 10 dan ortiq section bo'lsa, performance pasayishi mumkin
4. **Mobile** - Mobile da test qiling, touch gestures ishlashini tekshiring
5. **Accessibility** - Keyboard navigation muhim, test qiling

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Mobile  | All     | ✅ Full |

## 🔧 Advanced

### Custom Easing:

```javascript
animationEasing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'  // Bounce
animationEasing: 'cubic-bezier(0.4, 0, 0.6, 1)'  // Sharp
```

### Loop Sections:

```javascript
loopTop: true,     // Birinchidan yuqoriga = oxirgiga
loopBottom: true   // Oxirgidan pastga = birinchiga
```

### Disable Navigation:

```javascript
showDots: false,
showArrows: false,
keyboardEnabled: false
```

## 📝 Changelog

### Version 1.0 (2026-02-26)
- ✅ Initial release
- ✅ Layered scrolling
- ✅ Dot navigation
- ✅ Arrow navigation
- ✅ Keyboard support
- ✅ Touch gestures
- ✅ JavaScript API
- ✅ Events system
- ✅ Full accessibility
- ✅ Mobile optimized
- ✅ Samplast style

---

**Yaratilgan:** 2026-02-26  
**Versiya:** 1.0  
**Mualliflar:** Kiro AI Assistant  
**Litsenziya:** MIT  
**Uslub:** Samplast Industrial Style
