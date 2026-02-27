# Samplast.uz Sayt Tahlili va Dizayn Yo'riqnomasi

## 📊 Samplast.uz Saytining Asosiy Xususiyatlari

### 1. **Kontent Tuzilishi**

Samplast.uz saytidan olingan ma'lumotlar asosida:

#### Hero Section
- **Sarlavha**: "Ищете качественные и доступные пэт преформы и ПП КОЛПАЧКИ"
- **Tavsif**: Kompaniya haqida qisqacha ma'lumot
- **Mahsulotlar**: 40+ tur preform, 5 format qopqoqlar
- **Formatlar**: 1881, 1810, 29/25, 29/21, 38mm, 48mm

#### Sifat Nazorati
- **3 bosqichli nazorat**:
  1. Ishlab chiqarish liniyasida nazorat
  2. Laboratoriya qabul-topshirish testlari
  3. Yuklashdan oldin monitoring
- **Maxsus testlar**: Ацетальдегид miqdorini tekshirish

#### Texnologiya
- **Uskunalar**: HUSKY 5-avlod, SIPA
- **Energiya tejash**: Yangi texnologiyalar
- **Avtomatlashtirish**: To'liq avtomatlashtirilgan jarayon

#### Sertifikatlar
- **ISO 22000 / FSCC22000 ver 5.1** - Oziq-ovqat xavfsizligi
- **ISO 9001:2015** - Sifat menejmenti
- **Tasdiqlash**: SGS va Bureau Veritas

#### Statistika
- Oylik ishlab chiqarish hajmi (tonnalarda)
- 40+ mahsulot turlari
- Ko'p sonli mijozlar

#### Hamkorlar
- **Coca Cola Ichechek**
- **PepsiCo Bottler**
- **PureMilk**
- **MUSSAFO**
- **AGROOIL**
- **MILTER**

#### Kompaniya Qadriyatlari
- **Ekologiya**: 15 MW quyosh elektr stansiyasi
- **Xodimlar**: Coca-Cola standartlari bo'yicha ijtimoiy audit
- **Innovatsiya**: Yangi formatlar (15g, 16g PCO1881)

---

## 🎨 Samplast Dizayn Elementlari

### Rang Palitra (Taxminiy)
```css
/* Asosiy ranglar */
--primary-dark: #1a2332      /* Qorong'i ko'k - header, footer */
--primary-blue: #2c3e50      /* Ko'k - asosiy elementlar */
--accent-blue: #3498db       /* Yorqin ko'k - tugmalar, linklar */
--accent-orange: #e67e22     /* To'q sariq - aksentlar */
--text-dark: #2c3e50         /* Qorong'i matn */
--text-light: #7f8c8d        /* Och matn */
--bg-light: #f8f9fa          /* Och fon */
--white: #ffffff             /* Oq */
```

