# 🎨 Samplast Style Animations Guide

## Qo'shilgan Animatsiyalar va Effektlar

### 1. **Scroll Progress Bar** 📊
- Sahifa yuqorisida scroll progressini ko'rsatuvchi gradient bar
- Foydalanuvchi qayerda ekanligini ko'rsatadi
- Avtomatik ishga tushadi

### 2. **Fade Animations** ✨
Elementlar scroll qilganda paydo bo'ladi:

- **fade-up**: Pastdan yuqoriga fade in
- **fade-left**: Chapdan o'ngga fade in  
- **fade-right**: O'ngdan chapga fade in
- **scale-in**: Kichikdan kattaga scale

**Qo'llash:**
```html
<div class="fade-up">Bu element pastdan paydo bo'ladi</div>
<div class="fade-left">Bu element chapdan paydo bo'ladi</div>
<div class="fade-right">Bu element o'ngdan paydo bo'ladi</div>
<div class="scale-in">Bu element scale bo'ladi</div>
```

### 3. **Parallax Effects** 🌊
- Rasmlar scroll qilganda sekinroq harakat qiladi
- Chuqurlik hissi yaratadi
- Avtomatik `.product-showcase-image` va `.gallery-item img` ga qo'llanadi

### 4. **Counter Animations** 🔢
- Statistika raqamlari animatsiya bilan ko'tariladi
- `.stat-number` klassi bilan ishlaydi
- Faqat viewport ga kirganda ishga tushadi

**Misol:**
```html
<div class="stat-number">200+</div>
<div class="stat-number">98%</div>
<div class="stat-number">50K+</div>
```

### 5. **Card Hover Effects** 🎴
- Kartalar ustiga hover qilganda:
  - Yuqoriga ko'tariladi (translateY)
  - Biroz kattalashadi (scale)
  - Shadow kuchayadi
  - Gradient shine effekti

### 6. **Smooth Scroll** 🎯
- Anchor linklar smooth scroll qiladi
- Header offset hisobga olinadi
- Barcha `#` bilan boshlanadigan linklarga qo'llanadi

### 7. **Stagger Animation** 📋
- Grid elementlari ketma-ket paydo bo'ladi
- Har bir element 150ms kechikish bilan
- `.card-grid` va `.gallery-grid` ga avtomatik qo'llanadi

### 8. **Hero Section Animations** 🎬
Sahifa ochilganda hero section elementlari ketma-ket paydo bo'ladi:

1. Badge (0.2s)
2. Title (0.4s)
3. Subtitle (0.6s)
4. CTA Buttons (0.8s)
5. Stats (1s)

### 9. **Button Effects** 🔘
- Hover qilganda ripple effect
- Smooth transitions
- Gradient background animation

### 10. **Image Zoom** 🔍
- Rasm ustiga hover qilganda zoom in
- Product showcase va gallery rasmlari uchun
- Smooth transition

## Qo'shimcha Effektlar

### Floating Animation
```html
<div class="section-badge">Bu float qiladi</div>
```

### Gradient Text
```html
<h1 class="gradient-text">Gradient matn</h1>
```

### Bounce Animation
```html
<div class="bounce">Bu bounce qiladi</div>
```

### Glow Effect
```html
<div class="glow">Bu glow qiladi</div>
```

### Slide Animations
```html
<div class="slide-in-left">Chapdan slide</div>
<div class="slide-in-right">O'ngdan slide</div>
```

## Avtomatik Qo'llaniladigan Animatsiyalar

Quyidagi elementlarga avtomatik animatsiya qo'llanadi:

1. `.section-header` - fade-up
2. `.card-corporate` - fade-up + hover effects
3. `.product-showcase` - fade-up
4. `.hero-content-corporate` - fade-left
5. `.product-showcase-image-container` - fade-right
6. `.gallery-item` - scale-in + hover effects
7. `.cert-card` - scale-in

## Performance Optimizations

### Will-change
Parallax elementlarga `will-change: transform` qo'shilgan

### Reduced Motion
Accessibility uchun `prefers-reduced-motion` qo'llab-quvvatlanadi:
```css
@media (prefers-reduced-motion: reduce) {
    /* Animatsiyalar minimal */
}
```

### Mobile Optimizations
- Kichikroq transform qiymatlar
- Kamroq hover effects
- Tezroq transitions

## Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

## Samplast Saytidan Ilhomlangan Xususiyatlar

1. **Smooth Scroll Behavior** - Sahifalar orasida smooth o'tish
2. **Parallax Images** - Rasmlar chuqurlik hissi yaratadi
3. **Counter Animations** - Statistika raqamlari animatsiya bilan
4. **Card Hover Effects** - Kartalar interaktiv
5. **Stagger Animations** - Elementlar ketma-ket paydo bo'ladi
6. **Progress Indicator** - Scroll progress ko'rsatiladi
7. **Fade In Effects** - Elementlar smooth paydo bo'ladi
8. **Image Zoom** - Rasmlar hover qilganda zoom
9. **Gradient Animations** - Gradient ranglar animatsiya qiladi
10. **Smooth Transitions** - Barcha o'zgarishlar smooth

## Qo'shimcha Sozlamalar

### Animation Speed
`animations-samplast.js` faylida:
```javascript
const duration = 2000; // Counter animation speed
const delay = 150; // Stagger delay
const parallaxSpeed = 0.3; // Parallax speed
```

### Intersection Observer
```javascript
const observerOptions = {
    threshold: 0.1, // Element 10% ko'ringanda trigger
    rootMargin: '0px 0px -100px 0px' // 100px oldin trigger
};
```

## Foydalanish

1. CSS faylni qo'shing:
```html
<link rel="stylesheet" href="styles-samplast-animations.css">
```

2. JS faylni qo'shing:
```html
<script src="animations-samplast.js"></script>
```

3. Elementlarga kerakli klasslarni qo'shing yoki avtomatik ishlashini kuting!

## Debugging

Console da quyidagi xabarlar ko'rinadi:
- "Samplast-style animations loading..."
- "Samplast-style animations ready!"

Agar animatsiyalar ishlamasa:
1. Browser console ni tekshiring
2. CSS va JS fayllar to'g'ri yuklangan ekanligini tekshiring
3. Element klasslari to'g'ri qo'shilganligini tekshiring

---

**Yaratilgan sana:** 2026-02-26
**Versiya:** 1.0
**Mualliflar:** Kiro AI Assistant
