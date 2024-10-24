document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});


//SCRIPT FOR THE PRODUCTS:
// Same script for birth.html, 

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




        // JavaScript to handle form submission for order.html
        document.getElementById('tracking-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            const trackingNumber = document.getElementById('tracking-number').value;
            const notification = document.getElementById('notification');

            // Check if the tracking number is 0416050627
            if (trackingNumber === '0416050627') {
                // Redirect to location.html if the number matches
                window.location.href = 'location.html';
            } else {
                // Display notification if the tracking number is invalid
                notification.textContent = 'Order not found! Please try inputting 0416050627.';
                notification.style.display = 'block';
            }
        });