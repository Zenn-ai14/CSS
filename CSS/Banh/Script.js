// Lấy tất cả các nút "Thêm vào giỏ" và lắng nghe sự kiện
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let cart = [];

// Hàm cập nhật giỏ hàng
function updateCart() {
    // Cập nhật số lượng trong giỏ
    cartCount.textContent = cart.length;

    // Cập nhật danh sách giỏ hàng
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}đ`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    // Cập nhật tổng giá
    totalPriceElement.textContent = totalPrice;
}

// Xử lý sự kiện khi người dùng thêm sản phẩm vào giỏ
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseInt(button.getAttribute('data-price'), 10);
        cart.push({ name: productName, price: productPrice });

        // Cập nhật giỏ hàng
        updateCart();
    });
});

// Xử lý sự kiện thanh toán
const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
        cart = [];  // Làm sạch giỏ hàng
        updateCart();
    } else {
        alert('Giỏ hàng của bạn đang trống!');
    }
});
