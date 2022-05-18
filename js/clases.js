class Background {
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.img0 = new Image();
        this.img0.src = 'images/space.png'
        this.img1 = new Image();
        this.img1.src = 'images/bg1.png'
        this.img2 = new Image();
        this.img2.src = 'images/bg2.png'
    }
    draw(){
        this.x --;
        this.x %= this.width;

        ctx.drawImage(this.img0,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.img0,this.x+this.width,this.y,this.width,this.height);
        ctx.drawImage(this.img1,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.img1,this.x+this.width,this.y,this.width,this.height);
        ctx.drawImage(this.img2,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.img2,this.x+this.width,this.y,this.width,this.height);
    }
}

class Personaje {
    constructor(index_x){
        this.index_x = index_x;
        this.personX = 0;
        this.personY = 0;
        this.imgStop = new Image()
        this.imgLeft = new Image()
        this.imgRigth = new Image()
        this.imgStop.src = 'images/stopV3.png'
        this.imgLeft.src = 'images/CamiIzq.png'
        this.imgRigth.src = 'images/CamiDerec.png'
    };
    draw(){
        imgs = {
            move_rigth: ctx.drawImage(this.imgRigth,this.index_x*64,10,64,64,70,120,32,32),
            move_left: ctx.drawImage(this.imgLeft,this.index_x*64,10,64,64,this.personX,this.personY,32,32),
            move_stop: ctx.drawImage(this.imgStop,this.index_x*64,10,64,64,this.personX,this.personY,32,32)
        }
    }
}

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
}



class Enemigo {
    constructor(){}
}




class Disparo {
    constructor(x,y,color){
     this.x = x;
     this.y = y;
     this.color = color;
    }
    draw(){
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
const disparo1 = new Disparo(170,70,'gold');
disparo1.draw()