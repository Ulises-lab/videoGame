window.onload = function () {

    ctx.drawImage(img_font,0,0,canvas.width,canvas.height)
   
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
        //arania.draw();
        dibujaBala()
        //disparo.draw();
        genera_gusanos()
        genera_aranias()
        dibujaGusanos()
        dibujaAranias()
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

    function genera_gusanos(){
        if(ciclos % 399 === 0 || ciclos % 60===0){
            let y = Math.floor(Math.random()*(125-9)+11);
            if(y > 110 && y < 127){
                const gusano = new Gusano(y);
                arrGusanos.push(gusano);
            }
            
        }
    }

    function dibujaGusanos(){
        arrGusanos.forEach((item,index_item)=>{
            if(item.x +item.width <= -4){
                points ++;
                arrGusanos.splice(index_item,1)
            }
            item.draw()
            /* if(personaje_general[i].collision(item)){
                requestId = undefined;
                bg.game_over()
            } */
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
            if(item.x +item.width <= -4){
                points ++;
                arrAranias.splice(index_item,1)
            }
            item.draw()
            /* if(personaje_general[i].collision(item)){
                requestId = undefined;
                bg.game_over()
            } */
        })
    }

    function genera_disparo(){
        const disparo = new Disparo(personaje_general[i].x+16,personaje_general[i].y+16,'yellow');
        arrBalas.push(disparo);
    }

    function dibujaBala(){
        arrBalas.forEach((item,index_item)=>{
            if(item.x + item.width > 30){
                arrAranias.splice(index_item,1)
            }
            // if(i === 2 || i === 3){
            //     item.draw(-1)}
            // if(i === 0 || i === 1){
            //     item.draw(1)
            // }
            item.draw(1)
        })
    }

    // Deteccion de teclas
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
        if(event.keyCode === 32){
            genera_disparo()
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