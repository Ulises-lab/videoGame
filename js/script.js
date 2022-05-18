window.onload = function () {
    
    ctx.drawImage(img_font,0,0,canvas.width,canvas.height);
   
    

    

    //Introduccion
     /* ctx.fillStyle = "blue";
     ctx.fillRect(0, 146,canvas.width,canvas.height);
     ctx.font = "15px Courier";
     const texto = 'Hola \nesto es \nun salto de \nlinea'
     ctx.fillText(`${texto}`, 10, 30); */
     
    //

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