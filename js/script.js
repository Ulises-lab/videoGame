window.onload = function () {

    ctx.drawImage(img_font,0,0,canvas.width,canvas.height)
    //            img x  y  with heigth
    
    //Background images
    const bg = new Background(canvas.width,canvas.height);

    //Sprites Images Person
    const personaje_stop = new Personaje_Stop();
    const personaje_stop_left = new Personaje_StopLeft();
    const personaje_left = new Personaje_Left();
    const personaje_rigth = new Personaje_Rigth();

    // Idea para cambio de imagen
    const personaje_general = [personaje_stop,personaje_left,personaje_rigth,personaje_stop_left]

    //Disparos
    const disparo = new Disparo(personaje_general[i].x+16,personaje_general[i].y+16,'yellow');

    //Enemigos
    const gusano = new Gusano();
    const arania = new Arania();
   
    //Boton de clic
    document.getElementById('start').onclick = function() {
         if(!requestId){
            startGame()
            audio.play()
        } 
    }

    function startGame(){
        requestId = requestAnimationFrame(upDate);
    }

    //Dibujar imagenes
    function upDate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()
        //personaje_stop.draw() //Mandar llamar solo al valor 
        personaje_general[i].draw();
        //mario.dibujar()
        //enemy.dibujar()
        gusano.draw();
        //arania.draw();
        disparo.draw();
        /*console.log('arraypersona',personaje_general[i].x)
        console.log('persona',personaje_stop.x);
        */
        if(personaje_general[i].collision(gusano)){
            console.log('me estan tocando')
            return 'me estan tocando'
        };
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

    addEventListener('keydown',(event)=>{
        /// Escritura de imagenes dependiendo de la flecha
        if(event.keyCode === 39 && personaje_left.x < 240){
            personaje_stop.x +=3;
            personaje_stop_left.x +=3;
            personaje_left.x +=3;
            personaje_rigth.x +=3;
            i = 2;
        }
        if(event.keyCode === 37 && personaje_rigth.x > 5){
            personaje_stop.x -=3;
            personaje_stop_left.x -=3;
            personaje_left.x -=3;
            personaje_rigth.x -=3;
            i = 1;
        }
        
    })
    
    addEventListener('keyup',(event)=>{
        if(event.keyCode === 39){
            i = 0;
        }
        if(event.keyCode === 37){
            i = 3;
        }
    })

}