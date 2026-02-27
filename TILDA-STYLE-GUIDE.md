# 🎨 Tilda Style Design - LUX PET PLAST

## 📋 Nima Yaratildi?

Tilda saytlari stilida zamonaviy, minimalist va professional dizayn yaratildi.

---

## 📁 Yaratilgan Fayllar

### 1. `styles-tilda.css`
Tilda stilidagi barcha CSS stillari:
- Full-width block'lar
- 5 xil block turi (Cover, About, Advantages, Integrity, CTA)
- Zamonaviy card dizaynlar
- Smooth animatsiyalar
- To'liq responsive

### 2. `index-tilda.html`
Tilda stilida yangi bosh sahifa:
- 9 ta alohida block
- Har bir block o'z dizayni bilan
- Katta bo'shliqlar
- Professional ko'rinish

---

## 🎯 Tilda Dizayni Xususiyatlari

### 1. **Block-Based Layout**
Har bir bo'lim alohida, to'liq kenglikdagi block:
```
┌─────────────────────────────────────┐
│         COVER BLOCK (Hero)          │
│         Full width, gradient        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         STATS BLOCK                 │
│         4 ta statistika             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         ADVANTAGES BLOCK            │
│         6 ta card, 3 ustun          │
└─────────────────────────────────────┘
```

### 2. **5 Ta Block Turi**

#### 🎯 COVER - Hero Section
- To'liq ekran balandligi
- Gradient background
- Markazda joylashgan kontent
- CTA tugmalar

#### 📄 ABOUT - Ma'lumot Bo'limi
- Oq fon
- Markazda title
- Grid layout
- Statistika ko'rsatish

#### ⭐ ADVANTAGES - Ustunliklar
- Och kulrang fon
- Card grid (2, 3, yoki 4 ustun)
- Icon + Title + Text
- Hover effektlari

#### 🖼️ INTEGRITY - Rasm + Kontent
- 2 ustunli layout
- Rasm bir tomonda, matn ikkinchi tomonda
- Features list
- CTA tugma

#### 📢 CTA - Call to Action
- Gradient background
- Markazda joylashgan
- Katta title
- Tugmalar

---

## 🎨 Dizayn Elementlari

### Card Dizayni
```css
- Background: White
- Border-radius: 24px
- Padding: 50px 40px
- Hover: translateY(-12px)
- Shadow: 0 20px 60px rgba(37, 99, 235, 0.15)
```

### Bo'shliqlar
```css
- Block padding: 120px 0
- Card gap: 40px
- Section margin: 80px
- Mobile padding: 80px 0
```

### Ranglar
```css
--tilda-primary: #2563eb (Ko'k)
--tilda-dark: #1e3a8a (To'q ko'k)
--tilda-light: #f8fafc (Och kulrang)
--tilda-gray: #64748b (Kulrang)
--tilda-white: #ffffff (Oq)
```

---

## 📱 Responsive Dizayn

### Desktop (>1024px)
- 4 ustunli grid → 4 ustun
- 3 ustunli grid → 3 ustun
- 2 ustunli grid → 2 ustun

### Tablet (768px - 1024px)
- 4 ustunli grid → 2 ustun
- 3 ustunli grid → 2 ustun
- 2 ustunli grid → 2 ustun

### Mobile (<768px)
- Barcha grid → 1 ustun
- Padding kamayadi
- Font size kichikroq
- Stack layout

---

## 🚀 Qanday Ishlatish?

### 1. Faylni Ochish
```
index-tilda.html
```

### 2. Brauzerda Ko'rish
- Chrome, Firefox, Safari, Edge
- Desktop va mobile ko'rinishlarni tekshiring

### 3. O'zgartirish
CSS faylda ranglar, bo'shliqlar va boshqa parametrlarni o'zgartiring

---

## 🎯 Block'lar Ro'yxati

### index-tilda.html da:

1. **COVER** - Hero section (Gradient background)
2. **STATS** - 4 ta statistika (Oq fon)
3. **CERTIFICATES** - 6 ta sertifikat card (Kulrang fon)
4. **PRODUCTS** - 3 ta mahsulot card (Oq fon)
5. **INTEGRITY** - Zavod rasmi + matn (Oq fon)
6. **ADVANTAGES** - 6 ta xizmat card (Kulrang fon)
7. **GALLERY** - 4 ta rasm (Oq fon)
8. **CONTACT** - 3 ta kontakt card (Kulrang fon)
9. **CTA** - Buyurtma berish (Gradient background)

