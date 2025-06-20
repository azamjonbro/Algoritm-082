export function HeaderComponent() {
  // return "<h1>Salom</h1>"; // HTML string
  const h1 = document.createElement("h1");
  h1.textContent = "Salom";
  return h1;
}

// Bu har safar header Componentni chaqirganimda html qaytargani uchun component deb ataladi.