 const canvas = document.getElementById("pie");
const ctx = canvas.getContext("2d");

const datos = [40, 35, 25];
const colores = ["green", "yellow", "red"];
let inicio = 0;
const total = datos.reduce((a,b)=>a+b,0);

datos.forEach((valor, i) => {
const angulo = (valor / total) * Math.PI * 2;

ctx.beginPath();
ctx.moveTo(150,150);
ctx.arc(150,150,100,inicio,inicio+angulo);
ctx.closePath();

ctx.fillStyle = colores[i];
ctx.fill();

inicio += angulo;
});