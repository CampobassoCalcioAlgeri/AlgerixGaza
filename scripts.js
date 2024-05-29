let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    total += productPrice;
    updateCartDisplay();
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        total -= cart[productIndex].price * cart[productIndex].quantity;
        cart.splice(productIndex, 1);
    }
    updateCartDisplay();
}






function checkout() {
    if (cart.length > 0) {
        document.getElementById('checkout-section').style.display = 'block';
    } else {
        alert("Il carrello è vuoto. Si prega di aggiungere almeno un prodotto prima di procedere al checkout.");
    }
}

function submitOrder() {
    // Implementazione della logica di invio dell'ordine
}

// Inizializzazione dei pulsanti dei prodotti e altri elementi...