### Tipografiya
- **Font**: Sans-serif (Arial, Helvetica yoki o'xshash)
- **Sarlavhalar**: Qalin (700-900), katta o'lcham
- **Matn**: O'rtacha (400-500), o'qish uchun qulay
- **Harf oralig'i**: Keng (letter-spacing: 0.05em)

### Layout Tuzilishi
```
1. Header (Fixed)
   - Logo
   - Navigation menu
   - Language switcher (RU/UZ)

2. Hero Section
   - Full-width background
   - Sarlavha + tavsif
   - CTA tugmalar

3. Stats Section
   - 3-4 ta statistika kartochkasi
   - Katta raqamlar
   - Qisqa tavsif

4. About Section
   - Kompaniya haqida
   - Texnologiya
   - Sifat nazorati

5. Products Section
   - Mahsulotlar ro'yxati
   - Rasmlar bilan
   - Spetsifikatsiyalar

6. Partners Section
   - Hamkorlar logotiplari
   - Grid layout

7. Values Section
   - Kompaniya qadriyatlari
   - Ikonkalar bilan

8. Footer
   - Kontakt ma'lumotlari
   - Ijtimoiy tarmoqlar
   - Copyright
```

---

## 🎬 Samplast Animatsiya Uslubi

### 1. **Oyna Ochilish Animatsiyasi**
```css
/* Modal/Section ochilishi */
- Transform: scale(0.85) → scale(1)
- Opacity: 0 → 1
- Duration: 0.5-0.6s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Backdrop blur: 8-10px
```

### 2. **Scroll Reveal**
```css
/* Elementlar paydo bo'lishi */
- Transform: translateY(60px) → translateY(0)
- Opacity: 0 → 1
- Duration: 0.8s
- Stagger delay: 0.1-0.2s
- Threshold: 0.1-0.15
```

### 3. **Hover Effektlar**
```css
/* Kartochkalar */
- Transform: translateY(0) → translateY(-10px)
- Box-shadow: kengayadi
- Duration: 0.4s
- Easing: ease-out

/* Tugmalar */
- Transform: scale(1) → scale(1.05)
- Background: gradient shift
- Duration: 0.3s
```

### 4. **Background Patterns**
```css
/* Industrial textures */
- Dots pattern (radial-gradient)
- Grid lines (linear-gradient)
- Diagonal stripes
- Subtle opacity (0.03-0.05)
```

---

## 💡 Sizning Saytingiz Uchun Tavsiyalar

### 1. **Hero Section - Samplast Uslubi**
```html
<section class="hero-industrial">
    <!-- Video yoki rasm background -->
    <div class="hero-overlay"></div>
    
    <div class="hero-content">
        <div class="hero-badge">
            🏭 2018-yildan beri
        </div>
        
        <h1>Yuqori Sifatli PET va PP<br>Mahsulotlari</h1>
        
        <p>Zamonaviy Yevropa texnologiyalari...</p>
        
        <div class="hero-buttons">
            <button>Mahsulotlar</button>
            <button>Bog'lanish</button>
        </div>
    </div>
</section>
```

### 2. **Stats Section - Raqamlar**
```html
<section class="stats-industrial">
    <div class="stats-grid">
        <div class="stat-item">
            <div class="stat-number" data-count="6">0</div>
            <div class="stat-label">Yillik Tajriba</div>
        </div>
        <!-- ... -->
    </div>
</section>
```

### 3. **Sifat Nazorati - 3 Bosqich**
```html
<section class="quality-process">
    <h2>3 Bosqichli Sifat Nazorati</h2>
    
    <div class="process-steps">
        <div class="step">
            <div class="step-number">1</div>
            <h3>Ishlab Chiqarish Liniyasida</h3>
            <p>Doimiy monitoring...</p>
        </div>
        <!-- ... -->
    </div>
</section>
```

### 4. **Hamkorlar - Logotiplar**
```html
<section class="partners">
    <h2>Bizning Hamkorlarimiz</h2>
    
    <div class="partners-grid">
        <img src="coca-cola.png" alt="Coca Cola">
        <img src="pepsi.png" alt="PepsiCo">
        <!-- ... -->
    </div>
</section>
```

### 5. **Texnologiya Showcase**
```html
<section class="technology">
    <h2>Zamonaviy Uskunalar</h2>
    
    <div class="tech-grid">
        <div class="tech-item">
            <img src="husky.jpg" alt="HUSKY">
            <h3>HUSKY 5-avlod</h3>
            <p>Yuqori unumdorlik...</p>
        </div>
        <!-- ... -->
    </div>
</section>
```

---

## 🎯 Asosiy Farqlar va Qo'shimchalar

### Samplast.uz da Bor:
✅ 40+ mahsulot turlari
✅ HUSKY va SIPA uskunalari
✅ Coca-Cola, PepsiCo hamkorligi
✅ 15 MW quyosh elektr stansiyasi
✅ Ацетальдегид testlari
✅ 3 bosqichli sifat nazorati
✅ SGS va Bureau Veritas sertifikatlari

### Sizning Saytingizga Qo'shish Kerak:
1. **Hamkorlar logotiplari** - Evita, Hydrolife, Milter
2. **Texnologiya showcase** - Uskunalar haqida
3. **Timeline** - Kompaniya tarixi (2018-2024)
4. **Ekologik loyihalar** - Quyosh energiyasi, carbon footprint
5. **Ijtimoiy mas'uliyat** - Xodimlar uchun sharoitlar
6. **Laboratoriya** - Test uskunalari va jarayonlar
7. **Sertifikatlar galereyasi** - ISO, SGS va boshqalar
8. **Video tour** - Zavod bo'ylab virtual sayohat

---

## 🚀 Animatsiya Implementatsiyasi

### Modal Oyna (Samplast Style)
```javascript
// Smooth scale-up animation
modal.style.transform = 'scale(0.85)';
modal.style.opacity = '0';

setTimeout(() => {
    modal.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    modal.style.transform = 'scale(1)';
    modal.style.opacity = '1';
}, 10);
```

### Scroll Reveal
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100); // Stagger
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '-80px'
});
```

### Counter Animation
```javascript
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}
```

---

## 📱 Responsive Design

### Breakpoints (Samplast Style)
```css
/* Desktop */
@media (min-width: 1200px) {
    .container { max-width: 1140px; }
}

/* Tablet */
@media (max-width: 992px) {
    .hero-title { font-size: 3rem; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 768px) {
    .hero-title { font-size: 2rem; }
    .stats-grid { grid-template-columns: 1fr; }
    .nav-menu { display: none; }
}
```

---

## ✅ Checklist - Samplast Uslubida Sayt

- [ ] Hero section - video/rasm background
- [ ] Dark overlay - gradient
- [ ] Stats section - counter animation
- [ ] 3 bosqichli sifat nazorati
- [ ] Hamkorlar logotiplari
- [ ] Texnologiya showcase (HUSKY, SIPA)
- [ ] Sertifikatlar (ISO, SGS)
- [ ] Ekologik loyihalar
- [ ] Timeline - kompaniya tarixi
- [ ] Modal oynalar - smooth opening
- [ ] Scroll reveal - fade + slide
- [ ] Hover effects - lift + shadow
- [ ] Background patterns - industrial
- [ ] Responsive design
- [ ] Performance optimization

---

## 🎨 Dizayn Fayllar

Sizning proyektingizda mavjud:
- `styles-samplast-inspired.css` - To'liq CSS
- `animations-samplast.js` - Animatsiya engine
- `demo-samplast-style.html` - Demo sahifa

Bu fayllar Samplast uslubidagi barcha animatsiyalar va dizayn elementlarini o'z ichiga oladi.

---

**Xulosa**: Samplast.uz professional industrial sayt bo'lib, yumshoq animatsiyalar, zamonaviy dizayn va to'liq ma'lumot bilan ajralib turadi. Sizning saytingiz ham shu darajada professional bo'lishi uchun yuqoridagi barcha elementlarni qo'shing! 🏭✨
