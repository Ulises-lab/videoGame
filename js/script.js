window.onload = function () {
    
    ctx.drawImage(img_font,0,0,canvas.width,canvas.height);
       
    //Background images
    const bg = new Background(canvas.width,canvas.height);
    
    //Sprites Images Person
    const personaje_stop = new Personaje_Stop();
    const personaje_left = new Personaje_Left();
    const personaje_rigth = new Personaje_Rigth();

    document.getElementById('start').onclick = function() {
         if(!requestId){
            startGame()
        } 
    }

    function startGame(){
        requestId = requestAnimationFrame(upDate);
    }

    function upDate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()

        //personaje_left.draw() Mandar llamar solo al valor 
        disparo1.draw()
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

    
    addEventListener('keydown',(event)=>{
        if(event.keyCode === null){
            personaje_stop.draw()
            console.log(event)
        }
        if(event.keyCode === 39){
            personaje_stop.personX +=10;
            personaje_left.personX +=10;
            personaje_rigth.personX +=10;
            personaje_rigth.draw()
        }
        if(event.keyCode === 37){
            personaje_stop.personX -=10;
            personaje_left.personX -=10;
            personaje_rigth.personX -=10;
            personaje_left.draw()
        }
    })
    

}