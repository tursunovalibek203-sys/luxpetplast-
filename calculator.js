// Price Calculator Logic
document.addEventListener('DOMContentLoaded', function() {
    const productCategory = document.getElementById('productCategory');
    const productType = document.getElementById('productType');
    const productTypeGroup = document.getElementById('productTypeGroup');
    const quantity = document.getElementById('quantity');
    const color = document.getElementById('color');
    const delivery = document.getElementById('delivery');
    const discountCode = document.getElementById('discountCode');
    const calculateBtn = document.getElementById('calculateBtn');
    const minOrder = document.getElementById('minOrder');
    
    // Product data with prices (USD)
    const products = {
        'pet-preforms': {
            'pco-2925-12g': { name: 'PCO 2925 Standard 12g', price: 0.09, minOrder: 10000 },
            'pco-2925-16g': { name: 'PCO 2925 Standard 16g', price: 0.11, minOrder: 10000 },
            'pco-2925-24g': { name: 'PCO 2925 Standard 24g', price: 0.14, minOrder: 10000 },
            'pco-1881-15g': { name: 'PCO 1881 Standard 15g', price: 0.10, minOrder: 10000 },
            'pco-1881-21g': { name: 'PCO 1881 Standard 21g', price: 0.12, minOrder: 10000 },
            'pco-1881-30g': { name: 'PCO 1881 Standard 30g', price: 0.15, minOrder: 10000 },
            'oil-bottle-26g': { name: 'Yog\' Idishi 26g', price: 0.13, minOrder: 8000 },
            'oil-bottle-36g': { name: 'Yog\' Idishi 36g', price: 0.18, minOrder: 8000 },
            'preform-52g-38mm': { name: 'PET Preform 52g 38mm', price: 0.27, minOrder: 5000 },
            'preform-70g-38mm': { name: 'PET Preform 70g 38mm', price: 0.35, minOrder: 5000 },
            'preform-72g-48mm': { name: 'PET Preform 72g 48mm', price: 0.36, minOrder: 3000 },
            'preform-135g-48mm': { name: 'PET Preform 135g 48mm', price: 0.65, minOrder: 2000 },
            'preform-250g-48mm': { name: 'PET Preform 250g 48mm', price: 1.20, minOrder: 1500 },
            'preform-700g-55mm': { name: 'PET Preform 700g 55mm', price: 3.20, minOrder: 1000 },
            'preform-670g-55mm': { name: 'PET Preform 670g 55mm', price: 3.10, minOrder: 1000 }
        },
        'pp-caps': {
            'cap-48mm': { name: 'PP Qopqoq 48mm', price: 0.045, minOrder: 50000 },
            'cap-38mm': { name: 'PP Qopqoq 38mm', price: 0.035, minOrder: 50000 },
            'cap-28mm-gas': { name: 'Gaz Qopqoq 28mm', price: 0.025, minOrder: 50000 },
            'cap-28mm-no-gas': { name: 'Gazsiz Qopqoq 28mm', price: 0.025, minOrder: 50000 },
            'oil-cap-dkm': { name: 'Yog\' Qopqoq DKM', price: 0.030, minOrder: 30000 },
            'oil-cap-okm': { name: 'Yog\' Qopqoq OKM', price: 0.030, minOrder: 30000 },
            'oil-cap-19l': { name: '19L Yog\' Qopqoq', price: 0.080, minOrder: 10000 }
        },
        'handles': {
            'handle-48mm': { name: 'Tutqich 48mm', price: 0.15, minOrder: 20000 },
            'handle-38mm': { name: 'Tutqich 38mm', price: 0.12, minOrder: 20000 },
            'handle-28mm': { name: 'Tutqich 28mm', price: 0.10, minOrder: 20000 }
        }
    };
    
    // Discount codes
    const discountCodes = {
        'WELCOME10': 0.10,
        'BULK20': 0.20,
        'VIP15': 0.15
    };
    
    // USD to UZS exchange rate (approximate)
    const usdToUzs = 12500;
    
    // Update product types based on category
    productCategory.addEventListener('change', function() {
        const category = this.value;
        productType.innerHTML = '<option value="">Mahsulotni tanlang</option>';
        
        if (category && products[category]) {
            productTypeGroup.style.display = 'block';
            
            Object.keys(products[category]).forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = products[category][key].name;
                productType.appendChild(option);
            });
        } else {
            productTypeGroup.style.display = 'none';
        }
        
        minOrder.textContent = '-';
    });
    
    // Update minimum order
    productType.addEventListener('change', function() {
        const category = productCategory.value;
        const type = this.value;
        
        if (category && type && products[category][type]) {
            const min = products[category][type].minOrder;
            minOrder.textContent = min.toLocaleString();
            quantity.min = min;
            quantity.placeholder = `Masalan: ${min}`;
        }
    });
    
    // Calculate price
    calculateBtn.addEventListener('click', function() {
        const category = productCategory.value;
        const type = productType.value;
        const qty = parseInt(quantity.value);
        const selectedColor = color.value;
        const selectedDelivery = delivery.value;
        const code = discountCode.value.toUpperCase();
        
        // Validation
        if (!category || !type || !qty) {
            alert('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
            return;
        }
        
        const product = products[category][type];
        
        if (qty < product.minOrder) {
            alert(`Minimal buyurtma: ${product.minOrder.toLocaleString()} dona`);
            return;
        }
        
        // Calculate base price
        let unitPrice = product.price;
        
        // Volume discount
        if (qty >= 100000) {
            unitPrice *= 0.85; // 15% discount
        } else if (qty >= 50000) {
            unitPrice *= 0.90; // 10% discount
        } else if (qty >= 20000) {
            unitPrice *= 0.95; // 5% discount
        }
        
        let subtotal = unitPrice * qty;
        
        // Color surcharge
        let colorPrice = 0;
        if (selectedColor === 'custom') {
            colorPrice = subtotal * 0.10;
        }
        
        // Delivery price
        let deliveryPrice = 0;
        if (selectedDelivery === 'tashkent') {
            deliveryPrice = 100000 / usdToUzs;
        } else if (selectedDelivery === 'regions') {
            deliveryPrice = 300000 / usdToUzs;
        }
        
        // Discount
        let discount = 0;
        if (code && discountCodes[code]) {
            discount = subtotal * discountCodes[code];
        }
        
        // Total
        const total = subtotal + colorPrice + deliveryPrice - discount;
        
        // Display results
        displayResults({
            product: product.name,
            quantity: qty,
            unitPrice: unitPrice,
            subtotal: subtotal,
            colorPrice: colorPrice,
            deliveryPrice: deliveryPrice,
            discount: discount,
            total: total,
            selectedColor: selectedColor,
            selectedDelivery: selectedDelivery,
            code: code
        });
    });
    
    // Display results
    function displayResults(data) {
        document.getElementById('resultPlaceholder').style.display = 'none';
        document.getElementById('resultDetails').style.display = 'block';
        
        document.getElementById('resultProduct').textContent = data.product;
        document.getElementById('resultQuantity').textContent = data.quantity.toLocaleString() + ' dona';
        document.getElementById('resultUnitPrice').textContent = '$' + data.unitPrice.toFixed(4);
        document.getElementById('resultSubtotal').textContent = '$' + data.subtotal.toFixed(2) + ' (' + (data.subtotal * usdToUzs).toLocaleString() + ' so\'m)';
        
        // Color price
        if (data.colorPrice > 0) {
            document.getElementById('colorPriceRow').style.display = 'flex';
            document.getElementById('resultColorPrice').textContent = '+$' + data.colorPrice.toFixed(2);
        } else {
            document.getElementById('colorPriceRow').style.display = 'none';
        }
        
        // Delivery price
        if (data.deliveryPrice > 0) {
            document.getElementById('deliveryPriceRow').style.display = 'flex';
            document.getElementById('resultDeliveryPrice').textContent = '+$' + data.deliveryPrice.toFixed(2);
        } else {
            document.getElementById('deliveryPriceRow').style.display = 'none';
        }
        
        // Discount
        if (data.discount > 0) {
            document.getElementById('discountRow').style.display = 'flex';
            document.getElementById('resultDiscount').textContent = '-$' + data.discount.toFixed(2) + ' (' + data.code + ')';
        } else {
            document.getElementById('discountRow').style.display = 'none';
        }
        
        // Total
        document.getElementById('resultTotal').textContent = '$' + data.total.toFixed(2) + ' (' + (data.total * usdToUzs).toLocaleString() + ' so\'m)';
    }
    
    // Print functionality
    document.getElementById('printBtn').addEventListener('click', function() {
        window.print();
    });
});