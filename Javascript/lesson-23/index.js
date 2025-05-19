// import json from './products.json'// es6 keyingi import qilish usuli hisoblanadi
// const json = require('./products.json') // bu es6 gacha ishlatilgan fileni tenglash usuli

// l ->  76 degan qiymat protsessorga bordi
// arab tilidagi dol tugmasi bosilganida ham huddi shu 76 degan raqam protsessorga boradi
// protsessor -> settings -> klavitura default language
// utf8  < body>  ->  [188,66,79,68,89,188]

// assembler dasturchilar deyiladi

fetch('./products.json').then((e)=>e.json())
.then((data)=>{
   console.log(data);
 
 //shu yerda men json file turlarini sanab o'taman

 // JSON.parse() //parse bu obj ichidagi qiymatlarni oynaga chiqarish uchun ishlata olish usulga aylantirish
 // JSON.stringify() // stringify esa objga json file formatda malumotlarni saqlash usuli
})