function getallproduct(){
  fetch("https://dummyjson.com/products?limit=20")
    .then((res) => res.json())
    .then((data) => {
      const searchInput = document.querySelector(".search-input");
      const contentbox = document.querySelector(".contentbox");
      const allData = data?.products || [];

      // Mahsulotlarni chiqaruvchi funksiya
      function renderProducts(products) {
        contentbox.innerHTML = ""; // eski elementlarni tozalash
        products.forEach((e) => {
          const product = document.createElement("div");
          product.classList.add("product");
          product.innerHTML = `
            <div class="imgbox">
              <img width="100%" height="100%" style="border-radius: 10px;" src="${e.images[0]}" alt="${e.description}">
            </div>
            <div class="info">
              <h3 class="product-title">${e.title}</h3>
              <p class="product-desc">${e.description.slice(0, 40)} <a href="#">more ...</a></p>
              <span class="category">${e.category}</span>
              <div class="buttonbox">
                <button class="buy">Buy</button>
                <button onclick=(deleteFunction()) class="delete">Delete</button>
              </div>
            </div>
          `;
          contentbox.appendChild(product);
        });
      }

      // Dastlab barcha mahsulotlarni ko‘rsatamiz
      renderProducts(allData);

      // Search qismi
      searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value.toLowerCase();
        const filtered = allData.filter((item) =>
          item.title.toLowerCase().includes(searchText)
        );
        filtered.length?renderProducts(filtered):contentbox.innerHTML="<h3 class='notfound'>Product not found a</h3>";

      });
    })
    .catch((err) => {
      console.error(err);
    });
}

getallproduct();


function deleteFunction(){
   let modal = document.querySelector(".overview")
   let notif = document.querySelector(".notification")
   modal.style.display="flex"
   let success = document.querySelector(".success")
   let cancel = document.querySelector(".cancel")
   success.addEventListener("click",()=>{
      modal.style.display="none"
      notif.classList.add("notification-active")
   })
   cancel.addEventListener("click",()=>{
      modal.style.display="none"
   })
      notif.classList.remove("notification-active")
}


