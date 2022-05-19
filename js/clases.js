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

class Personaje_Stop {
    constructor(){
        this.index_x = index_x;
        this.personX = personX;
        this.personY = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgStop = new Image()        
        this.imgStop.src = 'images/stopV3.png'
    };
    draw(){
        ctx.drawImage(this.imgStop,this.index_x*64,10,64,64,this.personX,this.personY,32,32)
        //Velocidad de frames //
        this.now = Date.now()
        let difference = this.now - this.then;
        if(difference>300){
            this.count++
            this.then = this.now
            this.index_x ++;
            if(this.index_x>3){
            this.index_x =0}
        }
        /////////////////////////
    }
    collition(item){
        return (
            this.personX < item.personX + item.width &&
            this.personX > this.width + item.personX &&
            this.personY < item.personY + item.height &&
            this.personY < this.height + item.personY
        )
    }
}

class Personaje_Left {
    constructor(){
        this.index_x = index_x;
        this.personX = personX;
        this.personY = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgLeft = new Image()        
        this.imgLeft.src = 'images/CamiIzq.png'
    };
    draw(){
        ctx.drawImage(this.imgLeft,this.index_x*64,10,64,64,this.personX,this.personY,32,32)
        // Velocidad de frames //
        this.now = Date.now()
        let difference = this.now - this.then;
        if(difference>100){
            this.count++
            this.then = this.now
            this.index_x ++;
            if(this.index_x>3){
            this.index_x =0}
        }
        /////////////////////////
    }
    collition(item){
        return (
            this.personX < item.personX + item.width &&
            this.personX > this.width + item.personX &&
            this.personY < item.personY + item.height &&
            this.personY < this.height + item.personY
        )
    }
}

class Personaje_Rigth {
    constructor(){
        this.index_x = index_x;
        this.personX = personX;
        this.personY = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgRigth = new Image()        
        this.imgRigth.src = 'images/CamiDerec.png'
    };
    draw(){
        ctx.drawImage(this.imgRigth,this.index_x*64,10,64,64,this.personX,this.personY,32,32)
        // Velocidad de frames //
        this.now = Date.now()
        let difference = this.now - this.then;
        if(difference>100){
            this.count++
            this.then = this.now
            this.index_x ++;
            if(this.index_x>3){
            this.index_x =0}
        }
        /////////////////////////
    }
    collition(item){
        return (
            this.personX < item.personX + item.width &&
            this.personX > this.width + item.personX &&
            this.personY < item.personY + item.height &&
            this.personY < this.height + item.personY
        )
    }
}


class Enemigo {
    constructor(){}
}


class Disparo {
    //Va a depender de quien lo haya generado, es decir, personaje o enemigo
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
