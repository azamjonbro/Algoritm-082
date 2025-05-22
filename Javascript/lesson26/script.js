function vaqtniqaytar (date){
 let sana = new Date(date);
 return `${sana.getFullYear()} - ${sana.getMonth()+1} - ${sana.getDate()}`
}
export default vaqtniqaytar


// export import qilish usuli hisoblanadi
// bu nima  uchun ? bu bizni codelarimizni qayta qayta ishlatmaslik uchun hisoblanadi
// codelarimiz pure(toza) holda qolishi uchun va codelarimiz yozilish tartiribini buzmaslik va keyinchalik 
// o'zgartirmasligimiz uchun kerak boladi.