const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const gravity = 0.1;
let points = 0;
let requestId;
let requestID = false;

let personX = 30;
let personY = 115;
let index_x = 0;

const img_font = new Image()
img_font.src = 'images/font.png'

let then = Date.now();
let now;
let count  = 0;

let stop_left_rigth;

const audio = new Audio('SpaceMusicPack/slow-travel.wav')
let i = 0;

const arrBullet = [];
const arrEnemys = [];

let score = 0;

let aleatorio = Math.floor((Math.random()*(canvas.width-64))+2);
let random1 = Math.floor(Math.random()*2);


/*
Piso aleatorio
 const color = ctx.fillStyle = "#58D68D";
const floor = ctx.fillRect(0, 146, Math.floor(Math.random()*canvas.width), Math.floor(Math..random()*canvas.height));*/