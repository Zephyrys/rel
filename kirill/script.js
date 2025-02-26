// Дані про продукти
const products = [
    { id: 1, name: 'Tesla Model S', price: 1000000, image: 'https://elcars.ua/salon/wp-content/uploads/sites/6/2023/05/1920x-798x466.jpg' },
    { id: 2, name: 'BMW M3', price: 800000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f_JHF4KgtomD4QEueRa7n7R7n7AidPfv0A&s' },
    { id: 3, name: 'Audi A8', price: 950000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_Audi_A8_50_TDi_Quattro_Automatic_3.0.jpg/1200px-2018_Audi_A8_50_TDi_Quattro_Automatic_3.0.jpg' },
    { id: 4, name: 'Mercedes-Benz C-Class', price: 600000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWUNS5nBMVAPhqm03uqfP4IYk8AVCYZimdw&s' },
    { id: 5, name: 'Porsche 911', price: 1200000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJw5Zm9btooqdfPC5_T6GMRg9PPfK3u02hjA&s' },
    { id: 6, name: 'Lamborghini Huracan', price: 2500000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_hUNJ5FuVoGDnRf2oMlWbv7exBlaysduTA&s' },
    { id: 7, name: 'Ford Mustang', price: 750000, image: 'https://media.ed.edmunds-media.com/ford/mustang/2025/oem/2025_ford_mustang_coupe_dark-horse_fq_oem_1_1600.jpg' },
    { id: 8, name: 'Chevrolet Camaro', price: 700000, image: 'https://avtoradio.ua/uploads/summernote/photos/shares/658456a8182a4.jpg' },
    { id: 9, name: 'Toyota Prius', price: 300000, image: 'https://wah.ua/static/content/thumbs/2048*1365/7/95/6unk7u-7cbf80622fde68760671829b4073b957.jpg' },
    { id: 10, name: 'Honda Civic', price: 400000, image: 'https://cdn.riastatic.com/photosnewr/auto/newauto_photos/honda-civic__789430-620x415x70.jpg' },
    { id: 11, name: 'Nissan Skyline GT-R', price: 1600000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/1200px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg' },
    { id: 12, name: 'Mazda MX-5', price: 500000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mazda_Roadster_ND.jpg/1200px-Mazda_Roadster_ND.jpg' },
    { id: 13, name: 'Ferrari 488 GTB', price: 3000000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ferrari_488_GTB.jpg/2560px-Ferrari_488_GTB.jpg' },
    { id: 14, name: 'Aston Martin DB11', price: 2500000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkmx_RU4ZJO1jaZBsPvXq62sEHlLote4q5A&s' },
    { id: 15, name: 'BMW X5', price: 850000, image: 'https://hips.hearstapps.com/hmg-prod/images/p90495464-1677001974.jpg?crop=0.720xw:0.608xh;0.250xw,0.329xh&resize=1200:*' },
    { id: 16, name: 'Jaguar F-Type', price: 1500000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2017_Jaguar_F-Type_V6_R-Dynamic_Automatic_3.0_Front.jpg/1200px-2017_Jaguar_F-Type_V6_R-Dynamic_Automatic_3.0_Front.jpg' },
    { id: 17, name: 'Lexus RX 350', price: 900000, image: 'https://cityplaza.lexus.ua/uploads/1/5106-1200x1200_1.jpg' },
    { id: 18, name: 'Subaru Impreza WRX STI', price: 600000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/04-05_Subaru_WRX_STi_2.jpg/1200px-04-05_Subaru_WRX_STi_2.jpg' },
    { id: 19, name: 'Volkswagen Golf GTI', price: 500000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Volkswagen_Golf_VIII_GTI_IMG_3604.jpg/1200px-Volkswagen_Golf_VIII_GTI_IMG_3604.jpg' },
    { id: 20, name: 'Hyundai Elantra', price: 350000, image: 'https://hyundai.com.ua/sites/all/themes/responsive/images/elantra2023/highlights/elantra-highlights-kv-m.jpg' },
    // Комплектуючі:
    { id: 21, name: 'Автоколеса Pirelli', price: 15000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vB3QIofV1asNbHAMr8q5bttknssb1IAMSg&s' },
    { id: 22, name: 'Автохімія Motul', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlB10bmv0L9NF3imR5JfzCm3dqbK2RdF9X6Q&s' },
    { id: 23, name: 'Свічки запалювання NGK', price: 1000, image: 'https://motostyle.ua/image/cache/data/motostyle/product/32614/svecha-zazhiganiya-ngk-91785-zkbr7a-htu-450x450.jpeg' },
    { id: 24, name: 'Фільтр повітря K&N', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1IV4OdedR4V1OIGtKeRcLP76qjvZdwFrQQ&s' },
    { id: 25, name: 'Гальмівні диски Brembo', price: 12000, image: 'https://content.rozetka.com.ua/goods/images/big/378465143.jpg' },
    { id: 26, name: 'Аккумулятор Varta', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNI6F3bhy5OcpN_z8EnurLcVWbeG28riD-AQ&s' },
    { id: 27, name: 'Амортизатори Monroe', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wSnZvKU1EnVp4N1qJiZHlZzGlFP7skpzVA&s' },
    { id: 28, name: 'Комплект килимків для авто', price: 2000, image: 'https://images.prom.ua/2941719605_w700_h500_komplekt-perednih-rezinovyh.jpg' },
    { id: 29, name: 'Пластикова решітка радіатора', price: 1500, image: 'https://images.prom.ua/4556257134_w600_h600_4556257134.jpg' },
    { id: 30, name: 'Світлодіодні фари', price: 7000, image: 'https://images.prom.ua/2787681448_w640_h640_svetodiodnye-fary-po.jpghttps://images.prom.ua/4695642608_w600_h600_4695642608.jpg' }
];


let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartList = document.getElementById('cart-list');
    const cartCountNumber = document.getElementById('cart-count-number');
    const checkoutButton = document.getElementById('checkout-button');

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<p>${item.name} - ${item.price} грн</p>`;
        cartList.appendChild(cartItem);
        total += item.price;
    });

    cartCount.textContent = `Товари у кошику (${cart.length})`;
    cartTotal.textContent = `Сума: ${total} грн`;
    cartCountNumber.textContent = cart.length;

    checkoutButton.disabled = cart.length === 0;
}

function processPayment() {
    const paymentLoader = document.getElementById('payment-loader');
    const paymentSuccess = document.getElementById('payment-success');
    const paymentFail = document.getElementById('payment-fail');

    paymentLoader.style.display = 'block';
    setTimeout(() => {
        paymentLoader.style.display = 'none';
        if(cart.length<1){
            paymentFail.style.display = 'block';
        }
            paymentSuccess.style.display = 'block';
            setTimeout(() => {
                paymentSuccess.style.display = 'none';
                cart = [];
                updateCartUI();
            }, 2000);
        },
   2000);
}
// Функція для пошуку товарів
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filteredProducts); // Відображаємо відфільтровані товари
}

// Обробник події для поля пошуку
document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.trim(); // Отримуємо текст з поля пошуку
    searchProducts(searchQuery); // Викликаємо функцію пошуку
});
function renderProducts(productsToRender = products) {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} грн</p>
            <button onclick="addToCart({id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}'})">Додати до кошика</button>
        `;
        productsList.appendChild(productCard);
    });
}

renderProducts();

document.getElementById('toggle-cart-button').addEventListener('click', () => {
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = cartSection.style.display === 'none' ? 'flex' : 'none';
});

document.getElementById('checkout-button').addEventListener('click', processPayment);
