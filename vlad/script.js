// Дані товарів
const menuItems = [
    { name: "Рол 'Філадельфія'", price: 200, img: './2roll.jpg' },
    { name: "Рол 'Каліфорнія'", price: 180, img: './callifontia-roll.jpg' },
    { name: "Рол 'Тунець'", price: 220, img: './rainbow-roll.jpg' },
    { name: "Рол 'Магуро'", price: 250, img: './wasabi-roll.jpg' },
    { name: "Рол 'Магуро'", price: 250, img: './wasabi-roll.jpg' },
    { name: "Рол 'Каліфорнія'", price: 180, img: './callifontia-roll.jpg' },
    { name: "Рол 'Магуро'", price: 250, img: './wasabi-roll.jpg' },
    { name: "Рол 'Філадельфія'", price: 200, img: './2roll.jpg' },
    { name: "Рол 'Тунець'", price: 220, img: './rainbow-roll.jpg' },
    { name: "Рол 'Магуро'", price: 250, img: './wasabi-roll.jpg' },
    { name: "Рол 'Філадельфія'", price: 200, img: './2roll.jpg' },  
];

let cart = [];

// Додавання карток товарів на сторінку
const menuContainer = document.getElementById('menu-items');

menuItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('menu-item');
    itemElement.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Ціна: ${item.price} грн</p>
        <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Додати до кошика</button>
    `;
    menuContainer.appendChild(itemElement);
});

// Пошук по товарах
document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );
    
    menuContainer.innerHTML = '';
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Ціна: ${item.price} грн</p>
            <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Додати до кошика</button>
        `;
        menuContainer.appendChild(itemElement);
    });
});

// Додавання товару в кошик
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
    }
});

// Відображення кошика
document.getElementById('cart-btn').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'flex';
    updateCart();
});

// Закриття кошика
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});

// Оновлення вмісту кошика
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price} грн</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = `Сума: ${total} грн`;
}

// Оформлення замовлення
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Дякуємо за замовлення! Ми зв\'яжемося з вами найближчим часом.');
    cart = [];
    updateCart();
    document.getElementById('cart-modal').style.display = 'none';
});

// Обробка форми контакту
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    document.getElementById('form-message').innerHTML = `
        <p style=" color:rgb(31, 31, 31); font-size:20px; text-align:center;  ">Дякуємо, ${name}, за ваше повідомлення!</p>
        <p style=" color:rgb(31, 31, 31);font-size:20px;text-align:center;     ">Ми зв'яжемося з вами найближчим часом.</p>
    `;
    document.getElementById('form-message').style.display='block'
    setTimeout(()=>{
        document.getElementById('form-message').style.display='none'
    },2000)
    document.getElementById('contact-form').reset();
});
