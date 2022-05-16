window.onload = function () {

    const bg = new Background(canvas.width,canvas.height);

    document.getElementById('start').onclick = function() {
        if(!requestId){
            startGame()
        }
    }


    function startGame(){
        requestId = requestAnimationFrame(upDate);
    }

    function upDate(){
        frames ++;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.draw()        
        if(requestId){
            requestAnimationFrame(upDate);
        }
    }

}