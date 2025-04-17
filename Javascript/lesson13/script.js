let product = ["olma","behi","anjir","nok","uzum","laylo","lola","oygul","barno"]

// array ichidagi qiymatlarni menga teskarisiga aylantirib beradigan method
// console.log(product.reverse());

// arrayni ichidagi qiymatlarni sortirovka qilish uchun 
// product.sort()



// let newProduct = product.unshift("banan")
// product.shift()
// let ismlar = ["melon","watermelon"]
// let newProduct =product.concat(ismlar)
// console.log(newProduct);


// console.log(newProduct);

// push & unshift vs concat
// concat bu ikkita arrayni birlashtirib bitta o'zagga yoyib beradi
// push yoki unshift bilan esa array ichiga yangi array yaratib malumotlar saqlab qolinadi




// yangi methodlar

// map va bu har safar qiymatlarni yani elementlarni o'ziga olib yangi array sifatida qaytaradi
// product.map((element)=>{
//     if(element=="olma"){
//         console.log(element);
//     }
//     else{
//         console.log("bu olma emas");
        
//     }
// })

// forEach bu qiymatlarni o'ziga olmaydi va hech qanday yangi qiymat qaytarmaydi 

// biz return orqali har bir elementni o'zini olishimiz mumkin.

// let body = document.querySelector("body")
// product.forEach((element)=>{
//      let h2 = document.createElement("h2")

//      h2.innerHTML=element
//     body.appendChild(h2)
// })

// console.log();

let numbers = [1,2,6,7,4,23,5,9,21,3,]

numbers.sort((a,b)=>a-b)

console.log(numbers);


// ()=>{} callback function 
// yoki yana bir nomi  anonym function

