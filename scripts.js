let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.price} Euros`;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function checkout() {
    document.getElementById('checkout-section').style.display = 'block';
    document.getElementById('items').value = cart.map(item => item.name).join(', ');
    document.getElementById('total-field').value = total;
}
