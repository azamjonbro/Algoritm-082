let box = document.querySelector(".box")
box.style.width="400px"
box.style.height="400px"
box.style.border="1px solid #000"


function dynamicColor(){

    let random = Math.floor(Math.random()*1000000)
    
    box.style.background="#"+random
    box.style.borderRadius=`${Math.floor(Math.random()*200)}px`
    box.style.transition="0.5s"
    
}

box.addEventListener('mouseenter',()=>{
    dynamicColor()
    
})
box.addEventListener('mouseleave',()=>{
    dynamicColor()  
})












// let button = document.querySelector(".openmodal")
// let box = document.querySelector(".box")

// button.addEventListener("mouseleave",(event)=>{
//     console.log(event.target);
//     box.style.display="block"
//     button.style.display="none"
// })


// let exit = document.querySelector(".exit")

// exit.addEventListener("click",()=>{
//     box.style.display="none"
//     button.style.display="block"
// })