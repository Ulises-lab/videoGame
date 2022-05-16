const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let frames = 0;
const gravity = 0.1;
const enemigs = [];

let points = 0;

let requestId;

/*
Piso aleatorio
 const color = ctx.fillStyle = "#58D68D";
const floor = ctx.fillRect(0, 146, Math.floor(Math.random()*canvas.width), Math.floor(Math. */

random()*canvas.height));