// Used for pro1.html
document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.qty-minus');
    const plusBtn = document.querySelector('.qty-plus');
    const qtyInput = document.getElementById('quantity-input');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    //Decrease the value
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    //Increase the value
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    });

    //Add to Cart function
    addToCartBtn.addEventListener('click', function() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        //Create a product object
        const product = {
            name: "Flamingos",
            price: 32.49,
            quantity: parseInt(qtyInput.value),
            image: "pro2.jpeg"
        };

        //Check if the item is already in the cart
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            cart.push(product);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to the cart page
        window.location.href = "cart.html";
    });
});