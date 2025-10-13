
  // Get the total from localStorage
  const total = localStorage.getItem("cartTotal") || "0";
  document.getElementById("checkout-total").textContent = total;




document.addEventListener("DOMContentLoaded", function() {
  const offerDiv = document.querySelector(".offer");
  const checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = localStorage.getItem("cartTotal") || 0;

  if (!checkoutData || cart.length === 0) {
    offerDiv.innerHTML = "<p>No hay información disponible del pedido.</p>";
    return;
  }

  let itemsHTML = "<ul>";
  cart.forEach(item => {
    itemsHTML += `<li>${item.product} - Talla: ${item.size} x ${item.price}</li>`;
  });
  itemsHTML += "</ul>";

  offerDiv.innerHTML = `
    <h3>Resumen del Pedido</h3>
    <p><strong>Nombre:</strong> ${checkoutData.name}</p>
    <p><strong>Correo:</strong> ${checkoutData.email}</p>
    <p><strong>Ciudad:</strong> ${checkoutData.city}</p>
    <p><strong>Dirección:</strong> ${checkoutData.address}</p>
    <p><strong>Teléfono:</strong> ${checkoutData.phone}</p>
    <h4>Productos:</h4>
    ${itemsHTML}
    <p><strong>Total:</strong> $${parseFloat(total).toFixed(2)}</p>
  `;
});
