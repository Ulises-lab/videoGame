const ctx = document.getElementById('canvas').getContext('2d');
const img = new Image();

img.src = './videoGame/camiandoColumns.png';

let arrow_key = 0;
let in_x = 0, in_y = 0, personX = 0, personY = 0;

img.onload = function() {
  ctx.drawImage(img, in_x*32,in_y*32,32,32,personX,personY,32,32);
  in_x ++;
  if(in_x > 4){
      in_x = 0;
  }
  setTimeout('img.onload()',300);
};
 
document.onkeydown = function(event){
    if(event ==null){
        arrow_key = window.event.keyCode;
    }else{
        arrow_key = event.keyCode;
    }
    switch(arrow_key){
        case 37: //Izq
            personX = personX + 10;
            in_y = 0;
        break;
        case 39: //Der
            personX = personX + 10;
            in_y = 0;
        break;
    }
}