const products = [
    { id: 1, name: "Мівіна", price: 15, image: "1538592_1.webp", store: "АТБ" },
    { id: 2, name: "Сосиски", price: 59, image: "sejtan-kovbasnij-sosiski-vegetus-500g.jpg", store: "АТБ" },
    { id: 3, name: "Куряче філе", price: 78, image: "catalog_product_main_82207.jpg", store: "АТБ" },
    { id: 4, name: "Борошно пшеничне", price: 45, image: "https://static.wixstatic.com/media/c80b1d_d5efbff8b9884a35973ba5d7504f0689~mv2.png/v1/fill/w_490,h_630,al_c,q_85,enc_avif,quality_auto/c80b1d_d5efbff8b9884a35973ba5d7504f0689~mv2.png", store: "Сільпо" },
    { id: 5, name: "Цукерки Barotine", price: 30, image: "https://ot.net.ua/userdata/modules/wproducts/wprod_products_photo/icons/14871.png", store: "АТБ" },
    { id: 6, name: "КЕТО кава", price: 78, image: "https://steviasun.com.ua/wp-content/uploads/2021/05/ggi.jpg", store: "Сільпо" },
    { id: 7, name: "Норі снек", price: 15, image: "https://www.express-service.com.ua/upload/iblock/b03/26mvgkgwdq527nvl3of37i0y1glav1wr/ua_pim_384801001001_01.png", store: "АТБ" },
    { id: 8, name: "Kinder Crispy", price: 100, image: "https://www.kinder.com/ua/sites/kinder_ua/files/styles/hub_product/public/2025-01/kinder-crispy_block4_product_600x480-1.png?t=1737562622", store: "АТБ" },
    { id: 9, name: "Набір круп", price: 150, image: "https://aliance.com.ua/wp-content/uploads/2021/04/your_repaiyaritsaend2-o4btyrjtkesg6oo5gjl5l4mva6hj6sq2dnhbug5b7k.png", store: "Сільпо" },
    { id: 10, name: "Пектин", price: 40, image: "https://images.prom.ua/4042611715_w600_h600_4042611715.jpg", store: "Сільпо" },
    { id: 11, name: "Мівіна", price: 45, image: "  https://images.silpo.ua/products/1600x1600/52dc5805-512c-47de-9553-7e90da3a5634.png", store: "Сільпо" },
    { id: 12, name: "Йогурт", price: 78, image: " https://agropererobka.com.ua/content/products/list/yogurt_termostatnyy_sladkiy_s_napolnitelem_3_5_1719310484.png", store: "АТБ" },
    { id: 13, name: "Куряче філе", price: 78, image: "catalog_product_main_82207.jpg", store: "АТБ" },
    { id: 14, name: "Борошно пшеничне", price: 45, image: "https://static.wixstatic.com/media/c80b1d_d5efbff8b9884a35973ba5d7504f0689~mv2.png/v1/fill/w_490,h_630,al_c,q_85,enc_avif,quality_auto/c80b1d_d5efbff8b9884a35973ba5d7504f0689~mv2.png", store: "Сільпо" },
    { id: 15, name: "Цукерки Barotine", price: 30, image: "https://ot.net.ua/userdata/modules/wproducts/wprod_products_photo/icons/14871.png", store: "АТБ" },
    { id: 16, name: "Норі снек", price: 15, image: "https://www.express-service.com.ua/upload/iblock/b03/26mvgkgwdq527nvl3of37i0y1glav1wr/ua_pim_384801001001_01.png", store: "АТБ" },
    { id: 17, name: "Мівіна", price: 15, image: "1538592_1.webp", store: "АТБ" },
    { id: 18, name: "Мівіна", price: 45, image: "  https://images.silpo.ua/products/1600x1600/52dc5805-512c-47de-9553-7e90da3a5634.png", store: "Сільпо" },
    { id: 19, name: "Йогурт", price: 78, image: " https://agropererobka.com.ua/content/products/list/yogurt_termostatnyy_sladkiy_s_napolnitelem_3_5_1719310484.png", store: "АТБ" },
    { id: 20, name: "Куряче філе", price: 78, image: "catalog_product_main_82207.jpg", store: "АТБ" },
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');
    const cartIcon = document.querySelector('.koshik');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartItemsList = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Display products
    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div> <p>${product.name} - <b style="font-size:20px">${product.price}</b> грн</p>
            <p>Магазин: ${product.store}</p>
            <button class="add-to-cart">Додати в кошик</button>
            </div>
           
        `;
        const addButton = productElement.querySelector('.add-to-cart');
        addButton.addEventListener('click', () => addToCart(product));
        productsContainer.appendChild(productElement);
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    // Remove from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }
    function clearCart(){
        cart=[]
        updateCart();
    }
    // Update cart display
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} грн`;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Видалити';
            removeBtn.onclick = () => removeFromCart(index);

            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total;

        // Disable checkout if cart is empty
        checkoutBtn.disabled = cart.length === 0;
    }

    // Show cart modal
    cartIcon.addEventListener('click', () => {
        cartModal.classList.add('show');
    });

    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('show');
    });

    // Checkout (just a basic alert for now)
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Ваш кошик порожній!");
        } else {
            alert("Переходимо до оформлення замовлення...");
            clearCart()
        }
    });
});
