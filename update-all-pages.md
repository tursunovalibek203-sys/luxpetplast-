# 🔄 BARCHA SAHIFALARNI YANGILASH

## Qanday Qilish Kerak

Barcha sahifalarga scroll effektlarini qo'shish uchun quyidagi o'zgartirishlarni qiling:

### 1. CSS Fayllarini Almashtirish

**Eski:**
```html
<link rel="stylesheet" href="styles-new.css">
<link rel="stylesheet" href="styles-premium.css">
```

**Yangi:**
```html
<link rel="stylesheet" href="styles-corporate.css">
<link rel="stylesheet" href="chatbot.css">
```

### 2. Script Qo'shish

Har bir sahifaning `</body>` tegidan oldin qo'shing:

```html
<script src="scroll-animations.js"></script>
<script src="chatbot.js"></script>
```

### 3. Animate Klasslari Qo'shish

Har bir section ga `animate-on-scroll` klassini qo'shing:

```html
<!-- Eski -->
<section class="products-section">

<!-- Yangi -->
<section class="products-section animate-on-scroll">
```

### 4. Header ID Qo'shish

Header ga ID qo'shing:

```html
<header class="header" id="header">
```

---

## Qo'lda Yangilash Kerak Bo'lgan Sahifalar

1. **products.html** - Mahsulotlar sahifasi
2. **quality.html** - Sifat sahifasi
3. **about.html** - Biz haqimizda
4. **contact.html** - Kontaktlar
5. **gallery.html** - Galeriya
6. **blog.html** - Blog
7. **career.html** - Karyera
8. **clients.html** - Hamkorlar
9. **capacity.html** - Quvvat
10. **calculator.html** - Kalkulyator
11. **quote.html** - Narx so'rash

---

## Avtomatik Yangilash (Agar Kerak Bo'lsa)

Barcha sahifalarni bir vaqtning o'zida yangilash uchun quyidagi o'zgartirishlarni qiling:

### A. CSS Linklar
Barcha `styles-new.css` va `styles-premium.css` ni `styles-corporate.css` ga almashtiring.

### B. Scripts
Har bir sahifaga `scroll-animations.js` qo'shing.

### C. Animate Klasslar
Barcha section larga `animate-on-scroll` qo'shing.

---

## Misol: products.html Yangilash

### Eski Kod:
```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <link rel="stylesheet" href="styles-new.css">
    <link rel="stylesheet" href="styles-premium.css">
</head>
<body>
    <header class="header">
        ...
    </header>
    
    <section class="products-section">
        ...
    </section>
    
    <script src="chatbot.js"></script>
</body>
</html>
```

### Yangi Kod:
```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <link rel="stylesheet" href="styles-corporate.css">
    <link rel="stylesheet" href="chatbot.css">
</head>
<body>
    <header class="header" id="header">
        ...
    </header>
    
    <section class="products-section animate-on-scroll">
        ...
    </section>
    
    <script src="scroll-animations.js"></script>
    <script src="chatbot.js"></script>
</body>
</html>
```

---

## Tekshirish

Har bir sahifani yangilagandan keyin:

1. ✅ Brauzerda oching
2. ✅ Scroll qiling va animatsiyalarni ko'ring
3. ✅ Header scroll effektini tekshiring
4. ✅ Kartochka hover effektlarini tekshiring
5. ✅ Chatbot ishlashini tekshiring
6. ✅ Til o'zgartirish ishlashini tekshiring

---

## Xulosa

Barcha sahifalar yangilangandan keyin:
- ✅ Professional corporate dizayn
- ✅ Scroll animatsiyalari
- ✅ Hover effektlar
- ✅ Smooth transitions
- ✅ Progress bar
- ✅ Counter animations
- ✅ Parallax effects

**Natija:** Butun sayt jiddiy, professional va zamonaviy ko'rinishga ega bo'ladi! 🎉
