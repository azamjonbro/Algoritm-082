






// biz settimoutga vaqt kiritsak shu vaqt davri davomida ishlaydi va vaqt tugashi bilan ishdan chiqadi
// setTimeout(() => {
    
// }, 1000);


// setinterval bolsa aksincha qancha vaqt kiritsak shu vaqt oralig'ida ishga tushadi 
setInterval(() => {

    let bugun  = new Date()

    let yil = bugun.getFullYear()
    let oy = bugun.getMonth()+1
    let kun = bugun.getDate()

    let soat = bugun.getHours()
    let minut = bugun.getMinutes()

    let sekund = bugun.getSeconds()
    let millisecund = bugun.getMilliseconds()

    let soatcha = document.querySelector('.hour')

    soatcha.innerHTML = `<p>${yil + '-' + oy + "-" + kun + "-" + soat + ":" + minut + ":"+ sekund + " " + millisecund}</p>`
    
    soatcha.innerHTML= `<img src="https://picsum.photos/id/${Math.floor(Math.random()*600)}/${Math.floor(Math.random()*1080)}/${Math.floor(Math.random()*1980)}"/>`
    
    
    
    console.log();
}, 1000);

