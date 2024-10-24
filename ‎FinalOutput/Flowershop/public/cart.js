document.addEventListener('DOMContentLoaded', function() {
                const cartContainer = document.querySelector('.cart-container');
                const subtotalElement = document.querySelector('.subtotal-amount');
                const checkoutBtn = document.querySelector('.checkout-btn');
            
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let subtotal = 0;
            
                function updateCart() {
                    cartContainer.innerHTML = '';
                    subtotal = 0;
            
                    cart.forEach(item => {
                        const totalPrice = item.price * item.quantity;
                        subtotal += totalPrice;
            
                        const cartItem = `
                            <div class="cart-item">
                                <div class="item-details">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="item-info">
                                        <h2>${item.name}</h2>
                                        <button class="remove-btn" data-name="${item.name}">Remove</button>
                                    </div>
                                </div>
                                <div class="item-price">$${item.price.toFixed(2)}</div>
                                <div class="item-quantity">
                                    <button class="qty-btn minus" data-name="${item.name}">-</button>
                                    <input type="text" value="${item.quantity}" class="quantity-input" readonly>
                                    <button class="qty-btn plus" data-name="${item.name}">+</button>
                                </div>
                                <div class="item-total">$${totalPrice.toFixed(2)}</div>
                            </div>
                        `;
                        cartContainer.insertAdjacentHTML('beforeend', cartItem);
                    });
            
                    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
                    addEventListeners();
                }
            
                function addEventListeners() {
                    document.querySelectorAll('.remove-btn').forEach(button => {
                        button.addEventListener('click', function() {
                            const itemName = this.getAttribute('data-name');
                            cart = cart.filter(item => item.name !== itemName);
                            localStorage.setItem('cart', JSON.stringify(cart));
                            updateCart();
                        });
                    });
            
                    document.querySelectorAll('.plus').forEach(button => {
                        button.addEventListener('click', function() {
                            const itemName = this.getAttribute('data-name');
                            const item = cart.find(item => item.name === itemName);
                            item.quantity += 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            updateCart();
                        });
                    });
            
                    document.querySelectorAll('.minus').forEach(button => {
                        button.addEventListener('click', function() {
                            const itemName = this.getAttribute('data-name');
                            const item = cart.find(item => item.name === itemName);
                            if (item.quantity > 1) {
                                item.quantity -= 1;
                            } else {
                                cart = cart.filter(cartItem => cartItem.name !== itemName);
                            }
                            localStorage.setItem('cart', JSON.stringify(cart));
                            updateCart();
                        });
                    });
                }
            
                checkoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    proceedToCheckout();
                });
            
                function proceedToCheckout() {
                    sessionStorage.setItem('checkoutCart', JSON.stringify(cart));
                    sessionStorage.setItem('checkoutSubtotal', subtotal.toFixed(2));
                    window.location.href = 'checkout.html';
                }
            
                updateCart();
            });

            document.addEventListener('DOMContentLoaded', function() {
                const hamburger = document.querySelector('.hamburger');
                const mobileMenu = document.querySelector('.mobile-menu');
    
                hamburger.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                });
            });
