document.addEventListener("DOMContentLoaded", () => {

  // DROPDOWN ESTADO
  const dropdown = document.getElementById("stateDropdown");
  const selectBox = dropdown.querySelector(".select-box");
  const optionsContainer = dropdown.querySelector(".options-container");
  const radios = dropdown.querySelectorAll('input[name="stateOption"]');
  const selected = dropdown.querySelector(".selected");
  const hiddenInput = document.getElementById("state");

  selectBox.addEventListener("click", () => {
    optionsContainer.style.display =
      optionsContainer.style.display === "block"
        ? "none"
        : "block";
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      optionsContainer.style.display = "none";
    }
  });

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {

      selected.textContent = radio.parentElement.textContent.trim();

      hiddenInput.value = radio.value;

      optionsContainer.style.display = "none";
    });
  });

  // CART SUMMARY
  const cartSummary = document.getElementById("cart-summary");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartSummary && cart.length > 0) {
    let total = 0;
    let html = "<ul>";

    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      html += `
        <li>
          ${item.name} -
          ${item.quantity} x $${item.price}
        </li>
      `;
    });

    html += `
      </ul>
      <p><strong>Total: $${total.toFixed(2)}</strong></p>
    `;

    cartSummary.innerHTML = html;

    localStorage.setItem("cartTotal", total);
  }

  // FORM SUBMIT
  const form = document.getElementById("checkout-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const checkoutData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      mun: document.getElementById("mun").value,
      address: document.getElementById("address").value,
      address2: document.getElementById("address2").value,
      zip: document.getElementById("zip").value
    };

    localStorage.setItem(
      "checkoutData",
      JSON.stringify(checkoutData)
    );

    console.log(checkoutData);
  });

});
