
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.getElementById("stateDropdown");
  const selectBox = dropdown.querySelector(".select-box");
  const optionsContainer = dropdown.querySelector(".options-container");
  const radios = optionsContainer.querySelectorAll("input[type=radio]");
  const selected = dropdown.querySelector(".selected");
  const hiddenInput = document.getElementById("state");

  // Toggle dropdown
  selectBox.addEventListener("click", () => {
    optionsContainer.style.display =
      optionsContainer.style.display === "block" ? "none" : "block";
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      optionsContainer.style.display = "none";
    }
  });

  // Update selection
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        selected.textContent = radio.parentNode.textContent.trim();
        hiddenInput.value = radio.value;
        optionsContainer.style.display = "none"; // auto-close after pick
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const cartSummary = document.getElementById("cart-summary"); // optional
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // If you want to show a quick summary of the cart
  if (cartSummary && cart.length > 0) {
    let total = 0;
    let html = "<ul>";
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      html += `<li>${item.name} - ${item.quantity} x $${item.price}</li>`;
    });
    html += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
    cartSummary.innerHTML = html;

    // Save total for next page
    localStorage.setItem("cartTotal", total);
  }

  // When submitting the form
  const form = document.getElementById("checkout-container");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent normal submission

    const checkoutData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value
    };

    // Save checkout info
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    // Go to SPEI payment page
    window.location.href = "spei_pay.html";
  });
});