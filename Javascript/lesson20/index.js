// let a = 1 //global scopeda elon qilingan o'zgaruvchi

// function test() {   
//     let b = 2 //local scope
//     console.log(a) // 1
//     console.log(b) // 2
// }

// let y = 3 //global scope

// if(true){
//     let z = 4 //block scope
//     console.log(a) // 1
//     console.log(y) // 3
//     console.log(z) // 4
// }

// function jalolhon (){
//     let global = 10 //lexical scope

//     function abdujalil(){
//         console.log(global);
//     }
// }
// console.log(global);

//  function 5 hil bolib ularning farqlari

// function test (){} // function decloration
// const test = function (){} // function expression
// const test = () => {} // arrow function
// document.addEventListener('click', function (){}) // collback function anonymous function
// function qiymat (number){
//     qiymat(10) 
//     console.log(number);
// }

// bu while loop bo'lib, u biror shart bajarilguncha ishlaydi
// let son = 1;

// while (son <= 3) {
//   console.log("Salom! Bu son: " + son);
//   if(son === 2){
//     console.log("Ikki!");
//   }
//   if(son === 3){
//     console.log("Uch!");
//   }
//   if(son === 1){
//     console.log("Birinchi!");
//   }
//   son++;
// }


//bu for loop bo'lib, u berilgan shart bajarilguncha ishlaydi
for (let i = 0; i > 10; i++) {
    console.log(i);
}

// bu do while loop bo'lib, u biror shart bajarilguncha ishlaydi

let son = 1;
do {
    console.log("Salom! Bu son: " + son);
    if (son === 2) {
        console.log("Ikki!");
    }
    if (son === 3) {
        console.log("Uch!");
    }
    if (son === 1) {
        console.log("Birinchi!");
    }
    son++;
}
while (son <= 3);

let arr = [{name: "Jalol", age: 20}, {name: "Abdujalil", age: 21}, {name: "Jalolhon", age: 22}];
for (data of arr) {
    console.log(data); // indexlarni chiqaradi
}

// forin bu arraynin indexlarini chiqaradi
// forof bu arrayning qiymatlarini chiqaradi
// ---------------------------------------String methodlari-------------------------------------------//

let string = " Assalomu alaykum ";

console.log(string.length); // string uzunligini chiqaradi
console.log(string.charAt(5)); // stringning 0 indexini chiqaradi
console.log(string.indexOf("a")); // stringning ichidan a harfini qidiradi
console.log(string.lastIndexOf("a")); // stringning ichidan a harfini qidiradi ikkinchi topganini oladi
console.log(string.slice(0, 5)); // stringning 0 dan 5 gacha bo'lgan qismini chiqaradi
console.log(string.substring(0, 5)); // stringning 0 dan 5 gacha bo'lgan qismini chiqaradi
string.includes("a")? string.indexOf("a"):console.log("a harfi mavjud emas") // string ichidan a harfini qidiradi


console.log(string.slice(0,-1));
console.log(string.substring(0,1));

// slice bilan substring farqi slice manfiy indexni qabul qiladi
// substring manfiy indexni qabul qilmaydi
console.log(string.substr(0, 5)); // stringning 0 dan 5 gacha bo'lgan qismini chiqaradi
console.log(string.split("")); // stringni bo'shliqdan ajratadi agar men " " yoki "," "." "-" shu chiziqlardan boshlab ajratadi
// aks holda "" har qanday belgi yoki harfni alohida alohida string qilib array ichiga yoyib beradi.

console.log(string.split("").join(""))
//join bu array ichidagi stringlarni birlashirib beradi.

console.log(string.toUpperCase()); // stringni katta harflarga o'giradi
console.log(string.toLowerCase()); // stringni kichik harflarga o'giradi
console.log(string.trim()); // stringning boshidagi va oxiridagi bo'shliqni olib tashlaydi
console.log(string.trimStart()); // stringning boshidagi bo'shliqni olib tashlaydi
console.log(string.trimEnd()); // stringning oxiridagi bo'shliqni olib tashlaydi
console.log(string.replace("A", "a")); // string ichidagi a harfini A ga o'giradi
console.log(string.replaceAll("a", "A")); // string ichidagi a harfini A ga o'giradi
console.log(string.repeat(3)); // stringni 3 marta takrorlaydi
console.log(string.startsWith("A")); // string A harfi bilan boshlanadimi va true false javob qaytaradi
console.log(string.endsWith("m")); // string m harfi bilan tugaydimi va true false javob qaytaradi
console.log(string.search("a")); // string ichidan a harfini qidiradi 

// --------------------------------------Math methodlari-------------------------------------//

console.log(Math.abs(-10)); // sonning musbat qiymatini chiqaradi
// agar biz musbat sonni manfiyga aylantirmoqchi bolsak number*(-1) bilan ko'paytiramiz va bizga -number qaytadi

// ---------------------sonlarni yaxlitlash---------------------//


