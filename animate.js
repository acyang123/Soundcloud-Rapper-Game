/**
 *  handleRAPPERAnimation moves the RAPPER based on its direction and
 *    keyboard control
 *
 */
 var rapperImage= new Image();
 rapperImage.src='skiSprite.png'
 var haterImage= new Image();
 haterImage.src='hater.jpg'
 var hater2Image=new Image();
 hater2Image.src='Dat_Boi.png'
 var hater3Image=new Image();
 hater3Image.src='Harambe.png'
 var blockImage=new Image();
 blockImage.src='supreme.png'
 var randomNumber;
 var randomNumber2;
function handleRapperAnimation() {
  if (CONTROLS.rapper.up) {
    RAPPER.y -= RAPPER.speed;
  }
  if (CONTROLS.rapper.down) {
    RAPPER.y += RAPPER.speed;
  }
  if (CONTROLS.rapper.right) {
    RAPPER.x+=RAPPER.speed;
    RAPPER.distanceTrav+=RAPPER.speed;
  }
  if (CONTROLS.rapper.left) {
    RAPPER.x-=RAPPER.speed;
  }
  if (RAPPER.x >GAME.canvas.width) {
    RAPPER.x -=RAPPER.speed;
  } else if (RAPPER.x < 0) {
    RAPPER.x +=RAPPER.speed;
  } else if (RAPPER.y > GAME.canvas.height) {
    RAPPER.y -=RAPPER.speed;
  } else if (RAPPER.y < 0) {
    RAPPER.y +=RAPPER.speed;
  }
}

function handleHaterAnimation() {
  randomNumber = Math.random()*4-2;
  randomNumber2 = Math.floor(Math.random() * 10) -3;
  HATER.x+=randomNumber;
  HATER.y+=randomNumber2;
  if (HATER.x > GAME.canvas.width) {
      HATER.x -=HATER.speed;
    } else if (HATER.x < 0) {
      HATER.x = HATER.x+HATER.speed;
    } else if (HATER.y > GAME.canvas.height) {
      HATER.y = HATER.y-HATER.speed;
    } else if (HATER.y < 0) {
      HATER.y = HATER.y+HATER.speed;
    }
}
function handleHaterTwoAnimation() {
  HATERTWO.x+=HATERTWO.speed;
  HATERTWO.y=HATERTWO.y;
  // Check if asteroid is leaving the boundary, if so, switch sides
if (HATERTWO.x>GAME.canvas.width){
  HATERTWO.x=0;
  HATERTWO.y=Math.random()*300+1;
}
}

function handleHaterThreeAnimation() {
  HATERTHREE.x+=HATERTHREE.speed;
  HATERTHREE.y=HATERTHREE.y;
  // Check if asteroid is leaving the boundary, if so, switch sides
if (HATERTHREE.x>GAME.canvas.width){
  HATERTHREE.x=0;
  HATERTHREE.y=Math.random()*500+1;
}
}
function handleBlockOneAnimation() {
  BLOCKONE.x=BLOCKONE.x;
  BLOCKONE.y=BLOCKONE.y;
}
function handleBlockTwoAnimation() {
  BLOCKTWO.x=BLOCKTWO.x;
  BLOCKTWO.y=BLOCKTWO.y;
}

function handleBlockThreeAnimation() {
  BLOCKTHREE.x=BLOCKTHREE.x;
  BLOCKTHREE.y=BLOCKTHREE.y;
}
function handleBlockFourAnimation() {
  BLOCKFOUR.x=BLOCKFOUR.x;
  BLOCKFOUR.y=BLOCKFOUR.y;
}


function RenderRapper(context) {
  context.drawImage(rapperImage, RAPPER.x,RAPPER.y,75,75);

  // Draw a new item here using the canvas 'context' variable
}
function RenderHater(context) {
  context.drawImage(haterImage, HATER.x,HATER.y,75,75);
  // Draw a new item here using the canvas 'context' variable
}
function RenderHaterTwo(context) {
  context.drawImage(hater2Image, HATERTWO.x,HATERTWO.y,75,75);
  // Draw a new item here using the canvas 'context' variable
}

function RenderHaterThree(context) {
  context.drawImage(hater3Image, HATERTHREE.x,HATERTHREE.y,75,75);
  // Draw a new item here using the canvas 'context' variable
}

function RenderBlockOne(context) {
  context.drawImage(blockImage, BLOCKONE.x,BLOCKONE.y,100,300);

}
function RenderBlockTwo(context) {
  context.drawImage(blockImage, BLOCKTWO.x,BLOCKTWO.y,300,200);

}
function RenderBlockThree(context) {
  context.drawImage(blockImage, BLOCKTHREE.x,BLOCKTHREE.y,500,100);

}
function RenderBlockFour(context) {
  context.drawImage(blockImage, BLOCKFOUR.x,BLOCKFOUR.y,400,200);

}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {
    context.clearRect(0,0,GAME.canvas.width,GAME.canvas.height);
    // 1 - Reposition the objects
    RenderRapper(context);
    RenderHater(context);
    RenderHaterTwo(context);
    RenderHaterThree(context);
    RenderBlockOne(context);
    RenderBlockTwo(context);
    RenderBlockThree(context);
    RenderBlockFour(context);
    handleBlockOneAnimation();
    handleBlockTwoAnimation();
    handleBlockThreeAnimation();
    handleBlockFourAnimation();
    handleRapperAnimation();
    handleHaterAnimation();
    handleHaterTwoAnimation();
    handleHaterThreeAnimation();



  }
  else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
