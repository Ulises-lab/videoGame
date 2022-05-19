window.onload = function () {
    
    ctx.drawImage(img_font,0,0,canvas.width,canvas.height);
       
    //Background images
    const bg = new Background(canvas.width,canvas.height);
    
    //Sprites Images Person
    const personaje_stop = new Personaje_Stop();
    const personaje_left = new Personaje_Left();
    const personaje_rigth = new Personaje_Rigth();


    // Idea para cambio de imagen
    const personaje_general = [personaje_stop,personaje_left,personaje_rigth]

    document.getElementById('start').onclick = function() {
         if(!requestId){
            startGame()
            audio.play()
        } 
    }

    function startGame(){
        requestId = requestAnimationFrame(upDate);
    }

    function upDate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()
        //personaje_stop.draw() //Mandar llamar solo al valor 
        personaje_general[i].draw();
        disparo1.draw()
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

    addEventListener('keydown',(event)=>{
        /// Escritura de imagenes dependiendo de la flecha
        if(event.keyCode === 39 && personaje_left.personX < 240){
            personaje_stop.personX +=3;
            personaje_left.personX +=3;
            personaje_rigth.personX +=3;
            i = 2;
        }
        if(event.keyCode === 37 && personaje_rigth.personX > 5){
            personaje_stop.personX -=3;
            personaje_left.personX -=3;
            personaje_rigth.personX -=3;
            i = 1;
        }
        
    })
    
    addEventListener('keyup',(event)=>{
            i = 0;
        })

}