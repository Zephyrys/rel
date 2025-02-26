/* script.js */
let cart = {};
let totalglob = 0;
let countglob = 0;

// Додавання продукту до кошика
function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity++;
  } else {
    cart[name] = { price, quantity: 1 };
  }
  updateCartDisplay();
}

// Видалення продукту з кошика
function removeFromCart(name) {
  if (cart[name]) {
    cart[name].quantity--;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
  }
  updateCartDisplay();
}

// Оновлення відображення кошика
function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = '';
  let total = totalglob;
  let count = countglob;

  for (const item in cart) {
    count += cart[item].quantity;
    total += cart[item].price * cart[item].quantity;
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `${item} (x${cart[item].quantity}) - ${cart[item].price * cart[item].quantity} грн <button onclick="addToCart('${item}', ${cart[item].price})">+</button> <button onclick="removeFromCart('${item}')">-</button>`;
    cartItems.appendChild(cartItem);
  }

  totalElement.textContent = total;
  cartCount.textContent = count;
}

// Перемикання відображення кошика
function toggleCart() {
  const cartSection = document.getElementById('cart');
  const orderForm = document.getElementById('order');
  cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
  orderForm.style.display = 'none'; // Ховаємо форму замовлення при відкритті кошика
}

// Відкриття форми замовлення
function openOrderForm() {
  document.getElementById("order").style.display = "block";
  document.getElementById("cart").style.display = "none";
}

function closeOrderForm() {
  document.getElementById("order").style.display = "none";
  document.getElementById("cart").style.display = "none";
}

// Очищення кошика
function clearCart() {
  cart = {}; // Очищаємо кошик
  countglob = 0;
  totalglob = 0;
  updateCartDisplay();

  document.getElementById("order").style.display = "none";
  document.getElementById("order-success-message").style.display = "none";
}

// Обробка форми замовлення
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  // Очищення кошика після оформлення замовлення
  cart = {}; // Очищаємо кошик
  countglob = 0;
  totalglob = 0;

  // Оновлення відображення кошика
  updateCartDisplay();

  // Показати повідомлення про успішне замовлення
  e.target.style.display = 'none';
  document.getElementById("order-success-message").style.display = "block";
  setTimeout(() => {
    document.getElementById("order-success-message").style.display = "none";
    document.querySelector('.order').style.display = 'none';
  }, 2000);
});

// Створення картки продукту
const products = [
  { name: 'Яблука', price: 30 },
  { name: 'Банани', price: 40 },
  { name: 'Помідори', price: 25 },
  { name: 'Круасани', price: 50 },
  { name: 'Пиріжки', price: 35 },
  { name: 'Торт', price: 200 }
];

function createProductCard(name, price) {
  const card = document.createElement('div');
  card.classList.add('card');

  const productName = document.createElement('h3');
  productName.textContent = name;
  card.appendChild(productName);

  const productNImg = document.createElement('img');
  productNImg.setAttribute('src', `${name}.jpg`);
  card.appendChild(productNImg);

  const productPrice = document.createElement('p');
  productPrice.textContent = `Ціна: ${price} грн`;
  card.appendChild(productPrice);

  const addButton = document.createElement('button');
  addButton.textContent = 'Додати';
  addButton.onclick = () => addToCart(name, price);
  card.appendChild(addButton);

  return card;
}

// Завантаження продуктів на сторінку
function loadProducts() {
  const catalogContainer = document.querySelector('#products .container');
  products.forEach(product => {
    const productCard = createProductCard(product.name, product.price);
    catalogContainer.appendChild(productCard);
  });
}

// Викликаємо функцію, щоб завантажити продукти після завантаження сторінки
window.onload = loadProducts;
