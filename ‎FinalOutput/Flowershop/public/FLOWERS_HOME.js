var countDownDate = new Date("December 30, 2024 23:59:59").getTime();
        
            // count down every 1 second
            var countdownfunction = setInterval(function() {
        
                //g today's date and time
                var now = new Date().getTime();
        
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
        
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                document.getElementById("days").innerHTML = days;
                document.getElementById("hours").innerHTML = hours;
                document.getElementById("minutes").innerHTML = minutes;
                document.getElementById("seconds").innerHTML = seconds;
        
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.querySelector(".countdown").innerHTML = "EXPIRED";
                }
            }, 1000);

            document.addEventListener('DOMContentLoaded', function() {
                const addToCartButtons = document.querySelectorAll('#deal-section .cta-btn');
            
                addToCartButtons.forEach(button => {
                    button.addEventListener('click', function(event) {
                        event.preventDefault();
                        const productCard = this.closest('.product-card');
                        const productName = productCard.querySelector('h3').textContent;
                        const productPrice = productCard.querySelector('.discounted-price').textContent;
                        const productImage = productCard.querySelector('img').src;
            
                        addToCart({
                            name: productName,
                            price: parseFloat(productPrice.replace('$', '')),
                            image: productImage,
                            quantity: 1
                        });
            
                        window.location.href = 'cart.html';
                    });
                });
            });
            
            function addToCart(product) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                
                const existingProductIndex = cart.findIndex(item => item.name === product.name);
                
                if (existingProductIndex > -1) {
                    cart[existingProductIndex].quantity += 1;
                } else {
                    cart.push(product);
                }
            
                localStorage.setItem('cart', JSON.stringify(cart));
            }

            document.addEventListener('DOMContentLoaded', function() {
                const hamburger = document.querySelector('.hamburger');
                const mobileMenu = document.querySelector('.mobile-menu');
    
                hamburger.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                });
            });

            document.querySelectorAll('.faq-question').forEach(item => {
                item.addEventListener('click', function() {
                    const faqItem = this.parentElement;
                    
                    // Close other open items
                    document.querySelectorAll('.faq-item').forEach(otherItem => {
                        if (otherItem !== faqItem) {
                            otherItem.classList.remove('active');
                        }
                    });
    
                    // Toggle current item
                    faqItem.classList.toggle('active');
                });
            });