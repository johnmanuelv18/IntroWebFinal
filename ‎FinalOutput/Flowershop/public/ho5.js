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
                    name: "Gangnam St.",
                    price: 58.99,
                    quantity: parseInt(qtyInput.value),
                    image: "ho5.jpeg"
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


        function toggleDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }
        
        // Close dropdown if user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.style.display === "block") {
                        openDropdown.style.display = "none";
                    }
                }
            }
        }
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });


