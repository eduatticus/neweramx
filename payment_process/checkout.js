document.addEventListener("DOMContentLoaded", function() {

  // ==================== MANEJO DEL DROPDOWN DE ESTADO ====================
  const dropdown = document.getElementById("stateDropdown");
  const selectBox = dropdown.querySelector(".select-box");
  const optionsContainer = dropdown.querySelector(".options-container");
  const radios = optionsContainer.querySelectorAll("input[type=radio]");
  const selected = dropdown.querySelector(".selected");
  const hiddenInput = document.getElementById("state");

  selectBox.addEventListener("click", () => {
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      optionsContainer.style.display = "none";
    }
  });

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        selected.textContent = radio.parentNode.textContent.trim();
        hiddenInput.value = radio.value;
        optionsContainer.style.display = "none";
      }
    });
  });

  // ==================== ENVÍO DEL FORMULARIO ====================
  const form = document.getElementById("checkout-container");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const checkoutData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      state: document.getElementById("state").value,
      municipio: document.getElementById("municipio").value,
      colonia: document.getElementById("colonia").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
      address2: document.getElementById("address2").value,
      zip: document.getElementById("zip").value
    };

    // Guardar en localStorage
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    // Redirigir a la página de pago
    window.location.href = "spei_pay.html";
  });
});
