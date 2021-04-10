var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
var mousex=e.clientX-canvas.offsetLeft;
var mousey=e.clientY-canvas.offsetTop;
circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(mousex,mousey,4,0,2*Math.PI);
ctx.stroke();
}
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc( 260 , 203 , 40 , 0 , 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc( 320 , 203 , 40 , 0 , 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc( 225 , 255 , 40 , 0 , 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc( 295 , 255 , 40 , 0 , 2*Math.PI);
ctx.stroke();