let productList =  document.querySelector(".product-list")


 const  getAllProduct=async()=>{
  fetch("https://fakestoreapi.com/products/")
  .then((response)=> response.json())
  .then((data)=>{   
   innerData(data)
  })
}
getAllProduct()

const  innerData=async(product)=>{
 
 // manasshu yerda bitta so'roq qo'yganim 
 product?.forEach((item)=>{
  productList.innerHTML+=`
   <div class="product">
       <div class="product-header">
        <img style="border-radius: 10px;" width="100%" height="300px"  src="${item.image}" alt="Bilmiman nimanidir rasmi" loading="lazy" >
       </div>
       <div class="product-textbox">
        <h2 class="product-title">${item.title.slice(0,20)} ...</h2>
        <p class="product-desc">
         ${item.description.slice(0,60)}
        </p>
        <b class="price">
         ${item.price} $
        </b>
       </div>
       <div class="buttonbox">
        <div class="left">
         <i class="fa-solid fa-link"></i>
         <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
        <div class="right">
          <button class="add-to-cart" onclick="addShop(${item.id})">
              Add to cart
            </button>
        </div>
       </div>
      </div>
  `
 }) 
}

let getProduct = JSON.parse(localStorage.getItem("shop")) || [];
let counter = document.querySelector(".counter");
async function addShop(productId) {
 
  // Mahsulotlar localStorage'dan olinadi

  // API dan mahsulotni olish
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await response.json();

  // LocalStorage ichidan product mavjudligini tekshirish
  let existingProduct = getProduct.find((e) => e.id === product.id);

  if (existingProduct) {
    // Agar bor bo‘lsa, count ni oshiramiz
    existingProduct.count += 1;
  } else {
    // Agar yo‘q bo‘lsa, count=1 bilan yangi mahsulotni qo‘shamiz
    product.count = 1;
    getProduct.push(product);
  }

  // Yangilangan listni saqlaymiz
  localStorage.setItem("shop", JSON.stringify(getProduct));

   let totalCount = getProduct.length
   counter.textContent = totalCount;
 }
 let totalCount = getProduct.length
 counter.textContent = totalCount;
