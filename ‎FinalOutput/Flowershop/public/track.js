
        document.getElementById('order-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const orderNumber = document.getElementById('order-number').value.toLowerCase();
            const email = document.getElementById('email').value.toLowerCase();
            const notification = document.getElementById('notification');

            if (orderNumber === 'iweb12345' && email === 'iweb@gmail.com') {
                window.location.href = 'track_loc.html';
            } else {
                notification.textContent = 'Order not found! Try inputting IWEB12345 as the order number and iweb@gmail.com as the email.';
                notification.style.display = 'block';
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });
   