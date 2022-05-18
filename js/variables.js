const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let frames = 0;
const gravity = 0.1;
const enemigs = [];
let points = 0;
let requestId;
let requestID = false;

let personX = 30;
let personY = 120;
let index_x = 0;

const img_font = new Image()
img_font.src = 'images/font.png'

let then = Date.now();
let now;
let count  = 0;

/* let teclap =0;
let inx= 0;
let px= 100;
let py =100;
const imgen = new Image();
imgen.src = 'images/CamiIzq.png'

function dibujacanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    console.log(ctx.drawImage(imgen,inx*64,10,64,64,px,py,32,32));

    inx++;
    if(inx>3)
        inx=0;
    setTimeout('dibujacanvas()',300);
}

dibujacanvas()

document.onkeydown=function(event){
    if(event == null){
        teclap = windows.event.keyCode;
    }else{
        teclap = event.keyCode;
    }
    switch (teclap) {
        case 39:
            px = px+10;
        break;          
        case 37:
            px = px-10;
        break;
    }
} */



/*
Piso aleatorio
 const color = ctx.fillStyle = "#58D68D";
const floor = ctx.fillRect(0, 146, Math.floor(Math.random()*canvas.width), Math.floor(Math..random()*canvas.height));*/