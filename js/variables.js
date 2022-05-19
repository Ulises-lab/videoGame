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

let stop_left_rigth;

let audio = new Audio('SpaceMusicPack/slow-travel.wav')
let i =0;

/*
Piso aleatorio
 const color = ctx.fillStyle = "#58D68D";
const floor = ctx.fillRect(0, 146, Math.floor(Math.random()*canvas.width), Math.floor(Math..random()*canvas.height));*/