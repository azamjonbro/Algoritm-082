let box = document.querySelector("div")


box.innerHTML = "<b>Salom bolalar</b>"
// box.textContent="<b>Salom bolalar</b>"

// appendchild

let h2 = document.createElement("h2")
h2.classList.add("title")
h2.id = "title"

h2.innerHTML = "Salom bolalar"
h2.style.color = "red"

box.appendChild(h2) 


console.log(h2);
// let number = "1"

// typeof number=="number"?1+number:Number(number)+1

// if(isNaN(number)){
//     console.log(Number(number)+3);
// }
// else{
//     console.log("Javob chiqdi");
//     for(let i = 0; i<box.length;i++){
//         box[i].innerHTML = "Hello World!"
//     }
// }


// let abs = "123"
// let bsd = 123
// console.log(Number(abs)+bsd);


// console.log(Number(abs));
 

// querySelectorAll -> bu bizga Array qaytarib beradi va biz u 
// array ichidagi indexlar orqali bog'lanib element qiymatini o'zgartira olamiz


