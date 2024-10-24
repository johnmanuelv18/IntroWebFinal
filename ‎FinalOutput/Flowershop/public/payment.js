let cart = [];
let subtotal = 0;
let discount = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart data, subtotal, and discount from sessionStorage
    cart = JSON.parse(sessionStorage.getItem('checkoutCart')) || [];
    subtotal = parseFloat(sessionStorage.getItem('checkoutSubtotal')) || 0;
    discount = parseFloat(sessionStorage.getItem('checkoutDiscount')) || 0;

    // Update the cart summary
    updateCartSummary();

    // Set up event listeners
    setupPaymentMethodListeners();
    setupHamburgerMenu();
    setupPayNowButton();
});

function updateCartSummary() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const summaryHTML = generateCartSummaryHTML(cart);

    // Update cart items
    cartItemsContainer.innerHTML = summaryHTML;

    // Update summary section with shipping and discount applied
    const summaryContainer = document.querySelector('.summary');
    const total = subtotal + 5 - discount; // Add shipping and subtract discount
    summaryContainer.innerHTML = `
        <p>Subtotal: <span>$${subtotal.toFixed(2)}</span></p>
        <p>Shipping: <span>$5.00</span></p>
        <p>Discount: <span>-$${discount.toFixed(2)}</span></p>
        <h4>Total: <span>$${total.toFixed(2)}</span></h4>
    `;
}

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

// Setup event listeners for payment methods
function setupPaymentMethodListeners() {
    const creditCardOption = document.getElementById('credit-debit-card');
    const payOnDeliveryOption = document.getElementById('pay-on-delivery');
    const cardInputs = document.getElementById('card-inputs');

    creditCardOption.addEventListener('change', () => {
        cardInputs.style.display = creditCardOption.checked ? 'block' : 'none';
    });

    payOnDeliveryOption.addEventListener('change', () => {
        if (payOnDeliveryOption.checked) cardInputs.style.display = 'none';
    });
}

// Setup hamburger menu toggle
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Setup event listener for "Pay Now" button
function setupPayNowButton() {
    const payNowButton = document.querySelector('.pay-now');
    payNowButton.addEventListener('click', async () => {
        const selectedPaymentMethod = document.getElementById('pay-on-delivery').checked
            ? 'Pay on Delivery'
            : 'Credit/Debit Card';
        await placeOrder(selectedPaymentMethod);
    });
}

// Submit order to the server
async function placeOrder(paymentMethod) {
    const orderId = generateAnonymousOrderId();
    const orderData = {
        items: cart,
        paymentMethod,
        orderId,
    };

    try {
        const response = await fetch('/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        if (response.ok) {
            displayConfirmation(orderId);
            clearCart(); // Clear cart after order
        } else {
            throw new Error(result.message || 'Failed to place order.');
        }
    } catch (error) {
        console.error('Order submission error:', error);
        alert('Failed to place order. Please try again.');
    }
}

// Generate anonymous order ID
function generateAnonymousOrderId() {
    return 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Clear cart from storage
function clearCart() {
    localStorage.removeItem('cart');
    sessionStorage.removeItem('checkoutCart');
    sessionStorage.removeItem('checkoutSubtotal');
    sessionStorage.removeItem('checkoutDiscount');
}

// Display order confirmation with tracking number
function displayConfirmation(orderId) {
    const checkoutContainer = document.querySelector('.checkout-container');
    checkoutContainer.innerHTML = `
        <div class="order-confirmation">
            <div class="confirmation-message">
                <i class="fa-solid fa-check-circle"></i>
                <h2>Thank You for Your Order!</h2>
                <p>Your order number is <span class="order-number">${orderId}</span>. 
                We will immediately process your order, and it will be delivered in 2 - 5 business days.</p>
                <button id="check-status-btn" class="check-status">Go Back to Home</button>
            </div>
        </div>
    `;

    // Event listener for "Go Back to Home" button
    document.getElementById('check-status-btn').addEventListener('click', () => {
        window.location.href = 'FLOWERS_HOME.html';
    });
}
