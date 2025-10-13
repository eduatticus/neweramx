const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
    document.getElementById("summary-items").innerHTML = "";
    document.getElementById("summary-total").textContent = "Total: $0.00";

    // Reset navbar/mobile badge if exists
    const cartCount = document.getElementById("cart-count-mobile");
    if (cartCount) cartCount.textContent = 0;

    return;
  }

  // Render detailed cart items
  let cartHTML = cart.map((item, index) => `
    <div class="cart-item" style="display:flex; align-items:center; border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:8px;">
      <img src="${item.image}" alt="Producto" style="width:120px; height:120px; object-fit:cover; margin-right:55px; border-radius:6px;">
      <div>
        <p><strong>${item.product}</strong></p>
        <p>Talla: ${item.size}</p>
        <p>Precio: ${item.price}</p>
        <button onclick="removeItem(${index})" style="background:#c0392b; color:#fff; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">
          Eliminar
        </button>
      </div>
    </div>
  `).join("");

  cartContainer.innerHTML = cartHTML;

  // --- Render summary ---
  document.getElementById("summary-items").innerHTML = cart.map(item => `
    <div style="border-bottom:1px solid #eee; padding:5px 0;">
      <small>${item.product}</small><br>
      <small>Talla: ${item.size}</small> — <small>${item.price}</small>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceNum;
  }, 0);

  document.getElementById("summary-total").textContent = `Total: $${total.toFixed(2)}`;

  // Update navbar/mobile badge
  const cartCount = document.getElementById("cart-count-mobile");
  if (cartCount) cartCount.textContent = cart.length;
}

// Function to remove an item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to empty entire cart
function emptyCart() {
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", function () {
  // Get the numeric total from summary
  let totalText = document.getElementById("summary-total").textContent;
  let total = totalText.replace("Total:", "").replace("$", "").trim();

  // Save just the number
  localStorage.setItem("cartTotal", total);

  // Redirect to spei_pay.html
  window.location.href = "checkout.html";
});

// Empty cart button (make sure it exists in your HTML)
const emptyCartBtn = document.getElementById("empty-cart-btn");
if (emptyCartBtn) {
  emptyCartBtn.addEventListener("click", emptyCart);
}

// Initial render
renderCart();
