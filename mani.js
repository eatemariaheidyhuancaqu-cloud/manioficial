// ==========================
// TUTORIAL DE LA CAJA
// ==========================

const slides = [
{
img:"mani-04.png",
title:"Paso 1 - Preparar la caja"
},
{
img:"mani-02.png",
title:"Paso 2 - Abrir el dispensador"
},
{
img:"mani-03.png",
title:"Paso 3 - Romper y doblar las pestañas siguiendo las lineas segmentadas para que se combierta en sujetador"
},
{
img:"mani-05.png",
title:"Paso 4 - Sujetar por la parte de arriba y listo, pala terminada para recoger granos"
}
];

let current = 0;

function updateSlide(){

document.getElementById("tutorialImage").src =
slides[current].img;

document.getElementById("stepTitle").innerText =
slides[current].title;

document.querySelectorAll(".dots span")
.forEach(dot => dot.classList.remove("active"));

document.getElementById(
"dot" + (current + 1)
).classList.add("active");

}

function nextSlide(){

current++;

if(current >= slides.length){
current = 0;
}

updateSlide();

}

function prevSlide(){

current--;

if(current < 0){
current = slides.length - 1;
}

updateSlide();

}

// ==========================
// LLUVIA DE MANÍ
// ==========================

function rainPeanuts(){

for(let i=0;i<100;i++){

let peanut =
document.createElement("div");

peanut.classList.add("rainPeanut");

peanut.style.left =
Math.random()*100 + "vw";

document.body.appendChild(peanut);

let y = -100;
let rotate = 0;
let speed = Math.random()*4 + 3;

let animation = setInterval(()=>{

y += speed;
rotate += 5;

peanut.style.top = y + "px";

peanut.style.transform =
`rotate(${rotate}deg)`;

if(y > window.innerHeight){

clearInterval(animation);

peanut.remove();

}

},16);

}

}

// ==========================
// OLLA DE MANÍ
// ==========================

function maniDerretido(){

for(let i=0;i<120;i++){

let gota =
document.createElement("div");

gota.style.position = "fixed";

gota.style.left =
Math.random()*100 + "vw";

gota.style.top = "-50px";

gota.style.width = "14px";
gota.style.height = "30px";

gota.style.background = "#F7E4B2";

gota.style.borderRadius = "50px";

gota.style.zIndex = "9999";

document.body.appendChild(gota);

let y = -50;

let fall = setInterval(()=>{

y += 7;

gota.style.top =
y + "px";

if(y > window.innerHeight){

clearInterval(fall);

gota.remove();

}

},16);

}

}

// ==========================
// SARTÉN
// ==========================

function maniTostado(){

for(let i=0;i<80;i++){

let mani =
document.createElement("div");

mani.classList.add("rainPeanut");

mani.style.left =
Math.random()*100 + "vw";

mani.style.background =
"#B77626";

document.body.appendChild(mani);

let y = -50;
let rotate = 0;

let fall = setInterval(()=>{

y += 8;

rotate += 8;

mani.style.top =
y + "px";

mani.style.transform =
`rotate(${rotate}deg)`;

if(y > window.innerHeight){

clearInterval(fall);

mani.remove();

}

},16);

}

}

// ==========================
// PLATO
// ==========================

function campanaPlato(){

const bell = new Audio(
"https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
);

bell.play();

setTimeout(()=>{

alert("🍽️ ¡La comida está lista!");

},300);

}

// ==========================
// EFECTO AUTOMÁTICO AL ENTRAR
// ==========================

window.onload = ()=>{

setTimeout(()=>{

rainPeanuts();

},500);

};

function ollaMani(){

rainPeanuts("#B77626");

setTimeout(()=>{

alert(
"🥣 Tip: Tostar el maní mejora su sabor y aroma."
);

},300);

}
function sartenMani(){

rainPeanuts("#7C4012");

setTimeout(()=>{

alert(
"🍳 Tip: Remueve constantemente el maní para evitar que se queme."
);

},300);

}function sartenMani(){

rainPeanuts("#7C4012");

setTimeout(()=>{

alert(
"🍳 Tip: Remueve constantemente el maní para evitar que se queme."
);

},300);

}
function campanaPlato(){

const bell = new Audio(
"https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
);

bell.play();

setTimeout(()=>{

alert(
"🍽️ ¡Tu receta está lista para servir!"
);

},300);

}