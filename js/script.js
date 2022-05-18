window.onload = function () {
    
    ctx.drawImage(img_font,0,0,canvas.width,canvas.height);
       
    //Juego
    const bg = new Background(canvas.width,canvas.height);
    const personaje = new Personaje(index_x);


    document.getElementById('start').onclick = function() {
         if(!requestId){
            startGame()
        } 
    }


    function startGame(){
        requestId = requestAnimationFrame(upDate);
    }

    function upDate(){
        // frames ++;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()
        console.log(personaje.draw.move_rigth)
        index_x++;
        if(index_x>3){
            index_x=0;
        }  
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

}