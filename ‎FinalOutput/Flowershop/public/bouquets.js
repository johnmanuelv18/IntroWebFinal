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
                    name: "Keira Bouquet",
                    price: 37.99,
                    quantity: parseInt(qtyInput.value),
                    image: "pro2.jpeg"
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
        //hamburger mobile function
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });



        //bo2.html:

        
        addToCartBtn.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const product = {
                name: "Effie Bouquet",
                price: 37.49,
                quantity: parseInt(qtyInput.value),
                image: "bo2.jpeg"
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

        // bo3.html
        addToCartBtn.addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const product = {
                name: "Cala Lily Bouquet",
                price: 55.49,
                quantity: parseInt(qtyInput.value),
                image: "bo3.jpeg"
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

        // bo4.html
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
                    name: "Dark Pink Cala Lily Bouquet",
                    price: 79.99,
                    quantity: parseInt(qtyInput.value),
                    image: "bo4.jpeg"
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

        //bo5.html

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
                    name: "True Blue",
                    price: 88.99,
                    quantity: parseInt(qtyInput.value),
                    image: "bo5.jpeg"
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



        //bouquets.html

        function toggleDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }

        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.style.display === "block") {
                        openDropdown.style.display = "none";
                    }
                }
            }
        };

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });
