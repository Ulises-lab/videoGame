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
    game_over(){
        ctx.font = 'bold 20px arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Juego Terminado',75,canvas.height/2);
    }
}

class Personaje_Stop {
    constructor(){
        this.index_x = index_x;
        this.x = personX;
        this.y = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.width = 32;
        this.height = 32;
        this.imgStop = new Image()        
        this.imgStop.src = 'images/stopV3.png'
    }
    draw(){
        ctx.drawImage(this.imgStop,this.index_x*64,0,64,64,this.x,this.y,this.width,this.height)        
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
    }
    collision(item){
        return(
            this.x -8 < item.x + item.width &&
            this.x -8 + this.width > item.x &&
            this.y -4 < item.y + item.height &&
            this.y -4 + this.height > item.y
        )
        /* if(
            this.x - 8 > item.x + item.width ||
            this.x - 8 + this.width < item.x ||
            this.y -7 > item.y + item.height ||
            this.y -7 + this.height < item.y
        ){}
        else{return true} */
    }
}

class Personaje_StopLeft {
    constructor(){
        this.index_x = index_x;
        this.x = personX;
        this.y = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgStop = new Image()        
        this.imgStop.src = 'images/stopLeftV3.png'
    };
    draw(){
        ctx.drawImage(this.imgStop,this.index_x*64,0,64,64,this.x,this.y,32,32)
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
    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Personaje_Left {
    constructor(){
        this.index_x = index_x;
        this.x = personX;
        this.y = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgLeft = new Image()        
        this.imgLeft.src = 'images/CamiIzq.png'
    };
    draw(){
        ctx.drawImage(this.imgLeft,this.index_x*64,0,64,64,this.x,this.y,32,32)
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
    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Personaje_Rigth {
    constructor(){
        this.index_x = index_x;
        this.x = personX;
        this.y = personY;
        this.now = now;
        this.then = then;
        this.count = count;
        this.imgRigth = new Image()        
        this.imgRigth.src = 'images/CamiDerec.png'
    };
    draw(){
        ctx.drawImage(this.imgRigth,this.index_x*64,0,64,64,this.x,this.y,32,32)
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
    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Gusano {
    constructor(y){
    this.x = 300; //Inicio del gusano en el canvas
    this.y = y;
    this.index_x = index_x;
    this.width = 32; //tamanio
    this.height = 32;
    this.now = now;
    this.then = then;
    this.count = count;
    this.img = new Image()
    this.img.src = 'images/gusano1.png'
    }
    draw(){
        this.x --;
        ctx.drawImage(this.img,this.index_x*32,0,32,32,this.x,this.y,this.width,this.height)    
        this.now = Date.now()
        let difference = this.now - this.then;
        if(difference>200){
            this.count++
            this.then = this.now
            this.index_x ++;
            if(this.index_x>7){
            this.index_x =0}
        }
    }

    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Arania {
    constructor(x){
    this.x = x;
    this.arr = [canvas.width,this.x];
    this.y = [122,0];
    this.index_x = index_x;
    this.random1 = random1;
    this.width = 25;
    this.height = 25;
    this.now = now;
    this.then = then;
    this.count = count;
    this.img = new Image()
    this.img.src = 'images/spider.png'
    }

    draw(){
        if(this.random1 === 0){
            this.arr[this.random1] --;
            ctx.drawImage(this.img,this.index_x*32,0,32,32,this.arr[this.random1],this.y[this.random1],this.width,this.height);
        }
        else if(this.y[this.random1]===124){ 
            this.y[this.random1] = 124;
            this.arr[this.random1]--;
            ctx.drawImage(this.img,this.index_x*32,0,32,32,this.arr[this.random1],this.y[this.random1],this.width,this.height);
        }
        else if(this.random1 === 1 && this.y[this.random1]<124){
            this.y[this.random1] ++;
            ctx.drawImage(this.img,this.index_x*32,0,32,32,this.arr[this.random1],this.y[this.random1],this.width,this.height);
        }
        /* this.arr[this.random1]--;
        ctx.drawImage(this.img,this.index_x*32,0,32,32,this.arr[this.random1],this.y[this.random1],this.width,this.height); */
        this.now = Date.now()
        let difference = this.now - this.then;
        if(difference>300){
            this.count++
            this.then = this.now
            this.index_x ++;
            if(this.index_x>7){
            this.index_x =0}
        }
    }

    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x > this.width + item.x &&
            this.y < item.y + item.height &&
            this.y < this.height + item.y
        )
    }
}

class Disparo {
    constructor(x,y,color){
     this.x = x;
     this.y = y;
     this.width = 2;
     this.color = color;
     this.vx = 2;
    }
    draw(){
        this.x += this.vx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x > this.width + item.x &&
            this.y < item.y + item.height &&
            this.y < this.height + item.y
        )
    }
}