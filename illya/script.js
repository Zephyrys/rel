const products = [
    { id: 1, name: "Cyberpunk 2077", price: 1200, image: "https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg" },
    { id: 2, name: "The Witcher 3: Wild Hunt", price: 900, image: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870" },
    { id: 3, name: "Dark Souls III", price: 850, image: "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png" },
    { id: 4, name: "Red Dead Redemption 2", price: 1300, image: "https://upload.wikimedia.org/wikipedia/ru/0/03/Red_Dead_Redemption_2_coverart.jpg" },
    { id: 5, name: "Grand Theft Auto V", price: 1000, image: "https://upload.wikimedia.org/wikipedia/uk/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png" },
    { id: 6, name: "Elden Ring", price: 1400, image: "https://storage.googleapis.com/pod_public/750/216712.jpg" },
    { id: 7, name: "Assassin's Creed Valhalla", price: 1100, image: "https://image.api.playstation.com/vulcan/ap/rnd/202007/0208/Ud7Ikvjoyev61bx3n1PTC9u8.png" },
    { id: 8, name: "Horizon Zero Dawn", price: 950, image: "https://upload.wikimedia.org/wikipedia/ru/9/93/Horizon_Zero_Dawn.jpg" },
    { id: 9, name: "DOOM Eternal", price: 900, image: "https://upload.wikimedia.org/wikipedia/ru/8/8c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Doom_Eternal.jpg" },
    { id: 10, name: "Resident Evil Village", price: 1200, image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/capsule_616x353.jpg?t=1738822560" },
    { id: 11, name: "Sekiro: Shadows Die Twice", price: 1050, image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg" },
    { id: 12, name: "Far Cry 6", price: 1150, image: "https://image.api.playstation.com/vulcan/img/rnd/202106/0722/4MxzDZKZwtEWyMWZghvwd7bQ.jpg" },
    { id: 13, name: "God of War", price: 1000, image: "https://upload.wikimedia.org/wikipedia/ru/5/5a/God_of_War_2018_cover.jpg" },
    { id: 14, name: "FIFA 23", price: 800, image: "https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/GU1vXFJpbzGYNV6UN3U0Cnnb.png" },
    { id: 15, name: "Call of Duty: Modern Warfare II", price: 1100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeuoGd2ewXnCjIzjSsN_uXmHlGEQ-pjc6dw&s" },
    { id: 16, name: "Metro Exodus", price: 950, image: "https://upload.wikimedia.org/wikipedia/uk/8/87/%D0%9E%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0_%D0%B2%D1%96%D0%B4%D0%B5%D0%BE%D0%B3%D1%80%D0%B8_Metro_Exodus.jpg" },
    { id: 17, name: "Death Stranding", price: 1200, image: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/ee/Death_Stranding_Poster.jpg/640px-Death_Stranding_Poster.jpg" },
    { id: 18, name: "Ghost of Tsushima", price: 1300, image: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b6/Ghost_of_Tsushima.jpg/274px-Ghost_of_Tsushima.jpg" },
    { id: 19, name: "Forza Horizon 5", price: 1100, image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/58/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Forza_Horizon_5.jpg/640px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Forza_Horizon_5.jpg" },
    { id: 20, name: "Mortal Kombat 11", price: 900, image: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Mortal_Kombat_11.jpg" }
];


const cart = [];

function renderProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-conatiner"><h3>${product.name}</h3>
            <p>${product.price} грн</p>
            <button onclick="addToCart(${product.id})">Додати в кошик</button>
            </div>
            
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("cart-btn").addEventListener("click", () => {
    renderCart();
    document.getElementById("cart-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "none";
});

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    
    let total = 0;
    cart.forEach((product, index) => {
        total += product.price;
        const item = document.createElement("li");
        item.innerHTML = `${product.name} - ${product.price} грн <button onclick="removeFromCart(${index})">❌</button>`;
        cartItems.appendChild(item);
    });
    
    cartTotal.innerText = `Сума: ${total} грн`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    document.getElementById("loader-container").style.display = "flex";
    document.getElementById("loader").style.display = "flex";

    setTimeout(() => {
        document.getElementById("loader-container").style.display = "none";
        alert("Оплата успішна! Дякуємо за покупку! 🎉");
        cart.length = 0;
        updateCartCount();
        renderCart();
        document.getElementById("cart-modal").style.display = "none";
    }, 3000);
});


renderProducts();
