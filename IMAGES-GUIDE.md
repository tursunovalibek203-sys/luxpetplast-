# 📸 RASMLAR QO'SHISH BO'YICHA QOLLANMA

## 🎯 Kerakli Rasmlar Ro'yxati

### 1. Mahsulot Rasmlari (Priority: HIGH)

#### PET Preformalar
```
images/products/
├── pet-preform-12gr.jpg      (300x300px, WebP)
├── pet-preform-16gr.jpg      (300x300px, WebP)
├── pet-preform-24gr.jpg      (300x300px, WebP)
├── pet-preform-variety.jpg   (800x600px, WebP)
└── pet-preforms-showcase.jpg (1200x800px, WebP)
```

#### PP Qopqoqlar
```
images/products/
├── pp-caps-28mm.jpg          (300x300px, WebP)
├── pp-caps-38mm.jpg          (300x300px, WebP)
├── pp-caps-variety.jpg       (800x600px, WebP)
└── pp-handles.jpg            (300x300px, WebP)
```

### 2. Zavod Rasmlari (Priority: MEDIUM)

```
images/gallery/
├── factory-exterior-1.jpg    (1200x800px, WebP)
├── factory-exterior-2.jpg    (1200x800px, WebP)
├── production-line-1.jpg     (1200x800px, WebP)
├── production-line-2.jpg     (1200x800px, WebP)
├── injection-machine-1.jpg   (1200x800px, WebP)
├── quality-control.jpg       (1200x800px, WebP)
└── warehouse.jpg             (1200x800px, WebP)
```

### 3. Sertifikat Rasmlari (Priority: LOW)

```
images/certificates/
├── iso-9001-2015.jpg         (600x800px, WebP)
├── iso-22000-2018.jpg        (600x800px, WebP)
├── haccp.jpg                 (600x800px, WebP)
└── fda-approval.jpg          (600x800px, WebP)
```

### 4. Social Media Rasmlari (Priority: MEDIUM)

```
images/social/
├── og-image.jpg              (1200x630px, JPG)
├── twitter-image.jpg         (1200x675px, JPG)
└── logo-square.jpg           (512x512px, PNG)
```

---

## 🛠️ Rasm Optimizatsiyasi

### Tavsiya Etilgan Format
- **WebP** - asosiy format (70-80% quality)
- **JPG** - fallback (85% quality)
- **PNG** - faqat logo va icon uchun

### Rasm O'lchamlari

| Tur | O'lcham | Format | Quality |
|-----|---------|--------|---------|
| Hero Image | 1920x1080 | WebP | 75% |
| Product Card | 300x300 | WebP | 80% |
| Gallery | 1200x800 | WebP | 75% |
| Thumbnail | 150x150 | WebP | 85% |
| OG Image | 1200x630 | JPG | 85% |

### Optimizatsiya Tools

#### Online Tools
- **TinyPNG** - https://tinypng.com
- **Squoosh** - https://squoosh.app
- **Cloudinary** - https://cloudinary.com

#### CLI Tools
```bash
# WebP conversion
cwebp input.jpg -q 80 -o output.webp

# Batch conversion
for file in *.jpg; do
    cwebp "$file" -q 80 -o "${file%.jpg}.webp"
done
```

---

## 📝 HTML Implementation

### Responsive Images with WebP

```html
<picture>
  <source 
    srcset="images/products/pet-preform-24gr.webp" 
    type="image/webp">
  <source 
    srcset="images/products/pet-preform-24gr.jpg" 
    type="image/jpeg">
  <img 
    src="images/products/pet-preform-24gr.jpg" 
    alt="PET Preform 24gr - PCO 2925 Standard"
    width="300" 
    height="300"
    loading="lazy">
</picture>
```

### Product Showcase

```html
<div class="product-showcase">
    <div class="product-showcase-content">
        <!-- Content -->
    </div>
    <div class="product-showcase-image-container">
        <picture>
            <source 
                srcset="images/products/pet-preforms-showcase.webp" 
                type="image/webp">
            <img 
                src="images/products/pet-preforms-showcase.jpg" 
                alt="PET Preforms Showcase - Various Sizes"
                class="product-showcase-image"
                width="400"
                height="400"
                loading="lazy">
        </picture>
    </div>
</div>
```

### Gallery Images

```html
<div class="gallery-item">
    <picture>
        <source 
            srcset="images/gallery/factory-exterior-1.webp" 
            type="image/webp">
        <img 
            src="images/gallery/factory-exterior-1.jpg" 
            alt="LUX PET PLAST Factory Building"
            loading="lazy"
            width="1200"
            height="800">
    </picture>
    <div class="gallery-overlay">
        <h3>Zavod Binosi</h3>
        <p>Zamonaviy ishlab chiqarish majmuasi</p>
    </div>
</div>
```

---

## 🎨 Placeholder O'rniga Real Images

### products.html da O'zgartirish

**OLDIN:**
```html
<div class="product-image-placeholder">
    <svg>...</svg>
    <p>PET Preform<br>PCO 2925</p>
</div>
```

**KEYIN:**
```html
<picture>
    <source srcset="images/products/pet-preform-24gr.webp" type="image/webp">
    <img 
        src="images/products/pet-preform-24gr.jpg" 
        alt="PET Preform 24gr - PCO 2925"
        class="product-showcase-image"
        width="400"
        height="400"
        loading="lazy">
</picture>
```

---

## 🚀 Lazy Loading Strategy

### Native Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="...">
```

### Intersection Observer (Advanced)
```javascript
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

---

## 📊 Performance Checklist

- [ ] Barcha rasmlar WebP formatda
- [ ] JPG fallback mavjud
- [ ] Width va height attributes qo'shilgan
- [ ] Alt text yozilgan
- [ ] Lazy loading yoqilgan
- [ ] Responsive images (srcset)
- [ ] Optimized quality (70-85%)
- [ ] CDN orqali serve qilish (optional)

---

## 🎯 SEO Uchun Alt Text

### Yaxshi Alt Text Misollari

```html
<!-- ❌ YOMON -->
<img src="image1.jpg" alt="image">
<img src="product.jpg" alt="product">

<!-- ✅ YAXSHI -->
<img src="pet-preform-24gr.jpg" 
     alt="PET Preform 24gr PCO 2925 Standard for 1L bottles">
<img src="factory.jpg" 
     alt="LUX PET PLAST modern production facility in Tashkent">
<img src="iso-cert.jpg" 
     alt="ISO 9001:2015 Quality Management Certificate">
```

---

## 💡 Qo'shimcha Maslahatlar

### 1. Image Sprites (Icons uchun)
```css
.icon {
    background: url('sprites.png') no-repeat;
}
.icon-check { background-position: 0 0; }
.icon-arrow { background-position: -20px 0; }
```

### 2. SVG Icons (Preferred)
```html
<svg class="icon" width="24" height="24">
    <use xlink:href="icons.svg#check"></use>
</svg>
```

### 3. Blur-up Technique
```css
.image-container {
    background: url('thumbnail-blur.jpg');
    background-size: cover;
}
.image-container img {
    opacity: 0;
    transition: opacity 0.3s;
}
.image-container img.loaded {
    opacity: 1;
}
```

---

## 📞 Yordam Kerakmi?

Agar rasmlarni optimizatsiya qilishda yordam kerak bo'lsa:
1. Rasmlarni TinyPNG ga yuklang
2. WebP formatga convert qiling
3. Yuqoridagi HTML kodlarni ishlating
4. Alt text yozing
5. Test qiling!

---

**Eslatma:** Rasmlar sayt performancega katta ta'sir qiladi. Har doim optimize qiling!
