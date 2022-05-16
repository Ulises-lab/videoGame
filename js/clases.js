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
    constructor(){
        this.x = x;
        this.y = y;
        this.index_x = 0;
        this.index_y = 0;
        this.personX = 0;
        this.personY = 0;
        this.imgStop = new Image()
        this.imgLeft = new Image()
        this.imgRigth = new Image()
        this.imgStop.src = 'images/stopV3.png'
        this.imgLeft.src = 'images/CamiIzq.png'
        this.imgRigth.src = 'images/CamiDerec.png'
    }
    draw(){
        
    }
}

class Enemigo {

}

class Disparo {

}

