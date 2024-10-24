// contact.js
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

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message); // Show success message
                } else {
                    alert('Error: ' + result.message); // Show error message
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            }
        });
    }
});