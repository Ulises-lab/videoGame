const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const gravity = 0.1;
let points = 0;
let requestId;

let personX = 30;
let personY = 122;
let index_x = 0;

const img_font = new Image()
img_font.src = 'images/font.png'

let then = Date.now();
let now;
let count  = 0;

let stop_left_rigth;

const audio = new Audio('SpaceMusicPack/slow-travel.wav')
let i = 0;

let n;

const arrBalas = [];
const arrGusanos = [];
const arrAranias =[];

//let x = Math.floor(Math.random()*(125-9)+11);
let random1 = Math.floor(Math.random()*2);

let ciclos = 0;
/*
Piso aleatorio
 const color = ctx.fillStyle = "#58D68D";
const floor = ctx.fillRect(0, 146, Math.floor(Math.random()*canvas.width), Math.floor(Math..random()*canvas.height));*/