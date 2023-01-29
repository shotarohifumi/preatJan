let btn=document.querySelector(".btn3");
// console.log(btn);
btn.addEventListener("click",function(){
    window.location.href="https://shotarohifumi.github.io/mainatJan/";
})

let fBtn1=document.querySelector(".btn1");
// console.log(fBtn);
fBtn1.addEventListener("mouseover",function(){
    fBtn1.textContent="fakey";
})
let fBtn2=document.querySelector(".btn2");
// console.log(fBtn);
fBtn2.addEventListener("mouseover",function(){
    fBtn2.textContent="fakey";
})
let fBtn4=document.querySelector(".btn4");
// console.log(fBtn);
fBtn4.addEventListener("mouseover",function(){
    fBtn4.textContent="fakey";
})


fBtn1.addEventListener("mouseleave",function(){
    fBtn1.textContent="Grab me";
})

fBtn2.addEventListener("mouseleave",function(){
    fBtn2.textContent="Grab me";
})

fBtn4.addEventListener("mouseleave",function(){
    fBtn4.textContent="Grab me";
})

