function changeImage(src) {
  document.getElementById('main-img').src = src;
}

// Función acordeón
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Initialize or retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select elements
const addToCartBtn = document.querySelector(".add-to-cart");
const priceElement = document.querySelector(".price"); 
const mainImage = document.getElementById("main-img");

// ✅ Helper to get selected size from radios
function getSelectedSize() {
  const selected = document.querySelector('input[name="size"]:checked');
  return selected ? selected.value : null;
}

// --- Update cart count ---
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countDesktop = document.getElementById("cart-count");
  const countMobile = document.getElementById("cart-count-mobile");

  if (countDesktop) {
    countDesktop.textContent = cart.length;
    console.log("Desktop count updated:", cart.length);
  }
  if (countMobile) {
    countMobile.textContent = cart.length;
    console.log("Mobile count updated:", cart.length);
  }
}

// Run once on page load
updateCartCount();

// Add to Cart event
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    const selectedSize = getSelectedSize();
    if (!selectedSize) {
      alert("Por favor selecciona una talla.");
      return;
    }

    const price = priceElement.textContent;
    const image = mainImage.src;
    const productName = document.querySelector(".product-title").textContent;

    const cartItem = {
      product: productName,
      size: selectedSize,
      price: price,
      image: image
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

     // 🔥 Play sound
    const sound = document.getElementById("cart-sound");
    if (sound) {
      sound.currentTime = 0; // restart from beginning if spam clicked
      sound.play();
    }

    // 🔥 Trigger cart icon animation
    const cartIcons = document.querySelectorAll(".shopping_cart");
    cartIcons.forEach(icon => {
      icon.classList.add("cart-animate");
      icon.addEventListener("animationend", () => {
        icon.classList.remove("cart-animate");
      }, { once: true });
    });

    console.log("Item added:", cartItem);
  });
}
