let cart = [];
let subtotal = 0;
let discount = 0;

document.addEventListener('DOMContentLoaded', function() {
    cart = JSON.parse(sessionStorage.getItem('checkoutCart')) || [];
    subtotal = parseFloat(sessionStorage.getItem('checkoutSubtotal')) || 0;

    // Update cart summary
    updateCartSummary();
});

const deliveryOption = document.getElementById('delivery-option');
const pickupOption = document.getElementById('pickup-option');
const deliveryRadio = document.getElementById('delivery');
const pickupRadio = document.getElementById('pickup');

deliveryOption.addEventListener('click', () => {
    activateOption(deliveryOption, pickupOption);
    deliveryRadio.checked = true;
});

pickupOption.addEventListener('click', () => {
    activateOption(pickupOption, deliveryOption);
    pickupRadio.checked = true;
});

function activateOption(active, inactive) {
    active.classList.add('active');
    inactive.classList.remove('active');
}

function updateCartSummary() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const summaryHTML = generateCartSummaryHTML(cart);
    
    // update cart items
    cartItemsContainer.innerHTML = summaryHTML;

    // update summary
    const summaryContainer = document.querySelector('.summary');
    const total = subtotal + 5 - discount; // Add shipping and subtract discount
    summaryContainer.innerHTML = `
        <p>Subtotal: <span>$${subtotal.toFixed(2)}</span></p>
        <p>Shipping: <span>$5.00</span></p>
        <p>Discount: <span>-$${discount.toFixed(2)}</span></p>
        <h4>Total: <span>$${total.toFixed(2)}</span></h4>
    `;
}

// add event listener for discount code
const applyDiscountButton = document.getElementById('apply-discount');
applyDiscountButton.addEventListener('click', function() {
    const discountCode = document.getElementById('discount-code').value;
    if (discountCode.toUpperCase() === 'ILOVEIWEB') {
        discount = 5;
        alert('Discount applied successfully!');
    } else {
        discount = 0;
        alert('Invalid discount code.');
    }
    updateCartSummary();
});

function generateCartSummaryHTML(cart) {
    return cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
            </div>
        </div>
    `).join('');
}


const payNowLink = document.querySelector('.pay-now-link');

payNowLink.addEventListener('click', function () {
    // Store discount and subtotal in sessionStorage
    sessionStorage.setItem('checkoutDiscount', discount.toString());
    sessionStorage.setItem('checkoutSubtotal', subtotal.toString());
    sessionStorage.setItem('checkoutCart', JSON.stringify(cart));
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
