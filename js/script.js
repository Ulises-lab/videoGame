window.onload = function () {

    ctx.drawImage(img_font,0,0,canvas.width,canvas.height)
    ctx.font = 'bold 11px arial';
    ctx.fillStyle = 'white';
    ctx.fillText('INSTRUCCIONES.',105,45);
    ctx.fillText('No permitas que los enemigos te toquen.',40,canvas.height/2);
    //Background images
    const bg = new Background(canvas.width,canvas.height);

    //Sprites Images Person
    const personaje_stop = new Personaje_Stop();
    const personaje_stop_left = new Personaje_StopLeft();
    const personaje_left = new Personaje_Left();
    const personaje_rigth = new Personaje_Rigth();

    //const arania = new Arania(x);

    // Idea para cambio de imagen
    const personaje_general = [personaje_stop,personaje_left,personaje_rigth,personaje_stop_left]

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
        ciclos ++;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()
        personaje_general[i].draw();
        //dibujaBala()
        puntaje();
        genera_gusanos()
        genera_aranias()
        dibujaGusanos()
        dibujaAranias()
        if(points === 50){
        ganador()
    return}
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

    function genera_gusanos(){
        if(ciclos % 120 === 0){
            let y = Math.floor(Math.random()*(125-9)+11);
            if(y > 0 && y < 127){
                const gusano = new Gusano(y);
                arrGusanos.push(gusano);
            }
            
        }
    }

    function dibujaGusanos(){
        arrGusanos.forEach((item,index_item)=>{
            if(item.x +item.width <= -4){
                arrGusanos.splice(index_item,1)
                points ++;
            }
            item.draw()
            if(personaje_general[i].collision(item)){
                requestId = undefined;
                bg.game_over()
            }
        })
    }

    function genera_aranias(){
        if(ciclos % 95 ===0){
                let x = Math.floor(Math.random()*(300-9)+11);
                if(x > 15 && x < 300 ){
                const arania = new Arania(x);
                arrAranias.push(arania);
                }
        }
    }

    function dibujaAranias(){
        arrAranias.forEach((item,index_item)=>{
            if(item.y + item.height >= 130){
                arrAranias.splice(index_item,1)
                points ++;
            }
            item.draw()
            if(personaje_general[i].collision(item)){
                requestId = undefined;
                bg.game_over()
            }
        })
    }

    function ganador(){
        ctx.font = 'bold 20px arial';
        ctx.fillStyle = 'gold';
        ctx.fillText(`GANASTE :D`,100,canvas.height/2);
    }


    function puntaje(){
        ctx.font = 'bold 9px arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Puntos ${points}`,canvas.width-45,10);
    }

    function genera_disparo(){
        const disparo = new Disparo(personaje_general[i].x+16,personaje_general[i].y+16,'yellow',n);
        arrBalas.push(disparo);
    }

    function dibujaBala(){
        arrBalas.forEach((item,index_item)=>{
            if(item.x +item.width <= 0 || item.x +item.width >300){
                arrBalas.splice(index_item,1)
            }
            item.draw()
            for(z =0; z<arrGusanos.length;z++){
            if(item.collision(arrGusanos[z])){
                arrBalas.splice(index_item,z)
                arrGusanos.splice(z,1);
            }
            }
        })
    }

    // Deteccion de teclas
    addEventListener('keydown',(event)=>{
        /// Escritura de imagenes dependiendo de la flecha
        if(event.keyCode === 39 && personaje_left.x < 240){
            event.preventDefault();
            personaje_stop.x +=3;
            personaje_stop_left.x +=3;
            personaje_left.x +=3;
            personaje_rigth.x +=3;
            i = 2;
        }
        if(event.keyCode === 37 && personaje_rigth.x > 5){
            event.preventDefault();
            personaje_stop.x -=3;
            personaje_stop_left.x -=3;
            personaje_left.x -=3;
            personaje_rigth.x -=3;
            i = 1;
        }
        if(event.keyCode === 83 && personaje_stop.y > 0){
            event.preventDefault();
            personaje_stop.y -=3;
            personaje_stop_left.y -=3;
            personaje_left.y -=3;
            personaje_rigth.y -=3;
        }

        if(event.keyCode === 32 && personaje_stop.y <122){
            event.preventDefault();
            personaje_stop.y +=3;
            personaje_stop_left.y +=3;
            personaje_left.y +=3;
            personaje_rigth.y +=3;
        }
        if(event.keyCode === 65){
            event.preventDefault();
            genera_disparo()
        }
        if(event.keyCode === 71){
            points = 50
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