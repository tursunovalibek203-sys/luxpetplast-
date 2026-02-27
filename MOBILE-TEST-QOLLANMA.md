# 📱 MOBILE NAVIGATION - TEST QILISH QOLLANMASI

## 🎯 MAQSAD
Mobile da navigation to'g'ri ishlashini tekshirish

---

## 📋 TEST QADAMLARI

### 1. BROWSER DEVTOOLS BILAN TEST

**Chrome/Edge:**
1. F12 bosing (DevTools ochish)
2. Ctrl+Shift+M bosing (Device toolbar)
3. Yuqoridan qurilma tanlang:
   - iPhone 12 Pro (390px)
   - iPhone SE (375px)
   - Samsung Galaxy S20 (360px)
   - iPad (768px)

**Firefox:**
1. F12 bosing
2. Ctrl+Shift+M bosing
3. Responsive Design Mode

### 2. NIMA KO'RISH KERAK

**Desktop (1024px+):**
- ✅ Logo chapda
- ✅ Navigation o'rtada (Bosh sahifa, Mahsulotlar, ...)
- ✅ Til switcher o'ngda
- ❌ Hamburger button YO'Q

**Mobile (< 768px):**
- ✅ Logo chapda
- ✅ Hamburger button o'ngda (3 ta chiziq)
- ❌ Navigation menu YASHIRIN
- ❌ Til switcher YASHIRIN

### 3. HAMBURGER BUTTON TEST

**Bosish:**
1. Hamburger button bosing
2. Menu yuqoridan pastga slide qiladi
3. Button X ga aylanadi
4. Menu ko'rinadi:
   - Bosh sahifa
   - Mahsulotlar
   - Sifat
   - Biz haqimizda
   - Kontaktlar
   - Til switcher (UZ, RU, EN)

**Yopish:**
1. X button bosing → Menu yopiladi
2. Menu item bosing → Menu yopiladi
3. Tashqariga bosing → Menu yopiladi

---

## 🧪 TEST FAYLLAR

### 1. test-mobile-nav.html
Maxsus test sahifasi:
- Device info ko'rsatadi
- Console logging
- Test instructions
- Real-time screen size

**Ochish:**
```
file:///path/to/test-mobile-nav.html
```

### 2. index.html
Asosiy sahifa:
- Real content
- All features
- Production ready

---

## 🔍 CONSOLE TEKSHIRISH

### Browser Console (F12 → Console):

**Ko'rinishi kerak:**
```
Mobile menu button: <button class="mobile-menu-btn">
Nav menu: <ul class="nav-menu">
Mobile navigation initialized successfully!
```

**Button bosilganda:**
```
Menu button clicked!
Menu active: true
```

**Link bosilganda:**
```
Nav link clicked: Mahsulotlar
```

---

## ❌ MUAMMOLAR VA YECHIMLAR

### Muammo 1: Hamburger button ko'rinmaydi

**Yechim:**
1. F12 → Elements
2. `.mobile-menu-btn` ni toping
3. Styles tekshiring:
```css
@media (max-width: 768px) {
    .mobile-menu-btn {
        display: flex !important;
    }
}
```

### Muammo 2: Menu ochilmaydi

**Yechim:**
1. Console tekshiring (F12 → Console)
2. Error bormi?
3. JavaScript yuklangan mi?
```javascript
// Console ga yozing:
document.querySelector('.mobile-menu-btn')
// null bo'lmasligi kerak
```

### Muammo 3: Menu ko'rinadi lekin animation yo'q

**Yechim:**
1. CSS transition tekshiring:
```css
.nav-menu {
    transition: all 0.3s ease;
}
```

2. Cache tozalang:
   - Ctrl+Shift+R (Hard reload)

### Muammo 4: Button bosilganda hech narsa bo'lmaydi

**Yechim:**
1. Console tekshiring
2. JavaScript error bormi?
3. Event listener qo'shilganmi?
```javascript
// Console ga yozing:
document.querySelector('.mobile-menu-btn').onclick = function() {
    console.log('Clicked!');
}
```

