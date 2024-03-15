let cartItems = [];
let total = 0;

function buyProduct(productName, price) {
    cartItems.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Total da compra: $' + total.toFixed(2));
    // Aqui você pode adicionar lógica adicional, como limpar o carrinho, enviar informações de compra para um servidor, etc.
    cartItems = [];
    total = 0;
    updateCart();
}

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('contact-form'));
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Aqui você pode adicionar lógica para enviar o formulário para um servidor, etc.
    // Por enquanto, apenas exibiremos os dados no console.
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    document.getElementById('contact-form').reset();
    document.getElementById('form-status').textContent = 'Mensagem enviada com sucesso!';
}