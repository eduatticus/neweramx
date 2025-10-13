
// Fake tracking data (for demo purposes)
const trackingData = {
  "MX1234567890": "Tu paquete está en tránsito. Última ubicación: CDMX.",
  "MX9876543210": "Tu paquete fue entregado. Gracias por tu compra.",
  "MX5556667777": "Tu paquete está en preparación para envío."
};

document.querySelector(".track-btn").addEventListener("click", () => {
  const input = document.getElementById("tracking-number");
  const trackingNumber = input.value.trim();

  // Remove previous result if any
  let oldResult = document.querySelector(".tracking-result");
  if (oldResult) oldResult.remove();

  // Create result container
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("tracking-result");

  if (trackingNumber === "") {
    resultDiv.innerHTML = `<p class="error">⚠️ Por favor ingresa un número de seguimiento.</p>`;
  } else if (trackingData[trackingNumber]) {
    resultDiv.innerHTML = `<p class="success">✅ ${trackingData[trackingNumber]}</p>`;
  } else {
    resultDiv.innerHTML = `<p class="error">❌ Número de seguimiento no encontrado. Verifica e intenta de nuevo.</p>`;
  }

  document.querySelector(".tracking-section").appendChild(resultDiv);
});

