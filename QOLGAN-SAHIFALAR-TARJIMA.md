# 🌍 QOLGAN SAHIFALAR UCHUN TARJIMALAR

## ✅ QO'SHILGAN TARJIMALAR

### PRODUCTS SAHIFA (7 ta)
| Kalit | O'zbek | Ruscha | Ingliz |
|-------|--------|--------|--------|
| products_page_title | Mahsulotlarimiz | Наша Продукция | Our Products |
| products_page_subtitle | Yuqori sifatli PET va PP mahsulotlari katalogi | Каталог высококачественной PET и PP продукции | Catalog of high-quality PET and PP products |
| products_all | Barcha Mahsulotlar | Вся Продукция | All Products |
| products_pet_preforms | PET Preformalar | PET Преформы | PET Preforms |
| products_pp_caps | PP Qopqoqlar | PP Крышки | PP Caps |
| products_handles_tab | Tutqichlar | Ручки | Handles |
| products_custom | Maxsus Buyurtmalar | Индивидуальные Заказы | Custom Orders |

### QUALITY SAHIFA (4 ta)
| Kalit | O'zbek | Ruscha | Ingliz |
|-------|--------|--------|--------|
| quality_page_title | Sifat Nazorati | Контроль Качества | Quality Control |
| quality_page_subtitle | Xalqaro standartlar va zamonaviy test usullari | Международные стандарты и современные методы тестирования | International standards and modern testing methods |
| quality_guarantee_title | Bizning Sifat Kafolati | Наша Гарантия Качества | Our Quality Guarantee |
| quality_guarantee_desc | PET Preform kompaniyasida sifat - bu bizning asosiy ustuvorimiz... | В компании PET Preform качество - это наш главный приоритет... | At PET Preform company, quality is our main priority... |

### ABOUT SAHIFA (3 ta)
| Kalit | O'zbek | Ruscha | Ingliz |
|-------|--------|--------|--------|
| about_page_title | Biz Haqimizda | О Нас | About Us |
| about_page_subtitle | Professional PET va PP mahsulotlari ishlab chiqaruvchi kompaniya | Профессиональный производитель PET и PP продукции | Professional manufacturer of PET and PP products |
| about_history_title | Kompaniya Tarixi | История Компании | Company History |

### CONTACT SAHIFA (4 ta)
| Kalit | O'zbek | Ruscha | Ingliz |
|-------|--------|--------|--------|
| contact_page_title | Kontaktlar | Контакты | Contact |
| contact_page_subtitle | Biz bilan bog'laning va professional konsultatsiya oling | Свяжитесь с нами и получите профессиональную консультацию | Contact us and get professional consultation |
| contact_info_title | Bog'lanish Ma'lumotlari | Контактная Информация | Contact Information |
| contact_info_desc | Bizning mutaxassislarimiz sizning barcha savollaringizga javob berishga tayyor... | Наши специалисты готовы ответить на все ваши вопросы... | Our specialists are ready to answer all your questions... |

### GALLERY SAHIFA (7 ta)
| Kalit | O'zbek | Ruscha | Ingliz |
|-------|--------|--------|--------|
| gallery_page_title | Foto Galeriya | Фото Галерея | Photo Gallery |
| gallery_page_subtitle | Zavodimiz, ishlab chiqarish jarayoni va mahsulotlarimiz | Наш завод, производственный процесс и продукция | Our factory, production process and products |
| gallery_all | Barchasi | Все | All |
| gallery_factory | Zavod | Завод | Factory |
| gallery_production | Ishlab Chiqarish | Производство | Production |
| gallery_equipment | Uskunalar | Оборудование | Equipment |
| gallery_products | Mahsulotlar | Продукция | Products |

---

## 📊 JAMI STATISTIKA

- **Qo'shilgan sahifalar:** 5 ta (Products, Quality, About, Contact, Gallery)
- **Yangi tarjimalar:** 25 ta kalit
- **Jami tarjimalar:** 85 ta kalit (60 + 25)
- **Jami matnlar:** 255 ta (85 × 3 til)

---

## 🔧 QANDAY QO'LLASH

### 1. PRODUCTS.HTML
```html
<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1 data-i18n="products_page_title">Mahsulotlarimiz</h1>
        <p data-i18n="products_page_subtitle">Yuqori sifatli PET va PP mahsulotlari katalogi</p>
    </div>
</section>

<!-- Category Tabs -->
<button class="tab-btn active" data-category="all" data-i18n="products_all">Barcha Mahsulotlar</button>
<button class="tab-btn" data-category="pet-preforms" data-i18n="products_pet_preforms">PET Preformalar</button>
<button class="tab-btn" data-category="pp-caps" data-i18n="products_pp_caps">PP Qopqoqlar</button>
<button class="tab-btn" data-category="handles" data-i18n="products_handles_tab">Tutqichlar</button>
<button class="tab-btn" data-category="custom" data-i18n="products_custom">Maxsus Buyurtmalar</button>
```

### 2. QUALITY.HTML
```html
<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1 data-i18n="quality_page_title">Sifat Nazorati</h1>
        <p data-i18n="quality_page_subtitle">Xalqaro standartlar va zamonaviy test usullari</p>
    </div>
</section>

<!-- Quality Overview -->
<h2 data-i18n="quality_guarantee_title">Bizning Sifat Kafolati</h2>
<p data-i18n="quality_guarantee_desc">PET Preform kompaniyasida sifat...</p>
```

### 3. ABOUT.HTML
```html
<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1 data-i18n="about_page_title">Biz Haqimizda</h1>
        <p data-i18n="about_page_subtitle">Professional PET va PP mahsulotlari ishlab chiqaruvchi kompaniya</p>
    </div>
</section>

<!-- Company History -->
<h2 data-i18n="about_history_title">Kompaniya Tarixi</h2>
```

### 4. CONTACT.HTML
```html
<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1 data-i18n="contact_page_title">Kontaktlar</h1>
        <p data-i18n="contact_page_subtitle">Biz bilan bog'laning va professional konsultatsiya oling</p>
    </div>
</section>

<!-- Contact Info -->
<h2 data-i18n="contact_info_title">Bog'lanish Ma'lumotlari</h2>
<p data-i18n="contact_info_desc">Bizning mutaxassislarimiz...</p>
```

### 5. GALLERY.HTML
```html
<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1 data-i18n="gallery_page_title">Foto Galeriya</h1>
        <p data-i18n="gallery_page_subtitle">Zavodimiz, ishlab chiqarish jarayoni va mahsulotlarimiz</p>
    </div>
</section>

<!-- Gallery Categories -->
<button class="tab-btn active" data-category="all" data-i18n="gallery_all">Barchasi</button>
<button class="tab-btn" data-category="factory" data-i18n="gallery_factory">Zavod</button>
<button class="tab-btn" data-category="production" data-i18n="gallery_production">Ishlab Chiqarish</button>
<button class="tab-btn" data-category="equipment" data-i18n="gallery_equipment">Uskunalar</button>
<button class="tab-btn" data-category="products" data-i18n="gallery_products">Mahsulotlar</button>
```

---

## ✅ TAYYOR!

Barcha qo'shimcha sahifalar uchun tarjimalar `translations.js` ga qo'shildi!

Endi har bir sahifaga `data-i18n` atributlarini qo'shish kerak.
