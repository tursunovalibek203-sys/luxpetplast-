# 🏭 LUX PET PLAST - Industrial Minimalism Design Guide

## 🎯 Konsept: "Raqamli Zavod Minimalizmi"

Tesla/Apple ishlab chiqarish zavodining ultra-toza, muhandislik aniqligidagi aurasini yaratish.

---

## 🎨 Rang Palitrasi

### Asosiy Ranglar
```css
--white: #FFFFFF              /* Toza oq */
--concrete: #F5F5F7           /* Beton kulrang */
--matte-black: #1D1D1F        /* Mat qora */
--steel-gray: #86868B         /* Po'lat kulrang */
```

### Aksent Rang (FAQAT tugmalar uchun)
```css
--electric-blue: #0055FF      /* Elektr ko'k */
--industrial-orange: #FF6B00  /* Sanoat sariq */
```

**MUHIM:** Aksent rangni faqat CTA tugmalari va active holatlar uchun ishlating!

---

## 📐 Grid Tizimi - Muhandislik Aniqlik

```css
--unit: 8px                   /* Asosiy birlik */
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 32px
--spacing-lg: 48px
--spacing-xl: 64px
--spacing-2xl: 96px
```

Barcha o'lchamlar 8px ga bo'linishi kerak.

---

## 🔤 Tipografiya

### Shriftlar
- **Asosiy:** Inter (geometric, clean)
- **Texnik:** Roboto Mono (kod kabi ko'rinish)

### Sarlavhalar
```css
h1: 2.5rem - 4rem (tight kerning: -0.05em)
h2: 2rem - 3rem (tight kerning: -0.04em)
h3: 1.5rem - 2rem
```

### Matnlar
- Asosiy matn: 1rem, line-height: 1.6
- Kichik matn: 0.875rem
- Label: 0.75rem, uppercase, letter-spacing: 0.15em

---

## 🏗️ Struktura

### 1. Header (Shapka)
```
┌─────────────────────────────────────────────┐
│ [Logo] lux pet plast    solutions technology about contact    [request demo] │
└─────────────────────────────────────────────┘
```

**Xususiyatlar:**
- Shaffof fon (backdrop-filter: blur)
- 1px pastki chegara
- Mono-spaced lowercase matn
- Ghost button (faqat chegara)

### 2. Hero Section (60/40 Split)
```
┌──────────────────────────────────────┬──────────────┐
│                                      │              │
│  PRECISION MANUFACTURING             │              │
│                                      │   [3D        │
│  Engineering Tomorrow's              │    Visual]   │
│  Industry.                           │              │
│                                      │              │
│  Description text...                 │              │
│                                      │              │
│  [optimize your factory →]           │              │
│                                      │              │
└──────────────────────────────────────┴──────────────┘
```

**Chap tomon (60%):**
- Label (uppercase, mono)
- Katta sarlavha (tight kerning)
- 2-3 qator tavsif
- Aksent rangli tugma

**O'ng tomon (40%):**
- Yuqori sifatli 3D render
- Robot qo'li yoki mexanizm
- Xira zavod foni

### 3. Features Grid (3 ustun)
```
┌──────────┬──────────┬──────────┐
│ [Icon]   │ [Icon]   │ [Icon]   │
│ Title    │ Title    │ Title    │
│ Text     │ Text     │ Text     │
├──────────┼──────────┼──────────┤
│ [Icon]   │ [Icon]   │ [Icon]   │
│ Title    │ Title    │ Title    │
│ Text     │ Text     │ Text     │
└──────────┴──────────┴──────────┘
```

**Xususiyatlar:**
- 1px chegara bilan ajratilgan
- Wireframe ikonlar (faqat chiziq, to'ldirish yo'q)
- Hover: och kulrang fon
- Soyalar yo'q!

### 4. Trust Section (Raqamlar)
```
┌─────────────────────────────────────────────┐
│         99.9%      500+      6+      0.1%   │
│         uptime   factories  years  defect   │
└─────────────────────────────────────────────┘
```

**Xususiyatlar:**
- Qora fon
- Katta oq raqamlar
- Aksent rangli belgilar (%, +)
- Mono-spaced labellar

---

## 🎭 Dizayn Qoidalari

### ✅ QILISH KERAK:
1. **Flat dizayn** - hamma narsa yassi
2. **1px chegaralar** - nozik, aniq
3. **Katta bo'sh joylar** - nafas olish uchun
4. **Tight kerning** - sarlavhalarda harflar yaqin
5. **Mono-spaced** - texnik matnlar uchun
6. **Wireframe ikonlar** - faqat chiziqlar
7. **Yuqori sifatli rasmlar** - 3D renderlar

### ❌ QILMASLIK KERAK:
1. **Og'ir soyalar** - faqat minimal (0-2px)
2. **Gradientlar** - faqat 3D rasmlarda
3. **Ko'p ranglar** - faqat 1 aksent rang
4. **Yumaloq burchaklar** - faqat 2px radius
5. **Animatsiyalar** - faqat minimal hover
6. **Bezaklar** - ortiqcha detallar yo'q

---

## 📱 Responsive

### Desktop (1400px+)
- Hero: 60/40 split
- Features: 3 ustun
- Trust: 4 ustun

### Tablet (768px - 1024px)
- Hero: 1 ustun (vertikal)
- Features: 2 ustun
- Trust: 2 ustun

### Mobile (< 768px)
- Hammasi 1 ustun
- Navigation: hamburger menu
- Kichikroq shriftlar

---

## 🎯 Fayllar

### CSS
- `styles-industrial-minimal.css` - Asosiy stillar

### HTML
- `index-industrial-minimal.html` - Demo sahifa

### Qo'llash
```html
<link rel="stylesheet" href="styles-industrial-minimal.css">
```

---

## 🚀 Keyingi Qadamlar

1. **3D Renderlar:** Yuqori sifatli robot qo'li, mexanizmlar rasmlari kerak
2. **Ikonlar:** Wireframe SVG ikonlar to'plami yaratish
3. **Animatsiyalar:** Minimal scroll va hover effektlar
4. **Mobile Menu:** Hamburger menu qo'shish
5. **Real Content:** Haqiqiy mahsulot ma'lumotlari

---

## 💡 Ilhom Manbalar

- **Apple.com** - Minimal, toza dizayn
- **Tesla.com** - Texnologik, kelajak hissi
- **Stripe.com** - Grid tizimi, aniqlik
- **Linear.app** - Flat, geometric
- **Vercel.com** - Mono-spaced, developer-friendly

---

## 📊 Texnik Detallar

### Performance
- Minimal CSS (< 20KB)
- Soyalar yo'q = tez render
- Flat dizayn = kam GPU ishi

### Accessibility
- Yaxshi kontrast (WCAG AA)
- Semantic HTML
- Keyboard navigation

### Browser Support
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- IE11: ❌ (zamonaviy browserlar uchun)

---

**Yaratildi:** 2024
**Versiya:** 1.0
**Maqsad:** Ultra-clean industrial minimalism
