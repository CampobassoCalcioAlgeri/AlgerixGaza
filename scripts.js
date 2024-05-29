let cart = [];
let total = 0;
let hasItemsInCart = false;

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    total += productPrice;
    updateCartDisplay();
    hasItemsInCart = true;
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        total -= cart[productIndex].price * cart[productIndex].quantity;
        cart.splice(productIndex, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name}: ${item.price} Euro x ${item.quantity}
            <button onclick="removeFromCart('${item.name}')">Rimuovi</button>
        `;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
    document.getElementById('items').value = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    document.getElementById('total-field').value = total;
}

function checkout() {
    if (hasItemsInCart) {
        document.getElementById('product-selection').style.display = 'none';
        document.getElementById('checkout-section').style.display = 'block';
    } else {
        alert("Il carrello è vuoto. Si prega di aggiungere almeno un prodotto prima di procedere al checkout.");
    }
}

function submitOrder() {
    // Implementazione della logica di invio dell'ordine
}

// Initialize product buttons and other stuff...