---

## ✨ Animatsiyalar

### Fade Up Animation
```css
@keyframes tildaFadeUp {
    from: opacity 0, translateY(40px)
    to: opacity 1, translateY(0)
}
```

### Hover Effects
- Card: translateY(-12px)
- Image: scale(1.1)
- Button: translateY(-3px)

### Staggered Animation
Har bir card ketma-ket paydo bo'ladi:
- Card 1: 0.1s delay
- Card 2: 0.2s delay
- Card 3: 0.3s delay
- ...

---

## 🎨 CSS Class'lar

### Layout
- `.tilda-block` - Asosiy block
- `.tilda-container` - Kontent wrapper (1200px)
- `.tilda-container-wide` - Keng wrapper (1400px)
- `.tilda-container-narrow` - Tor wrapper (900px)

### Block Types
- `.tilda-cover` - Hero section
- `.tilda-about` - Ma'lumot bo'limi
- `.tilda-advantages` - Ustunliklar
- `.tilda-integrity` - Rasm + kontent
- `.tilda-cta` - Call to action

### Components
- `.tilda-card` - Card element
- `.tilda-btn` - Tugma
- `.tilda-section-label` - Bo'lim belgisi
- `.tilda-section-title` - Bo'lim sarlavhasi

### Grid
- `.tilda-grid` - Grid container
- `.tilda-grid-2` - 2 ustun
- `.tilda-grid-3` - 3 ustun
- `.tilda-grid-4` - 4 ustun

---

## 🔧 Customization

### Ranglarni O'zgartirish
`styles-tilda.css` faylida:
```css
:root {
    --tilda-primary: #2563eb; /* O'zgartiring */
    --tilda-dark: #1e3a8a;    /* O'zgartiring */
}
```

### Bo'shliqlarni O'zgartirish
```css
.tilda-block {
    padding: 120px 0; /* O'zgartiring */
}
```

### Card Dizaynini O'zgartirish
```css
.tilda-card {
    border-radius: 24px; /* O'zgartiring */
    padding: 50px 40px;  /* O'zgartiring */
}
```

---

## 📊 Taqqoslash

### Eski Dizayn vs Tilda Dizayn

| Xususiyat | Eski | Tilda |
|-----------|------|-------|
| Layout | Container-based | Full-width blocks |
| Bo'shliqlar | Kichik | Katta |
| Card'lar | Oddiy | Zamonaviy, hover effects |
| Animatsiyalar | Kam | Ko'p |
| Responsive | Ha | Ha, yaxshiroq |
| Professional | Yaxshi | Juda yaxshi |

---

## ✅ Afzalliklar

1. **Zamonaviy Ko'rinish** - Tilda stilidagi minimalist dizayn
2. **Katta Bo'shliqlar** - Professional va o'qish oson
3. **Block-based** - Har bir bo'lim alohida
4. **Smooth Animations** - Yumshoq animatsiyalar
5. **Responsive** - Barcha qurilmalarda ishlaydi
6. **Oson O'zgartirish** - CSS variables bilan

---

## 🎯 Keyingi Qadamlar

1. **Rasmlarni Qo'shish**
   - `download-images.html` dan rasmlarni yuklab oling
   - `images/products/` ga joylashtiring

2. **Matnlarni Tarjima Qilish**
   - O'zbek, Rus, Ingliz tillariga

3. **Qo'shimcha Block'lar**
   - Testimonials
   - FAQ
   - Blog
   - Team

4. **Animatsiyalarni Yaxshilash**
   - Parallax effects
   - Scroll animations
   - Micro-interactions

---

## 📞 Yordam

Agar savollar bo'lsa:
1. `styles-tilda.css` ni o'qing - barcha class'lar izohli
2. `index-tilda.html` ni ko'ring - misol kod
3. Brauzer DevTools (F12) dan foydalaning

---

## 🎉 Natija

Tilda stilidagi zamonaviy, professional va minimalist dizayn tayyor!

**Fayllar:**
- ✅ `styles-tilda.css` - Barcha CSS
- ✅ `index-tilda.html` - Yangi bosh sahifa
- ✅ `TILDA-STYLE-GUIDE.md` - Bu qo'llanma

**Xususiyatlar:**
- ✅ 9 ta block
- ✅ Full-width layout
- ✅ Zamonaviy card'lar
- ✅ Smooth animations
- ✅ To'liq responsive

---

**Saytni oching va ko'ring! 🚀**

```
index-tilda.html
```