---

## 📱 REAL DEVICE TEST

### Android:
1. Chrome browser oching
2. `chrome://inspect` ga boring
3. USB debugging yoqing
4. Telefonda test qiling

### iPhone:
1. Safari oching
2. Settings → Safari → Advanced → Web Inspector
3. Mac da Safari → Develop
4. iPhone tanlang

---

## ✅ TEST CHECKLIST

### Desktop (1024px+):
- [ ] Logo ko'rinadi
- [ ] Navigation menu ko'rinadi
- [ ] Til switcher ko'rinadi
- [ ] Hamburger button YO'Q
- [ ] Hover effects ishlaydi

### Tablet (768px-1024px):
- [ ] Logo ko'rinadi
- [ ] Hamburger button ko'rinadi
- [ ] Menu ochiladi/yopiladi
- [ ] Til switcher menu ichida

### Mobile (< 768px):
- [ ] Logo ko'rinadi (kichikroq)
- [ ] Hamburger button ko'rinadi
- [ ] Menu ochiladi (full screen)
- [ ] Menu yopiladi
- [ ] Link bosilganda menu yopiladi
- [ ] Tashqariga bosilganda menu yopiladi
- [ ] Til switcher ishlaydi
- [ ] Smooth animations

### Animations:
- [ ] Menu slide down/up
- [ ] Hamburger → X transformation
- [ ] Fade in/out
- [ ] Smooth transitions

### Functionality:
- [ ] Click to open
- [ ] Click to close
- [ ] Click link to close
- [ ] Click outside to close
- [ ] Active state changes
- [ ] Language switcher works

---

## 🎨 EXPECTED BEHAVIOR

### Desktop:
```
+--------------------------------------------------+
| [Logo] LP PLAST    [Nav Items]    [Lang: UZ RU EN] |
+--------------------------------------------------+
```

### Mobile (Closed):
```
+---------------------------+
| [Logo] LP PLAST      [☰] |
+---------------------------+
```

### Mobile (Open):
```
+---------------------------+
| [Logo] LP PLAST      [✕] |
+---------------------------+
| Bosh sahifa              |
| Mahsulotlar              |
| Sifat                    |
| Biz haqimizda            |
| Kontaktlar               |
|--------------------------|
| [UZ] [RU] [EN]           |
+---------------------------+
```

---

## 🚀 QUICK TEST

1. **Ochish:** `index.html` yoki `test-mobile-nav.html`
2. **Resize:** Browser window kichiklashtiring (< 768px)
3. **Tekshirish:** Hamburger button ko'rinadi mi?
4. **Bosish:** Button bosing
5. **Natija:** Menu ochildi mi?

**Agar hammasi ishlasa:** ✅ SUCCESS!
**Agar ishlamasa:** ⬇️ Debug qiling

---

## 🔧 DEBUG COMMANDS

### Console ga yozing:

```javascript
// 1. Elements mavjudmi?
console.log('Button:', document.querySelector('.mobile-menu-btn'));
console.log('Menu:', document.querySelector('.nav-menu'));

// 2. Classes bormi?
console.log('Menu classes:', document.querySelector('.nav-menu').classList);

// 3. Manual toggle
document.querySelector('.nav-menu').classList.toggle('active');

// 4. Button click simulation
document.querySelector('.mobile-menu-btn').click();

// 5. Check styles
console.log('Button display:', getComputedStyle(document.querySelector('.mobile-menu-btn')).display);
```

---

## 📞 YORDAM

Agar muammo davom etsa:
1. Cache tozalang (Ctrl+Shift+Delete)
2. Browser restart qiling
3. `test-mobile-nav.html` ni sinab ko'ring
4. Console error tekshiring
5. CSS va JS fayllar yuklanganini tekshiring

---

**Sana:** 2024
**Versiya:** 1.0
**Status:** ✅ READY FOR TESTING
