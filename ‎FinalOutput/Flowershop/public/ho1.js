 document.addEventListener('DOMContentLoaded', function() {
            const minusBtn = document.querySelector('.qty-minus');
            const plusBtn = document.querySelector('.qty-plus');
            const qtyInput = document.getElementById('quantity-input');
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
        
            minusBtn.addEventListener('click', function() {
                let currentValue = parseInt(qtyInput.value);
                if (currentValue > 1) {
                    qtyInput.value = currentValue - 1;
                }
            });
        
            plusBtn.addEventListener('click', function() {
                let currentValue = parseInt(qtyInput.value);
                qtyInput.value = currentValue + 1;
            });
        
            addToCartBtn.addEventListener('click', function() {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                
                const product = {
                    name: "Hilda",
                    price: 35.99,
                    quantity: parseInt(qtyInput.value),
                    image: "ho1.jpeg"
                };
        
                const existingProduct = cart.find(item => item.name === product.name);
                if (existingProduct) {
                    existingProduct.quantity += product.quantity;
                } else {
                    cart.push(product);
                }
        
                localStorage.setItem('cart', JSON.stringify(cart));
        
                window.location.href = "cart.html";
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });







       