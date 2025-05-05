fetch("https://fakestoreapi.com/products")
    .then((asilbek) => asilbek.json())
    .then((qiymat) => {
        let productList = document.querySelector(".product-list");
        qiymat.forEach((mahsulot) => {
            let product = document.createElement("div");
            console.log(mahsulot);
            
            product.classList.add("product");
            product.innerHTML = `
                <div class="product__imgbox">
                    <img src="${mahsulot.image}" width="300" loading="lazy" title="${mahsulot.title}" alt="${mahsulot.title}">
                </div>
                <div class="product-info">
                    <h2>${mahsulot.title}</h2>
                    <div class="product-description">
                        <p>${mahsulot.description.slice(0,30)} <a href="#">more ...</a></p>
                    </div>
                    <div class="product-pricebox">
                        <span class="product-price">${mahsulot.price} $</span>
                    </div>
                    <div class="product-btnbox">
                        <button class="product-btn">Buy</button>
                        <button class="product-btn">Add to cart</button>
                    </div>
                </div>    
        `
        productList.appendChild(product);
        })
    })
    .catch((xato) => {
        console.error("Xatolik yuz berdi", xato);
    })


