document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".spinner").style.display = "none";
    },2000)
});


//up
window.addEventListener("load", ()=> {
    val = window.scrollY;
   if (val > 0) {
    window.scrollTo(0,0);
   }
});
  window.addEventListener('load',close);
///nav
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
nav.classList.toggle("sticky", window.scrollY > 24);
});
//button top
window.addEventListener("scroll",()=>{
 sc.classList.toggle("act", window.scrollY > 500);
});
var sc =document.querySelector('.scroll-up');
sc.addEventListener("click", ()=> {
    val = window.scrollY;
   if (val > 0) {
    window.scrollTo(0,0);
   }
});

//menu

const menup = document.querySelector('.menu');
const closep = document.querySelector('.close-menu');
const openp = document.querySelector('.menu-btn');
var as1 =document.getElementsByTagName('a')[1];
var as2 =document.getElementsByTagName('a')[2];
var as3 =document.getElementsByTagName('a')[3];
var as4 =document.getElementsByTagName('a')[4];

sc.addEventListener('click',close);
openp.addEventListener('click',show);
closep.addEventListener('click',close);
    as1.addEventListener('click',close);
    as2.addEventListener('click',close);
    as3.addEventListener('click',close);
    as4.addEventListener('click',close);
function show() {
    menup.style.display ='block';
    menup.style.left ='0';
}
function close() {
    menup.style.left ='-100%';
}


//web
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");

card1.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/1profile/omarsifo.html')
});
card2.addEventListener('click',()=>{
    window.open('https://omarsefo.github.io/bird/')
});
card3.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/coder/')
});
card4.addEventListener('click',()=>{
    window.open('http://omarsefo.github.io/profile/')
});
card5.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/ar-en/')
});
card6.addEventListener('click',()=>{
    window.open('http://omarsefo.epizy.com/shefra/')
});


// copy 
var nu = document.getElementById("ef");
nu.addEventListener('click', ()=>{
    document.execCommand("copy");
    alert("The Number is Copyed")
});


// type 
var typed=new Typed(".typee", {
    strings: ["Front end Developer", "Developer", "Freelancer", "and will be", "Android Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed=new Typed(".type2", {
    strings: ["Omar", "Sefo", "Front end", "Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

let dar =localStorage.getItem('darkm')
var icon =document.getElementById("ico");

const enable =()=>{
    document.body.classList.add("darkt");
    localStorage.setItem("darkm", "enabled");
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
}
const disenable =()=>{
    document.body.classList.remove("darkt");
    localStorage.setItem("darkm", null);
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");

}
if (dar === "enabled") {
    enable();
}
icon.addEventListener('click',()=>{
    dar = localStorage.getItem("darkm");
    if (dar !== "enabled") {
        enable();
    }else{
        disenable();
    }
})

