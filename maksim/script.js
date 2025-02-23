let cart = [];
let allProducts = [];

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-list");
    let cartCount = document.getElementById("cart-toggle-btn");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent = item;
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Видалити";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    cartCount.textContent = `🛒 (${cart.length})`;
    if (cart.length > 0) {
        document.getElementById("checkout-btn").style.display = "inline-block";
    } else {
        document.getElementById("checkout-btn").style.display = "none";
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    let cartPanel = document.getElementById("cart-panel");
    let overlay = document.getElementById("overlay");
    cartPanel.style.display = cartPanel.style.display === "none" || cartPanel.style.display === "" ? "block" : "none";
    overlay.style.display = overlay.style.display === "none" || overlay.style.display === "" ? "block" : "none";
}

function searchProducts() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    let productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    allProducts.forEach(category => {
        category.items.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">Додати до кошика</button>
            </div>
        `;
        productsDiv.appendChild(div);})
    });
}


function processPayment() {
    document.querySelector(".cat-gif").style.display = "block";
    setTimeout(() => {
        document.querySelector(".cat-gif").style.display = "none";
        document.getElementById("payment-success").style.display = "block";
        cart = [];
        updateCartUI();
        setTimeout(() => {
            document.getElementById("payment-success").style.display = "none";
            toggleCart();
        }, 3000);
    }, 2000); 
}

function loadProducts() {
    allProducts =  [
{
    category: "Чоловіки",
    items: [
        { img: "https://safari-ukraina.com/image/cache/catalog/image/cache/catalog/product/marmot/kurtka-marmot-mens-MRT-71540.2585_0-1000x1000.webp", name: "Куртка", desc: "Зимова тепла куртка" },
        { img: "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/cholovichi-shtani-travel-100-dlya-podorozhej-siri.jpg?f=452x452", name: "Штани", desc: "Зручні спортивні штани" },
        { img: "https://content2.rozetka.com.ua/goods/images/big/407009204.jpg", name: "Кросівки", desc: "Зручні трекінгові кросівки" }
    ]
},
{
    category: "Жінки",
    items: [
        { img: "https://a.allegroimg.com/original/11e936/b576bfa14baab79fff67d6b23cd8/KURTKA-TREKKINGOWA-DAMSKA-SALOMON-SOFTSHELL", name: "Куртка жіноча", desc: "Легка та тепла куртка" },
        { img: "https://kolgot.net/image/catalog/14.08.24/IMG_1071.jpg", name: "Легінси", desc: "Еластичні спортивні легінси" },
        { img: "https://vzutistore.com.ua/3743-large_default/nike-v2k-run-summit-white-metallic-silver.jpg", name: "Кросівки жіночі", desc: "Зручне спортивне взуття" }
    ]
},
{
    category: "Рюкзаки",
    items:[
        { img: "https://sportbags.com.ua/wp-content/uploads/2024/08/57f1a65f-709e-11e9-a563-305a3a7701f3-00000062900.jpg", name: "Рюкзак туристичний", desc: "Місткий рюкзак для походів" },
        { img: "https://images.avrora.ua/images/detailed/20/43669_002.JPG", name: "Рюкзак міський", desc: "Легкий рюкзак для міста" },
        { img: "https://images.prom.ua/2319807830_w600_h600_2319807830.jpg", name: "Рюкзак водонепроникний", desc: "Рюкзак для екстремальних умов" }
    ]
}
    ];
    displayProducts(allProducts);
}

window.onload = loadProducts;